let randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
let result = document.querySelector('.result');

document.querySelector('button').addEventListener('click', () => {
	result.innerHTML = '';
	for (let i = randomNum(10, 100); i <= 100; i++)
		result.innerHTML += `<div style="width:50px;height:50px;background:rgb(${randomNum(0, 255)},${randomNum(0, 255)},${randomNum(200, 255)});border:1px solid;display:inline-block;"></div>`;
});
