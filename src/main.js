const createCelestialBody = require('./scripts/createCelestialBody')
const scaler = require('./scripts/scaler')
const CANVAS_SIZE = 1000

window.init = function () {
  const bodies = createBodies()
  const stage = new createjs.Stage('game')
  placeBodies(stage, bodies)
  stage.update()
}

function createBodies(){
  const data = require('./data/data')
  const selection = [data.rulers[1], data.rulers[0], data.showcase[3]]
  return createCelestialBody(selection, CANVAS_SIZE)
}

function placeBodies(stage, bodies){
  bodies.forEach(function (elem){
    elem.x = 500
    elem.y = 500
    stage.addChild(elem)
  })
}
