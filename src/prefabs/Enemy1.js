class Enemy1 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        // Add enemy1 to scene
        scene.add.existing(this);

        // Set enemy1 speed
        this.moveSpeed = 5;
    }
    update() {
        // Move enemy to the right
        this.x += this.moveSpeed;

        // If enemy is off screen, reset it
        if (this.x >= game.config.width - this.width) {
            this.reset();
        }
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);}

    reset() {
        this.x = 0;
        this.y = this.getRandomInt(300,500);
    }
}
