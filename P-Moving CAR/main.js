canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_width=100;
car_height=90;

background_image="racing.jpg";
car_image="car1.png";
car_x = 10;
car_y = 10;

function add()
{
  background_imgTag = new Image();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_image;

  car1_imgTag = new Image();
  car1_imgTag.onload = uploadcar1;
  car1_imgTag.src = car1_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1.width, car1.height);
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar2()
{
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2.width, car2.height);
}


window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed =='38'){
     car1_up();
     console.log("up arrow key");

     
    }

    if(keypressed =='40'){
        car1_down();
        console.log("down arrow key");
    }

    if(keypressed =='37'){
        car1_left();
        console.log("left arrow key");
    }

    if(keypressed =='39'){
        car1_right();
        console.log("right arrow key");
    }

    if(keypressed =='87'){
        car2_up();
        console.log("up arrow key");
       }
   
       if(keypressed =='40'){
           car2_down();
           console.log("down arrow key");
       }
   
       if(keypressed =='37'){
           car2_left();
           console.log("left arrow key");
       }
   
       if(keypressed =='39'){
           car2_right();
           console.log("right arrow key");
       }
}

function up()
{
    if(rover_y>=0)
    {
        rover_y = rover_y-10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}










