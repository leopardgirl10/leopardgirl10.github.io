var C= {
  "game": {
    "width": 320;
    "height": 568;
  },
  "bg":
}
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
    this.load.image("bg", "assets/background.png")
  }
  create() {
    console.log("Loaded");
    game.state.start("Play")
  }
}

class PlayState {
  create(){
    console.log("Entered Play Start");
    this.bg = this.add.tileSprite(0,0,320,568,"bg");
    this.bg.autoScroll(0,700);
  }
}

var game = new Phaser.Game(320,568);
game.state.add("Boot",BootState);
game.state.add("Load",LoadState);
game.state.add("Play",PlayState);
game.state.start("Boot");

