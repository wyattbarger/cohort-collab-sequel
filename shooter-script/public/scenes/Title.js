import Phaser from 'phaser';

export default class Title extends Phaser.Scene {
  constructor() {
    super({key:'Title'});
  }

  preload() {
    this.load.image('background', 'assets/images/background2.jpg')
  }

  create() {
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    
    var bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);

    this.add.text(screenCenterX, screenCenterY, 'This is a Story, \n about a Game', { fill: '#fff', fontSize: 48, fontFamily: 'arial', fontStyle: 'bold', }).setOrigin(0.5, 1);
    const startButton = this.add.text(screenCenterX, screenCenterY, 'Click to Start!', { fill: '#f5ad42', fontFamily: 'monospace', fontSize: 30 }).setOrigin(0.5, -3);

    startButton.setInteractive()
    .on('pointerdown', () => { this.scene.start('LevelOne');})
    .on('pointerover', () => { startButton.setStyle({ fill: '#ff0'}); })
    .on('pointerout', () => { startButton.setStyle({ fill: '#f5ad42'}); });


  }
}