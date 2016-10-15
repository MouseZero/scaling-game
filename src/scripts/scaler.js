const curry = require('lodash.curry')
const MARGIN = 0.1
const MARGIN_INVERT = 1 - MARGIN

function solarSizeCompare (canvasSize, largestBodySize, currentBodySize) {
  return (currentBodySize * scale(canvasSize, largestBodySize))
}

function scale (canvasSize, largestSize) {
  return (((canvasSize) / largestSize) * 0.5) * MARGIN_INVERT
}

function sizeForAllBodies (canvasSize, solarSizes) {
  const scaleNum = scale(canvasSize, Math.max(...solarSizes))
  return solarSizes.map(x => x * scaleNum)
}

function bodyHomePosition (canvasSize, largestBodySize, currentBodySize) {
  const sizeOnCanvas = solarSizeCompare(canvasSize, largestBodySize, currentBodySize)
  const x = (canvasSize * (1 - MARGIN_INVERT)) + sizeOnCanvas
  const y = (canvasSize - sizeOnCanvas) - (canvasSize * MARGIN) / 2
  return { x, y }
}

function homePositionForAllBodies (canvasSize, bodySizes) {
  const findPos = curry(bodyHomePosition(canvasSize, Math.max(bodySizes)))
  return bodySizes.map(x => findPos(x))
}

module.exports.solarSizeCompare = solarSizeCompare
module.exports.bodyHomePosition = bodyHomePosition
module.exports.sizeForAllBodies = sizeForAllBodies
module.exports.homePositionForAllBodies = homePositionForAllBodies
