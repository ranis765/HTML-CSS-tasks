


// Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");


// Получить кнопку "Связаться"
var contact_btn = document.getElementById("contact");

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];




var bt = document.getElementById("contact");
let jin = document.getElementById("first_name");
let adf = document.getElementById("email");
let com = document.getElementById("comment");


jin.addEventListener('keydown', function (e) {
	if (e.key.match(/[0-9]/)) return e.preventDefault();
}); // Будет перехватывать все числа при ручном вводе. 
// Тажке нужна, чтобы replace не сбрасывал каретку, срабатывая каждый раз.

jin.addEventListener('input', function (e) {
	// На случай, если умудрились ввести через копипаст или авто-дополнение.
	jin.value = jin.value.replace(/[0-9]/g, "");
});



bt.addEventListener('click', function () {
	let val = jin.value;
	let ad = adf.value;
	let em = com.value;
	if (val, ad, em) {
		alert(`Вы успешно зарегистрировались`);
	} else {
		alert("Заполните данные");
	}
});


// Функция очистки
function clearInputs() {
	var inputs = document.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].value = '';
	}
}
// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function () {
	modal.style.display = "block";
}


// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function () {
	modal.style.display = "none";
	clearInputs();
}


// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}

}