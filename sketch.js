//Create variables here
var dog,happyDog, database, foodS,foodStock;
var dImg,hdImg;
var readStock;

function preload()
{
  dImg = loadImage("images/dogImg.png");
  hdImg = loadImage("images/dogImg1.png");
}

function setup() {

  createCanvas(800, 700);
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  dog=createSprite(400,350,10,10);
  dog.addImage("images/dogImg1.png",dImg);
  dog.scale = 0.4;
 
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW) && foodS>0){
    writeStock(foodS);
    dog.addImage("images/dogImg1.png",hdImg);
  }
  drawSprites();
  //add styles here
  fill("Black");
  textSize(20);
  text("food Remaining: "+foodS,100,150)
  text("Press Up Arrow Key to feed",70,100);
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x-1
  })
  }
