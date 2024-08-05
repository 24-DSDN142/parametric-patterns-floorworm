//your parameter variables go here!

let SQSI = 20; //Square Size

let SR= 2;//roundedness of squares
let LSR=4; //roundness of flowerSquares

let SquareX = 140;//Xvalue of Lilac
let SquareY =0;//Yvalue of Lilac

let SquareMx = 0//Xvalue of Marigold
let SquareMy = 40//Yvalue of Marigold

let drawMarigold = true; //variable to controll if drawing of marigold is true
let drawLilac = true; //variable to controll if drawing of Lilac is true



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode( GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(245,247,188); //cream
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //rect(40 ,40, rect_width, rect_height);

if (drawLilac && drawMarigold) { //If both Lilac and Marigold are drawn on canvas-
    DrawGridBase(color(48, 124, 255));// baby blue colour
    DrawLilacFlower();
    DrawMarigoldFlower();

} else if (drawMarigold) { //else if only marigold drawn-
  DrawGridBase(color(43,43,43));//Dark grey
  DrawMarigoldFlower();

} else if (drawLilac) { //else if only Lilac drawn-
  DrawGridBase(color(245,247,188));//Cream
  DrawLilacFlower();
 }
}

 
function DrawGridBase(baseColor){

  strokeWeight(0.6);
  fill(baseColor);

  for (let y = 0; y < 200; y += SQSI){ //making verticle lines to create grid
    for (let x = 0; x < 200; x += SQSI){ //making horizontal lines to create grid
      square(x,y,SQSI,SR);//paramaters for square location and size and roundness
    }
  }
}

function DrawLilacFlower(){
  
strokeWeight(0.6);
fill(157, 127, 245)//Lilac

square(SquareX-40,SquareY,SQSI,LSR)
square(SquareX+20,SquareY,SQSI,LSR)
square(SquareX-60,SquareY,SQSI,LSR)
square(SquareX+40,SquareY,SQSI,LSR)
square(SquareX-40,SquareY+20,SQSI,LSR)
square(SquareX+20,SquareY+20,SQSI,LSR)
square(SquareX-20,SquareY+20,SQSI,LSR)
square(SquareX,SquareY+20,SQSI,LSR)
square(SquareX-40,SquareY+40,SQSI,LSR)


fill(91, 55, 158)//DarkPurp

square(SquareX-20,SquareY+40,SQSI,LSR)
square(SquareX,SquareY+40,SQSI,LSR)

fill(143, 171, 87)//LGreen

square(SquareX+20,SquareY+40,SQSI,LSR)
square(SquareX,SquareY+60,SQSI,LSR)
square(SquareX-20,SquareY+100,SQSI,LSR)
square(SquareX,SquareY+140,SQSI,LSR)


fill(53, 79, 32)//DGreen

square(SquareX-20,SquareY+60,SQSI,LSR)
square(SquareX,SquareY+80,SQSI,LSR)
square(SquareX-20,SquareY+120,SQSI,LSR)

fill(247, 208, 79)//Yellow

square(SquareX-20,SquareY,SQSI,LSR)
square(SquareX,SquareY,SQSI,LSR)



}

function DrawMarigoldFlower(){


  strokeWeight(0.6);
  fill(240, 107, 55)//Orange
  
  square(SquareMx+60,SquareMy,SQSI,LSR)
  square(SquareMx+40,SquareMy,SQSI,LSR)
  square(SquareMx+20,SquareMy,SQSI,LSR)
  square(SquareMx+80,SquareMy+20,SQSI,LSR)
  square(SquareMx+40,SquareMy+40,SQSI,LSR)
  square(SquareMx,SquareMy+20,SQSI,LSR)
  square(SquareMx+100,SquareMy+20,SQSI,LSR)
  square(SquareMx+20,SquareMy+40,SQSI,LSR)
  
  
  fill(186, 58, 7)//Red
  
  square(SquareMx+20,SquareMy+20,SQSI,LSR)
  square(SquareMx+60,SquareMy+40,SQSI,LSR)
  square(SquareMx+80,SquareMy,SQSI,LSR)
  
  
  
  fill(143, 171, 87)//LGreen
  
  square(SquareMx+80,SquareMy+40,SQSI,LSR)
  square(SquareMx+40,SquareMy+60,SQSI,LSR)
  square(SquareMx+60,SquareMy+100,SQSI,LSR)
  square(SquareMx+40,SquareMy+140,SQSI,LSR)
  
  
  
  fill(53, 79, 32)//DGreen
  
  square(SquareMx+60,SquareMy+60,SQSI,LSR)
  square(SquareMx+40,SquareMy+120,SQSI,LSR)
  square(SquareMx+40,SquareMy+80,SQSI,LSR)
  
  fill(247, 208, 79)//Yellow
  
  square(SquareMx+60,SquareMy+20,SQSI,LSR)
  square(SquareMx+40,SquareMy+20,SQSI,LSR)
  
  
}