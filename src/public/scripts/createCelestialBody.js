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
  let body = new createjs.Shape()
  if (bodyInfo.image) {
    const img = new window.Image()
    img.src = bodyInfo.image
    img.addEventListener('load', function () {
      body.graphics.beginBitmapFill(img, 'no-repeat').drawRect(0, 0, canvasSize, canvasSize)
    })
  } else {
    body.graphics.beginFill(bodyInfo.color).drawCircle(0, 0, canvasSize / 2)
  }
  // Should make a new class to make it clear I'm adding abilities
  extendBodiesCapabilities(canvasSize, bodyInfo, body)
  return body
}

function extendBodiesCapabilities (canvasSize, bodyInfo, body) {
  const halfCanvas = canvasSize / 2
  if (bodyInfo.image) {
    body.imageRef = bodyInfo.image
  }
  body.cordsFromCenter = function (xOrY) {
    console.log(`xOrY: ${xOrY} isBasedOnImage: ${body.scaleX}`)
    return (body.imageRef) ? xOrY - halfCanvas : xOrY
  }
  body.solarSize = bodyInfo.size
  body.calcScaleFromLargestBody = function (bodyToScaleTo) {
    return body.solarSize / bodyToScaleTo
  }
}

function maxBodySize (bodies) {
  return bodies.reduce(function (prev, elem) {
    return (prev > elem.size) ? prev : elem.size
  }, 0)
}

function compareDataSize (a, b) {
  return a.solarSize - b.solarSize
}
