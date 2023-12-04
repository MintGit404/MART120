//character var
var characterX = 20;
var characterY = 20;

//key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

var x = 30;
var y = 40;
var diameter = 50;
var mousex = 0;
var mousey = 0;

//shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

//mouse click
var mouseShapeX;
var mouseShapeY;

var myXs = [];
var myYs = [];
var myDiameters = [];




function setup() {
    createCanvas(500,700);
    
    for(var i = 0; i < 5; i++)
    {
        // get all the random numbers to create a circles
        myXs[i] = getRandomNumber(500);
        myYs[i] = getRandomNumber(700);
        myDiameters[i] = getRandomNumber(100);
    }

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

        
        {
            fill(0,0,0);
            square(x,y,diameter);
    
            for(var i = 0; i < myXs.length; i++)
            {
              // concentric circle randomly using arrays
              ConcentricSquare(myXs[i], myYs[i], myDiameters[i], myDiameters[i]/2, 50, 120, 120, 120, 50, 120);
            }
        }


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

    function controlSquare()
    {
        if (x >= 300) 
        {
          x = 30;
        }
        
        if (y >= 300) 
        {
          y = 40;
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

        changeDiameter();

    }

    function changeDiameter()
    {
        if (diameter < 200) 
        {
            diameter += 2;
        } 
        else if (diameter >= 200) 
        {
            diameter = 50;
        }
    }




    function mouseClicked()
    {
        fill(0,0,100);
          circle(mouseShapeX, mouseShapeY,25); 
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }

    function getRandomNumber(number)
    {
        return Math.floor(Math.random()*number)+10;
    }

    // define ConcentricCircle function
    function ConcentricSquare(x,y, outer_diameter, inner_diameter, outer_red, outer_green,outer_blue, inner_red, inner_green, inner_blue)
    {
        fill(outer_red,outer_green, outer_blue);
        square(x,y,outer_diameter);
        fill(inner_red, inner_green, inner_blue);
        square(x,y,inner_diameter);
    }
    

