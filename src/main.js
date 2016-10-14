const createCelestialBody = require('./scripts/createCelestialBody')
const scaler = require('./scripts/scaler')
const CANVAS_SIZE = 1000
const createMenu = require('./scripts/menu')

window.init = function () {
  const celestialBodyData = require('./data/data')
  createMenu(celestialBodyData)
  canvasDisplay(celestialBodyData)
}

function canvasDisplay(celestialBodyData){
  const bodies = createBodies(celestialBodyData)
  const stage = new createjs.Stage('game')
  placeBodies(stage, bodies)
  stage.update()
}

function createBodies(celestialBodyData){
  const selection = [
    celestialBodyData.rulers[1],
    celestialBodyData.rulers[0],
    celestialBodyData.showcase[3]
  ]
  return createCelestialBody(selection, CANVAS_SIZE)
}

function placeBodies(stage, bodies){
  bodies.forEach(function (elem){
    elem.x = 500
    elem.y = 500
    stage.addChild(elem)
  })
}
