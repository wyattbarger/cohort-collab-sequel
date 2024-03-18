import Phaser from "phaser";

export default class HealthBar extends Phaser.Arcade.Sprite {
  constructor(scene) {
    super(scene, "fullHpBar");
    scene.add.existing(this);
    this.initAnimations();
  }

  initAnimations() {
    // Add an animation to run when the player takes damage at 3 (full) hitpoints
    if (this.scene.anims.exists("dmg3To2")) {
      this.scene.anims.create({
        key: "dmg3To2",
        frames: [{ key: "dmg3To2Frame1" }, { key: "dmg3to2Frame2" }],
        frameRate: 10,
        repeat: 2,
      });
    }
    // Once the animation for taking damage at full health runs, display the healthbar with 2 hitpoints
    this.scene.anims.get("dmg3To2").onComplete.addListener(() => {
      this.sprite.setTexture("twoPointHpBar");
    });
    // Add an animation to run when the player takes damage at 2 hitpoints
    if (this.scene.anims.exists("dmg2To1")) {
      this.scene.anims.create({
        key: "dmg2To1",
        frames: [{ key: "dmg2To1Frame1" }, { key: "dmg2to1Frame2" }],
        frameRate: 10,
        repeat: 2,
      });
    }
    // Once the animation for taking damage at 2 health runs, display the healthbar with 1 hitpoints
    this.scene.anims.get("dmg2To1").onComplete.addListener(() => {
      this.sprite.setTexture("onePointHpBar");
    });
    // Add an animation to run when the player takes damahe at 1 hitpoints
    if (this.scene.anims.esists("dmg1To0")) {
      this.scene.anims.create({
        key: "dmg1To0",
        frames: [{ key: "dmg1To0Frame1" }, { key: "dmg1To0Frame2" }],
        frameRate: 10,
        repeat: 2,
      });
    }
    // Once the animation for taking damage at 1 health runs, display the healthbar with 0 (skulls) hitpoints
    this.scene.anims.get("dmg1To0").onComplete.addListener(() => {
      this.sprite.setTexture("zeroPointHpBar");
    });
  }
}
