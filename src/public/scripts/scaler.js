function solarMultiplier (canvasSize, largestSize) {
  return canvasSize / largestSize
}

function scaleOf (targetSize, compareSize) {
  return targetSize / compareSize
}

module.exports.solarMultiplier = solarMultiplier
module.exports.scaleOf = scaleOf
