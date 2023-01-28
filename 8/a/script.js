let fs = require('fs');
fs.readFile('text.txt', 'utf8', function (error, fileContent) {
	if (error) throw error; // если есть ошибка чтения файла 
	// console.log(fileContent);

	let data = invers(fileContent);
	// console.log(data);

	fs.writeFile('new.txt', data, function (error) {
		if (error) throw error;
		console.log(`Запись файла завершена. Содержимое файла: ${data}`);
	});
});

function invers(str) {
	return str.split("").reverse().join("");
}

















// "use strict"
// let fs = require('fs');
// fs.readFile('input.txt', 'utf8', function (error, fileContent) {
// 	if (error) throw error;

// 	let toWrite = invers(fileContent);

// 	fs.writeFile('output.txt', toWrite, function (error) {
// 		if (error) throw error;
// 		console.log('Данные успешно записаны в файл');
// 	});
// });

// function invers(str) {
// 	return str.split("").reverse().join("");
// }