//your parameter variables go here!

let SQSI = 20; //Square Size

let SR= 5;//roundedness of squares
let LSR=1; //roundness of lilac

let SquareX = 140;//Xvalue of Lilac
let SquareY =0;//Yvalue of Lilac

let SquareMx = 0//Xvalue of Marigold
let SquareMy = 40//Yvalue of Marigold

let lilacColour = colour(157, 127, 245)

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
  background(12, 37, 120); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //rect(40 ,40, rect_width, rect_height);

DrawGridBase(fill(245, 247, 188))//Yellow)

DrawLilacFlower()

DrawMarigoldFlower()



}
 
function DrawGridBase(){

  
  strokeWeight(0.6);

  square(0,0,SQSI,SR)
  square(20,0,SQSI,SR)
  square(40,0,SQSI,SR)
  square(60,0,SQSI,SR)
  square(80,0,SQSI,SR)
  square(100,0,SQSI,SR)
  square(120,0,SQSI,SR)
  square(140,0,SQSI,SR)
  square(160,0,SQSI,SR)
  square(180,0,SQSI,SR)
  //Row 1

  square(0,20,SQSI,SR)
  square(20,20,SQSI,SR)
  square(40,20,SQSI,SR)
  square(60,20,SQSI,SR)
  square(80,20,SQSI,SR)
  square(100,20,SQSI,SR)
  square(120,20,SQSI,SR)
  square(140,20,SQSI,SR)
  square(160,20,SQSI,SR)
  square(180,20,SQSI,SR)
  //Row 2

  square(0,40,SQSI,SR)
  square(20,40,SQSI,SR)
  square(40,40,SQSI,SR)
  square(60,40,SQSI,SR)
  square(80,40,SQSI,SR)
  square(100,40,SQSI,SR)
  square(120,40,SQSI,SR)
  square(140,40,SQSI,SR)
  square(160,40,SQSI,SR)
  square(180,40,SQSI,SR)
  //Row 3

  square(0,60,SQSI,SR)
  square(20,60,SQSI,SR)
  square(40,60,SQSI,SR)
  square(60,60,SQSI,SR)
  square(80,60,SQSI,SR)
  square(100,60,SQSI,SR)
  square(120,60,SQSI,SR)
  square(140,60,SQSI,SR)
  square(160,60,SQSI,SR)
  square(180,60,SQSI,SR)
  //Row 4

  square(0,80,SQSI,SR)
  square(20,80,SQSI,SR)
  square(40,80,SQSI,SR)
  square(60,80,SQSI,SR)
  square(80,80,SQSI,SR)
  square(100,80,SQSI,SR)
  square(120,80,SQSI,SR)
  square(140,80,SQSI,SR)
  square(160,80,SQSI,SR)
  square(180,80,SQSI,SR)
  //Row 5

  square(0,100,SQSI,SR)
  square(20,100,SQSI,SR)
  square(40,100,SQSI,SR)
  square(60,100,SQSI,SR)
  square(80,100,SQSI,SR)
  square(100,100,SQSI,SR)
  square(120,100,SQSI,SR)
  square(140,100,SQSI,SR)
  square(160,100,SQSI,SR)
  square(180,100,SQSI,SR)
  //Row 6

  square(0,120,SQSI,SR)
  square(20,120,SQSI,SR)
  square(40,120,SQSI,SR)
  square(60,120,SQSI,SR)
  square(80,120,SQSI,SR)
  square(100,120,SQSI,SR)
  square(120,120,SQSI,SR)
  square(140,120,SQSI,SR)
  square(160,120,SQSI,SR)
  square(180,120,SQSI,SR)
  //Row 7

  square(0,140,SQSI,SR)
  square(20,140,SQSI,SR)
  square(40,140,SQSI,SR)
  square(60,140,SQSI,SR)
  square(80,140,SQSI,SR)
  square(100,140,SQSI,SR)
  square(120,140,SQSI,SR)
  square(140,140,SQSI,SR)
  square(160,140,SQSI,SR)
  square(180,140,SQSI,SR)
  //Row 8

  square(0,160,SQSI,SR)
  square(20,160,SQSI,SR)
  square(40,160,SQSI,SR)
  square(60,160,SQSI,SR)
  square(80,160,SQSI,SR)
  square(100,160,SQSI,SR)
  square(120,160,SQSI,SR)
  square(140,160,SQSI,SR)
  square(160,160,SQSI,SR)
  square(180,160,SQSI,SR)
  //Row 9

  square(0,180,SQSI,SR)
  square(20,180,SQSI,SR)
  square(40,180,SQSI,SR)
  square(60,180,SQSI,SR)
  square(80,180,SQSI,SR)  
  square(100,180,SQSI,SR)
  square(120,180,SQSI,SR)
  square(140,180,SQSI,SR)
  square(160,180,SQSI,SR)
  square(180,180,SQSI,SR)
  //Row 10


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
  square(SquareMx,SquareMy+20,SQSI,SR)
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