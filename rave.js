var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

var radius = 20;
/* var x = canvas.scrollHeight-radius;
var y = canvas.scrollHeight-radius; */

var x = 50;
var y = 50;

var counter = 0;

function draw() {
	var num_people = Math.sqrt(window.innerHeight * window.innerWidth);

	for(var i = 0; i < num_people; i++) {
  	x = x + i * radius * 3*Math.random();
    y = y + i * radius * 3*Math.random();
    
    ctx.strokeStyle = "white";

    //Head
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

    //Body and first leg
    ctx.beginPath();
    ctx.moveTo(x, y+radius);
    ctx.lineTo(x, y+3*radius);
    ctx.lineTo(x+radius, y+4*radius);

    //second leg
    ctx.moveTo(x, y+3*radius);
    ctx.lineTo(x-radius, y+4*radius);

		//arms
    ctx.moveTo(x-2*radius, y);
    ctx.lineTo(x-radius, y+radius);
    ctx.lineTo(x+radius, y+radius);
    ctx.lineTo(x+2*radius, y);

    ctx.stroke();
    ctx.closePath();
  	
    x=50;
    y=50;
    
  }

}

function lights(color1, color2) {
	//ctx.fillStyle = color;
  //ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
  // Create gradient
	var grd = ctx.createLinearGradient(0, 0, 2*Math.random()*window.innerWidth, 0);
	grd.addColorStop(0, color1);
	grd.addColorStop(1, color2);

	// Fill with gradient
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

function clear() {
	ctx.clearRect(0,0,window.innerHeight,window.innerHeight);
	Math.random() < 0.5 ? lights('red','blue') : lights('blue','red');
}

setInterval(function(){
	draw();
  setTimeout(function() {
  	canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
  	clear();
   }, 500)
}, 
1000);