import Phaser from "phaser";

export default class HealthBar extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene, 640, 0, "threePointHpBar");
    this.setOrigin(0.5, 0.25);
    this.setScale(0.75)
    scene.add.existing(this);
    this.initAnimations();
  }

  initAnimations() {
    // Add an animation to run when the player takes damage at 3 (full) hitpoints
    this.scene.anims.create({
      key: "dmg3To2",
      frames: [{ key: "dmg3To2Frame1" }, { key: "dmg3to2Frame2" }],
      frameRate: 10,
      repeat: 2,
    });

    // Add an animation to run when the player takes damage at 2 hitpoints
    this.scene.anims.create({
      key: "dmg2To1",
      frames: [{ key: "dmg2To1Frame1" }, { key: "dmg2to1Frame2" }],
      frameRate: 10,
      repeat: 2,
    });

    // Add an animation to run when the player takes damage at 1 hitpoints
    this.scene.anims.create({
      key: "dmg1To0",
      frames: [{ key: "dmg1To0Frame1" }, { key: "dmg1To0Frame2" }],
      frameRate: 10,
      repeat: 2,
    });
  };

  update() {

  }
}
