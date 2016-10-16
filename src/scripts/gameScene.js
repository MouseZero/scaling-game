const createCelestialBody = require('./createCelestialBody')
const createjs = require('createjs-collection')
const CANVAS_SIZE = 1000
const animation = require('./animation')
const TICKER_NAME = 'tick'
let lastBodies = []

function newScene (celestialBodyData, showcaseBodyId) {
  const stage = getStage()
  deleteOldBodies()
  const bodies = createBodies(celestialBodyData, showcaseBodyId)
  placeBodies(stage, bodies.slice().reverse())
  animation.sizeCompareAnimation(stage, CANVAS_SIZE, bodies)

  createjs.Ticker.setFPS(30)
  createjs.Ticker.addEventListener(TICKER_NAME, stage)
  lastBodies = bodies
}

function getStage () {
  return new createjs.Stage('game')
}

function createBodies (celestialBodyData, showcaseBodyId) {
  const selection = [
    ...celestialBodyData.rulers,
    celestialBodyData.showcase[showcaseBodyId]
  ]
  return createCelestialBody(CANVAS_SIZE, selection)
}

function placeBodies (stage, bodies) {
  bodies.forEach(function (elem) {
    elem.x = 500
    elem.y = -500
    elem.visible = false
    stage.addChild(elem)
  })
}

function deleteOldBodies () {
  lastBodies.forEach(function (elem) {
    if (elem.clear) {
      elem.clear()
    }
  })
}

module.exports.newScene = newScene
