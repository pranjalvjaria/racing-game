class Game {
  constructor() {}

  getState() {
    var gameStateref=database.ref("gameState")
    gameStateref.on("value",function(data){
      gameState=data.val()
    })
  }
  start() {
    form = new Form();
    form.display();
    player = new Player();
    player.getCount()
    car1=createSprite(width/2-50,height-100)
    car1.addImage("car1",car1Img)  
    car1.scale=0.07
    car2=createSprite(width/2+100,height-100)
    car2.addImage("car2",car2Img)  
    car2.scale=0.07
    cars=[car1,car2]
  }

  update(state) {
database.ref("/").update({
  gameState:state
})
  }

  handleElements() {
    form.hide()
    form.titleImg.position(40,50)
    form.titleImg.class("gametitleaftereffect")
  }

  handlePlayerControls() {
    if(keyIsDown(UP_ARROW)){
      player.positionY +=10
      player.update()
    } 
  }
  play() {
    this.handleElements()
    Player.getplayerinfo()
    
    if(allplayers!==undefined)
{
  image(track,0,-height*5,width,height*6)
  var index=0
  for(var plr in allplayers){
    index=index+1
    var x=allplayers[plr].positionX
    var y=height-allplayers[plr].positionY
    cars [index-1].position.x=x
    cars [index-1].position.y=y
    if(index===player.index) {
      stroke(10)
      fill("red")
      ellipse(x,y,60,60)
    }
  }
  

  this.handlePlayerControls() 

  
  drawSprites();
} 
  

  }
}
