const createjs = require('createjs-collection')
const scaler = require('./scaler')

function fallIn (shape) {
  createjs.Tween.get(shape, { loop: false })
    .to({ x: shape.homePos.x, y: shape.homePos.y }, 2000, createjs.Ease.getPowInOut(4))
}

function sizeCompareAnimation (shapes) {
  shapes.forEach(e => fallIn(e))

  const solarSizes = shapes.map(x => x.solarSize)
  const sizes = scaler.sizeForAllBodies(1000, solarSizes)
  sizes.forEach(x => { console.log(x) })
}

module.exports.sizeCompareAnimation = sizeCompareAnimation
