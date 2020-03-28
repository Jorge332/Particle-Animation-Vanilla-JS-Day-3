class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    //Draw individual particule
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    //Check for the mouse and particle positions 
    //and update the particle position
    update() {
        //Check if the particule is still in the canvas
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        //Collision detection
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        let pushValue = 2.5;
        if (distance < (mouse.radius + this.size)) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                this.x += pushValue;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= pushValue;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                this.y += pushValue;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= pushValue;
            }
        }

        //Move particules
        this.x += this.directionX;
        this.y += this.directionY;
        //draw the particule
        this.draw();
    }
}