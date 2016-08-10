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


class LoadTsate {
  preload() {
    console.log("Loading...");
  }
  create() {
    console.log("Loaded");
  }
}
  
var game = new Phaser.Game(320,568);
game.state.add("Boot",BootState);
game.state.add("Load",LoadState);
game.state.start("Boot");

