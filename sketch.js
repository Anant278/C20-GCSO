// Sprites
var wall, wall_2;
var speed, weight;
var car1, car2, car3; 
var bl1, bl2, bl3;

function setup() {
  createCanvas(1600,400);

  // Defining Speed And Weight
  speed = random(55, 90);
  weight = random(400, 1500);

  // Cars
  car1 = createSprite(50, 200, 50, 40);
  car2 = createSprite(50, 50, 50, 40);
  car3 = createSprite(50, 350, 50, 40);

  // Walls
  wall = createSprite(1500, 300, width*2, 10);
  wall_2 = createSprite(1500, 130, width*2, 10);

  // Blocks
  bl1 = createSprite(1500, 200, 40, 50);
  bl2 = createSprite(1500, 50, 40, 50);
  bl3 = createSprite(1500, 350, 40, 50);

  // Car Velocity
  car1.velocityX = speed / 2.2;
  car2.velocityX = speed / 2.1;
  car3.velocityX = speed / 2.3;

  // Wall Colors
  wall.shapeColor = "white";
  wall_2.shapeColor = "white";

  // Block Colors
  bl1.shapeColor = "yellow";
  bl2.shapeColor = "yellow";
  bl3.shapeColor = "yellow";

}

function draw() {
  background(0,0,0);

  // Car 1
  if(bl1.x - car1.x < (car1.width + bl1.width) / 2) {

    car1.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed / 22500;

    if(deformation > 180) {

      car1.shapeColor = color(255, 0, 0);

    }

    if(deformation < 180 && deformation > 100) {

      car1.shapeColor = color(230, 230, 0);

    }

    if(deformation < 100) {

      car1.shapeColor = color(0, 255, 0);

    }
  }

  // Car 2
  if(bl2.x - car2.x < (car2.width + bl2.width) / 2) {

    car2.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed / 22500;

    if(deformation > 180) {

      car2.shapeColor = color(255, 0, 0);

    }

    if(deformation < 180 && deformation > 100) {

      car2.shapeColor = color(230, 230, 0);

    }

    if(deformation < 100) {

      car2.shapeColor = color(0, 255, 0);

    }
  }

  // Car 3
  if(bl3.x - car3.x < (car3.width + bl3.width) / 2) {

    car3.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed / 22500;

    if(deformation > 180) {

      car3.shapeColor = color(255, 0, 0);

    }

    if(deformation < 180 && deformation > 100) {

      car3.shapeColor = color(230, 230, 0);

    }

    if(deformation < 100) {

      car3.shapeColor = color(0, 255, 0);

    }
  }

  drawSprites();
}