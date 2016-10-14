const createjs = require('createjs-collection')

function fallIn (shape) {
  createjs.Tween.get(shape, { loop: false })
    .to({ x: shape.homePos.x, y: shape.homePos.y }, 2000, createjs.Ease.getPowInOut(4))
}

module.exports.fallIn = fallIn
