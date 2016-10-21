const createjs = require('createjs-collection')
const ZOOM_TIME = 1700
var lastZoomScale

function introAnimation (stage, canvasSize, shapes) {
  lastZoomScale = shapes[0].solarSize
  changeZoom(stage, canvasSize, shapes[6].solarSize)
}

// TODO look into deleting options
function changeZoom (stage, canvasSize, scale, options) {
  options = options || {}
  options.zoomTime = numberOfBodiesBetween(lastZoomScale, scale, stage) * ZOOM_TIME
  if (lastZoomScale > scale) {
    options.ease = createjs.Ease.getPowIn(8)
  } else {
    options.ease = createjs.Ease.getPowOut(8)
  }
  animateEachBody(stage, canvasSize, scale, options)
  lastZoomScale = scale
}

function animateEachBody (stage, canvasSize, scale, options) {
  stage.children.forEach(function (x) {
    const futureScale = x.calcScaleFromLargestBody(scale)
    if (x.calcScaleFromLargestBody) {
      createjs.Tween.get(x)
        .to({
          scaleX: futureScale,
          scaleY: futureScale,
          x: x.cordsFromCenter(futureScale),
          y: x.cordsFromCenter(futureScale)
        }, options.zoomTime,
        options.ease)
    }
  })
}

function numberOfBodiesBetween (scale1, scale2, stage) {
  const largerScale = Math.max(scale1, scale2)
  const smallerScale = Math.min(scale1, scale2)
  return stage.children.reduce(function (p, x) {
    if (x.solarSize <= largerScale && x.solarSize >= smallerScale) return p + 1
    return p
  }, 0)
}

module.exports.introAnimation = introAnimation
module.exports.changeZoom = changeZoom
