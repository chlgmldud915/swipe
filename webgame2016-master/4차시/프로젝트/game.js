var canvas = null
var context = null

var ball = new Image()
ball.src = 'image/ball.png'
var ballX, ballY, ballWidth, ballHeight

var brick = new Image()
brick.src = 'image/brick.png'
var brickX, brickY, brickWidth, brickHeight

var clicked = false

function init() {
  canvas = document.getElementById('gameCanvas')
  context = canvas.getContext('2d')

  brickX = 200, brickY = 50
  ballX = 240, ballY = 200
  brickWidth = brick.width
  brickHeight = brick.height
  ballWidth = ball.width
  ballHeight = ball.height

  requestAnimationFrame(update)
}

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.drawImage(ball, ballX, ballY)
  context.drawImage(brick, brickX, brickY)

  if(clicked) {
    ballY -= 5
  }

  // AABB 충돌
  if(
    brickX + brickWidth > ballX &&
    brickX < ballX + ballWidth &&
    brickY + brickHeight > ballY &&
    brickY < ballY + ballHeight
  )
    return

  requestAnimationFrame(update)
}

function onClick() {
  clicked = true
}

window.addEventListener('click', onClick)
window.addEventListener('load', init)










a
