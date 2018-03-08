Component({
  properties: {
    // 这里定义属性，属性值可以在组件使用时指定
    isDetail: { // 属性名
      type: Boolean, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: false, // 属性初始值（可选），如果未指定则会根据类型选择一个      
    },
  },
  data: {
    // 这里是一些组件内部数据
    upInfo: {
      upnickName:"fan",
      upTime:'什么时候 发布',
      upPrice:'7999',
      goodName:'苹果手机IPHONE X',
      goodDisc:'刚入手1一个月，99成新，xxxxxxxxxxxx大概这么长最多显示两行xxxxx详细的描述在详情页再显示......',
      msgNum:10,
      likeNum:5   
    },
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){}
  }
})