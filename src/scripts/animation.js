const createjs = require('createjs-collection')
const scaler = require('./scaler')
const SHRINK_TIME = 2000

function sizeCompareAnimation (stage, canvasSize, shapes) {
  shapes.reduce(function (promise, shape, i, all) {
    return promise.then(function () {
      const scale = scaler.solarMultiplier(canvasSize, shape.solarSize)
      changeZoom(stage, canvasSize, scale)
      return introAnimation(shape, scale)
    })
  }, Promise.resolve())
}

function introAnimation (shape, currentScale) {
    return new Promise(function (resolve, reject) {
      const animation = createjs.Tween.get(shape, { loop: false })
      .to({
        scaleX: currentScale,
        scaleY: currentScale,
        x: currentScale,
        y: currentScale,
        visible: true
      }, 0)
      .to({
        scaleX: currentScale,
        scaleY: currentScale,
        x: 500,
        y: 500
      }, 3000, createjs.Ease.getPowOut(5))
      .wait(1000)
      .call(resolve, [], this)
  })
}

function changeZoom (stage, canvasSize, scale) {
  stage.children.forEach(function (x) {
    createjs.Tween.get(x, {loop: false})
      .to({
        scaleX: scale,
        scaleY: scale
      }, 2000, createjs.Ease.getPowOut(5))
  })
}

module.exports.sizeCompareAnimation = sizeCompareAnimation
