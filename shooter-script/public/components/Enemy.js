import Phaser from 'phaser';
import player from './Player';

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    // Create a new Enemy class that extends the Phaser Physics Arcade Sprite class
  constructor(scene, x, y, sprite) {
    // Call the super method to create a new instance of the Enemy class
    super(scene, x, y, sprite);
    // Add the new Enemy class to the scene
    scene.add.existing(this);
    // Enable arcade physics for the Enemy class
    scene.physics.world.enable(this);
    // Set the origin point of the sprite to the center of the sprite, so when selecting a point to render the enemy in a Scene, the point you pick will render the sprite there at its center most pixel.
    this.setOrigin(0.35, 0.35);
    // Set the collision bounds for the enemy
    this.setCollideWorldBounds(true);

    // Add a new Rectangle the same size as the sprite that is assigned to 'hitbox' to track hits on the enemy.
    // this.hitbox = new Phaser.GameObjects.Rectangle(scene, x, y, 70, 80);
    // this.hitbox.setOrigin(-1.2, -.70);
    // scene.add.existing(this.hitbox);
    // scene.physics.world.enable(this.hitbox);
    this.setSize(70, 80);
    this.setOffset(76, 70)
    
  }
  
    

  update() {
    this.setVelocityX(Phaser.Math.Between(-50, 50));
    this.setVelocityY(Phaser.Math.Between(-50, 50));
    // this.hitbox.setPosition(this.x, this.y);
    
  }
}