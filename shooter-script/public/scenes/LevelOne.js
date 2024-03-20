import Phaser from "phaser";
import Player from "../components/Player.js";
import SkullEnemy from "../components/Skull.js";
import Skull2 from "../components/SkullTier2.js";
import heroSprite from "../assets/images/hero/ufo-hero.png";
import skullSprite from "../assets/images/enemies/Skull-Cent-1.png";
// import missleSprite from "../assets/images/missiles/leveltwo/default-weapon/spritesheet.png";
import defaultMissileF1 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f1.png";
import defaultMissileF2 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f2.png";
import defaultMissileF3 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f3.png";
import defaultMissileF4 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f4.png";
import defaultMissileF5 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f5.png";
import defaultMissileF6 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f6.png";
import defaultMissileF7 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f7.png";
import defaultMissileF8 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f8.png";
import skull2Sprite from "../assets/images/enemies/skull2Spritesheet.png";

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
    // this.load.spritesheet("projectileSprite", missleSprite, {frameWidth: 32, frameHeight: 32,});
    this.load.spritesheet("skull2", skull2Sprite, {frameWidth: 224, frameHeight: 224,})
    // this.load.image("skull2-1", flameAnim1);
    // this.load.image("skull2-2", flameAnim2);
    // this.load.image("skull2-3", flameAnim3);
    // this.load.image("skull2-4", flameAnim4);
    // this.load.image("skull2-5", flameAnim5);
  }

  create() {
    this.player = new Player(this, 400, 300, "playerSpriteImage");
    this.skull = new SkullEnemy(this, 100, 300, "skullSpriteImage");
    this.skull2 = new Skull2(this, 200, 300, "skull2");
    
  }


  update() {
    this.player.update();
    this.skull.update();
    this.skull2.update();
    this.physics.moveToObject(this.skull, this.player, 80);
    this.physics.moveToObject(this.skull2, this.player, 100);
  }
}
