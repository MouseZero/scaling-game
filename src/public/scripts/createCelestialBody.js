const createjs = require('createjs-collection')

module.exports = function createCelestialBody (canvasSize, selection) {
  const allBodies = drawAllBodies(canvasSize, selection)
  loadAllImages(allBodies)
  return allBodies
}

function drawAllBodies (canvasSize, selection) {
  return selection.map(function (bodyInfo) {
    return createACelestialBody(canvasSize, maxBodySize(selection), bodyInfo)
  }).sort(compareDataSize)
}

function loadAllImages (bodies) {
  console.log('test')
  const imageBodies = bodies.filter((x) => !!x.imageRef)
  const queue = new createjs.LoadQueue(true)
  imageBodies.forEach(x => queue.loadFile({id: x.solarSize, src: x.imageRef, loadTimeout: 2000}, false))
  queue.on('complete', loadedImages)
  queue.on('error', errorLoadingImages)
  console.log(queue.getItems(true))
  queue.load()
}

function loadedImages (event) {
  console.log('Loaded All Images')
}

function errorLoadingImages () {
  console.log('Error loading images')
}

function createACelestialBody (canvasSize, maxSize, bodyInfo) {
  const body = new createjs.Shape()
  body.graphics.beginFill(bodyInfo.color).drawCircle(0, 0, bodyInfo.size / 2)
  body.solarSize = bodyInfo.size
  if (bodyInfo.image) {
    body.imageRef = bodyInfo.image
  }
  return body
}

function maxBodySize (bodies) {
  return bodies.reduce(function (prev, elem) {
    return (prev > elem.size) ? prev : elem.size
  }, 0)
}

function compareDataSize (a, b) {
  return a.solarSize - b.solarSize
}
