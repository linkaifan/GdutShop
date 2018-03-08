//index.js
//获取应用实例
const app = getApp()

// pages/shop/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        rpItem:[{
            src:'/assets/icon/1.jpg'
        },{
            src:'/assets/icon/2.jpg'
        },{
            src:'/assets/icon/3.jpg'
        }],
        rpCurIndex:0,
        newasItem:99,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let self = this
      wx.getUserInfo({
        success: function (res) {
          app.globalData.userInfo = res.userInfo
          self.setData({
            userInfo: app.globalData.userInfo,
          })
        }
      })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        setInterval(this.itemChange,2000)
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
    
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
    
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
    
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
    
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
    
    },

    //非钩子函数
    itemChange:function(){
        let self = this
            if (self.data.rpCurIndex == self.data.rpItem.length - 1) {
                self.setData({
                    rpCurIndex: 0
                })
            } else {
                self.setData({
                    rpCurIndex: self.data.rpCurIndex + 1
                })
            }
    },

    toAddPage:function(){
        wx.navigateTo({
            url: '../add/add',
        })
    },
    toMessagePage: function () {
        wx.navigateTo({
            url: '../message/message',
        })
    },
    toMyGood: function () {
      wx.navigateTo({
        url: '../my-good/my-good',
      })
    },
    toDetail:function(){
      wx.navigateTo({
        url: '../detail/detail',
      })
    }
})