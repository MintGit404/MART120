// variables up top
//circle
var headX = 230;
var headY = 150;
var headDirection = 1;

//rectangle
var bodyX = 160;
var bodyY = 250;
var bodyDirection = 3;

//text
var size = 30;
var count = 0;
var sizeDirection = 3;

//arm line(230, 270, 380, 280);
var armX = 230;
var armY = 270;
var armDirection = 1;

//leg line(230, 420, 250, 590);


//triangle
var hairX = 130;
var hairY = 275;
var hairX = 158;
var hairY = 120;
var hairX = 186;
var hairY = 275;

var hairDirection = 1;


function setup()


{
    createCanvas(500,700);
}
function draw()
{
    colorMode(HSB);
    background(202,67,91);
    describe('A canvas with a light blue background.');
}

function draw() 
{
  colorMode(HSB)
  background(202,67,91);

    //head
  fill(33,39,100);
  circle(headX,headY,150);
  headX+=headDirection;
  headY+=headDirection;
      if(headX >= 500 || headX <= 82)
    {
      headDirection *= -1;
    }

       
  //bodyrect(160,250,90,170);

  fill(220)
  rect(160,bodyY,90,170);
  bodyY += bodyDirection;
  if(bodyY <= 0 || bodyY >= 450)
  {
      bodyDirection *= -1;
  }

  // hair
  fill(24,47,40);
  triangle(130, hairY, 158, hairY, 186, hairY);
  hairX += hairDirection;
  if(hairX >= 500 || hairY <= 82)
  {
    hairDirection *= -1;
  }
  

  fill(24,47,40);
  triangle(130, 275, 158, 100, 286, 275);

  //eye
  strokeWeight(10);
  point(250, 135);

  //mouth
  line(230, 170, 280, 180);

//arm
  line(230, armY, 380, armY);
  armY += armDirection;
  if(armY <= 0 || armY >= 350)
  {
    armDirection *= -1;
}


  //leg
  line(230, 420, 250, 590);


  text('Laurel Schmidt', 50, 300);

  textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
  text('My Attempt to Create Me..', 10, 30);


}
