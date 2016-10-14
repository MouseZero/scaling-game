const createCelestialBody = require('./scripts/createCelestialBody')

window.init = function () {
  const data = require('./data/data')
  const stage = new createjs.Stage('game')
  const sun = createCelestialBody(data.rulers[0])
  sun.x = 100
  sun.y = 100
  stage.addChild(sun)

  stage.update()
}

function drawACircle(stage){
  const circle = new createjs.Shape()
  circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50)
  circle.x = 100
  circle.y = 100
  stage.addChild(circle)
}
