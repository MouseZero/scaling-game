const createjs = require('createjs-collection')
const ZOOM_TIME = 2000
const WAIT_TIME = 500

function sizeCompareAnimation (stage, canvasSize, shapes) {
  shapes.reduce(function (promise, shape, i, all) {
    return promise.then(function () {
      return changeZoom(stage, canvasSize, shape.solarSize)
    })
  }, Promise.resolve())
}

function changeZoom (stage, canvasSize, scale) {
  return new Promise(function (resolve, reject) {
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
          createjs.Ease.getPowOut(5))
          .wait(WAIT_TIME)
          .call(resolve, [], this)
      }
    })
  })
}

module.exports.sizeCompareAnimation = sizeCompareAnimation
module.exports.changeZoom = changeZoom
