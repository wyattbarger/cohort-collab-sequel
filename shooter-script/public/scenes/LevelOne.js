import Phaser from "phaser";
import Player from "../components/Player.js";
import Enemy from "../components/Enemy.js";
import heroSprite from "../assets/images/hero/ufo-hero.png";
import skullSprite from "../assets/images/enemies/Skull.png";
import defaultMissileF1 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f1.png";
import defaultMissileF2 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f2.png";
import defaultMissileF3 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f3.png";
import defaultMissileF4 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f4.png";
import defaultMissileF5 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f5.png";
import defaultMissileF6 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f6.png";
import defaultMissileF7 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f7.png";
import defaultMissileF8 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f8.png";

export default class LevelTwo extends Phaser.Scene {
  constructor() {
    super("LevelOne");
  }

  preload() {
    this.load.image("playerSpriteImage", heroSprite);
    this.load.image("firstProjectileSprite", defaultMissileF1);
    this.load.image("secondProjectileSprite", defaultMissileF2);
    this.load.image("thirdProjectileSprite", defaultMissileF3);
    this.load.image("fourthProjectileSprite", defaultMissileF4);
    this.load.image("fifthProjectileSprite", defaultMissileF5);
    this.load.image("sixthProjectileSprite", defaultMissileF6);
    this.load.image("seventhProjectileSprite", defaultMissileF7);
    this.load.image("eighthProjectileSprite", defaultMissileF8);
    this.load.image("skullSpriteImage", skullSprite);
  }

  create() {
    this.player = new Player(this, 400, 300, "playerSpriteImage");
    this.enemy = new Enemy(this, 100, 300, "skullSpriteImage");
    
  }


  update() {
    this.player.update();
    this.enemy.update();
    this.physics.moveToObject(this.enemy, this.player, 100);
  }
}
