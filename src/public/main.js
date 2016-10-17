const createMenu = require('./scripts/menu')
const newScene = require('./scripts/gameScene').newScene
const celestialBodyData = require('./data/data')
const createjs = require('createjs-collection')

// entry point of the App
window.init = function () {
  const stage = new createjs.Stage('game')
  // -- Menu --
  createMenu(celestialBodyData, newScene)

  // -- Graphics Display --
  newScene(stage, celestialBodyData, 2)
}
