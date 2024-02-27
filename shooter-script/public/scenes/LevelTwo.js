import Phaser from 'phaser';
import Player from '../components/Player.js';
import heroSprite from '../assets/images/hero/ufo-hero.png'

export default class LevelTwo extends Phaser.Scene {

  constructor() {
    super('LevelTwo');
  }

  preload() {
    this.load.image('playerSpriteImage', heroSprite)
  }

  create() {
    this.player = new Player(this, 400,  300, 'playerSpriteImage')

    this.cameras.main.setBackgroundColor('#808080');
  }

  update() {
    this.player.update();
  }
}