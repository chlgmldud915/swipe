var canvas = null
var context = null

var image = new Image()
image.src = "MarioSMBW.png"

var eventType, keyCode;
var playerX = 10, playerY = 10;

var keyArr = []

function init() {
  canvas = document.getElementById('gameCanvas')
  context = canvas.getContext('2d')
  requestAnimationFrame(update)

  for(let i=0; i<256; i++)
    keyArr.push(false)
}

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.drawImage(image, playerX, playerY)

  //left
  if(keyArr[37]) {
    playerX -= 10
  }
  //up
  else if(keyArr[38]) {
    playerY -= 10
  }
  //right
  else if(keyArr[39]) {
    playerX += 10
  }
  //down
  else if(keyArr[40]) {
    playerY += 10
  }

  requestAnimationFrame(update)
}

function onKeyDown(e) {
  keyArr[e.keyCode] = true
}

function onKeyUp(e) {
  keyArr[e.keyCode] = false
}

window.addEventListener('load', init)
window.addEventListener('keydown', onKeyDown)
window.addEventListener('keyup', onKeyUp)
