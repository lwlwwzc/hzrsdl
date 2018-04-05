var sysInfo = wx.getSystemInfoSync();

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 深拷贝
 */
function deepClone(initalObj) {
  var obj = null;
  try {
    if (typeof initalObj === 'object') {
      obj = JSON.parse(JSON.stringify(initalObj));
    }

    return obj;
  }
  catch (e) {
    return null;
  }
}

/**
 * 获取屏幕大小
 */
function screenSize(hasTab = false) {

  if (hasTab) {
    return { 'width': px2rpx(sysInfo.windowWidth), 'height': px2rpx(sysInfo.windowHeight + 48) }
  }
  return { 'width': px2rpx(sysInfo.windowWidth), 'height': px2rpx(sysInfo.windowHeight) }
}

/**
 * px转rpx
 */
function px2rpx(px) {

  var rpx = 750 / sysInfo.screenWidth * px;
  return rpx;
}

/**
 * rpx转px
 */
function rpx2px(rpx) {

  var px = sysInfo.screenWidth / 750 * rpx;
  return px;
}

/**
 * 获取用户信息
 */
function getUserInfo(cb) {
  wx.login({
    withCredentials: false,
    success: function () {
      wx.getUserInfo({
        success: function (res) {
          typeof cb == "function" && cb(res.userInfo)
        }
      })
    },
    fail: function (e) {
      console.log('微信login失败:' + e)
    }
  })
}

/**
 * 获取事件参数值
 */
function getEventData(event, name) {

  if (event && name) {
    return event.currentTarget.dataset[name];
  }

  return null;
}

module.exports = {
  formatTime: formatTime,
  deepClone: deepClone,
  screenSize: screenSize,
  getUserInfo: getUserInfo,
  getEventData: getEventData,
  px2rpx: px2rpx,
  rpx2px: rpx2px
}