const createjs = require('createjs-collection')
const scaler = require('./scaler')

function fallIn (shape) {
  createjs.Tween.get(shape, { loop: false })
    .to({ x: shape.homePos.x, y: shape.homePos.y }, 2000, createjs.Ease.getPowInOut(4))
}

function sizeCompareAnimation (shapes) {
  // Old animation
  shapes.forEach(e => fallIn(e))

  // New Animation
  const solarSizes = shapes.map(x => x.solarSize)
  // TODO use a var for canvasSize
  const sizes = scaler.sizeForAllBodies(1000, solarSizes)
  const homePos = getHomePositions(sizes)
  // TODO still need to test if these are the right homes for the plants
  console.log(sizes)
  console.log(homePos)
}

function getHomePositions (sizes) {
  return sizes.reverse().reduce((prev, _, i, all) => {
    // TODO use a var for canvasSize
    const subSet = all.slice(0, i + 1)
    const homePos = scaler.homePositionForAllBodies(1000, subSet)
    return [...prev, homePos]
  }, [])
}

module.exports.sizeCompareAnimation = sizeCompareAnimation
