const announcers = [
  {
    label: "通用",
    announcers: [
      // {
      //   "name": "知锋_多情感",
      //   "voice": "zhifeng_emo",
      //   "type": "多种情感男声",
      //   "usageScenario": "",
      //   "language": "通用场景",
      //   "gender": "man"
      // },
      // {
      //   "name": "知冰_多情感",
      //   "voice": "zhibing_emo",
      //   "type": "多种情感男声",
      //   "usageScenario": "",
      //   "language": "通用场景",
      //   "gender": "man"
      // },
      // {
      //   "name": "知米_多情感",
      //   "voice": "zhimi_emo",
      //   "type": "多种情感女声",
      //   "usageScenario": "通用场景",
      //   "language": "中文及中英文混合场景",
      //   "gender": "girl"
      // },
      // {
      //   "name": "知燕_多情感",
      //   "voice": "zhiyan_emo",
      //   "type": "多种情感女声",
      //   "usageScenario": "通用场景",
      //   "language": "中文及中英文混合场景",
      //   "gender": "girl"
      // },
      // {
      //   "name": "知贝_多情感",
      //   "voice": "zhibei_emo",
      //   "type": "多种情感童声",
      //   "usageScenario": "通用场景",
      //   "language": "中文及中英文混合场景",
      //   "gender": "girl"
      // },
      // {
      //   "name": "知甜_多情感",
      //   "voice": "zhitian_emo",
      //   "type": "多种情感女声",
      //   "usageScenario": "通用场景",
      //   "language": "中文及中英文混合场景",
      //   "gender": "girl"
      // },
      //   {
      //   "name": "知妙_多情感",
      //   "voice": "zhimiao_emo",
      //   "type": "多种情感女声",
      //   "usageScenario": "中英场景",
      //   "language": "中文及英文场景",
      //   "gender": "girl"
      // },
      {
        "name": "知媛",
        "voice": "zhiyuan",
        "type": "普通话女声",
        "usageScenario": "通用场景",
        "language": "中文",
        "gender": "girl"
      },
      {
        "name": "知锋",
        "voice": "zhifeng_emo",
        "type": "多种情感男声",
        "usageScenario": "",
        "language": "通用场景",
        "gender": "man"
      },
      {
        "name": "知妙",
        "voice": "zhimiao_emo",
        "type": "多种情感女声",
        "usageScenario": "中英场景",
        "language": "中文及英文场景",
        "gender": "girl"
      },
      {
        "name": "知冰",
        "voice": "zhibing_emo",
        "type": "多种情感男声",
        "usageScenario": "",
        "language": "通用场景",
        "gender": "man"
      },
      {
        "name": "知米",
        "voice": "zhimi_emo",
        "type": "多种情感女声",
        "usageScenario": "通用场景",
        "language": "中文及中英文混合场景",
        "gender": "girl"
      },
      {
        "name": "知燕",
        "voice": "zhiyan_emo",
        "type": "多种情感女声",
        "usageScenario": "通用场景",
        "language": "中文及中英文混合场景",
        "gender": "girl"
      },
      {
        "name": "知贝",
        "voice": "zhibei_emo",
        "type": "多种情感童声",
        "usageScenario": "通用场景",
        "language": "中文及中英文混合场景",
        "gender": "girl"
      },
      {
        "name": "知甜",
        "voice": "zhitian_emo",
        "type": "多种情感女声",
        "usageScenario": "通用场景",
        "language": "中文及中英文混合场景",
        "gender": "girl"
      },
      {
        "name": "知小白",
        "voice": "zhixiaobai",
        "type": "普通话女声",
        "usageScenario": "对话数字人",
        "language": "支持中文及中英文混合场景",
        "gender": "girl"
      },
      {
        "name": "知小夏",
        "voice": "zhixiaoxia",
        "type": "普通话女声",
        "usageScenario": "对话数字人",
        "language": "支持中文及中英文混合场景",
        "gender": "girl"
      },
      {
        "name": "小云",
        "voice": "xiaoyun",
        "type": "标准女声",
        "usageScenario": "通用场景",
        "language": "中文及中英文混合场景",
        "gender": "girl"
      },
      {
        "name": "小刚",
        "voice": "xiaogang",
        "type": "标准男声",
        "usageScenario": "通用场景",
        "language": "中文及中英文混合场景",
        "gender": "man"
      },
      {
        "name": "若兮",
        "voice": "ruoxi",
        "type": "温柔女声",
        "usageScenario": "通用场景",
        "language": "中文及中英文混合场景",
        "gender": "girl"
      },
      {
        "name": "思琪",
        "voice": "siqi",
        "type": "温柔女声",
        "usageScenario": "通用场景",
        "language": "中文及中英文混合场景",
        "gender": "girl"
      },
      {
        "name": "思佳",
        "voice": "sijia",
        "type": "标准女声",
        "usageScenario": "通用场景",
        "language": "中文及中英文混合场景",
        "gender": "girl"
      },
      {
        "name": "思诚",
        "voice": "sicheng",
        "type": "标准男声",
        "usageScenario": "通用场景",
        "language": "中文及中英文混合场景",
        "gender": "man"
      },
      {
        "name": "艾琪",
        "voice": "aiqi",
        "type": "温柔女声",
        "usageScenario": "通用场景",
        "language": "中文及中英文混合场景",
        "gender": "girl"
      },
      {
        "name": "艾佳",
        "voice": "aijia",
        "type": "标准女声",
        "usageScenario": "通用场景",
        "language": "中文及中英文混合场景",
        "gender": "girl"
      },
      {
        "name": "艾诚",
        "voice": "aicheng",
        "type": "标准男声",
        "usageScenario": "通用场景",
        "language": "中文及中英文混合场景",
        "gender": "man"
      },
      {
        "name": "艾达",
        "voice": "aida",
        "type": "标准男声",
        "usageScenario": "通用场景",
        "language": "中文及中英文混合场景",
        "gender": "man"
      },
      {
        "name": "宁儿",
        "voice": "ninger",
        "type": "标准女声",
        "usageScenario": "通用场景",
        "language": "纯中文场景",
        "gender": "girl"
      },
      {
        "name": "瑞琳",
        "voice": "ruilin",
        "type": "标准女声",
        "usageScenario": "通用场景",
        "language": "纯中文场景",
        "gender": "girl"
      },
      {
        "name": "柜姐",
        "voice": "guijie",
        "type": "亲切女声",
        "usageScenario": "通用场景",
        "language": "支持中文及中英文混合场景",
        "gender": "girl"
      },
      {
        "name": "Stella",
        "voice": "stella",
        "type": "知性女声",
        "usageScenario": "通用场景",
        "language": "支持中文及中英文混合场景",
        "gender": "girl"
      },
      {
        "name": "Stanley",
        "voice": "stanley",
        "type": "沉稳男声",
        "usageScenario": "通用场景",
        "language": "支持中文及中英文混合场景",
        "gender": "man"
      },
      {
        "name": "Kenny",
        "voice": "kenny",
        "type": "温暖男声",
        "usageScenario": "通用场景",
        "language": "支持中文及中英文混合场景",
        "gender": "man"
      },
      {
        "name": "Rosa",
        "voice": "rosa",
        "type": "自然女声",
        "usageScenario": "通用场景",
        "language": "支持中文及中英文混合场景",
        "gender": "girl"
      },
      {
        "name": "马树",
        "voice": "mashu",
        "type": "儿童剧男声",
        "usageScenario": "通用场景",
        "language": "支持中文及中英文混合场景",
        "gender": "man"
      },
      {
        "name": "悦儿",
        "voice": "yuer",
        "type": "儿童剧女声",
        "usageScenario": "通用场景",
        "language": "仅支持纯中文场景",
        "gender": "girl"
      },
      {
        "name": "知悦",
        "voice": "zhiyue",
        "type": "普通话女声",
        "usageScenario": "通用场景",
        "language": "中文",
        "gender": "girl"
      },
      {
        "name": "知达",
        "voice": "zhida",
        "type": "普通话男声",
        "usageScenario": "通用场景",
        "language": "中文",
        "gender": "man"
      },
      {
        "name": "知莎",
        "voice": "zhistella",
        "type": "普通话女声",
        "usageScenario": "通用场景",
        "language": "中文",
        "gender": "girl"
      },
      {
        "name": "阿斌",
        "voice": "abin",
        "type": "广东普通话",
        "usageScenario": "对话数字人",
        "language": "支持中文及中英文混合场景",
        "gender": "girl"
      },
      {
        "name": "clara",
        "voice": "clara",
        "type": "法语女声",
        "usageScenario": "通用场景",
        "language": "法语",
        "gender": "girl"
      },
      {
        "name": "hanna",
        "voice": "hanna",
        "type": "德语女声",
        "usageScenario": "通用场景",
        "language": "德语",
        "gender": "girl"
      },
      {
        "name": "waan",
        "voice": "waan",
        "type": "泰语女声",
        "usageScenario": "通用场景",
        "language": "泰语",
        "gender": "girl"
      },
      {
        "name": "betty",
        "voice": "betty",
        "type": "美式英文女声",
        "usageScenario": "通用场景",
        "language": "美式英文",
        "gender": "girl"
      },
      {
        "name": "beth",
        "voice": "beth",
        "type": "美式英文女声",
        "usageScenario": "通用场景",
        "language": "美式英文",
        "gender": "girl"
      },
      {
        "name": "cindy",
        "voice": "cindy",
        "type": "美式英文女声",
        "usageScenario": "通用场景",
        "language": "美式英文",
        "gender": "girl"
      },
      {
        "name": "donna",
        "voice": "donna",
        "type": "美式英文女声",
        "usageScenario": "通用场景",
        "language": "美式英文",
        "gender": "girl"
      },
      {
        "name": "eva",
        "voice": "eva",
        "type": "美式英文女声",
        "usageScenario": "通用场景",
        "language": "美式英文",
        "gender": "girl"
      },
      {
        "name": "brian",
        "voice": "brian",
        "type": "美式英文男声",
        "usageScenario": "通用场景",
        "language": "美式英文",
        "gender": "man"
      }]
  },
  // {
  //   label: "数字人",
  //   announcers: []
  // },
  // {
  //   label: "多情感",
  //   announcers: []
  // },
  {
    label: "客服",
    announcers: [{
      "name": "知雅",
      "voice": "zhiya",
      "type": "普通话女声",
      "usageScenario": "客服",
      "language": "中文",
      "gender": "girl"
    }, {
      "name": "思悦",
      "voice": "siyue",
      "type": "温柔女声",
      "usageScenario": "客服场景",
      "language": "中文及中英文混合场景",
      "gender": "girl"
    }, {
      "name": "艾硕",
      "voice": "aishuo",
      "type": "自然男声",
      "usageScenario": "客服场景",
      "language": "中文及中英文混合场景",
      "gender": "man"
    }, {
      "name": "知硕",
      "voice": "zhishuo",
      "type": "普通话男声",
      "usageScenario": "客服数字人",
      "language": "支持中文及中英文混合场景",
      "gender": "man"
    },
    {
      "name": "艾夏",
      "voice": "aixia",
      "type": "普通话女声",
      "usageScenario": "客服数字人",
      "language": "支持中文及中英文混合场景",
      "gender": "girl"
    },
    {
      "name": "艾雅",
      "voice": "aiya",
      "type": "严厉女声",
      "usageScenario": "客服场景",
      "language": "中文及中英文混合场景",
      "gender": "girl"
    },
    {
      "name": "艾美",
      "voice": "aimei",
      "type": "甜美女声",
      "usageScenario": "客服场景",
      "language": "中文及中英文混合场景",
      "gender": "girl"
    },
    {
      "name": "艾雨",
      "voice": "aiyu",
      "type": "自然女声",
      "usageScenario": "客服场景",
      "language": "中文及中英文混合场景",
      "gender": "girl"
    },
    {
      "name": "艾悦",
      "voice": "aiyue",
      "type": "温柔女声",
      "usageScenario": "客服场景",
      "language": "中文及中英文混合场景",
      "gender": "girl"
    },
    {
      "name": "艾婧",
      "voice": "aijing",
      "type": "严厉女声",
      "usageScenario": "客服场景",
      "language": "中文及中英文混合场景",
      "gender": "girl"
    },
    {
      "name": "小美",
      "voice": "xiaomei",
      "type": "甜美女声",
      "usageScenario": "客服场景",
      "language": "中文及中英文混合场景",
      "gender": "girl"
    },
    {
      "name": "艾娜",
      "voice": "aina",
      "type": "浙普女声",
      "usageScenario": "客服场景",
      "language": "纯中文场景",
      "gender": "girl"
    },
    {
      "name": "伊娜",
      "voice": "yina",
      "type": "浙普女声",
      "usageScenario": "客服场景",
      "language": "纯中文场景",
      "gender": "girl"
    },
    {
      "name": "思婧",
      "voice": "sijing",
      "type": "严厉女声",
      "usageScenario": "客服场景",
      "language": "纯中文场景",
      "gender": "girl"
    }]
  }, {
    label: "直播",
    announcers: [{
      "name": "知小妹",
      "voice": "zhixiaomei",
      "type": "普通话女声",
      "usageScenario": "直播数字人",
      "language": "支持中文及中英文混合场景",
      "gender": "girl"
    },
    {
      "name": "知柜",
      "voice": "zhigui",
      "type": "普通话女声",
      "usageScenario": "直播数字人",
      "language": "支持中文及中英文混合场景",
      "gender": "girl"
    }, {
      "name": "小仙",
      "voice": "xiaoxian",
      "type": "亲切女声",
      "usageScenario": "直播场景",
      "language": "支持中文及中英文混合场景",
      "gender": "girl"
    }, {
      "name": "猫小美",
      "voice": "maoxiaomei",
      "type": "活力女声",
      "usageScenario": "直播场景",
      "language": "支持中文及中英文混合场景",
      "gender": "girl"
    },
    {
      "name": "艾飞",
      "voice": "aifei",
      "type": "激昂解说",
      "usageScenario": "直播场景",
      "language": "支持中文及中英文混合场景",
      "gender": "girl"
    },
    {
      "name": "亚群",
      "voice": "yaqun",
      "type": "卖场广播",
      "usageScenario": "直播场景",
      "language": "支持中文及中英文混合场景",
      "gender": "girl"
    },
    {
      "name": "巧薇",
      "voice": "qiaowei",
      "type": "卖场广播",
      "usageScenario": "直播场景",
      "language": "支持中文及中英文混合场景",
      "gender": "girl"
    }, {
      "name": "艾伦",
      "voice": "ailun",
      "type": "悬疑解说",
      "usageScenario": "直播场景",
      "language": "支持中文及中英文混合场景",
      "gender": "girl"
    }, {
      "name": "老铁",
      "voice": "laotie",
      "type": "东北老铁",
      "usageScenario": "直播场景",
      "language": "仅支持纯中文场景",
      "gender": "girl"
    },
    {
      "name": "老妹",
      "voice": "laomei",
      "type": "吆喝女声",
      "usageScenario": "直播场景",
      "language": "仅支持纯中文场景",
      "gender": "girl"
    }, {
      "name": "知猫",
      "voice": "zhimao",
      "type": "普通话女声",
      "usageScenario": "直播",
      "language": "中文",
      "gender": "girl"
    }]
  }, {
    label: "童声",
    announcers: [{
      "name": "思彤",
      "voice": "sitong",
      "type": "儿童音",
      "usageScenario": "童声场景",
      "language": "纯中文场景",
      "gender": "girl"
    },
    {
      "name": "小北",
      "voice": "xiaobei",
      "type": "萝莉女声",
      "usageScenario": "童声场景",
      "language": "纯中文场景",
      "gender": "girl"
    },
    {
      "name": "艾彤",
      "voice": "aitong",
      "type": "儿童音",
      "usageScenario": "童声场景",
      "language": "纯中文场景",
      "gender": "girl"
    },
    {
      "name": "艾薇",
      "voice": "aiwei",
      "type": "萝莉女声",
      "usageScenario": "童声场景",
      "language": "纯中文场景",
      "gender": "girl"
    },
    {
      "name": "艾宝",
      "voice": "aibao",
      "type": "萝莉女声",
      "usageScenario": "童声场景",
      "language": "纯中文场景",
      "gender": "girl"
    }, {
      "name": "杰力豆",
      "voice": "jielidou",
      "type": "治愈童声",
      "usageScenario": "童声场景",
      "language": "仅支持纯中文场景",
      "gender": "girl"
    }]
  }, {
    label: "英文",
    announcers: [{
      "name": "Annie",
      "voice": "annie",
      "type": "美语女声",
      "usageScenario": "英文场景",
      "language": "英文场景",
      "gender": "girl"
    }, {
      "name": "ava",
      "voice": "ava",
      "type": "美语女声",
      "usageScenario": "英文场景",
      "language": "仅支持纯英文场景",
      "gender": "girl"
    }, {
      "name": "Harry",
      "voice": "harry",
      "type": "英音男声",
      "usageScenario": "英文场景",
      "language": "英文场景",
      "gender": "man"
    }, {
      "name": "Lydia",
      "voice": "lydia",
      "type": "英中双语女声",
      "usageScenario": "英文场景",
      "language": "英文及英中文混合场景",
      "gender": "girl"
    }, {
      "name": "Cally",
      "voice": "cally",
      "type": "美式英文女声",
      "usageScenario": "英语口语对话数字人",
      "language": "仅支持纯英文场景",
      "gender": "girl"
    },
    {
      "name": "Abby",
      "voice": "abby",
      "type": "美音女声",
      "usageScenario": "英文场景",
      "language": "英文场景",
      "gender": "girl"
    },
    {
      "name": "Andy",
      "voice": "andy",
      "type": "美音男声",
      "usageScenario": "英文场景",
      "language": "英文场景",
      "gender": "man"
    },
    {
      "name": "Eric",
      "voice": "eric",
      "type": "英音男声",
      "usageScenario": "英文场景",
      "language": "英文场景",
      "gender": "man"
    },
    {
      "name": "Emily",
      "voice": "emily",
      "type": "英音女声",
      "usageScenario": "英文场景",
      "language": "英文场景",
      "gender": "girl"
    },
    {
      "name": "Luna",
      "voice": "luna",
      "type": "英音女声",
      "usageScenario": "英文场景",
      "language": "英文场景",
      "gender": "girl"
    },
    {
      "name": "Luca",
      "voice": "luca",
      "type": "英音男声",
      "usageScenario": "英文场景",
      "language": "英文场景",
      "gender": "man"
    },
    {
      "name": "Wendy",
      "voice": "wendy",
      "type": "英音女声",
      "usageScenario": "英文场景",
      "language": "英文场景",
      "gender": "girl"
    },
    {
      "name": "William",
      "voice": "william",
      "type": "英音男声",
      "usageScenario": "英文场景",
      "language": "英文场景",
      "gender": "man"
    },
    {
      "name": "Olivia",
      "voice": "olivia",
      "type": "英音女声",
      "usageScenario": "英文场景",
      "language": "英文场景",
      "gender": "girl"
    }]
  }, {
    label: "方言",
    announcers: [{
      "name": "姗姗",
      "voice": "shanshan",
      "type": "粤语女声",
      "usageScenario": "方言场景",
      "language": "标准粤文（简体）及粤英文混合场景",
      "gender": "girl"
    },
    {
      "name": "小玥",
      "voice": "chuangirl",
      "type": "四川话女声",
      "usageScenario": "方言场景",
      "language": "中文及中英文混合场景",
      "gender": "girl"
    }, {
      "name": "青青",
      "voice": "qingqing",
      "type": "中国台湾话女声",
      "usageScenario": "方言场景",
      "language": "中文场景",
      "gender": "girl"
    },
    {
      "name": "翠姐",
      "voice": "cuijie",
      "type": "东北话女声",
      "usageScenario": "方言场景",
      "language": "中文场景",
      "gender": "girl"
    },
    {
      "name": "小泽",
      "voice": "xiaoze",
      "type": "湖南重口音男声",
      "usageScenario": "方言场景",
      "language": "中文场景",
      "gender": "man"
    }, {
      "name": "佳佳",
      "voice": "jiajia",
      "type": "粤语女声",
      "usageScenario": "方言场景",
      "language": "标准粤文（简体）及粤英文混合场景",
      "gender": "girl"
    }, {
      "name": "桃子",
      "voice": "taozi",
      "type": "粤语女声",
      "usageScenario": "方言场景",
      "language": "支持标准粤文（简体）及粤英文混合场景",
      "gender": "girl"
    }, {
      "name": "大虎",
      "voice": "dahu",
      "type": "东北话男声",
      "usageScenario": "方言场景",
      "language": "支持中文及中英文混合场景",
      "gender": "man"
    }, {
      "name": "艾侃",
      "voice": "aikan",
      "type": "天津话男声",
      "usageScenario": "方言场景",
      "language": "仅支持纯中文场景",
      "gender": "man"
    }, {
      "name": "Kelly",
      "voice": "kelly",
      "type": "香港粤语女声",
      "usageScenario": "方言场景",
      "language": "香港粤语",
      "gender": "girl"
    }]
  }, {
    label: "美式英语",
    announcers: [{
      "name": "Becca",
      "voice": "becca",
      "type": "美语客服女声",
      "usageScenario": "美式英语",
      "language": "支持纯英语场景",
      "gender": "girl"
    }]
  }, {
    label: "多语种",
    announcers: [{
      "name": "Kyong",
      "voice": "Kyong",
      "type": "韩语女声",
      "usageScenario": "韩语场景",
      "language": "韩语",
      "gender": "girl"
    }, {
      "name": "masha",
      "voice": "masha",
      "type": "俄语女声",
      "usageScenario": "俄语场景",
      "language": "俄语",
      "gender": "girl"
    }, {
      "name": "camila",
      "voice": "camila",
      "type": "西班牙语女声",
      "usageScenario": "西班牙语场景",
      "language": "西班牙语",
      "gender": "girl"
    }, {
      "name": "perla",
      "voice": "perla",
      "type": "意大利语女声",
      "usageScenario": "意大利语场景",
      "language": "意大利语",
      "gender": "girl"
    }, {
      "name": "智香",
      "voice": "tomoka",
      "type": "日语女声",
      "usageScenario": "多语种场景",
      "language": "日文场景",
      "gender": "girl"
    },
    {
      "name": "智也",
      "voice": "tomoya",
      "type": "日语男声",
      "usageScenario": "多语种场景",
      "language": "日文场景",
      "gender": "man"
    }, {
      "name": "Indah",
      "voice": "indah",
      "type": "印尼语女声",
      "usageScenario": "多语种场景",
      "language": "纯印尼语场景",
      "gender": "girl"
    }, {
      "name": "Farah",
      "voice": "farah",
      "type": "马来语女声",
      "usageScenario": "多语种场景",
      "language": "仅支持纯马来语场景",
      "gender": "girl"
    }, {
      "name": "Tala",
      "voice": "tala",
      "type": "菲律宾语女声",
      "usageScenario": "多语种场景",
      "language": "仅支持菲律宾语场景",
      "gender": "girl"
    },
    {
      "name": "Tien",
      "voice": "tien",
      "type": "越南语女声",
      "usageScenario": "多语种场景",
      "language": "仅支持越南语场景",
      "gender": "girl"
    }]
  }
]

export default announcers;