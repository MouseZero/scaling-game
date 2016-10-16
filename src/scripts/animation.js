const createjs = require('createjs-collection')
const scaler = require('./scaler')

function sizeCompareAnimation (canvasSize, shapes) {

  const mult1 = scaler.solarMultiplier(canvasSize, shapes[0].solarSize)
  const mult2 = scaler.solarMultiplier(canvasSize, shapes[1].solarSize)
  const mult3 = scaler.solarMultiplier(canvasSize, shapes[2].solarSize)

  const small = shapes.slice(0, 1)

  shapes.reduce(function (promise, shape, i, all) {
    return promise.then(function () {
      const scale = scaler.solarMultiplier(canvasSize, shape.solarSize)
      let scale2 = null
      if(all[i + 1]){
        scale2 = scaler.solarMultiplier(canvasSize, all[i + 1].solarSize)
      }
      return introAnimation(shape, scale, scale2)
    })
  }, Promise.resolve())
}

function introAnimation (shape, currentScale, nextScale) {
    return new Promise(function (resolve, reject) {
      const animation = createjs.Tween.get(shape, { loop: false })
      .to({
        scaleX: currentScale,
        scaleY: currentScale,
        x: currentScale,
        y: currentScale
      }, 0)
      .to({
        scaleX: currentScale,
        scaleY: currentScale,
        x: 500,
        y: 500
      }, 3000, createjs.Ease.getPowOut(5))
      .wait(1000)
      .call(resolve, [], this)

      if(nextScale){
        animation.to({
          scaleX: nextScale,
          scaleY: nextScale
        }, 2000, createjs.Ease.getPowOut(5))
      }
  })
}

module.exports.sizeCompareAnimation = sizeCompareAnimation
