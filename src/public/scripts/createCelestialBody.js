const createjs = require('createjs-collection')

module.exports = function createCelestialBody (canvasSize, selection) {
  const allBodies = drawAllBodies(canvasSize, selection)
  return allBodies
}

function drawAllBodies (canvasSize, selection) {
  return selection.map(function (bodyInfo) {
    return createACelestialBody(canvasSize, maxBodySize(selection), bodyInfo)
  }).sort(compareDataSize)
}

function createACelestialBody (canvasSize, maxSize, bodyInfo) {
  const body = new createjs.Shape()
  body.graphics.beginFill(bodyInfo.color).drawCircle(0, 0, bodyInfo.size / 2)
  // On a larger project I would make a new class because I'm adding new members here
  body.solarSize = bodyInfo.size
  body.calcSizeFromScale = function (scale) {
    return scale
  }
  if (bodyInfo.image) {
    body.imageRef = bodyInfo.image
  }
  return body
}

function maxBodySize (bodies) {
  return bodies.reduce(function (prev, elem) {
    return (prev > elem.size) ? prev : elem.size
  }, 0)
}

function compareDataSize (a, b) {
  return a.solarSize - b.solarSize
}
