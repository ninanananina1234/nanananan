let sliderCol;
let gc
let webCam;
//let checkBox;

function setup() {
  createCanvas(1000, 1000);
  gc=createGraphics(width,height)
  sliderCol=createSlider(1,400,20,1);
  //checkBox=createCheckbox(100,100,40,40);
  webCam=createCapture(VIDEO,{flipped:true});
  webCam.size(200,300);
}

function draw() {
    //if (mouseIsPressed==true); {
    gc.filter(BLUR)
  gc.filter(THRESHOLD)

      
  gc.push();
  gc.translate(mouseX,mouseY);
  gc.rotate(frameCount*0.1);
  gc.imageMode(CENTER);
     gc.image(webCam,0,0,sliderCol.value(),sliderCol.value());
  gc.pop();
  image(gc,0,0)
  
  }