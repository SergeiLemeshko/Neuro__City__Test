async function getData(id) {
	try {
		let res = await fetch('https://reqres.in/api/users/' + id);
		return await res.json();
	} catch (error) {
		alert(error);
	}
}

let URLData = new URLSearchParams(window.location.search);
let id = URLData.get("user_id");

let postData = await getData(id);

function createUser(user) {
	let email = document.createElement("h3");
	let name = document.createElement("h3");
	let surname = document.createElement("h3");
	let avatar = document.createElement("img");

	email.textContent = user.email;
	name.textContent = user.first_name;
	surname.textContent = user.last_name;
	avatar.src = user.avatar;

	document.title = user.title;

	document.body.append(email);
	document.body.append(name);
	document.body.append(surname);
	document.body.append(avatar);
}

createUser(postData.data);
