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

    this.setCollideWorldBounds(true);
  };
  update () {
    this.scene.physics.moveToObject(this, this.scene.player, 80);
  };
}
