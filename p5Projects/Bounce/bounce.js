function setup(){   
createCanvas(windowWidth,windowHeight);
background(random()*400);

}
var x =0;
var y =0;
var xspeed= 60;
var yspeed= 50;
function draw(){


background(color(random()*330,random()*330,random()*330));
fill(random()*400,random()*400,random()*400);
ellipse(x,y,60,60);
x+=xspeed;
y+=yspeed;
if(x>=windowWidth || x<=0){
xspeed = -xspeed;
}
if(y>=windowHeight|| y<=0){
    yspeed = -yspeed;
}
// Phillip contriubited 20% of this code
}
