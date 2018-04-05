var util = require('./util.js')
export class CanvasUtil
{

  constructor() {
    this.context = null;
  }

  init(context)
  {
    this.context = context;
  }

  drawLine(sx, sy, tx, ty, w, color = "black")
  {
    var startX = util.rpx2px(sx);
    var startY = util.rpx2px(sy);
    var toX = util.rpx2px(tx);
    var toY = util.rpx2px(ty);
    var width = util.rpx2px(w);

    this.context.setStrokeStyle(color);
    this.context.beginPath();
    this.context.setLineWidth(width);
    this.context.moveTo(startX, startY);
    this.context.lineTo(toX, toY);
    this.context.stroke();
    this.context.closePath();
  }

  drawRect(x, y, w, h, wLine, color = "black")
  {
    var left = util.rpx2px(x);
    var top = util.rpx2px(y);
    var width = util.rpx2px(w);
    var height = util.rpx2px(h);
    var lineWidth = util.rpx2px(wLine);

    this.context.setStrokeStyle(color);
    this.context.setLineWidth(lineWidth);

    this.context.strokeRect(left, top, width, height);
  }

  drawText(text, x, y, color="black")
  {
    var left = util.rpx2px(x);
    var top = util.rpx2px(y);
    this.context.setFillStyle(color);
    this.context.fillText(text, left, top);
  }

  fontStyle(style)
  {
    this.context.font = style;
  }

  getFontStyle()
  {
    return this.context.font;
  }

  measureText(text)
  {
    var metrics = this.context.measureText(text);
    return util.px2rpx(metrics.width);
  }

}