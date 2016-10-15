const scaler = require('./scaler')
const createjs = require('createjs-collection')

module.exports = function createCelestialBody (selection, canvasSize) {
  return selection.map(function (elem) {
    return createACelestialBody(elem, maxBodySize(selection), canvasSize)
  }).sort(compareDataSize)
}

function createACelestialBody (bodyInfo, maxSize, canvasSize) {
  const body = new createjs.Shape()
  const size = scaler.solarSizeCompare(bodyInfo.size, maxSize, canvasSize)
  body.graphics.beginFill(bodyInfo.color).drawCircle(0, 0, size)
  body.solarSize = bodyInfo.size
  body.homePos = scaler.bodyHomePosition(bodyInfo.size, maxSize, canvasSize)
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
