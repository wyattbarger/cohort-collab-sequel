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
      "firstProjectileSprite"
    );

    // Create an animation loop
    this.scene.anims.create({
      key: "projectileAnimation",
      frames: [
        { key: "firstProjectileSprite" },
        { key: "secondProjectileSprite" },
        { key: "thirdProjectileSprite" },
        { key: "fourthProjectileSprite" },
        { key: "fifthProjectileSprite" },
        { key: "sixthProjectileSprite" },
        { key: "seventhProjectileSprite" },
        { key: "eighthProjectileSprite" },
      ],
      frameRate: 10, 
      repeat: -1, 
    });

    // Start the above projectile animation loop    
    projectile.anims.play("projectileAnimation");

    // Add the physical aspects of the projectile and enable its physics
    this.scene.physics.world.enable(projectile);
    projectile.body.setSize(4, 4)
    this.projectiles.add(projectile);
    projectile.setScale(2);
    projectile.setOrigin(0, 0);

    // Find out the proper angle between the player and the mouse pointer
    const angle = Phaser.Math.Angle.Between(
      this.player.x,
      this.player.y,
      atXCord,
      atYCord
    );

    const speed = 225;
    const velocityX = Math.cos(angle) * speed;
    const velocityY = Math.sin(angle) * speed;

    projectile.body.setVelocity(velocityX, velocityY);
  };
}
