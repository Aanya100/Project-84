canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_x = 10;
car1_y = 10;
background_image = "racing.jpg";
car1_image = "car1.png";

car2_width = 120;
car2_height = 70;
car2_x = 10;
car2_y = 100;
car2_image = "car2.png";

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2()
{
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {

     up();
     console.log("up");

    } 
    if(keyPressed == '40')
    {

     down();
     console.log("down");

    } 
    if(keyPressed == '37')
    {

     left();
     console.log("left");

    } 
    if(keyPressed == '39')
    {

     right();
     console.log("right");

    } 

    if(keyPressed == '87')
    {

     up2();
     console.log("w");

    } 
    if(keyPressed == '83')
    {

     down2();
     console.log("s");

    } 
    if(keyPressed == '65')
    {

     left2();
     console.log("a");

    } 
    if(keyPressed == '68')
    {

     right2();
     console.log("d");

    } 
    
}
 
function up()
{
    if(car1_y >=0)
    {
        car1_y = car1_y-10;
        console.log("when up arrow is pressed = " + car1_x + "-" + car1_y);
        uploadBackground();
        uploadcar1();

        uploadcar2();
    }
}

function down()
{
    if(car1_y <=500)
    {
        car1_y = car1_y+10;
        console.log("when down arrow is pressed = " + car1_x + "-" + car1_y);
        uploadBackground();
        uploadcar1();

        uploadcar2();
    }
}

function left()
{
    if(car1_x >=0)
    {
        car1_x = car1_x-10;
        console.log("when left arrow is pressed = " + car1_y + "-" + car1_x);
        uploadBackground();
        uploadcar1();

        uploadcar2();
    }
}

function right()
{
    if(car1_x <=700)
    {
        car1_x = car1_x+10;
        console.log("when right arrow is pressed = " + car1_x + "-" + car1_y);
        uploadBackground();
        uploadcar1();

        uploadcar2();
    }
}

function up2()
{
    if(car2_y >=0)
    {
        car2_y = car2_y-10;
        console.log("when w key is pressed = " + car2_x + "-" + car2_y);
        uploadBackground();
        uploadcar1();

        uploadcar2();
    }
}

function down2()
{
    if(car2_y <=500)
    {
        car2_y = car2_y+10;
        console.log("when s key is pressed = " + car2_x + "-" + car2_y);
        uploadBackground();
        uploadcar1();

        uploadcar2();
    }
}

function left2()
{
    if(car2_x >=0)
    {
        car2_x = car2_x-10;
        console.log("when a key is pressed = " + car2_y + "-" + car2_x);
        uploadBackground();
        uploadcar1();

        uploadcar2();
    }
}

function right2()
{
    if(car2_x <=700)
    {
        car2_x = car2_x+10;
        console.log("when d key is pressed = " + car2_x + "-" + car2_y);
        uploadBackground();
        uploadcar1();

        uploadcar2();
    }
}