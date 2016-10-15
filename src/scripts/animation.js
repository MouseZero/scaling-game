const createjs = require('createjs-collection')
const scaler = require('./scaler')

function fallIn (shape) {
  createjs.Tween.get(shape, { loop: false })
    .to({ x: shape.homePos.x, y: shape.homePos.y }, 2000, createjs.Ease.getPowInOut(4))
}

function sizeCompareAnimation (canvasSize, shapes) {
  // Old animation
  // shapes.forEach(e => fallIn(e))

  // New Animation
  const solarSizes = shapes.map(x => x.solarSize)
  const sizes = scaler.sizeForAllBodies(canvasSize, solarSizes)
  const homePos = getHomePositions(canvasSize, sizes)

  // const scale = scaler.growthScale(canvasSize, sizes[0])
  const multipler = scaler.solarMultiplier(canvasSize, shapes[0].solarSize)
  shapes[0].scaleX = multipler
  shapes[0].scaleY = multipler


  createjs.Tween.get(shapes[0], { loop: false })
    .to(homePos[0][0], 2000, createjs.Ease.getPowInOut(4))
}

function getHomePositions (canvasSize, sizes) {
  return sizes.reduce((prev, _, i, all) => {
    const subSet = all.slice(0, i + 1)
    const homePos = scaler.homePositionForAllBodies(canvasSize, subSet)
    return [...prev, homePos]
  }, [])
}

module.exports.sizeCompareAnimation = sizeCompareAnimation
