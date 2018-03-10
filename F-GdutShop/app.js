//app.js
App({
  onLaunch: function () {
    let self = this
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getUserInfo({
      success: (res) => {
        this.globalData.userInfo = res.userInfo       
      }
    })
    
    //闲置商品信息
    this.globalData.goods.push({
      cls:'good',
      seller:'测试er',
      time:'什么时候发布',
      title:'苹果手机IPHONE X',
      price:'7999',
      des:'刚入手1一个月，99成新，xxxxxxxxxxxx大概这么长最多显示两行xxxxx详细的描述在详情页再显示......',
      img:[1,2,3],
      likeNum:5,
      msgNum:10
    }),
    //新消息
    this.globalData.newMsg.push({
      avatarUrl:'jpg',
      time:'',
      content:'这是留言，这么长'
    })
    console.log(this.globalData)
  },
  globalData: {
    userInfo:null,
    newMsg:[],
    goods:[],
    mySellItem:[],
    allMsg:[],
  }
})