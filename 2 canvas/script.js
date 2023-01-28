let canvas = document.getElementById("canvas"),
	//контекст canvas
	ctx = canvas.getContext("2d");

// Прямоугольник
ctx.fillStyle = "red";
ctx.fillRect(290, 10, 200, 100);

// Квадрат
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// Круг
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(60, 340, 50, 0, Math.PI * 2, true);
ctx.fill();

// Треугольник
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.moveTo(490, 390);
ctx.lineTo(290, 390);
ctx.lineTo(390, 290);
ctx.closePath();
ctx.fill();