import Phaser from "phaser";
import Player from "../components/Player.js";
import heroSprite from "../assets/images/hero/ufo-hero.png";
import defaultMissileF1 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f1.png";
import defaultMissileF2 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f2.png";
import defaultMissileF3 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f3.png";
import defaultMissileF4 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f4.png";
import defaultMissileF5 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f5.png";
import defaultMissileF6 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f6.png";
import defaultMissileF7 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f7.png";
import defaultMissileF8 from "../assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f8.png";
import Lvl2MeleeEnemy from "../components/enemies/leveltwo/Lvl2MeleeEnemy.js";
import meleeEnemyF1 from "../assets/images/enemies/leveltwo/melee/lvl2-melee-enemy-f1.png";
import meleeEnemyF2 from "../assets/images/enemies/leveltwo/melee/lvl2-melee-enemy-f2.png";
import meleeEnemyF3 from "../assets/images/enemies/leveltwo/melee/lvl2-melee-enemy-f3.png";
import meleeEnemyF4 from "../assets/images/enemies/leveltwo/melee/lvl2-melee-enemy-f4.png";
import meleeEnemyF5 from "../assets/images/enemies/leveltwo/melee/lvl2-melee-enemy-f5.png";
import meleeEnemyF6 from "../assets/images/enemies/leveltwo/melee/lvl2-melee-enemy-f6.png";
import meleeEnemyF7 from "../assets/images/enemies/leveltwo/melee/lvl2-melee-enemy-f7.png";
import HealthBar from "../components/HealthBar.js";

export default class LevelTwo extends Phaser.Scene {
  constructor() {
    super("LevelTwo");
  }

  preload() {
    // Preload the Sprite for the Player
    this.load.image("playerSpriteImage", heroSprite);

    //Preload the Sprites for the Player's DefaultWeapon
    this.load.image("firstProjectileSprite", defaultMissileF1);
    this.load.image("secondProjectileSprite", defaultMissileF2);
    this.load.image("thirdProjectileSprite", defaultMissileF3);
    this.load.image("fourthProjectileSprite", defaultMissileF4);
    this.load.image("fifthProjectileSprite", defaultMissileF5);
    this.load.image("sixthProjectileSprite", defaultMissileF6);
    this.load.image("seventhProjectileSprite", defaultMissileF7);
    this.load.image("eighthProjectileSprite", defaultMissileF8);

    //Preload the Sprites for the Lvl2MeleeEnemy
    this.load.image("meleeEnemySprite", meleeEnemyF1);
    this.load.image("secondMoveSprite", meleeEnemyF2);
    this.load.image("thirdMoveSprite", meleeEnemyF3);
    this.load.image("fourthMoveSprite", meleeEnemyF4);
    this.load.image("fifthMoveSprite", meleeEnemyF5);
    this.load.image("sixthMoveSprite", meleeEnemyF6);
    this.load.image("seventhMoveSprite", meleeEnemyF7);
  }

  create() {
    // Add the Player to the scene
    this.player = new Player(this, 400, 300, "playerSpriteImage");

    // Add the Lvl2MeleeEnemy to the scene
    this.meleeEnemy = new Lvl2MeleeEnemy(this, 900, 600, "meleeEnemySprite");

    // Add the HealthBar to the scene
    this.hitpointsBar = new HealthBar (this);
  }

  update() {
    this.player.update();
    this.meleeEnemy.update();
    this.hitpointsBar.update();
  }
}
