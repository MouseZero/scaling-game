const createjs = require('createjs-collection')
const ZOOM_TIME = 3000
const WAIT_TIME = 500
const SLIDE_TIME = 3000

function sizeCompareAnimation (stage, canvasSize, shapes) {
  shapes.reduce(function (promise, shape, i, all) {
    return promise.then(function () {
      changeZoom(stage, canvasSize, shape.solarSize)
      return introAnimation(shape)
    })
  }, Promise.resolve())
}

function introAnimation (shape) {
  return new Promise(function (resolve, reject) {
    const coreDistanceToStart = shape.calcScaleFromLargestBody(shape.solarSize) * shape.solarSize
    shape.x = shape.calcScaleFromLargestBody(-(coreDistanceToStart * 2))
    shape.y = shape.calcScaleFromLargestBody(-(coreDistanceToStart * 0.05))
    createjs.Tween.get(shape)
      .to({
        x: shape.cordsFromCenter(500),
        y: shape.cordsFromCenter(500),
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
          scaleY: x.calcScaleFromLargestBody(bodyToScaleTo),
          x: x.cordsFromCenter(500),
          y: x.cordsFromCenter(500)
        }, ZOOM_TIME,
        createjs.Ease.getPowOut(5)
      )
    }
  })
}

module.exports.sizeCompareAnimation = sizeCompareAnimation
