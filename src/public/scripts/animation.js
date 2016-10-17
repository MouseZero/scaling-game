const createjs = require('createjs-collection')
const ZOOM_TIME = 2000
const WAIT_TIME = 500

function introAnimation (stage, canvasSize, shapes) {
  changeZoom(stage, canvasSize, shapes[6].solarSize)
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
    }
  })
}

module.exports.introAnimation = introAnimation
module.exports.changeZoom = changeZoom
