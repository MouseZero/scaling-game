const createjs = require('createjs-collection')
const scaler = require('./scaler')

function sizeCompareAnimation (canvasSize, shapes) {
  const multipler = scaler.solarMultiplier(canvasSize, shapes[0].solarSize)
  shapes[0].scaleX = multipler
  shapes[0].scaleY = multipler

  createjs.Tween.get(shapes[0], { loop: false })
    .to({x: 500, y: 500}, 2000, createjs.Ease.getPowInOut(4))
}

module.exports.sizeCompareAnimation = sizeCompareAnimation
