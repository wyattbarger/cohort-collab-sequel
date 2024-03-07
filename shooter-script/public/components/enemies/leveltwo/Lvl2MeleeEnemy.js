import Phaser from "phaser";
import Enemy from "../../Enemy";

export default class Lvl2MeleeEnemy extends Enemy {
  constructor(scene, x, y) {
    super(scene, x, y, "meleeEnemySprite");
    this.hitpoints = 2;

    this.scene.anims.create({
      key: "movementAnimation",
      frames: [
        { key: "meleeEnemySprite" },
        { key: "secondMoveSprite" },
        { key: "thirdMoveSprite" },
        { key: "fourthMoveSprite" },
        { key: "fifthMoveSprite" },
        { key: "sixthMoveSprite" },
        { key: "seventhMoveSprite" },
      ],
      frameRate: 10,
      repeat: -1,
    });
    this.anims.play("movementAnimation")

    this.hitbox = new Phaser.GameObjects.Rectangle(scene, x, y, 76, 76);
    this.hitbox.setOrigin(.5, .5);
    scene.add.existing(this.hitbox);
    scene.physics.world.enable(this.hitbox);

    this.setCollideWorldBounds(true);
  };
  update () {
    this.hitbox.setPosition(this.x, this.y);
    this.scene.physics.moveToObject(this, this.scene.player, 80);
  };
}
