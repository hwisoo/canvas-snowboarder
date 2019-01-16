import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import boarderImg from './images/boarder.png';
import rockImg from './images/rock.png';
import treesImg from './images/trees.png';




let playerX = 200;
let playerY = 385;
let rockX = 800;
let rockY = 695;
let treesX = 750;
let treesY = 160;

let player1Score = 0;
let playerHealth = 100;



let rockVelocityX = -7.5;
let rockVelocityY = -3;

let treesVelocityX = -2;
let treesVelocityY = -1;

let playerVelocity =5;


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
    var treesObj = new Image();
    treesObj.onload = function() {
    ctx.drawImage(treesObj, treesX, treesY);
    };
    treesObj.src = treesImg;
  
    
    var rockObj = new Image();
    rockObj.onload = function() {
    ctx.drawImage(rockObj, rockX, rockY);
    };
    rockObj.src = rockImg;

    
   

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

    
    ctx.font = "50px Monospace";
    ctx.fillStyle = "white";
    ctx.fillText("score: "+ player1Score, 70, 650); 
    ctx.fillText("health: " + playerHealth, 70, 700); 
    
  }
}

function update() {
  rockX = rockX + rockVelocityX;
  rockY = rockY + rockVelocityY;
  treesX += treesVelocityX;
  treesY += treesVelocityY;
  

  if(playerY < 385 ){
    
    playerY += playerVelocity;
  }

  

  // if (circleY < 20 || circleY > 800 - 20) {
  //   circleVelocityY = -circleVelocityY;
  // }

  if (rockX < 0) {
    resetrock();
    player1Score++;
  }

  if (treesX < 0) {
    resetTrees();
  }

 if(playerY > 370){
  if (Math.abs((playerX -rockX)) < 45 ) {
    resetrock();
    playerHealth -=10;
  
  }

  if(playerHealth <= 0){
    alert("Game Over!, Start again");
    location.reload();
  }
}


}


document.addEventListener("keydown", playerMove);

function playerMove(event) {
 
  if (event.keyCode == 38 && playerY == 385) {
    playerY -= 200;

  }
 
}

setInterval(draw, 30);
setInterval(update, 30);

function resetrock() {
 rockX = 800;
  rockY = 695;
}

function resetTrees(){
  treesX = 650;
  treesY = 160;
}




