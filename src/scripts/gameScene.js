const createCelestialBody = require('./createCelestialBody')
const createjs = require('createjs-collection')
const CANVAS_SIZE = 1000
const animation = require('./animation')

function canvasDisplay (celestialBodyData) {
  const stage = new createjs.Stage('game')
  postNewScene(stage, celestialBodyData, 2)
  stage.update()
}

function postNewScene (stage, celestialBodyData, showcaseBodyId) {
  const bodies = createBodies(celestialBodyData, showcaseBodyId)
  placeBodies(stage, bodies)

  createjs.Ticker.setFPS(30)
  createjs.Ticker.addEventListener('tick', stage)
}

function createBodies (celestialBodyData, showcaseBodyId) {
  const selection = [
    ...celestialBodyData.rulers,
    celestialBodyData.showcase[showcaseBodyId]
  ]
  return createCelestialBody(selection, CANVAS_SIZE)
}

function placeBodies (stage, bodies) {
  bodies.forEach(function (elem) {
    elem.x = 500
    elem.y = 0
    stage.addChild(elem)
    animation.fallIn(elem)
  })
}

module.exports.canvasDisplay = canvasDisplay
