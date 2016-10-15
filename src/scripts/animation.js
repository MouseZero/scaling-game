const createjs = require('createjs-collection')
const scaler = require('./scaler')

function fallIn (shape) {
  createjs.Tween.get(shape, { loop: false })
    .to({ x: shape.homePos.x, y: shape.homePos.y }, 2000, createjs.Ease.getPowInOut(4))
}

function sizeCompareAnimation (canvasSize, shapes) {
  // Old animation
  shapes.forEach(e => fallIn(e))
  shapes.forEach(e => console.log(e.solarSize))

  // New Animation
  const solarSizes = shapes.map(x => x.solarSize)
  const sizes = scaler.sizeForAllBodies(canvasSize, solarSizes)
  const homePos = getHomePositions(canvasSize, sizes)

  console.log(sizes)
  console.log(homePos)

  createjs.Tween.get(shapes[0], { loop: false })
    .to(homePos[0][0], 2000, createjs.Ease.getPowInOut(4))
}

function getHomePositions (canvasSize, sizes) {
  return sizes.reverse().reduce((prev, _, i, all) => {
    const subSet = all.slice(0, i + 1)
    const homePos = scaler.homePositionForAllBodies(canvasSize, subSet)
    return [...prev, homePos]
  }, [])
}

module.exports.sizeCompareAnimation = sizeCompareAnimation
