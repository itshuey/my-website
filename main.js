// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// Create Var

x = canvas.width/8
y = 7*canvas.height/13

var reddot       = new Dot(x, y, 1300, 'rgb(252, 44, 40)');
var yellowdot    = new Dot(x+51, y, 1300, 'rgb(251, 186, 0)');
var browndot     = new Dot(x+102, y, 1300, 'rgb(95, 75, 57)');
var greendot     = new Dot(x+153, y, 1300, 'rgb(0, 118, 57)');

// Define the Dots
function Dot(x, y, r, color) {
    "use strict";
    
    // Set defaults
    this.x = (x === null) ? 0 : x;
    this.y = (y === null) ? 0 : y;
    this.r = (r === null) ? 0 : r;
    this.color = color;
    
    this.draw = function(ctx) {
        ctx.beginPath();
	ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fill();
    }

    this.update = function() {
	
	if (this.color == 'rgb(95, 75, 57)'){

	  if (this.r > 300){

	    this.r = this.r*0.85
	  }

	  if (this.r > 25){

	    this.r = this.r*0.90
	  }

	} else {

	  if (this.r > 300){

            this.r = this.r*0.85;

          } else if (this.r > 100){

            this.r = this.r*0.90;

          } else if (this.r > 25){

            this.r = this.r*0.92;
          }
	}
    }
}



//Draw the circle as object

reddot.draw(ctx);


function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);
  ctx.font = "66px Roboto Mono";
  ctx.fillStyle = "white";
  ctx.textAlign = "left";
  ctx.fillText("huey.", x-20, y-42); 

  if (greendot.r < 300){
      browndot.update();
      browndot.draw(ctx);
  }

  if (reddot.r < 300){
      greendot.update();
      greendot.draw(ctx);
  }

  if (yellowdot.r < 300){
      reddot.update();
      reddot.draw(ctx);
  }

  yellowdot.update();
  yellowdot.draw(ctx);

  requestAnimationFrame(loop);
}


loop();