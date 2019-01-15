import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import boarderImg from './images/boarder.png';
import bearImg from './images/bear.png';


let canvasElement = document.getElementById("canvasElement");
let ctx = canvasElement.getContext("2d")

let playerX = 200;
let playerY = 325;


let player1Score = 0;


let bearX = 800;
let bearY = 670;

let bearVelocityX = -5;
let bearVelocityY = -2;

function draw() {
  var canvas = document.getElementById('canvasElement');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var playerObj = new Image();

    playerObj.onload = function() {
      // ctx.save();
      // // move the origin to 50, 35   
      // ctx.translate(200, 325); 
      
      // // now move across and down half the 
      // // width and height of the image (which is 128 x 128)
      // ctx.translate(80, 80); 
      
      // // rotate around this point
      // ctx.rotate(0.5); 
      
      // then draw the image back and up
      ctx.drawImage(playerObj, playerX, playerY);
      // ctx.restore();
    };playerObj.src = boarderImg;


    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    
    var bearObj = new Image();
    bearObj.onload = function() {
    ctx.drawImage(bearObj, bearX, bearY);
    };
    bearObj.src = bearImg;

    ctx.save();
    ctx.fill();
    ctx.restore();
    // Filled triangle
    

    // Stroked triangle
    var rectangle = new Path2D();
    
    rectangle.rect(0, 0, 1000, 1000);
    

    ctx.stroke(rectangle);

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.lineTo(1000, 800);
    ctx.lineTo(0, 1000);
    
    ctx.fill();

    
   
   
  }
}

function update() {
  bearX = bearX + bearVelocityX;
  bearY = bearY + bearVelocityY;

  if(playerY < 355){
    playerY +=5;
  }

  // if (circleY < 20 || circleY > 800 - 20) {
  //   circleVelocityY = -circleVelocityY;
  // }

  if (bearX< 0) {
    bearX = 800;
    bearY=670;
  }

  // if (circleX > 1000) {
  //   player1Score++;
  //   resetBall();
  // }

  // if (circleX < 50 && 150 > Math.abs(circleY - player1Y)) {
  //   circleVelocityX = -circleVelocityX * 1.1;
  // }

  // if (circleX > 950 && 150 > Math.abs(circleY - player2Y)) {
  //   circleVelocityX = -circleVelocityX * 1.1;
  // }
}


document.addEventListener("keydown", playerMove)

function playerMove(event) {
 
  if (event.keyCode == 38) {
    playerY = playerY - 250;
  }
 
}

setInterval(draw, 10);
setInterval(update, 25);

function resetBear() {
 bearX = 500;
  bearY = 400;

}




