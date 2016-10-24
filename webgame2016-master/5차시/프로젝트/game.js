var canvas = null;
var context = null;

class GameObject {
  constructor(src) {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.image = new Image();
    this.image.addEventListener('load', () => {
      this.width = this.image.width;
      this.height = this.image.height;
    });
    this.image.src = src;
  }
}

var clicked = false;
var ball;

var gameObjectList = [];
var ballList = [];
var brickList = [];

function init() {
  canvas = document.getElementById('gameCanvas');
  context = canvas.getContext('2d');

  create('brick', 200, 50);
  ball = create('ball', 240, 200);

  requestAnimationFrame(update);
}

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let o of gameObjectList) {
    context.drawImage(o.image, o.x, o.y);
  }

  if(clicked) {
    ball.y -= 5;
  }

  //AABB 충돌
  for (let ball of ballList) {
    for (let brick of brickList) {
      if(brick.x + brick.width > ball.x &&
        brick.x < ball.x + ball.width &&
        brick.y + brick.height > ball.y &&
        brick.y < ball.y + ball.height
      ) {
        return;
      }
    }
  }

  requestAnimationFrame(update);
}

function create(id, x, y) {
  let ret;

  switch (id) {
    case 'brick':
      ret = new GameObject('image/brick.png');
      brickList.push(ret);
      break;
    case 'ball':
      ret = new GameObject('image/ball.png');
      ballList.push(ret);
      break;
    default:
      return null;
  }

  ret.x = x;
  ret.y = y;
  gameObjectList.push(ret);

  return ret;
}

function onClick() {
  clicked = true;
}

window.addEventListener('click', onClick);
window.addEventListener('load', init);
