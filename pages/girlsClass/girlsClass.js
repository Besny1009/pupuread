// pages/girlsClass/girlsClass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idx: 0,
    lists: [
      "女生", "出版", "男生"
    ],
    allClass:[
      { "pic": "/images/content_01.png", "title": "现在言情", "number": "53687" },
      { "pic": "/images/content_01.png", "title": "古代言情", "number": "60282" },
      { "pic": "/images/content_01.png", "title": "浪漫青春", "number": "10517" },
      { "pic": "/images/content_01.png", "title": "玄幻言情", "number": "15536" },
      { "pic": "/images/content_01.png", "title": "科幻空间", "number": "6026" },
      { "pic": "/images/content_01.png", "title": "仙侠奇缘", "number": "6908" },
      { "pic": "/images/content_01.png", "title": "游戏竞技", "number": "1764" },
      { "pic": "/images/content_01.png", "title": "悬疑灵异", "number": "2199" },
      { "pic": "/images/content_01.png", "title": "轻小说", "number": "822" },
      { "pic": "/images/content_01.png", "title": "短篇", "number": "2180" }
    ],
    hotLabels:[
      '总裁','女强','轻松','宠文',
      '种田','穿越','明星','权谋',
      '豪门','腹黑','养成','契约',
      '修仙','爽文','穿书','爆笑',
      '毒舌','正剧'
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //绑定点击事件
  btnClick: function (e) {
    var currenIdx = e.currentTarget.dataset.idx;
    var newAllClass = [];
    var newHotLabels = [];
    if (currenIdx == 0) {
      newAllClass = newAllClass.concat([
        { "pic": "/images/content_01.png", "title": "现在言情", "number": "53687" },
        { "pic": "/images/content_01.png", "title": "古代言情", "number": "60282" },
        { "pic": "/images/content_01.png", "title": "浪漫青春", "number": "10517" },
        { "pic": "/images/content_01.png", "title": "玄幻言情", "number": "15536" },
        { "pic": "/images/content_01.png", "title": "科幻空间", "number": "6026" },
        { "pic": "/images/content_01.png", "title": "仙侠奇缘", "number": "6908" },
        { "pic": "/images/content_01.png", "title": "游戏竞技", "number": "1764" },
        { "pic": "/images/content_01.png", "title": "悬疑灵异", "number": "2199" },
        { "pic": "/images/content_01.png", "title": "轻小说", "number": "822" },
        { "pic": "/images/content_01.png", "title": "短篇", "number": "2180" }
      ]);
      newHotLabels = newHotLabels.concat([
        '总裁', '女强', '轻松', '宠文',
        '种田', '穿越', '明星', '权谋',
        '豪门', '腹黑', '养成', '契约',
        '修仙', '爽文', '穿书', '爆笑',
        '毒舌', '正剧'

      ])
    
    } else if (currenIdx == 1) {
      newAllClass =  newAllClass.concat([
        { "pic": "/images/content_01.png", "title": "青春文学", "number": "4539" },
        { "pic": "/images/content_01.png", "title": "小说", "number": "20293" },
        { "pic": "/images/content_01.png", "title": "成功励志", "number": "6903" },
        { "pic": "/images/content_01.png", "title": "文学", "number": "8195" },
        { "pic": "/images/content_01.png", "title": "心理学", "number": "946" },
        { "pic": "/images/content_01.png", "title": "童书", "number": "3127" },
        { "pic": "/images/content_01.png", "title": "历史", "number": "2068" },
        { "pic": "/images/content_01.png", "title": "传记", "number": "2388" },
        { "pic": "/images/content_01.png", "title": "哲学", "number": "1029" },
        { "pic": "/images/content_01.png", "title": "管理", "number": "2390" },
        { "pic": "/images/content_01.png", "title": "文化", "number": "1298" },
        { "pic": "/images/content_01.png", "title": "教材教辅", "number": "1851" },
        { "pic": "/images/content_01.png", "title": "公版免费书", "number": "13916" },
        { "pic": "/images/content_01.png", "title": "妻子家教", "number": "1056" },
        { "pic": "/images/content_01.png", "title": "科普读物", "number": "963" },
        { "pic": "/images/content_01.png", "title": "社会科学", "number": "1054" }
      ]);
      newHotLabels = newHotLabels.concat([
        '经济', '短篇', '古籍', '政治',
        '法律', '艺术', '期刊杂志'

      ])

    
    } else if (currenIdx == 2) {
      newAllClass = newAllClass.concat([
        { "pic": "/images/content_01.png", "title": "玄幻", "number": "27685" },
        { "pic": "/images/content_01.png", "title": "都市", "number": "23389" },
        { "pic": "/images/content_01.png", "title": "仙侠", "number": "12119" },
        { "pic": "/images/content_01.png", "title": "悬疑灵异", "number": "4105" },
        { "pic": "/images/content_01.png", "title": "军事", "number": "1079" },
        { "pic": "/images/content_01.png", "title": "科幻", "number": "11889" },
        { "pic": "/images/content_01.png", "title": "游戏", "number": "10220" },
        { "pic": "/images/content_01.png", "title": "轻小说", "number": "9750" },
        { "pic": "/images/content_01.png", "title": "历史", "number": "10379" },
        { "pic": "/images/content_01.png", "title": "奇幻", "number": "8214" },
        { "pic": "/images/content_01.png", "title": "武侠", "number": "6230" },
        { "pic": "/images/content_01.png", "title": "体育", "number": "2166" },
        { "pic": "/images/content_01.png", "title": "现实", "number": "1381" },
        { "pic": "/images/content_01.png", "title": "短篇", "number": "1692" },
      ]);
      newHotLabels = newHotLabels.concat([
        '凡人流', '争霸流', '强者回归', '无敌文',
        '技术流', '练功流', '系统流', '废柴流',
        '学生', '嚣张', '机智', '位面',
        '丹药', '法师', '坚毅', '赚钱',
        '孤儿'

      ])
    }
    this.setData({
      idx: e.currentTarget.dataset.idx,
      allClass: newAllClass,
      hotLabels: newHotLabels
    })
    console.log(this.data)
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

  }
})