var C= {
  "game": {
    "width": 320,
    "height": 568
  },
  "bg": {
    "width": 320,
    "height": 568,
    "xspeed": 0,
    "yspeed":700,
    "file": "assets/background.png"
  },
  "p":{
    "file":"assets/dodger.png",
    "width":575,
    "height":475,
    "frames":2,
    "fps":2,
    "startx": 160,
    "starty":500
  },
    "d": {
      "file":"assets/dodgeme.png",
      "width":284,
      "height":261,
      "frames":3,
      "fps":3,
      "startx":160,
      "starty":32
      
    }
    
}

//-------------------------------------

class BootState {
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVirtically = true;
  }


  create() {
  game.state.start("Load")
  }
}


class LoadState {
  preload() {
    console.log("Loading...");
    this.load.image("bg",C.bg.file)
    this.load.spritesheet("player",C.p.file,C.p.width,C.p.height,C.p.frames)
    this.load.spritesheet("dodge",C.d.file,C.d.width,C.d.height,C.d.frames)
  }
  create() {
    console.log("Loaded");
    game.state.start("Play")
  }
}

class PlayState {
  create() {
    console.log("Entered Play State");
    
    
    this.bg = this.add.tileSprite(0,0,C.bg.width,C.bg.height,"bg");
    this.bg.autoScroll(C.bg.xspeed,C.bg.yspeed);
    
    this.player = this.add.sprite(C.p.startx,C.p.starty,"player");
    this.player.anchor.set(0.5,0.5);
    this.player.smoothed = false;
    this.player.scale.set(0.15);
    this.player.animations.add("anim");
    this.player.animations.play("anim",C.p.fps,true);
    
    this.dodge = this.add.sprite(C.d.startx,C.d.starty,"dodge");
    this.dodge.anchor.set(0.5,0.5);
    this.dodge.smoothed = false;
    this.dodge.scale.set(0.2);
    this.dodge.animations.add("anim");
    this.dodge.animations.play("anim",C.d.fps,true);
    
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  
  
  update() {
    if (this.cursors.left.isDown) {
      this.player.x -= C.p.speed;
    }
    if (this.cursors.right.isDown) {
      this.player.x += C.p.speed;
    }
  }
  
  render() {
    game.debug.text("x: " + this.dodge.x +", y: " + this.dodge.y,4 ,16")
  }
  
}


function restart() {
  game.state.start("Boot");
}

var game = new Phaser.Game(C.game.width,C.game.height);
game.state.add("Boot",BootState);
game.state.add("Load",LoadState);
game.state.add("Play",PlayState);
game.state.start("Boot");

