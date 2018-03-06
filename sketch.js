let angle = 0;
let w = 48;
let maxD;

function setup() {
	createCanvas(1000, 1000, WEBGL);
	maxD = dist(0, 0, 400, 400);
}

function draw() {
	background(240, 240, 240);
	ortho(-800, 800, 800, -800, 0, 5000);
	
	rotateX(-QUARTER_PI * 0.8);
	rotateY(-PI/4);	
	
	for (let z = 0; z < height; z += w) {
		for (let x = 0; x < width; x += w) {
			push();
			let d = dist(x, z, width / 2, height / 2);
			let offset = map(d, 0, maxD, -PI * 1.5, PI * 1.5);
			let a = angle + offset;
			let h = floor(map(sin(a), -1, 1, 100, 400));
			normalMaterial();
			translate(x - width / 2, 0,  z - height / 2);
			box(w, h, w);
			pop();
		}
	}
	angle -= 0.05;
}
