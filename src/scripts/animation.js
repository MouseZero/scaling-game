const createjs = require('createjs-collection')
const scaler = require('./scaler')
const SHRINK_TIME = 3000
const WAIT_TIME = 1000
const ZOOM_TIME = 4000

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
    shape.visible = true
    createjs.Tween.get(shape)
      .to({
        x: 500,
        y: 500
      }, ZOOM_TIME, createjs.Ease.getPowOut(3))
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
      }, SHRINK_TIME, createjs.Ease.getPowOut(5))
  })
}

module.exports.sizeCompareAnimation = sizeCompareAnimation
