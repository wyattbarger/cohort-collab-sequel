import Enemy from "../../Enemy";

export default class Lvl2MeleeEnemy extends Enemy {
  constructor(scene, x, y) {
    super(scene, x, y, "meleeEnemySprite");
    this.scene.anims.create({
      key: "movementAnimation",
      frames: [
        { key: "firstMoveSprite" },
        { key: "secondMoveSprite" },
        { key: "thirdMoveSprite" },
        { key: "fourthMoveSprite" },
        { key: "fifthMoveSprite" },
        { key: "sixthMoveSprite" },
        { key: "seventhMoveSprite" },
      ],
    });
  };
  update () {

  };
}
