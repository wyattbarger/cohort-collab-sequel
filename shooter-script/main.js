import Phaser from 'phaser';

import Title from '/public/scenes/Title';
import LevelOne from '/public/scenes/LevelOne';
import LevelTwo from '/public/scenes/LevelTwo';

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Title, LevelOne, LevelTwo]
    });
