module.exports = function (bodyInfo) {
  const body = new createjs.Shape()
  body.graphics.beginFill(bodyInfo.color).drawCircle(0, 0, 50)
  body.solarSize = bodyInfo.size
  return body
}
