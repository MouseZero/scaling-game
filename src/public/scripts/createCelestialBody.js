const createjs = require('createjs-collection')
const scaler = require('./scaler')

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
  console.log(`Canvas Size if ${canvasSize}`)
  body.graphics.beginFill(bodyInfo.color).drawCircle(0, 0, canvasSize / 2)
  // Should make a new class to make it clear I'm adding abilities
  body.solarSize = bodyInfo.size
  body.calcScaleFromLargestBody = function (bodyToScaleTo) {
    return body.solarSize / bodyToScaleTo
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
