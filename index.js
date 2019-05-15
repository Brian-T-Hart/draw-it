var drawing = false;
var drawColor = 'black';
var drawShape = 'X';
var drawingContainer = document.getElementById('drawing-container');

function changeColor(color) {
	drawColor = color;
}

function changeShape(shape) {
	drawShape = shape;
}

function drawOn() {
	drawing = true;
}

function drawOff() {
	drawing = false;
}

function clearIt() {
	drawingContainer.innerHTML = '';
}

function markIt(x, y) {
	const el = document.createElement('div');
	el.innerText = drawShape;
	el.style.position = 'absolute';
	el.style.left = x + 'px';
	el.style.top = y + 'px';
	el.style.color = drawColor;
	drawingContainer.append(el);
}

function draw() {
	if (drawing) {
		var xPosition = event.clientX;
		var yPosition = event.clientY;
		markIt(xPosition, yPosition);
	}
}