const scaler = require('./scaler')

module.exports = function(selection, canvasSize){
  return selection.map(function (elem) {
    return createACelestialBody(elem, maxBodySize(selection), canvasSize)
  }).sort(compareDataSize)
}

function createACelestialBody(bodyInfo, maxSize, canvasSize) {
  const body = new createjs.Shape()
  const size = scaler.solarSizeCompare(bodyInfo.size, maxSize, canvasSize)
  body.graphics.beginFill(bodyInfo.color).drawCircle(0, 0, size)
  body.solarSize = bodyInfo.size
  return body
}

function maxBodySize(bodies) {
  return bodies.reduce(function (prev, elem) {
    return (prev > elem.size) ? prev : elem.size
  }, 0)
}

function compareDataSize(a, b){
  return b.solarSize - a.solarSize
}
