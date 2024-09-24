let angle = 0;
let tilt = 23

let bangle = 120
let ln = 92
let suns = [];
let cnv
function setup() {
  cnv =createCanvas(800, 800);
  pixelDensity(1)
  let cx = windowWidth/2-width/2
  let cy = windowHeight/2-height/2
  cnv.position(cx,cy)
  angleMode(DEGREES)
  background(0)
  //frameRate(35)
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  rotate(bangle)
  // take off old if too long
  if (suns.length>ln){
    suns.pop()
  }

  // Figure-eight pattern

  let x = 150* cos(1*angle*1); 
  //let y = 85 * (sin(2* angle)+ sin(1*angle+23.439)); // add second sine
  let y = 85 * (sin(2* angle)+ sin(1*angle+tilt)); 
  //let y = 150*(sin(2*angle))
  //et x1 = 350*(cos(angle))
  let pos = createVector(x,y)
  
  suns.unshift(pos)

  // Draw the suns
  noStroke()
  fill(255,255,0,168);
  for(let i =0;i<suns.length;i++){
  let sz = abs(sin(1*bangle))*25+5
  
  
  ellipse(suns[i].x, suns[i].y, sz, sz);
  }

  // Increment angle for animation
  angle += 4;
   bangle+=.2
 
  if (angle>360){
     
    angle=0
    tilt +=10;
    //pos.rotate(bangle)
    
    
  }
  
}
 
