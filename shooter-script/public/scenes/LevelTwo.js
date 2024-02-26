import Phaser from 'phaser';

export default class LevelTwo extends Phaser.Scene {
  constructor() {
    super('LevelTwo');
  }

  create() {
    this.add.text(100, 100, 'Level Two', { fill: '#0f0' });
    this.add.text(100, 200, 'Press Space to go to Level 3', { fill: '#0f0' });

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('Title');
    });
  }
}