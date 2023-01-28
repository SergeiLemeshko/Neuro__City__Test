class Sliders {
	constructor(initArray) {
		this.array = [];

		for (let i = 0; i < initArray.length; ++i) {
			this.array[i] = initArray[i];
			// console.log(initArray[i]);

			let newDiv = document.createElement("div");
			let image = document.createElement("img");
			image.src = images[i];
			newDiv.setAttribute("images", "memory__img");
			newDiv.appendChild(image);
			document.querySelector("#images").appendChild(newDiv);
		}
	}
}

let images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];

const Slider = new Sliders(images);

// Берём кнопки
let btns = document.querySelectorAll(".btn");
// Берём слайды
let slides = document.querySelectorAll("img");
// Объявляем переменную i 
let i = 0;

btns.forEach(e => {
	e.addEventListener('click', function show() {
		// Увеличиваем переменную i
		++i;
		// Условие если переменная i больше или равна количеству слайдов
		if (i >= slides.length) {
			// Удаляем класс block предыдущему слайду
			slides[i - 1].classList.remove("block");
			// Присваиваем переменной i ноль
			i = 0;
			// Добавляем класс block следующему слайду
			slides[i].classList.add("block");
		} else {
			// Удаляем класс block предыдущему слайду
			slides[i - 1].classList.remove("block");
			// Добавляем класс block следующему слайду
			slides[i].classList.add("block");
		}
	});
});
