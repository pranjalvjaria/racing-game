class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  getCount(){
    var playerCountref=database.ref("playerCount")
    playerCountref.on("value",data=>{
      console.log(data.val())
      playerCount=data.val()
    })
console.log("playercount: "+playerCount)
  }
  
  updateCount(count){
    database.ref("/").update({
      playerCount:count
    })

  }
  update() {
    var playerIndex="players/player"+this.index
    database.ref(playerIndex).update({
      positionX:this.positionX,
      positionY:this.positionY
    })
  }

  addPlayer(){
    console.log("index value: "+this.index)
    var playerindex="players/player"+this.index
    if(this.index===1) {
      this.positionX=width/2-100
    }else{
      this.positionX=width/2+100
    }

    database.ref(playerindex).set({
      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY
    })
  }

  static getplayerinfo() {
    var inforef=database.ref("players")
    inforef.on("value",data=>{
      allplayers=data.val()
    })
    
  }

  getDistance() {
    var playerDistanceRef=database.ref("players/player"+this.index)
    playerDistanceRef.on("value",data =>{
      var data=data.val()
      this.positionX=data.positionX
      this.positionY=data.positionY
    }) 
  }
}
