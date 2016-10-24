// image Image
var image = new Image()
image.src = "MarioSMBW.png"

var eventType, keyCode;
var playerX = 10, playerY = 10;
var mouseX, mouseY;
var isDrag = false;

//addEventListener("type", function)
image.addEventListener('load', render)

window.addEventListener('keydown', onKeyDown)
window.addEventListener('keyup', onKeyUp)

window.addEventListener('mousedown', onMouseDown)
window.addEventListener('mouseup', onMouseUp)
window.addEventListener('mousemove', onMouseMove)

function render() {
  var canvas = document.getElementById('gameCanvas')
  var context = canvas.getContext('2d')

  canvas.width = 500;
  canvas.height = 500;

  context.drawImage(image, playerX, playerY)

  context.fillStyle = '#666'
  context.font = '12px Arial'
  context.textBaseline = 'top'
  context.fillText('KeyCode is :'+keyCode, 10, 10)
  context.fillText('Event Type is : '+eventType, 10, 25)
}

//Event e
function onKeyDown(e) {
  keyCode = e.keyCode
  eventType = e.type

  //left
  if(e.keyCode == 37) {
    playerX -= 10
  }
  //up
  else if(e.keyCode == 38) {
    playerY -= 10
  }
  //right
  else if(e.keyCode == 39) {
    playerX += 10
  }
  //down
  else if(e.keyCode == 40) {
    playerY += 10
  }

  render()
}

function onKeyUp(e) {
  keyCode = e.keyCode
  eventType = e.type
  render()
}

function onMouseDown(e) {
  eventType = e.type
  isDrag = true;
  render()
}

function onMouseUp(e) {
  eventType = e.type
  isDrag = false;
  render()
}

function onMouseMove(e) {
  eventType = e.type
  mouseX = e.clientX
  mouseY = e.clientY

  if(isDrag) {
    playerX = mouseX
    playerY = mouseY
  }

  render()
}
