export default class DefaultWeapon {
  constructor(scene, player) {
    this.scene = scene;
    this.player = player;
    this.fireRate = 750;
    this.abilToFire = true;
    this.projectiles = scene.physics.add.group();
    this.initAnimations();
  }
  
  // Add initAnimations function to prevent a new animation from being created everytime fire() is hit
  initAnimations() {
    if (!this.scene.anims.exists("projectileAnimation")) {
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
    }
  }

  fire = (atXCord, atYCord) => {
    if (!this.abilToFire) {
      return;
    }

    // Set the abilToFire property to false, and then use scene's time module to handle fire rate
    this.abilToFire = false;
    this.scene.time.delayedCall(this.fireRate, () => {
      this.abilToFire = true;
    });

    // Create a projectile as a sprite when the fire method is hit
    const projectile = this.scene.physics.add.sprite(
      this.player.x,
      this.player.y,
      "firstProjectileSprite"
    );

    // Start the above projectile animation loop
    projectile.anims.play("projectileAnimation");

    // Add the physical aspects of the projectile and enable its physics
    this.scene.physics.world.enable(projectile);
    projectile.body.setSize(4, 4);
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

    // Set the speed of the projectile, and the target as the mouse
    const speed = 225;
    const velocityX = Math.cos(angle) * speed;
    const velocityY = Math.sin(angle) * speed;

    projectile.body.setVelocity(velocityX, velocityY);
  };
}