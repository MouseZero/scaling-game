const createCelestialBody = require('./createCelestialBody')
const createjs = require('createjs-collection')
const animation = require('./animation')
const TICKER_NAME = 'tick'

function newScene (stage, canvasSize, celestialBodyData) {
  const bodies = createCelestialBody(canvasSize, celestialBodyData.bodies)
  placeBodies(stage, bodies)
  animation.introAnimation(stage, canvasSize, bodies)

  createjs.Ticker.setFPS(30)
  createjs.Ticker.addEventListener(TICKER_NAME, stage)
}

function placeBodies (stage, bodies) {
  bodies.slice().reverse()
    .forEach(x => stage.addChild(x))
}

module.exports.newScene = newScene
