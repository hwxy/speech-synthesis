export default defineAppConfig({
  pages: [
    'pages/index/index',
    "pages/personalinformation/index"
  ],
  tabBar: {
    "selectedColor": "#6190e8",
    "color": "#6a6a77",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "assets/microphone.png",
        "selectedIconPath": "assets/microphone_selected.png"
      },
      {
        "pagePath": "pages/personalinformation/index",
        "text": "我的",
        "iconPath": "assets/me.png",
        "selectedIconPath": "assets/me_selected.png"
      }
    ],
  },  
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '配音专家',
    navigationBarTextStyle: 'black',
    backgroundColor: "#fafbfc"
  }
})
