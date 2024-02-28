import Phaser from "phaser";
import Player from "../components/Player.js";
import heroSprite from "../assets/images/hero/ufo-hero.png";
import defaultMissileF1 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f1.png";

export default class LevelTwo extends Phaser.Scene {
  constructor() {
    super("LevelTwo");
  }

  preload() {
    this.load.image("playerSpriteImage", heroSprite);
    this.load.image("defaultMissileF1", defaultMissileF1);
  }

  create() {
    this.player = new Player(this, 400, 300, "playerSpriteImage");
  }

  update() {
    this.player.update();
  }
}
