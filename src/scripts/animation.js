const createjs = require('createjs-collection')

function fallIn (shape) {
  createjs.Tween.get(shape, { loop: false })
    .to({ y: 500 }, 2000, createjs.Ease.getPowInOut(4))
}

module.exports.fallIn = fallIn
