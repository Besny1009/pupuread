// component/classView/classView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    allClass:{
      type:Array,
      value:null
    },
    hotLabels:{
      type:Array,
      value:[]
    },
    idx:{
      type:Number,
      value:0
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    idx:0,
    lists:[
      "女生", "出版","男生"
    ],
    allClass:[],
    hotLabels:[]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },
  

})
