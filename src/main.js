const createMenu = require('./scripts/menu')
const newScene = require('./scripts/gameScene').newScene
const celestialBodyData = require('./data/data')

window.init = function () {
  // -- Menu --
  createMenu(celestialBodyData, newScene)

  // -- Graphics Display --
  newScene(celestialBodyData, 0)
}
