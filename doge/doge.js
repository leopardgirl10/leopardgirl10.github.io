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
    this.load.image("background", "assets/background.png")
  }
  create() {
    console.log("Loaded");
    game.state.start("Play")
  }
}

class PlayStart {
  create(){
    console.log("Entered Play Start");
    this.background = this.add.tileSprite(0,o,320,568,"background");
    this.background.autoScroll(0,700);
  }
}

var game = new Phaser.Game(320,568);
game.state.add("Boot",BootState);
game.state.add("Load",LoadState);
game.state.start("Boot");

