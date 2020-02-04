
let r = 200

let incircle = 0;
let total = 0;

let pi;


function setup() {
  createCanvas(400, 400);
  
  background(255)
  
  translate(width/2,height/2);
  fill(255,0,0,25)
  circle(0,0,r*2);
}

function draw() {
  
   translate(width/2,height/2);
  for(var i = 0; i < 500; i++){
    
    total++;
  
    let rndX = random(-r, r);
    let rndY = random(-r, r);
    let d = dist(0,0,rndX, rndY);

    if(d < r){
      stroke('green');
      incircle++;
    }
    else{
      stroke('purple');
    }
    strokeWeight(10); 
    pi = 4 * (incircle/ total) 
    point(rndX, rndY);

   
  }
  print(pi)
}
