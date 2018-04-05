// pages/main/main.js
var util = require('../../utils/util.js')
import { CanvasUtil } from "../../utils/canvasUtil.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canvasHeight:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  initTable:function()
  {
    var left = 30;
    var top = 0;
    var ctx = wx.createCanvasContext('detail_canvas');

    var canUtil = new CanvasUtil();
    canUtil.init(ctx);
    canUtil.fontStyle("normal bold 14px arial");

    left = 20;
    top = 40;
    var textWidth = 0;

    textWidth = canUtil.measureText("险种");
    left = left + (120 - textWidth)/2;
    canUtil.drawText("险种", left, top + 15);

    left = 120;
    textWidth = canUtil.measureText("基数");
    left = left + (120 - textWidth) / 2;
    canUtil.drawText("基数", left, top + 15);

    left = 230;
    textWidth = canUtil.measureText("企业缴费");
    left = left + (200 - textWidth)/2;
    canUtil.drawText("企业缴费", left, top);

    var fontStyle = canUtil.getFontStyle();
    canUtil.fontStyle("normal bold 12px arial");
    canUtil.drawText("比例", left - 15, top + 35);
    var subLeft = left + canUtil.measureText("比例") + 35;
    canUtil.drawText("金额", subLeft, top + 35);

    canUtil.fontStyle(fontStyle);

    left = 420;
    textWidth = canUtil.measureText("个人缴费");
    left = left + (200 - textWidth)/2;
    canUtil.drawText("个人缴费", left, top);

    fontStyle = canUtil.getFontStyle();
    canUtil.fontStyle("normal bold 12px arial");
    canUtil.drawText("比例", left - 15, top + 35);
    subLeft = left + canUtil.measureText("比例") + 35;
    canUtil.drawText("金额", subLeft, top + 35);

    canUtil.fontStyle(fontStyle);

    left = 630;
    canUtil.drawText("小计", left, top + 15);

    left = 30;
    top = 100;

    canUtil.drawLine(left, top, 750 - left, top, 1, 'black');
    var arr = [
      { name: "养老", base: '2820', bp: '14%', bm: '394.70', pp: '8%', pm: '225.54', total: '620.24' },
      { name: "医疗", base: '2820', bp: '10.5%', bm: '296.02', pp: '2%', pm: '56.39', total: '352.41' },
      { name: "工伤", base: '2820', bp: '0.3%', bm: '8.46', pp: '-', pm: '-', total: '8.46' },
      { name: "失业", base: '2820', bp: '0.5%', bm: '14.10', pp: '0.5%', pm: '14.10', total: '28.19' },
      { name: "生育", base: '2820', bp: '1.2%', bm: '33.83', pp: '-', pm: '-', total: '33.83' },
      { name: "大额医疗", base: '-', bp: '-', bm: '-', pp: '-', pm: '-', total: '-' },
      { name: "残保金", base: '-', bp: '-', bm: '70.48', pp: '-', pm: '-', total: '70.48' }
    ];

    canUtil.fontStyle("normal normal 13px arial");

    for(var i in arr)
    {
      left = 30
      top = top + 70;
      var item = arr[i];
      var textWidth = 0;

      if (item.name.length == 4)
      {
        canUtil.fontStyle("normal normal 12px arial");
      }
      textWidth = canUtil.measureText(item.name);
      left = left + (110 - textWidth)/2;
      canUtil.drawText(item.name, left, top);
      canUtil.fontStyle("normal normal 14px arial");

      left = 125
      textWidth = canUtil.measureText(item.base);
      left = left + (110 - textWidth)/2;
      canUtil.drawText(item.base, left , top);

      left = 260;
      textWidth = canUtil.measureText(item.bp);
      left = left + (50 - textWidth)/2;
      canUtil.drawText(item.bp, left, top);

      left = 360;
      textWidth = canUtil.measureText(item.bm);
      left = left + (50 - textWidth)/2;
      canUtil.drawText(item.bm, left, top);

      left = 460;
      textWidth = canUtil.measureText(item.pp);
      left = left + (50 - textWidth)/2;
      canUtil.drawText(item.pp, left, top);

      left = 540;
      textWidth = canUtil.measureText(item.pm);
      left = left + (50 - textWidth)/2;
      canUtil.drawText(item.pm, left, top);

      left = 610;
      textWidth = canUtil.measureText(item.total);
      left = left + (100 - textWidth)/2;
      canUtil.drawText(item.total, left, top);

      left = 30;
      top = top + 50;
      canUtil.drawLine(left, top, 720, top, 1);
    }

    left = 40;
    top = top + 70;
    canUtil.fontStyle("normal bold 15px arial");
    canUtil.drawText("社保合计", left, top);

    left = left + 230;
    canUtil.drawText("817.58", left, top);

    left = left + 200;
    canUtil.drawText("296.02", left, top);

    left = left + 125;
    canUtil.drawText("1113.60", left, top);

    left = 30;
    top = top + 60;
    canUtil.drawLine(left, top ,720, top, 1)

    left = 40;
    top = top + 70;
    canUtil.drawText("公积金(最低基数)", left ,top);

    left = left + 560;
    canUtil.drawText('482.40', left, top);

    left = 30;
    top = top + 60;
    canUtil.drawLine(left, top, 720, top, 1)

    left = 40;
    top = top + 70;
    canUtil.drawText("社保公积金合计", left, top);

    left = left + 560;
    canUtil.drawText("1596.00", left, top);

    var height = top + 60;
    left = 30;
    top = 0;
    canUtil.drawRect(left, top, 750 - 2 * left, height, 1, "black")

    //重新设置canvas高度
    this.setData({
      canvasHeight:height
    })

    ctx.draw()
  },

  onImageTap:function(e)
  {
    var src = util.getEventData(e, 'src');

    this.setData({
      showImg:true,
      imgSrc:src
    })
  }
})