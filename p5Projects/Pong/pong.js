var paddleY =windowHeight/2;

var ballX =0;
var ballY =0;
var ballXspeed= 60;
var ballYspeed= 50;
function setup(){   
createCanvas(windowWidth,windowHeight);
background(random()*400);
fill("red");
rect(0,paddleY,100,100);

}

function draw(){


//background(color(random()*330,random()*330,random()*330));
fill(random()*400,random()*400,random()*400);
ellipse(ballX,ballY,60,60);
ballX+=ballXspeed;
ballY+=ballYspeed;


if(ballY>=windowHeight|| ballY<=0){
    ballYspeed = -ballYspeed;
}

if((ballX==windowWidth&&ballY==paddleY) || (ballX==0&&ballY==paddleY) ){
ballXspeed = -ballXspeed;
}
// Phillip contriubited 20% of this code
}

function keyPressed(){
if(keyCode == UP_ARROW){
paddleY += 10;
}
else 
if(keyCode == DOWN_ARROW){
    paddleY-=10;
}

}