const createMenu = require('./scripts/menu')
const canvasDisplay = require('./scripts/gameScene').canvasDisplay
const gameState = {
  compareSceneRunning: false
}

window.init = function () {
  const celestialBodyData = require('./data/data')
  createMenu(celestialBodyData)
  canvasDisplay(celestialBodyData)
}
