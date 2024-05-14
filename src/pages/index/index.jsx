import  { View } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'

import { useState, useRef } from 'react'

import { AtTextarea } from 'taro-ui'

import SpeechSynthesizer from "../../../sdk/ali/utils/tts"

import { formatTime, sleep } from "../../../sdk/ali/utils/util"

import { getToken } from "../../../sdk/ali/utils/token"

import './index.scss'

const AKID = ""
const AKKEY = ""

export default function Index() {
  const [inputValue, setInputValue] = useState("11");

  const tempConfig = useRef({})

  const tts = useRef(null);

  const ttsStart = useRef(false)

  // 输入框值
  const handleInputChange = (data) => {
    setInputValue(data);
  }

  // 功能函数对象
  const functions = [
    {
      key: "pause",
      value: '停顿'
    },
    {
      key: "speakingSpeed",
      value: '语速'
    },
    {
      key: "volume",
      value: '音量'
    },
    {
      key: "soundEffects",
      value: '效果音'
    },
    {
      key: "backgroundSound",
      value: '背景音'
    },
    {
      key: "globalSpecialEffects",
      value: '全局特效'
    }]
  // 功能调整
  const handleFunctionClick = (data) => {
    console.log(data);
  }

  const handlePlay = () => {
    if (!inputValue) {
      console.log("text empty")
      Taro.showToast({
        title: "文本为空",
        icon: "error",
        duration: 1000,
        mask: true
      })
      return
    }
    if (ttsStart.current) {
      Taro.showToast({
        title: "正在合成请稍候",
        icon: "error",
        duration: 1000,
        mask: true
      })
      return
    } else {
      ttsStart.current = true;
    }
    let save = formatTime(new Date()) + ".wav"
    let savePath = Taro.env.USER_DATA_PATH + "/" + save
    console.log(`save to ${savePath}`)
    const fs = Taro.getFileSystemManager()
    fs.open({
        filePath:savePath,
        flag : "a+",
        success: async (res)=> {
            console.log(`open ${savePath} done`)
            tempConfig.current.saveFd = res.fd;
            tempConfig.current.saveFile = savePath;
            let param = tts.current.defaultStartParams();
            param.text = `111`
            param.voice = "aixia"
            debugger;
            try {
                await tts.current.start(param)
                console.log("tts done")
                ttsStart.current = false
            } catch(e) {
                console.log(e)
            }
        },
        fail: (res)=> {
            console.log(`open ${savePath} failed: ${res.errMsg}`)
        }
    })
  }


  useLoad(() => {
    async function init() {
      let token;
      try {
        token = await getToken(AKID, AKKEY)
        tts.current = new SpeechSynthesizer({
          url: "wss://nls-gateway.cn-shanghai.aliyuncs.com/ws/v1",
          appkey: "QA87l8XbMKT97bIN",
          token
        })


        tts.current.on("completed", async (msg) => {
          console.log("Client recv completed:", msg)
          const fs = Taro.getFileSystemManager()
            await sleep(500)
            fs.close({
                fd : tempConfig.current.saveFd,
                success: (res)=> {
                    let ctx = Taro.createInnerAudioContext()
                    ctx.autoplay = true
                    ctx.src = tempConfig.current.saveFile
                    ctx.onPlay(() => {
                        console.log('start playing..')
                    })
                    ctx.onError((res) => {
                        console.log(res.errMsg)
                        console.log(res.errCode)
                        fs.unlink({
                            filePath: this.data.saveFile,
                            success: (res)=>{
                                console.log(`remove ${this.data.saveFile} done`)
                                tempConfig.current = {};
                            },
                            failed: (res)=>{
                                console.log("remove failed:" + res.errMsg)
                            }
                        })
                    })
                    ctx.onEnded((res)=>{
                        console.log("play done...")
                        fs.unlink({
                            filePath: this.data.saveFile,
                            success: (res)=>{
                                console.log(`remove ${this.data.saveFile} done`)
                                tempConfig.current = {};
                            },
                            failed: (res)=>{
                                console.log("remove failed:" + res.errMsg)
                            }
                        })
                    })
                },
                fail : (res)=>{
                    console.log("saved file error:" + res.errMsg)
                }
            })
        })
      } catch (e) {
        console.log("error on get token:", JSON.stringify(e.message))
        return
      }
    }
    init();
  })

  return (
    <View className='index'>
      <AtTextarea
        value={inputValue}
        onChange={handleInputChange}
        maxLength={200}
        placeholder='请在此处输入文本...'
      />
      <View onClick={handlePlay}>播放</View>
      <View className='at-row at-row--wrap'>
        {
          functions && functions.map((item) => {
            return (
              <View onClick={() => {
                handleFunctionClick(item);
              }} key={item.key} className='at-col at-col-4'
              >{item.value}</View>
            )
          })
        }
      </View>
    </View>
  )
}
