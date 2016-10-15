const scaler = require('./scaler')
const createjs = require('createjs-collection')

module.exports = function createCelestialBody (canvasSize, selection) {
  return selection.map(function (elem) {
    return createACelestialBody(canvasSize, maxBodySize(selection), elem)
  }).sort(compareDataSize)
}

function createACelestialBody (canvasSize, maxSize, bodyInfo) {
  const body = new createjs.Shape()
  const size = scaler.solarSizeCompare(canvasSize, maxSize, bodyInfo.size)
  body.graphics.beginFill(bodyInfo.color).drawCircle(0, 0, size)
  body.solarSize = bodyInfo.size
  body.homePos = scaler.bodyHomePosition(canvasSize, maxSize, bodyInfo.size)
  return body
}

function maxBodySize (bodies) {
  return bodies.reduce(function (prev, elem) {
    return (prev > elem.size) ? prev : elem.size
  }, 0)
}

function compareDataSize (a, b) {
  return b.solarSize - a.solarSize
}
