const createjs = require('createjs-collection')
const ZOOM_TIME = 2000
const WAIT_TIME = 500

function sizeCompareAnimation (stage, canvasSize, shapes) {
  shapes.reduce(function (promise, shape, i, all) {
    if (i < 7) {
      return promise.then(function () {
        return changeZoom(stage, canvasSize, shape.solarSize, {
          zoomTime: 400,
          waitTime: 1,
          ease: createjs.Ease.linear
        })
      })
    }
  }, Promise.resolve())
}

/*
options { <--- optional
  zoomTime: number,
  waitTime: number,
  ease: createjs.Ease (Object from TWEENJS)
}
*/
function changeZoom (stage, canvasSize, scale, options) {
  options = options || {}
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
          }, options.zoomTime || ZOOM_TIME,
          options.ease || createjs.Ease.getPowOut(5))
          .wait(options.waitTime || WAIT_TIME)
          .call(resolve, [], this)
      }
    })
  })
}

module.exports.sizeCompareAnimation = sizeCompareAnimation
module.exports.changeZoom = changeZoom
