function solarSizeCompare (currentBodySize, largestBodySize, canvusSize) {
  const diff = currentBodySize / largestBodySize
  const largestSize = (canvusSize / 2) * 0.9
  return diff * largestSize
}

module.exports.solarSizeCompare = solarSizeCompare
