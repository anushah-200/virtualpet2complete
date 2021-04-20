var dog
var happyDog
var database
var foodS
var foodStock
var happydogimg
var dogimg
var fedTime
var lastFed
var feed
var addFood

function preload()
{
  dogimg=loadImage("images/dogImg.png")
  happydogimg=loadImage("images/dogImg1.png")
}

function setup() { 
  createCanvas(700, 700);
 
  database=firebase.database()
  dog = createSprite(500,250,50,70);
  dog.addImage(dogimg)
  dog.scale=0.2
  //database.ref("food").on("value",readStock)
  feed=createButton("feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addFood=createButton("add food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)
  milk=new Food(200,200)

  fedTime=hour()
}


function draw() {  
background(46,139,87)

 //if(keyWentDown(UP_ARROW)){
   //writeStock(foodS)
   //dog.addImage(happydogimg)
   //}

   fill(255,255,254)
   textSize(15)
   if(lastFed>=12){
     text("last feed:"+lastFed%12+"PM",350,30)}
     else if(lastFed==0){
       text("last feed: 12 AM",350,30)}
       else{
         text("last feed:"+lastFed+"AM",350,30)
       }
     
    milk.getFoodStock()
   milk.display()
  drawSprites();
  textSize(25)
  fill("white")
 // text("Note:Press up arrow key to feed the dog milk!",50,30)
  //text("remaining food stock :"+foodS,50,100)

}
// function readStock(data){
//   foodS=data.val()
// }
// function writeStock(x){
//   if(x<=0){
//     x=0
//   }else{
//     x=x-1
//   }
//   database.ref("/").update({
//     food:x
//   })
//   display()
// }

function feedDog(){
dog.addImage(happydogimg)
if(foodStock){
  milk.updateFoodStock(1)
  
}
lastFed=hour()
}
function addFoods(){ 
  foodStock++
  database.ref().update({food:foodStock})
}
