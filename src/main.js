const createMenu = require('./scripts/menu')
const newScene = require('./scripts/gameScene').newScene
const celestialBodyData = require('./data/data')

window.init = function () {
  // -- Menu --
  const s = require('./scripts/scaler')
  s.sizeForAllBodies(1000, [5, 6])
  createMenu(celestialBodyData, newScene)

  // -- Graphics Display --
  newScene(celestialBodyData, 0)
}
