const createjs = require('createjs-collection')
const ZOOM_TIME = 3000
const WAIT_TIME = 500
const FADE_IN_TIME = 3000

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
    createjs.Tween.get(shape)
      .to({
        alpha: 1
      }, FADE_IN_TIME, createjs.Ease.getPowOut(6))
      .wait(WAIT_TIME)
      .call(resolve, [], this)
  })
}

function changeZoom (stage, canvasSize, scale) {
  stage.children.forEach(function (x) {
    const futureScale = x.calcScaleFromLargestBody(scale)
    if (x.calcScaleFromLargestBody) {
      createjs.Tween.get(x)
        .to({
          scaleX: futureScale,
          scaleY: futureScale,
          x: x.cordsFromCenter(500, futureScale),
          y: x.cordsFromCenter(500, futureScale)
        }, ZOOM_TIME,
        createjs.Ease.getPowOut(5)
      )
    }
  })
}

module.exports.sizeCompareAnimation = sizeCompareAnimation
module.exports.changeZoom = changeZoom
