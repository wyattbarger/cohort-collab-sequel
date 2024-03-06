import Phaser from 'phaser';

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    // Create a new Enemy class that extends the Phaser Physics Arcade Sprite class
  constructor(scene, x, y, sprite) {
    // Call the super method to create a new instance of the Enemy class
    super(scene, x, y, sprite);
    // Add the new Enemy class to the scene
    scene.add.existing(this);
    // Enable arcade physics for the Enemy class
    scene.physics.world.enable(this);

    // this.hitWidth = hitWidth;
    // this.hitLength = 0;
    // this.HitOX = 0;
    // this.HitOY = 0;
    // this.hitbox = new Phaser.GameObjects.Rectangle(scene, x, y, this.hitWidth, this.hitLength);
    
    // this.hitbox.setOrigin(this.HitOX, this.HitOY);
    // scene.add.existing(this.hitbox);
    // scene.physics.world.enable(this.hitbox);
  }
  
    

  update() {
    this.setVelocityX(Phaser.Math.Between(-50, 50));
    this.setVelocityY(Phaser.Math.Between(-50, 50));    
  }
}