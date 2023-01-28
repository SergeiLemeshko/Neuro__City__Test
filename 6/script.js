//Маски
let regName = /^[a-zA-Zа-яА-ЯёЁ]{3,30}$/,
	regTel = /^(\+?)\d{10,15}$/,
	regPas = /[0-9a-zA-Z!@#$%^&*]{8,40}/g;

let inp = document.querySelector('#name'),
	tel = document.querySelector('#tel'),
	pas = document.querySelector('#pas'),
	pas2 = document.querySelector('#pas-2'),
	span = document.querySelector('.span'),
	spanTel = document.querySelector('.span__tel'),
	spanPas = document.querySelector('.span__pas'),
	spanPas2 = document.querySelector('.span__pas-2');

//Условия валидации и сообщения при несоответствии
document.querySelector('.btn').onclick = function (e) {
	e.preventDefault();
	if (!validate(regName, inp.value)) {
		notValid(inp, span, 'Введите имя правильно');
	} else if (validate(regName, inp.value)) {
		valid(inp, span, '');
	}
	if (!validate(regTel, tel.value)) {
		notValid(tel, spanTel, 'Введите номер правильно');
	} else if (validate(regTel, inp.value)) {
		valid(tel, spanTel, '');
	}
	if (!validate(regPas, pas.value)) {
		notValid(pas, spanPas, 'Введите пароль правильно');
	} else if (validate(regPas, inp.value)) {
		valid(pas, spanPas, '');
	}
	if (!validate(regPas, pas2.value)) {
		notValid(pas2, spanPas2, 'Введите пароль правильно');
	} else if (validate(regPas, inp.value)) {
		valid(pas2, spanPas2, '');
	}
	if (pas2.value !== pas.value) {
		notValid(pas2, spanPas2, 'Пароли не совпадают');
	}
};

//Функция валидации
function validate(regex, inp) {
	return regex.test(inp);
}
//Если условия не соблюдены
function notValid(inp, el, mess) {
	inp.classList.add('is-invalid');
	el.innerHTML = mess;
}
//Если условия не соблюдены
function valid(inp, el, mess) {
	inp.classList.remove('is-invalid');
	el.innerHTML = mess;
}