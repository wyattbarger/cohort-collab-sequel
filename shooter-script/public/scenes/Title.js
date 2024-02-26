import Phaser from 'phaser';

export default class Title extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.add.text(350, 200, 'Game', { fill: '#0f0', fontSize: 48, shadow: '2px 2px #000' });
    this.add.text(300, 400, 'Press Space to Start', { fill: '#0f0' });

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('LevelOne');
    });
  }
}