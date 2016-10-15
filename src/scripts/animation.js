const createjs = require('createjs-collection')
const scaler = require('./scaler')

function sizeCompareAnimation (canvasSize, shapes) {
  const mult2 = scaler.solarMultiplier(canvasSize, shapes[1].solarSize)

  startAnimation(canvasSize, shapes)
    .then(function () {
      introAnimation(shapes[1], mult2)
    })
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

function introAnimation (shape, currentScale) {
    createjs.Tween.get(shape, { loop: false })
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
    }, 6000, createjs.Ease.getPowOut(10))
    .wait(2000)
    .call(currentScale, [], this)
}

module.exports.sizeCompareAnimation = sizeCompareAnimation
