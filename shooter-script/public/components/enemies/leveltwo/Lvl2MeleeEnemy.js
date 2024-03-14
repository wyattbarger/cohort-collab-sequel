import Phaser from "phaser";
import Enemy from "../../Enemy";

export default class Lvl2MeleeEnemy extends Enemy {
  constructor(scene, x, y) {
    super(scene, x, y, "meleeEnemySprite");
    this.hitpoints = 2;
    this.isDestroyed = false;

    // Add the idle animation for the Lvl2MeleeEnemy
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
    this.anims.play("movementAnimation");

    // Add a new hitbox synchronized to the center of the Lvl2MeleeEnemy
    this.hitbox = new Phaser.GameObjects.Rectangle(scene, x, y, 76, 76);
    this.hitbox.setOrigin(0.5, 0.5);
    scene.add.existing(this.hitbox);
    scene.physics.world.enable(this.hitbox);

    // Set the boundries of this Lvl2MeleeEnemy to the game canvas
    this.setCollideWorldBounds(true);

    // Add a collider between the hitbox and the Player's startingWeapon.projectiles
    this.scene.physics.add.collider(
      this.scene.player.startingWeapon.projectile,
      this.hitbox,
      this.playerProjectileCollisionHandler,
      null,
      this
    );
  }
  // Add a function to deal one damage when hit by the starting weapon projectile
  playerProjectileCollisionHandler() {
    this.takeDamage(1);
  }

  // Set a takeDamage with an amount parameter
  takeDamage(amount) {
    this.hitpoints -= amount;
    if (this.hitpoints < 0) {
      this.hitpoints = 0; // Prevent negative hitpoints values
      this.isDestroyed = true;
    } else if (this.hitpoints === 0) {
      this.hitbox.destroy(); // Destroy hitbox at 0 hitpoints
      this.destroy(); // Destroy this Sprite at 0 hitpoints
    }
  }

  update() {
    // Only execute this code if the scene is defined, and the Enemy has not been destroyed by the player
    if (this.scene && !this.isDestroyed) {
      this.hitbox.setPosition(this.x, this.y);
      this.scene.physics.moveToObject(this, this.scene.player, 80);
    }
  }
}
