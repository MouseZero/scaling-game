const createCelestialBody = require('./scripts/createCelestialBody')

window.init = function () {
  const data = require('./data/data')
  const stage = new createjs.Stage('game')
  const sun = createCelestialBody(data.rulers[0])
  sun.x = 500
  sun.y = 500
  stage.addChild(sun)

  stage.update()
}
