import Phaser from "phaser";

import Title from "/public/scenes/Title";
import LevelOne from "/public/scenes/LevelOne";
import LevelTwo from "/public/scenes/LevelTwo";

export default new Phaser.Game({
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scene: [Title, LevelOne, LevelTwo],
  physics: {
    default: "arcade",
    arcade: {
      debug: {
        showBounds: true,
        showColliders: true,
        showVelocity: true,
      },
    },
  },
});
