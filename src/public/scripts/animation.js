const createjs = require('createjs-collection')
const scaler = require('./scaler')
const ZOOM_TIME = 3000
const WAIT_TIME = 500
const SLIDE_TIME = 3000

function sizeCompareAnimation (stage, canvasSize, shapes) {
  shapes.reduce(function (promise, shape, i, all) {
    return promise.then(function () {
      changeZoom(stage, canvasSize, shape.solarSize)
      return introAnimation(shape, shape.solarSize)
    })
  }, Promise.resolve())
}

function introAnimation (shape, currentScale) {
  return new Promise(function (resolve, reject) {
    shape.x = -(shape.calcScaleFromLargestBody(currentScale) * shape.solarSize * 2)
    shape.y = -(shape.calcScaleFromLargestBody(currentScale) * shape.solarSize * 0.05)
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

function changeZoom (stage, canvasSize, bodyToScaleTo) {
  stage.children.forEach(function (x) {
    if (x.calcScaleFromLargestBody) {
      createjs.Tween.get(x)
        .to({
          scaleX: x.calcScaleFromLargestBody(bodyToScaleTo),
          scaleY: x.calcScaleFromLargestBody(bodyToScaleTo)
        }, ZOOM_TIME,
        createjs.Ease.getPowOut(5)
      )
    }
  })
}

module.exports.sizeCompareAnimation = sizeCompareAnimation
