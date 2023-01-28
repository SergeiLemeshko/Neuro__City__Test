const elements = document.querySelectorAll(".figure__item");
for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener('click', e => {
		// console.log(e.target.className);
		if (e.target.className == 'triangle') {
			e.target.classList.add('animation-1');
		}
		else if (e.target.className == 'rectangle') {
			e.target.classList.add('animation-2');
		}
		else if (e.target.className == 'circle') {
			e.target.classList.add('animation-3');
		}
		else if (e.target.className == 'oval') {
			e.target.classList.add('animation-4');
		}
		else if (e.target.className == 'square') {
			e.target.classList.add('animation-5');
		}
		else if (e.target.className == 'parallelogram') {
			e.target.classList.add('animation-6');
		}
		else if (e.target.className == 'trapezoid') {
			e.target.classList.add('animation-7');
		}
	});
}
