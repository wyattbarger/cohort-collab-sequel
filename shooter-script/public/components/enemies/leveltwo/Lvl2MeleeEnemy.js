import Enemy from "../../Enemy";

// Add class extending off Enemy class planned for refractoring
export default class Lvl2MeleeEnemy extends Enemy {
    constructor (scene, x, y) {
        super (scene, x, y, "meleeEnemySprite")
    }
}