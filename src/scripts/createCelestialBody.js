const scaler = require('./scaler')

module.exports = function (bodyInfo, maxSize, canvasSize) {
  const body = new createjs.Shape()
  const size = scaler.solarSizeCompare(bodyInfo.size, maxSize, canvasSize)
  body.graphics.beginFill(bodyInfo.color).drawCircle(0, 0, size)
  body.solarSize = bodyInfo.size
  return body
}
