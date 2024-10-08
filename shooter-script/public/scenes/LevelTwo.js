import Phaser from "phaser";
import Player from "../components/Player.js";
import heroSprite from "/assets/images/hero/ufo-hero.png";
import defaultMissileF1 from "/assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f1.png";
import defaultMissileF2 from "/assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f2.png";
import defaultMissileF3 from "/assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f3.png";
import defaultMissileF4 from "/assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f4.png";
import defaultMissileF5 from "/assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f5.png";
import defaultMissileF6 from "/assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f6.png";
import defaultMissileF7 from "/assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f7.png";
import defaultMissileF8 from "/assets/images/missiles/leveltwo/default-weapon/lvl2-defwep-missile-f8.png";
import Lvl2MeleeEnemy from "../components/enemies/leveltwo/Lvl2MeleeEnemy.js";
import meleeEnemyF1 from "/assets/images/enemies/leveltwo/melee/lvl2-melee-enemy-f1.png";
import meleeEnemyF2 from "/assets/images/enemies/leveltwo/melee/lvl2-melee-enemy-f2.png";
import meleeEnemyF3 from "/assets/images/enemies/leveltwo/melee/lvl2-melee-enemy-f3.png";
import meleeEnemyF4 from "/assets/images/enemies/leveltwo/melee/lvl2-melee-enemy-f4.png";
import meleeEnemyF5 from "/assets/images/enemies/leveltwo/melee/lvl2-melee-enemy-f5.png";
import meleeEnemyF6 from "/assets/images/enemies/leveltwo/melee/lvl2-melee-enemy-f6.png";
import meleeEnemyF7 from "/assets/images/enemies/leveltwo/melee/lvl2-melee-enemy-f7.png";
import HealthBar from "../components/HealthBar.js";
import hpBarValue0 from "/assets/images/hero/hitpoints-bar/hpbar-value0-static.png";
import hpBarValue1 from "/assets/images/hero/hitpoints-bar/hpbar-value1-static.png";
import hpBarValue2 from "/assets/images/hero/hitpoints-bar/hpbar-value2-static.png";
import hpBarValue3 from "/assets/images/hero/hitpoints-bar/hpbar-value3-static.png"
import hpBarValue3to2F1 from "/assets/images/hero/hitpoints-bar/hpbar-value3to2-f1.png";
import hpBarValue3to2F2 from "/assets/images/hero/hitpoints-bar/hpbar-value3to2-f2.png";
import hpBarValue2to1F1 from "/assets/images/hero/hitpoints-bar/hpbar-value2to1-f1.png";
import hpBarValue2to1F2 from "/assets/images/hero/hitpoints-bar/hpbar-value2to1-f2.png";
import hpBarValue1to0F1 from "/assets/images/hero/hitpoints-bar/hpbar-value1to0-f1.png";
import hpBarValue1to0F2 from "/assets/images/hero/hitpoints-bar/hpbar-value1to0-f2.png";
import LevelIndicator from "../components/LevelIndicator.js";
import levelIndicatorSpritesheet from "/assets/images/environment/levelIndicator-spritesheet.png";

export default class LevelTwo extends Phaser.Scene {
  constructor() {
    super("LevelTwo");
  }

  preload() {
    // Preload the Sprite for the Player
    this.load.image("playerSpriteImage", heroSprite);

    // Preload the Sprites for the Player's DefaultWeapon
    this.load.image("firstProjectileSprite", defaultMissileF1);
    this.load.image("secondProjectileSprite", defaultMissileF2);
    this.load.image("thirdProjectileSprite", defaultMissileF3);
    this.load.image("fourthProjectileSprite", defaultMissileF4);
    this.load.image("fifthProjectileSprite", defaultMissileF5);
    this.load.image("sixthProjectileSprite", defaultMissileF6);
    this.load.image("seventhProjectileSprite", defaultMissileF7);
    this.load.image("eighthProjectileSprite", defaultMissileF8);

    // Preload the Sprites for the Lvl2MeleeEnemy
    this.load.image("meleeEnemySprite", meleeEnemyF1);
    this.load.image("secondMoveSprite", meleeEnemyF2);
    this.load.image("thirdMoveSprite", meleeEnemyF3);
    this.load.image("fourthMoveSprite", meleeEnemyF4);
    this.load.image("fifthMoveSprite", meleeEnemyF5);
    this.load.image("sixthMoveSprite", meleeEnemyF6);
    this.load.image("seventhMoveSprite", meleeEnemyF7);

    // Preload the Sprites for the HealthBar
    this.load.image("zeroPointHpBar", hpBarValue0);
    this.load.image("onePointHpBar", hpBarValue1);
    this.load.image("twoPointHpBar", hpBarValue2);
    this.load.image("threePointHpBar", hpBarValue3);
    this.load.image("dmg3To2Frame1", hpBarValue3to2F1);
    this.load.image("dmg3to2Frame2", hpBarValue3to2F2);
    this.load.image("dmg2To1Frame1", hpBarValue2to1F1);
    this.load.image("dmg2to1Frame2", hpBarValue2to1F2);
    this.load.image("dmg1To0Frame1", hpBarValue1to0F1);
    this.load.image("dmg1To0Frame2", hpBarValue1to0F2);

    // Preload the Sprites for the LevelIndicator
    this.load.spritesheet("levelIndicatorSheet", levelIndicatorSpritesheet, {frameWidth: 384, frameHeight: 192});
  }

  create() {
    // Add the Player to the scene
    this.player = new Player(this, 400, 300, "playerSpriteImage");

    // Add the Lvl2MeleeEnemy to the scene
    this.meleeEnemy = new Lvl2MeleeEnemy(this, 900, 600, "meleeEnemySprite");

    // Create a group and add all scene enemies for Collider logic
    this.enemies = this.physics.add.group();
    this.enemies.add(this.meleeEnemy);

    // Add the HealthBar to the scene
    this.hitpointsBar = new HealthBar (this, "threePointHpBar");

    //Add the LevelIndicator to the Scene
    this.levelCounter = new LevelIndicator (this, 2);
  }

  update() {
    this.player.update();
    this.meleeEnemy.update();
    this.hitpointsBar.update();
  }
}
