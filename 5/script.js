function showAndHideEl() {
	//получаем массив элементов
	const elems = document.querySelectorAll(".block__el");

	elems.forEach(elem => {
		if (elem.style.display === 'block') {
			elem.style.display = 'none';
		}
		else {
			elem.style.display = 'block';
		}
	});
}

function debounce(callback, delay) {
	let timeout;
	return function () {
		clearTimeout(timeout);//Таймаут сбрасывается и отсчёт начинаеться заново
		timeout = setTimeout(() => {
			callback();
		}, delay);
	};
}

const btn = document.getElementById("button");

btn.addEventListener("click", debounce(showAndHideEl, 1000));