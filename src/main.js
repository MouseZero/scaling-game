const createCelestialBody = require('./scripts/createCelestialBody')
const scaler = require('./scripts/scaler')
const CANVAS_SIZE = 1000

window.init = function () {
  const data = require('./data/data')
  const stage = new createjs.Stage('game')
  const selection = [data.rulers[1], data.rulers[0], data.showcase[3]]
  const bodies = createAllBodies(selection, CANVAS_SIZE)
  console.log(bodies)
  placeBodies(stage, bodies)

  stage.update()

}

function maxBodySize(bodies) {
  return bodies.reduce(function (prev, elem) {
    return (prev > elem.size) ? prev : elem.size
  }, 0)
}

function compareDataSize(a, b){
  console.log('called compare')
  return b.solarSize - a.solarSize
}

function createAllBodies(selection, canvasSize){
  return selection.map(function (elem) {
    return createCelestialBody(elem, maxBodySize(selection), CANVAS_SIZE)
  }).sort(compareDataSize)
}

function placeBodies(stage, bodies){
  bodies.forEach(function (elem){
    elem.x = 500
    elem.y = 500
    console.log(elem.solarSize)
    stage.addChild(elem)
  })
}
