var mic;
var c=0;    
var inc=0.5;
var fish, fish2,luna;
var posX,posX2,ang,ang2;
var increment=2;
var increment2=1;
var incrementang=1;
var incrementang2=1;

function preload(){
fish=loadImage("images/fish.png")
fish2=loadImage("images/fish2.png")
luna=loadImage("images/luna.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  mic=new p5.AudioIn();
  mic.start();
angleMode(DEGREES);
    
posX=width
ang=-180    
ang2=0
posX2=0-200

}

function draw() {
background(249,205,173);
    
//background change
if(ang+incrementang>=-180 && ang+incrementang<=0 )  {
      background(249,205,173); 
}else{
     background(27,50,95)
}  

//Sun in movement
ellipse(width/2+200*cos(ang),height/4+100*sin(ang),20,20) 
ang=ang+incrementang
if(ang+incrementang>=180){
    ang=-180
}
 
//Moon in movement    
image(luna,width/2+200*cos(ang2),height/4+100*sin(ang2),20,20);
ang2=ang2+incrementang2

//Waves    
mySin(0,2,50,height/4-20,0,121,189,154)
mySin(-200,1,50,height/4,width/2,59,134,134);
mySin(-50,1,100,height/4+20,-width,11,72,107)
   

//Fishes moves both increment and sound    
var myVolume2=mic.getLevel();    
var posY=map(myVolume2,0,1,0,200) 
image(fish,posX,height/4+200,200,200); 
    
posX=posX-increment-posY;
if(posX-increment<=-200){
    posX=width;
    }
    
image(fish2,posX2,3*height/4-200,200,200);
posX2=posX2+increment2+posY;
if(posX2+increment2>=width){
    posX2=0-200;
    }
}

function mySin(start,h,p,b,large,R,G,B){

var myVolume=mic.getLevel();
var y=map(myVolume,0,1,0,h);
var x=map(myVolume,0,1,0,p); 


//waves
for(var a=start;a<=width;a++){

    stroke(R,G,B)
    line(a,b+x*sin(a*y),a,height)
    }
    
//boat    
noStroke()    
fill(119,79,56)
beginShape();
vertex(large+c, b+x*sin(((large+c)*y)));
vertex(large+50+c,b+x*sin(((large+50+c)*y)));
vertex(large+70+c, (b-20)+x*sin(((large+70+c)*y)));
vertex(large-20+c, (b-20)+x*sin(((large-20+c)*y)));
endShape();
    
//sail
fill(236,229,206)    
beginShape();
vertex(large+c, (b-25)+x*sin(((large+c)*y)));
vertex(large+20+c,(b-25)+x*sin(((large+20+c)*y)));
vertex(large+20+c, (b-60)+x*sin(((large+20+c)*y)));
endShape();
    
beginShape();
vertex(large+70+c, (b-25)+x*sin(((large+70+c)*y)));
vertex(large+25+c,(b-25)+x*sin(((large+25+c)*y)));
vertex(large+25+c, (b-80)+x*sin(((large+25+c)*y)));
endShape();        
    
    c=c+inc;
    if(c+inc>width/4 || c+inc<0){
        inc=-inc
    }

  }
    
