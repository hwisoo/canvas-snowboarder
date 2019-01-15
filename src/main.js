import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import boarderImg from './images/boarder.png';
import bearImg from './images/bear.png';




let playerX = 200;
let playerY = 385;


let player1Score = 0;
let playerHealth = 100;

let bearX = 800;
let bearY = 670;

let bearVelocityX = -7.5;
let bearVelocityY = -3;

function draw() {
  var canvas = document.getElementById('canvasElement');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var playerObj = new Image();

    playerObj.onload = function() {
      
   
      ctx.drawImage(playerObj, playerX, playerY);
     
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

    
    ctx.font = "100px Monospace";
    ctx.fillText(player1Score, 150, 100); 
    ctx.fillText(playerHealth, 450, 100); 
    
   
  }
}

function update() {
  bearX = bearX + bearVelocityX;
  bearY = bearY + bearVelocityY;

  if(playerY < 385){
    playerY +=5;
  }

  // if (circleY < 20 || circleY > 800 - 20) {
  //   circleVelocityY = -circleVelocityY;
  // }

  if (bearX < 0) {
    resetBear();
    player1Score++;
  }

 if(playerY > 370){
  if (Math.abs((playerX -385)) < 45 || Math.abs((bearY- playerY)) <55) {
    resetBear();
    playerHealth -=10;
  
  }

  if(playerHealth <= 0){
    alert("Game Over!, Start again");
    location.reload();
  }
}

  // if (circleX < 50 && 150 > Math.abs(circleY - player1Y)) {
  //   circleVelocityX = -circleVelocityX * 1.1;
  // }

  // if (circleX > 950 && 150 > Math.abs(circleY - player2Y)) {
  //   circleVelocityX = -circleVelocityX * 1.1;
  // }
}


document.addEventListener("keydown", playerMove)

function playerMove(event) {
 
  if (event.keyCode == 38 && playerY == 385) {
    playerY = playerY - 300;
  }
 
}

setInterval(draw, 30);
setInterval(update, 30);

function resetBear() {
 bearX = 800;
  bearY = 670;

}




