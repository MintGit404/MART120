//character var
var characterX = 20;
var characterY = 20;

//key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

//mouse click
var mouseShapeX;
var mouseShapeY;



function setup() {
    createCanvas(500,700);
 
}
function draw() {
    colorMode(HSB);
    background(245,81,33);
    describe('a canvas with dark blue background')
}

    function draw () 
    {
        colorMode(HSB);
        background(245,81,33);

       createMaze();

       createExit();

       createWin();

       createControl();
       

       
       
        

          //mouseclick
          fill(0,0,100);
          circle(mouseShapeX, mouseShapeY,25); 
          
          //character
          createCharacter();
  


    }

    function createCharacter()
    {
        fill(44,100,89);
        circle(characterX,characterY,20);  
    }
   
    function createMaze()
    {

        //rectangle 1 org (30,40,50,60) (160,350,90,170)
        fill(0,0,0);
        rect(260,50,290,70);

        //rect 2 (260,50,290,70)
        fill(0,0,0);
        rect(260,250,290,70);

        //rect 3 vertical
        fill(0,0,0);
        rect(260,50,90,170);


        //rect 4
        fill(0,0,0);
        rect(60,50,290,70);

        //rect 5 vertical 2 long
        fill(0,0,0);
        rect(60,50,90,570);

        //rect 6 
        fill(0,0,0);
        rect(60,350,290,70);

        //rect 7 block
        fill(0,0,0);
        rect(460,150,90,170);

        fill(0,0,0);
        rect(260,450,290,270);
    }

    function createExit()
    {
        fill(0,0,100);
        textSize(19);
        text("Exit",450, 140)
    }

    function createWin()
    {
        if(characterX > 450 && characterY > width -450)
        {
            fill(0,0,100);
            stroke(10);
            textSize(30);
            text("You Win!", width/2-190, height/2-250);
        }
    }

    function createControl()
    {
        if(keyIsDown(w))
        {
            characterY -= 10;
        }
        if(keyIsDown(s))
        {
            characterY += 10;
        }
        if(keyIsDown(a))
        {
            characterX -=10;
        }
        if(keyIsDown(d))
        {
            characterX += 10;
        }
    }



    function mouseClicked()
    {
        fill(0,0,100);
          circle(mouseShapeX, mouseShapeY,25); 
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }

