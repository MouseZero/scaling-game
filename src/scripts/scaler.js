const MARGIN = 0.1
const MARGIN_INVERT = 1 - MARGIN

function solarSizeCompare (canvasSize, largestBodySize, currentBodySize) {
  return (currentBodySize * scale(largestBodySize, canvasSize))
}

function scale (largestSize, canvasSize) {
  return (((canvasSize) / largestSize) * 0.5) * MARGIN_INVERT
}

function scaleAllBodies (bodies, canvasSize) {

}

function bodyHomePosition (canvasSize, largestBodySize, currentBodySize) {
  const sizeOnCanvas = solarSizeCompare(canvasSize, largestBodySize, currentBodySize)
  const x = (canvasSize * (1 - MARGIN_INVERT)) + sizeOnCanvas
  const y = (canvasSize - sizeOnCanvas) - (canvasSize * MARGIN) / 2
  return { x, y }
}

module.exports.solarSizeCompare = solarSizeCompare
module.exports.bodyHomePosition = bodyHomePosition
