//index.js
//获取应用实例
const app = getApp()
// pages/shop/my-good/my-good.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    activeTab:"good",//默认选项卡good
    goods:[],
    likes:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo,
      goods:app.globalData.goods,
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
  likeTab(){
    if (this.data.activeTab === "good") {
      this.setData({
        activeTab:"like"
      })
    }
  },
  goodTab(){
    if (this.data.activeTab === "like") {
      this.setData({
        activeTab:"good"
      })
    }
  }
})