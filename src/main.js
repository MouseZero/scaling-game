const createMenu = require('./scripts/menu')
const newScene = require('./scripts/gameScene').newScene
const celestialBodyData = require('./data/data')

// entry point of the App
window.init = function () {
  // -- Menu --
  createMenu(celestialBodyData, newScene)

  // -- Graphics Display --
  newScene(celestialBodyData, 2)
}
