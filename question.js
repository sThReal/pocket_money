window.question = [
  {
    index:1,
    title:"同事聚餐,申请一笔用餐资金     ",
    answerA:{
      msg:'怂人壮胆型：工资卡给我，有用！你别管那么多！',
      direct:'.questionError1',
      desc:false,
      methodIndex:4,
},
    answerC:{
      msg:'委婉撒娇型：老婆，今天我想出去吃~',
      direct:'.questionError1Else',
      desc:false,
      methodIndex:6,
    },
    answerB:{
      msg:'实话实说型：今天公司有个饭局，能不能通融下。。。',
      direct:'#question1End',
      desc:true,
      methodIndex:5,
    }
  },
  {
    index:2,
    title:"小酌怡情,申请一笔饮酒资金",
    answerC:{
      msg:'功能夸大型：为拉动国民幸福值，满足刚性需求，我想出去喝个小酒。。。！',
      direct:'.questionError2',
      desc:false,
      methodIndex:15,
    },
    answerB:{
      msg:'坐低伏小型：我有一个渺小的愿望，不知当讲不当讲。今天，我想喝酒。',
      direct:'.questionError2Else',
      desc:false,
      methodIndex:14,
    },
    answerA:{
      msg:'借题发挥型：下周有个领导的饭局，我想提前演练下，升职加薪就看这次！',
      direct:'#question2End',
      desc:true,
      methodIndex:13,
    }
  },
  {
    index:3,
    title:"装备升级,申请一笔游戏资金",
    answerA:{
      msg:'偷换概念型：我不抽烟，不纹身，我知道我是个好男人，只想打个游戏。',
      direct:'.questionError3',
      desc:false,
      methodIndex:22,
    },
    answerB:{
      msg:'白日做梦型：曾经我是超级英雄，直到失去装备，你愿意帮助我吗？',
      direct:'.questionError3Else',
      desc:false,
      methodIndex:23,
    },
    answerC:{
      msg:'暗度陈仓型：我需要进修一下，提升下个人的专业技术素养。',
      direct:'#question3End',
      desc:true,
      methodIndex:24,
    }
  },
  {
    index:4,
    title:"听演唱会,申请一笔娱乐资金",
    answerC:{
      msg:'热血恳求型：周天王的演唱会啊！一生一次，买不了吃亏，买不了上当！',
      direct:'.questionError4Else',
      desc:false,
      methodIndex:33,
    },
    answerB:{
      msg:'瞎凑热闹型：最近几个朋友都买了票，我也想去看看，嘿嘿嘿~',
      direct:'.questionError4',
      desc:false,
      methodIndex:32,
    },
    answerA:{
      msg:'借花献佛型：记得你爱听他的歌，这次给我个机会带你去听。',
      direct:'#question4End',
      desc:true,
      methodIndex:31,
    }
  },
]