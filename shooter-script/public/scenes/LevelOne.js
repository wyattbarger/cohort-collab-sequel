import Phaser from 'phaser';

export default class LevelOne extends Phaser.Scene {
  constructor() {
    super('LevelOne');
  }

  create() {
    this.add.text(100, 100, 'Level One', { fill: '#0f0' });
    this.add.text(100, 200, 'Press Space to go to Level 2', { fill: '#0f0' });

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('LevelTwo');
    });
  }
}