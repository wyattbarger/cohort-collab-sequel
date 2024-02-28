export default class DefaultWeapon {
  constructor(scene, player) {
    this.scene = scene;
    this.player = player;
    this.projectiles = scene.physics.add.group();
  }

  fire = (atXCord, atYCord) => {
    // Create a projectile as a sprite when the fire method is hit
    const projectile = this.scene.physics.add.sprite(
      this.player.x,
      this.player.y,
      "defaultMissileF1"
    );

    // Add the physical aspects of the projectile
    this.scene.physics.world.enable(projectile);
    this.projectiles.add(projectile);
    projectile.setScale(2);
    projectile.setOrigin(0, 0);

    // Find out the proper angle between the player and the mouse pointer.
    const angle = Phaser.Math.Angle.Between(
      this.player.x,
      this.player.y,
      atXCord,
      atYCord
    );

    const speed = 50;
    const velocityX = Math.cos(angle) * speed;
    const velocityY = Math.sin(angle) * speed;

    projectile.body.setVelocity(velocityX, velocityY);
  };
}
