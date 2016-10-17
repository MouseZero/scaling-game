const createCelestialBody = require('./createCelestialBody')
const createjs = require('createjs-collection')
const animation = require('./animation')
const TICKER_NAME = 'tick'
var CANVAS_SIZE = 1000

function newScene (stage, canvasSize, celestialBodyData, showcaseBodyId) {
  CANVAS_SIZE = canvasSize
  const bodies = createBodies(celestialBodyData, showcaseBodyId)
  placeBodies(stage, bodies.slice().reverse())
  animation.sizeCompareAnimation(stage, CANVAS_SIZE, bodies)

  createjs.Ticker.setFPS(30)
  createjs.Ticker.addEventListener(TICKER_NAME, stage)
}

function createBodies (celestialBodyData, showcaseBodyId) {
  const selection = [
    ...celestialBodyData.rulers,
    celestialBodyData.showcase[showcaseBodyId]
  ]
  return createCelestialBody(CANVAS_SIZE, selection)
}

function placeBodies (stage, bodies) {
  bodies.forEach(x => stage.addChild(x))
}

module.exports.newScene = newScene
