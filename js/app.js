// Enemies our player must avoid
var Enemy = function(x,y,moveX) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x; //0
    this.y = y; //50
    this.moveX = moveX; //50
    this.moveY = 0; //0
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.moveX*dt;
    this.y = this.y + this.moveY*dt;
    if ((player.x+100>=this.x)&&(player.x<=this.x+100)&&(player.y+80 >= this.y)&&(player.y<=this.y+80)){
        player.x = 200;
        player.y = 300;
    };
    if (this.x > 1000){
        this.x = this.x - 1100;
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.x = 200;
    this.y = 300;
    this.moveX = 0;
    this.moveY = 0;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(){
    this.x = this.x + this.moveX;
    this.y = this.y + this.moveY;
    if(this.x < 0){
        this.x = 0;
    };
    if (this.y > 400){
        this.y = 400;
    };
    if(this.x > 400){
        this.x = 400;
    }
    this.moveX = 0;
    this.moveY = 0;
    if (this.y < 60) {
        this.x = 200;
        this.y = 300;
    };
}

Player.prototype.move = function(moveX,moveY){
    this.moveX = this.moveX + moveX;
    this.moveY = this.moveY + moveY;
}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite),this.x, this.y);
}

Player.prototype.handleInput = function(key){
    switch (key) {
        case 'left': player.move(-100, 0);
            break;

        case 'right': player.move(100, 0);
            break;

        case 'up': player.move(0, -80);
            break;

        case 'down': player.move(0,80) ;
            break;
    }
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//var allEnemies = [];
var allEnemies = [new Enemy(-200,130,100), new Enemy(0,50,50), new Enemy(0,210,70)];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
