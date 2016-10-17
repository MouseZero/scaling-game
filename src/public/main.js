const createMenu = require('./scripts/menu')
const newScene = require('./scripts/gameScene').newScene
const celestialBodyData = require('./data/data')
const changeZoom = require('./scripts/animation').changeZoom
const curry = require('lodash.curry')
const createjs = require('createjs-collection')

// entry point of the App
window.init = function () {
  const stage = new createjs.Stage('game')
  const canvasSize = 1000
  const zoom = curry(changeZoom)(stage, canvasSize)

  // -- Menu --
  createMenu(celestialBodyData, zoom)

  // -- Graphics Display --
  newScene(stage, canvasSize, celestialBodyData, 2)
}
