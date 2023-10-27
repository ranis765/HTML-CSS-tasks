var images = document.querySelectorAll('.smallImage')

images.forEach(function (image) {
	image.addEventListener('click', function (event) {
		setBigImage(event);
	});
});

function setBigImage(event) {
	const clicked = event.target.src;
	let bigImage = document.querySelector('.bigimage');
	event.target.src = bigImage.src;
	bigImage.src = clicked;

}



// Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");


// Получить кнопку "Связаться"
var contact_btn = document.getElementById("contact");

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// для запрета ввода чисел в строку Имя
document.getElementById("telefon_num").addEventListener('input', restrictToInteger);

function restrictToInteger() {
	this.value = this.value.replace(/[^\d.]/g, '');
}


var bt = document.getElementById("contact");
let jin = document.getElementById("first_name");
let adf = document.getElementById("telefon_num");


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
	if (val, ad) {
		alert(`Здравствуйте ${val}, ваш номер телефона:${ad}`);
	} else {
		alert("Введите имя и номер телефона!");
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

// Когда пользователь нажимает на кнопку "Связаться"
contact_btn.onclick = function () {
	modal.style.display = "none";
	clearInputs();
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



const BIGimage = document.querySelector('.bigimage');
var sliderContainer = document.querySelectorAll('.smallImage');
var sliderPrev = document.getElementById('prev');
var sliderNext = document.getElementById('next');

var sliderIndex = 0;
const sliderLength = document.querySelectorAll('.smallImage').length;

function position(index) {

	BIGimage.src = sliderContainer[index].src;
}

sliderNext.addEventListener("click", () => {
	sliderIndex = (sliderIndex + 1) % sliderLength;
	position(sliderIndex);

});
sliderPrev.addEventListener("click", () => {
	sliderIndex = (sliderIndex - 1 + sliderLength) % sliderLength;
	position(sliderIndex);

});









