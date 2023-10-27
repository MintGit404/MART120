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
  fill(33,39,100);
  circle(230,140,150);

  fill(220)
  rect(160,250,90,170);

  fill(24,47,40);
  triangle(130, 275, 158, 120, 186, 275);

  fill(24,47,40);
  triangle(130, 275, 158, 100, 286, 275);

  strokeWeight(10);
  point(250, 135);

  line(230, 170, 280, 180);

  line(230, 270, 380, 280);

  line(230, 420, 250, 590);

  text('My Attempt to Create Me..', 10, 30);

  text('Laurel Schmidt', 50, 300);

}
