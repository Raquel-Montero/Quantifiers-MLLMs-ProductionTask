var objects = [];
var numSquares = 3;
var numObjects = 100;

function setup() {
  pixelDensity(1) // to avoid resizing of the image when downloading
  createCanvas(512, 512); 
  background(220); // background color

  // Draw everything from the center:
  rectMode(CENTER);
  ellipseMode(CENTER);

    // Create 100 objects at random locations:
  while (objects.length < numObjects) {
    //create a object object with a random position and size of 25:
    var objectsProperties = {
      x: random(25,width-25),
      y: random(25,height-25),
      size: 25
    }
    var overlapping = false;
    // check if that position does not overlap with other existing object:
    for (var j = 0; j < objects.length; j++) {
      var d = dist(objectsProperties.x, objectsProperties.y, objects[j].x, objects[j].y);
      if (d < sqrt(2)*objectsProperties.size) {
        overlapping = true; 
        break;
      }
    }
    // adding the object to the array of circles:
    if (!overlapping) {
      objects.push(objectsProperties);
    }
  }

    // drawing the circle
  for (var c = 0; c < objects.length-numSquares; c++) {
    noStroke();
    circle(objects[c].x, objects[c].y, objects[c].size);
  }

    // Drawing squares at random locations:
  for (var s = objects.length-numSquares; s < objects.length; s++) {
    fill('black'); // squares will be black and circle white
    square(objects[s].x, objects[s].y, objects[s].size); //x-location, y-location, width & height
  }

  // Saving the image: 
  saveCanvas(`image${numSquares}.png`);
}  




