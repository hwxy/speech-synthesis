import { View } from '@tarojs/components'
import Taro, { useLoad, useDidShow, useUnload } from '@tarojs/taro'

import { useState, useRef } from 'react'

import { useSelector } from 'react-redux'

// import { AtTextarea } from "taro-ui"
import AtTextarea from 'taro-ui/lib/components/textarea'
import AtNoticebar from 'taro-ui/lib/components/noticebar'
import AtTag from 'taro-ui/lib/components/tag'
import AtButton from 'taro-ui/lib/components/button'
import AtFloatLayout from 'taro-ui/lib/components/float-layout'
import AtSlider from 'taro-ui/lib/components/slider'

import SpeechSynthesizer from "../../../sdk/ali/utils/tts"

import { formatTime, sleep } from "../../../sdk/ali/utils/util"

import { getToken } from "../../../sdk/ali/utils/token"

import './index.scss'

const AKID = ""
const AKKEY = ""


export default function Index() {
  const [value, setValue] = useState("");

  const { anchorConfig } = useSelector((state) => state.soundSettings)

  const [floatLayoutOperateShow, setFloatLayoutOperateShow] = useState(false);

  const [selectFunctionKey, setSelectFunctionKey] = useState("")

  const [cursorPosition, setCursorPosition] = useState(0)

  const [playloading, setPlayLoading] = useState(false);

  const showFloatLayoutTypeOne = ["volume", "rate", "pitch", "bgm", "backgroundMusicVolume", "encodeType"];

  const showFloatLayoutTypeTwo = ["break", "soundEvent"];

  const [functions, setFunctions] = useState([
    {
      key: "volume",
      label: '音量',
      compType: "AtSlider",
      data: {
        label: 50,
        value: 50
      },
      tempData: {
        label: 50,
        value: 50
      },
      min: 0,
      max: 100
    },
    {
      key: "rate",
      label: '语速',
      compType: "AtSlider",
      data: {
        label: 0,
        value: 0
      },
      tempData: {
        label: 0,
        value: 0
      },
      min: -500,
      max: 500
    },
    {
      key: "voice",
      label: '播音员',
      data: {
        value: anchorConfig.voice,
        label: anchorConfig.name
      },
      tempData: {
        value: anchorConfig.voice,
        label: anchorConfig.name
      },
      gender: anchorConfig.gender,
    },
    {
      key: "pitch",
      label: '音调',
      compType: "AtSlider",
      data: {
        value: 0,
        label: 0
      },
      tempData: {
        value: 0,
        label: 0
      },
      min: -500,
      max: 500
    },
    {
      key: "bgm",
      label: '背景音',
      compType: "AtTag",
      options: [{
        label: "无",
        value: "无"
      }, {
        label: "背景音乐1",
        value: "https://nls.alicdn.com/bgm/1.wav"
      }, {
        label: "背景音乐2",
        value: "https://nls.alicdn.com/bgm/2.wav"
      }, {
        label: "背景音乐3",
        value: "https://nls.alicdn.com/bgm/3.wav"
      }],
      data: {
        label: "无",
        value: "无"
      },
      tempData: {
        label: "无",
        value: "无"
      },
    },
    {
      key: "backgroundMusicVolume",
      label: '背景音量',
      compType: "AtSlider",
      data: {
        label: 50,
        value: 50
      },
      tempData: {
        label: 50,
        value: 50
      },
    },
    {
      key: "break",
      label: '停顿',
      compType: "AtTag",
      options: [{
        label: "0.5s",
        value: "0.5"
      }, {
        label: "1s",
        value: "1"
      }, {
        label: "2s",
        value: "2"
      }],
      data: {},
      tempData: {}
    },
    {
      key: "soundEvent",
      label: '效果音',
      compType: "AtTag",
      options: [{
        label: "铃音",
        value: "https://nls.alicdn.com/sound-event/bell.wav"
      }, {
        label: "口哨声",
        value: "https://nls.alicdn.com/sound-event/whistle.wav"
      }, {
        label: "鸣笛声",
        value: "https://nls.alicdn.com/sound-event/blow.wav"
      }, {
        label: "汽车发动",
        value: "https://nls.alicdn.com/sound-event/engine.wav"
      }, {
        label: "转场音效",
        value: "https://nls.alicdn.com/sound-event/turnarounds.wav"
      }],
      data: {},
      tempData: {}
    },
    {
      key: "encodeType",
      label: '导出格式',
      compType: "AtTag",
      options: [{
        label: "MP3",
        value: "MP3"
      }, {
        label: "PCM",
        value: "PCM"
      }, {
        label: "WAV",
        value: "WAV"
      }],
      data: {
        label: "MP3",
        value: "MP3",
      },
      tempData: {
        label: "MP3",
        value: "MP3",
      }
    }]);

  // 临时文件
  const tempConfig = useRef({})
  // 语音合成api
  const tts = useRef(null);

  // 文件操作
  const fs = Taro.getFileSystemManager()

  useLoad(() => {
    async function init() {
      let token;
      try {
        token = await getToken(AKID, AKKEY)
        // token = "66c4bf69c7ae47018b2f0e1c211518ab"
        tts.current = new SpeechSynthesizer({
          url: "wss://nls-gateway.cn-shanghai.aliyuncs.com/ws/v1",
          appkey: "",
          token
        })

        // 合成音频回调
        tts.current.on("data", (msg) => {
          if (tempConfig.current.saveFile) {
            try {
              // 在文件结尾追加内容
              fs.appendFileSync(
                tempConfig.current.saveFile,
                msg,
                "binary"
              )
            } catch (e) {
              console.error(e)
            }
          } else { }
        })
        // 合成音频完成回调
        tts.current.on("completed", async () => {
          await sleep(500)
          // 关闭文件
          fs.close({
            fd: tempConfig.current.saveFd,
            success: () => {
              let ctx = Taro.createInnerAudioContext()
              ctx.autoplay = true
              // 文件地址saveFile
              ctx.src = tempConfig.current.saveFile
              ctx.onPlay(() => {
                console.log('start playing..')
              })
              ctx.onError(() => {
                console.log("play error...")
                // 删除文件
              })
              ctx.onEnded(() => {
                console.log("play done...")
              })
              setPlayLoading(false);
            },
            fail: () => {
              Taro.showToast({
                title: "生成失败",
                icon: "error",
                duration: 1000,
                mask: true
              })
              setPlayLoading(false);
            }
          })
        })
      } catch (e) {
        return
      }
    }
    init();
  })


  useDidShow(() => {
    let nfunctions = functions.map((item) => {
      if (item.key === "voice") {
        return {
          ...item,
          data: {
            label: anchorConfig.name,
            value: anchorConfig.voice,
          },
          tempData: {
            label: anchorConfig.name,
            value: anchorConfig.voice,
          },
          gender: anchorConfig.gender
        }
      }
      return {
        ...item
      }
    })
    setFunctions(nfunctions);
  })

  // useUnload(() => {
  //   if(tempConfig.current.saveFile) {
  //     fs.unlink({
  //       filePath: tempConfig.current.saveFile,
  //       success: () => {
  //         tempConfig.current = {};
  //       },
  //       failed: () => { }
  //     })
  //   }
  // })

  const formatValue = (data) => {
    let ndata = data;
    ndata = ndata.replace(/【停顿:(\d+(?:\.\d+)?)s】/g, () => {
      return "";
    })


    ndata = ndata.replace(/【效果音:([^】]+)】/g, () => {
      return "";
    });
    return ndata;
  }
  // 语音文本
  const handleInputChange = (data) => {
    if (formatValue(data).length > 300) {
      return
    }
    setValue(data);
  }
  // 失去焦点
  const handleBlurChange = (event) => {
    setCursorPosition(event.target.cursor);
  }


  const handleExport = () => {
    Taro.saveFile({
      tempFilePath: tempConfig.current.saveFile,
      // filePath: 
      success: function (res) {
        // res.savedFilePath 为保存到本地的音频文件路径
        console.log('音频文件保存成功：', res.savedFilePath);
      },
      fail: function (err) {
        Taro.showToast({
          title: err,
          icon: "error",
          duration: 1000,
          mask: true
        })
        console.error('保存音频文件失败：', err);
      }
    }); 
  }


  // 文本播放事件
  const handleVoiceSynthesis = () => {
    let paramText = `
        <speak volume="50" pitch="0" rate="0" voice="zhiyuan"  backgroundMusicVolume="50"><s>${value}</s></speak>
      `
    paramText = functions.reduce((nParamText, item) => {
      if (item.key === "volume" || item.key === "pitch" || item.key === "rate" || item.key === "voice" || item.key === "backgroundMusicVolume") {
        nParamText = nParamText.replace(new RegExp(`${item.key}="\\w+"`, 'g'), `${item.key}="${item.data.value}"`);
      }

      if (item.key === "break") {
        nParamText = nParamText.replace(/【停顿:(\d+(?:\.\d+)?)s】/g, (match, p1) => {
          return `<break time="${p1}s" />`;
        })
      }

      if (item.key === "soundEvent") {
        nParamText = nParamText.replace(/【效果音:([^】]+)】/g, (match, p1) => {
          if (p1) {
            const src = item.options.find((oitem) => {
              return oitem.label === p1
            }).value;

            return `<soundEvent src="${src}" />`;
          }
          return match;
        });
      }

      return nParamText;
    }, paramText);

    if (!value) {
      Taro.showToast({
        title: "文本为空",
        icon: "error",
        duration: 1000,
        mask: true
      })
      return
    }

    setPlayLoading(true);

    let save = "huhuhuhu" + ".wav"
    let savePath = Taro.env.USER_DATA_PATH + "/" + save
    // 打开文件
    fs.open({
      filePath: savePath,
      flag: "a+",
      success: async (res) => {
        tempConfig.current.saveFd = res.fd;
        tempConfig.current.saveFile = savePath;
        let param = tts.current.defaultStartParams();
        param.text = paramText

        try {
          await tts.current.start(param)
        } catch (e) {
          console.log(e)
          setPlayLoading(false);
          Taro.showToast({
            title: "生成失败",
            icon: "error",
            duration: 1000,
            mask: true
          })
        }
      },
      fail: (res) => {
        console.log(`open ${savePath} failed: ${res.errMsg}`)
      }
    })
  }

  // 复制文案
  const handleCopy = () => {
    Taro.setClipboardData({
      data: value,
      success: function () {
        Taro.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        });
      },
      fail: function () {
        Taro.showToast({
          title: '复制失败',
          icon: 'none',
          duration: 2000
        });
      }
    });
  }

  // 清空文案
  const handleClearText = () => {
    setValue("");
  }




  // slider调整
  const handleSliderChange = (item, sliderValue) => {
    let newFunctions = functions.map((fItem) => {
      if (fItem.key === item.key) {
        return {
          ...fItem,
          tempData: {
            label: sliderValue,
            value: sliderValue
          }
        }
      }
      return {
        ...fItem
      }
    })
    setFunctions(newFunctions);
  }

  // tag选择
  const handleSelectTag = (data, pdata) => {
    let newFunctions = functions.map((fItem) => {
      if (fItem.key === data.key) {
        return {
          ...fItem,
          tempData: { ...pdata }
        }
      }
      return {
        ...fItem
      }
    })
    setFunctions(newFunctions);
  }

  // 针对停顿和效果音的特殊处理
  const handleControlInputChange = (controlValues) => {
    let nvalue = value;
    let preValue = nvalue.slice(0, cursorPosition);
    let afterValue = nvalue.slice(cursorPosition);
    controlValues.forEach((item) => {
      preValue += `【${item.label}:${item.data.label}】`
    })
    nvalue = preValue + afterValue;
    setValue(nvalue);
  }

  // 打开语音设置弹层
  const handleFunctionClick = (data) => {
    if (data.key === "voice") {
      Taro.navigateTo({
        url: "/pages/voice/index"
      })
      return
    }
    setFloatLayoutOperateShow(true);
    setSelectFunctionKey(data.key);
  }

  // 关闭语音设置弹层
  const handleCloseFloatLayoutOperateShow = () => {
    let newFunctions = functions.map((fItem) => {
      return {
        ...fItem,
        tempData: {
          ...fItem.data
        }
      }
    })
    setFunctions(newFunctions);
    setFloatLayoutOperateShow(false)
  }

  // 语音设置确定事件
  const handleFloatlayoutConfirm = () => {
    let controlValues = [];
    let newFunctions = functions.map((fItem) => {
      if (showFloatLayoutTypeTwo.includes(fItem.key)) {

        if (fItem.tempData.value) {
          controlValues.push({
            data: {
              ...fItem.tempData
            },
            key: fItem.key,
            label: fItem.label
          })
        }
        return {
          ...fItem,
          tempData: {
            ...fItem.data
          }
        }
      }

      return {
        ...fItem,
        data: {
          ...fItem.tempData
        }
      }
    })

    handleControlInputChange(controlValues);
    setFunctions(newFunctions);
    setFloatLayoutOperateShow(false);
    Taro.showToast({
      title: "设置成功",
      icon: "success",
      duration: 1000,
      mask: true
    })
  }
  // 语音设置重置事件
  const handleFloatlayoutReset = () => {
    let newFunctions = functions.map((fItem) => {
      return {
        ...fItem,
        tempData: {
          ...fItem.data
        }
      }
    })
    setFunctions(newFunctions);
  }

  return (
    <View className='homepage'>
      <View className='homepage__tip'>
        <AtNoticebar>
          <View>
            操作提示:
          </View>
          <View>
            (1) 文本断句错误时，可用标点符号(如空格)重新分割或者使用停顿功能。
          </View>
          {/* <View>
            (2) 聚焦时点击播放按钮，可从光标所在的句子开始播放。
          </View> */}
          <View>
            (2) 支持一次性合成300字符以内的文字。【停顿:xxs】【效果音:xxx】语音设置不记录字数
          </View>
        </AtNoticebar>
      </View>

      <View className='homepage__textarea'>
        <AtTextarea
          className='textarea'
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlurChange}
          height={300}
          maxLength={100000000}
          count={false}
          placeholder='请在此处输入文本...'
        />
        <View className='textarea__controls'>
          <View className='controls-btns'>
            <AtTag className='controls__item' size='small' active onClick={handleCopy} type='normal' circle>复制文案</AtTag>
            <AtTag className='controls__item' size='small' active onClick={handleClearText} type='normal' circle>清空文案</AtTag>
          </View>
          <View className='controls-words-number'>
            <View>{formatValue(value).length}</View>
            <View>/300</View>
          </View>
        </View>
      </View>

      <View className='homepage__debug'>
        {
          functions && functions.map((item) => {
            return (
              <View className='debug__item' key={item.key} onClick={() => {
                handleFunctionClick(item);
              }}
              >
                <View className={`item__${item.key}  item__${item.gender}`}></View>
                <View>
                  {item.label}
                </View>
                {
                  item.data && (
                    <View>
                      {item.data.label}
                    </View>
                  )
                }
              </View>
            )
          })
        }
      </View>

      <View className='homepage__main-controls'>
        <AtButton onClick={handleVoiceSynthesis} disabled={playloading} loading={playloading} className='main-controls__btn' circle type='primary'>播放</AtButton>
        <AtButton onClick={handleExport} className='main-controls__btn' circle type='secondary'>导出</AtButton>
      </View>





      <AtFloatLayout className='homepage__floatlayout' isOpened={floatLayoutOperateShow} title='语音设置' onClose={handleCloseFloatLayoutOperateShow}>
        {
          showFloatLayoutTypeOne.includes(selectFunctionKey) &&
          <View>
            <AtNoticebar>
              <View>
                操作提示: 设置针对整体文案
              </View>
            </AtNoticebar>
            {
              (functions && functions.map((item) => {
                if (showFloatLayoutTypeOne.includes(item.key) && item.compType === "AtSlider") {
                  return (
                    <View key={item.key} className='homepage__function-set'>
                      <View className='function-text'>{item.label}</View>
                      <View className='function-content'>
                        <AtSlider min={item.min} max={item.max} onChange={(sliderValue) => {
                          handleSliderChange(item, sliderValue)
                        }} value={item.tempData.value} blockSize={12}
                        ></AtSlider>
                      </View>
                      <View className='function-number'>{item.tempData.value}</View>
                    </View>
                  )
                }

                if (showFloatLayoutTypeOne.includes(item.key) && item.compType === "AtTag") {
                  return (
                    <View key={item.key} className='homepage__function-set'>
                      <View className='function-text'>{item.label}</View>
                      <View className='function-content'>
                        <View className='content-tags'>
                          {
                            item.options && item.options.map((pitem) => {
                              return (
                                <AtTag key={item.label} active={pitem.value === item.tempData.value} onClick={() => {
                                  handleSelectTag(item, pitem);
                                }} className='content__tag' type='primary' circle
                                >
                                  {pitem.label}
                                </AtTag>
                              )
                            })
                          }
                        </View>
                      </View>
                    </View>
                  );
                }

                return;
              })
              )
            }
          </View>
        }

        {
          showFloatLayoutTypeTwo.includes(selectFunctionKey) &&
          <View>
            <AtNoticebar>
              <View>
                操作提示: 请先将光标定位在需要加入停顿或者效果音的文案之前
              </View>
            </AtNoticebar>
            {
              (functions && functions.map((item) => {
                if (showFloatLayoutTypeTwo.includes(item.key) && item.compType === "AtTag") {
                  return (
                    <View key={item.key} className='homepage__function-set'>
                      <View className='function-text'>{item.label}</View>
                      <View className='function-content content-tags'>
                        {
                          item.options && item.options.map((pitem) => {
                            return (
                              <AtTag key={item.label} active={pitem.value === item.tempData.value} onClick={() => {
                                handleSelectTag(item, pitem);
                              }} className='content__tag' type='primary' circle
                              >
                                {pitem.label}
                              </AtTag>
                            )
                          })
                        }
                      </View>
                    </View>
                  );
                }

                return;
              })
              )
            }

          </View>
        }

        <View className='floatlayout__footer'>
          <AtButton size='small' className='footer__btn-confirm' onClick={handleFloatlayoutConfirm} circle type='primary'>确定</AtButton>
          <AtButton size='small' className='footer__btn-cancel' onClick={handleFloatlayoutReset} type='secondary' circle >重置</AtButton>
        </View>
      </AtFloatLayout>
    </View>
  )
}
