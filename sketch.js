function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  translate(200,200);
  rotate(-90) ;

  //collecting time values in variables
  hr = hour();
  mn = minute();
  sc = second();

  //breaking the hour,minute and second hands to parts
  hrA = map(hr%12,0,12,0,360);
  mnA = map(mn,0,60,0,360);
  scA = map(sc,0,60,0,360);

  //creating the line representing the hour hand
  push()
  rotate(hrA);
  stroke('blue');
  strokeWeight(7);
  line(0,0,80,0);
  pop()

  //creating the line representing the minute hand
  push()
  rotate(mnA);
  stroke('red');
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  //creating the line representing the second hand
  push()
  rotate(scA);
  stroke('yellow');
  strokeWeight(7);
  line(0,0,120,0);
  pop()

  //creating an arc for the hour hand
    noFill();
    stroke('blue')
    strokeWeight(7)
    arc (0,0,280,280,0,hrA);

  //creating an arc for the hour hand
    noFill();
    stroke('red')
    strokeWeight(7)
    arc (0,0,300,300,0,mnA);

  //creating an arc for the hour hand
    noFill();
    stroke('yellow')
    strokeWeight(7)
    arc (0,0,320,320,0,scA);

  
}