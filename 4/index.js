async function getData() {
	try {
		let res = await fetch('https://reqres.in/api/users');
		return await res.json();
	} catch (error) {
		alert(error);
	}
}

let list = await getData();

//Сортировка
let sort = list.data.sort(function (a, b) {
	if (a['first_name'] < b['first_name']) return -1;
});

function createList(data) {
	let ul = document.createElement('ul')
	for (const item of data) {
		//создание списка
		let li = document.createElement('li');
		let a = document.createElement('a');
		a.textContent = item.first_name;
		//id для каждого usera
		a.href = "user.html?user_id=" + item.id;
		li.append(a);
		ul.append(li);
	}
	document.body.append(ul);
}
createList(list.data);