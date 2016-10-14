const MARGIN = 0.1
const MARGIN_INVERT = 1 - MARGIN

function solarSizeCompare (currentBodySize, largestBodySize, canvasSize) {
  const diff = currentBodySize / largestBodySize
  const largestSize = (canvasSize / 2) * MARGIN_INVERT
  return diff * largestSize
}

function bodyHomePosition (currentBodySize, largestBodySize, canvasSize) {
  const sizeOnCanvas = solarSizeCompare(currentBodySize, largestBodySize, canvasSize)
  const x = (canvasSize * (1 - MARGIN_INVERT)) + sizeOnCanvas
  const y = (canvasSize - sizeOnCanvas) - (canvasSize * MARGIN) / 2
  return { x, y }
}

module.exports.solarSizeCompare = solarSizeCompare
module.exports.bodyHomePosition = bodyHomePosition
