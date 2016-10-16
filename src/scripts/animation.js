const createjs = require('createjs-collection')
const scaler = require('./scaler')
const ZOOM_TIME = 3000
const WAIT_TIME = 500
const SLIDE_TIME = 3000

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
    shape.x = -(currentScale * shape.solarSize * 2)
    shape.y = -(currentScale * shape.solarSize * 0.05)
    createjs.Tween.get(shape)
      .to({
        x: 500,
        y: 500,
        alpha: 1
      }, SLIDE_TIME, createjs.Ease.getPowOut(6))
      .wait(WAIT_TIME)
      .call(resolve, [], this)
  })
}

function changeZoom (stage, canvasSize, scale) {
  stage.children.forEach(function (x) {
    createjs.Tween.get(x)
      .to({
        scaleX: scale,
        scaleY: scale
      }, ZOOM_TIME, createjs.Ease.getPowOut(5))
  })
}

module.exports.sizeCompareAnimation = sizeCompareAnimation
