const createjs = require('createjs-collection')
const scaler = require('./scaler')

function sizeCompareAnimation (canvasSize, shapes) {
  const mult2 = scaler.solarMultiplier(canvasSize, shapes[1].solarSize)
  const mult3 = scaler.solarMultiplier(canvasSize, shapes[2].solarSize)

  startAnimation(canvasSize, shapes)
    .then(function () {
      return introAnimation(shapes[1], mult2, mult3)
    }).then( function () {
      console.log('done')
    })

    Promise.resolve()
}

function startAnimation (canvasSize, shapes) {
  return new Promise(function (resolve, reject) {
    const multipler = scaler.solarMultiplier(canvasSize, shapes[0].solarSize)
    shapes[0].scaleX = multipler
    shapes[0].scaleY = multipler
    const mult2 = scaler.solarMultiplier(canvasSize, shapes[1].solarSize)

    createjs.Tween.get(shapes[0], { loop: false })
      .to({x: 500, y: 500}, 2000, createjs.Ease.getPowInOut(4))
      .wait(1000)
      .call(resolve, [], this)
      .to({
        scaleX: mult2,
        scaleY: mult2
      }, 3000, createjs.Ease.getPowOut(4))
  })

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
