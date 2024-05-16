import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'

import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'


// import AtSearchBar from 'taro-ui/lib/components/search-bar'
import AtTabs from 'taro-ui/lib/components/tabs'
import AtTabsPane from 'taro-ui/lib/components/tabs-pane'
import AtTag from 'taro-ui/lib/components/tag'

import { announcerEdit } from '../../redux/actions/soundSettings'


import announcerConfig from './announcer'


import './index.scss'

export default function Announcer() {
  // const [search, setSearch] = useState("");
  const { anchorConfig }= useSelector((state) => state.soundSettings)

  const [tabCurrent, setTabCurrent] = useState(() => {
    let selectCurrent = 0;
    announcerConfig.forEach((item, index) => {
      item.announcers.forEach((aitem) => {
        if(aitem.name === anchorConfig.name) {
          selectCurrent = index
        }
      })
    })
    return selectCurrent;
  });

  const [gender, setGender] = useState("all")

  const dispatch = useDispatch()

  
  
  
  // const handleSearchClick = () => {
  //   console.log();
  // }

  // const handleSearchChange = (data) => {
  //   setSearch(data);
  // }

  const handleTabClick = (current) => {
    setTabCurrent(current);
    setGender("all");
  }

  const handleSelectAnnouncer = (data) => {
    dispatch(announcerEdit(data));
    Taro.navigateBack()
  }

  let nAnnouncerConfig = announcerConfig.map((item) => {
    return item
  })

  let tabList = announcerConfig.map((item) => {
    return {
      title: item.label
    }
  })

  const genders = [{
    label: "全部",
    value: "all"
  },{
    label: "男",
    value: "man"
  },{
    label: "女",
    value: "girl"
  }]
  return (
    <View className='announcer'>
      {/* <AtSearchBar
        showActionButton
        onChange={handleSearchChange}
        onActionClick={handleSearchClick}
      /> */}

      <AtTabs
        current={tabCurrent}
        scroll
        tabList={tabList}
        onClick={handleTabClick}
      >
        {
          nAnnouncerConfig.map((item, index) => {
            let announcers = item.announcers.filter((aitem) => {
              if(gender === "all") return true;
              return aitem.gender === gender;
            })
            return (
              <AtTabsPane key={item.label} current={tabCurrent} index={index}>
                <View className='announcer__people'>
                  <View className='announcer__people-gender'>
                    <View>
                      可选音色：
                    </View>
                    {
                      genders.map((gitem) => {
                        return (
                          <AtTag key={gitem.label} active={gitem.value === gender} onClick={() => {
                            setGender(gitem.value);
                          }} className='gender__tag' type='primary' circle
                          >
                            {gitem.label}
                          </AtTag>
                        )
                      })
                    }
                    
                  </View>
                  {
                    announcers.length ? announcers.map((aitem, aindex) => {
                      return (
                        <View onClick={() => {
                          handleSelectAnnouncer(aitem);
                        }} className={`announcer__people-container ${aitem.name === anchorConfig.name ? 'announcer__container-select' : ''}`} key={aindex} >
                          <View className='announcer__people-item'>
                            <View className='item__thumb'>
                              <Image className='item__thumb-image' src={require(aitem.gender == "man" ? "../../assets/male-broadcast.png" : "../../assets/female-broadcast.png")}></Image>
                            </View>
                            <View className='item__content'>
                              <View className='item__content-name'>
                                {aitem.name}
                              </View>
                              <View className='item__content-type'>
                                {aitem.type}
                              </View>
                            </View>
                            <View className='item__content-extra'>适应场景：{aitem.language}</View>
                          </View>
                        </View>
                      )
                    }) : (
                      <View className='gender__empty'>暂无播音员</View>
                    )
                  }
                </View>
              </AtTabsPane>
            )
          })
        }
      </AtTabs>
    </View>
  )
}
