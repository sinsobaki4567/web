// Форма
document.getElementById("button_form").addEventListener("click", function(){
	document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
	document.querySelector(".popup").style.display = "none";
})

// Збереження в Local Storage
function save(){
	var field_1 = document.getElementById('username').value;
	var field_2 = document.getElementById('password').value;
	localStorage.setItem('Username',field_1);
	localStorage.setItem('Password',field_2)
}

// Збереження даних з форми (при перезавантажені дані зберігаються)
function load(){
	var save_field_1 = localStorage.getItem('Username');
	var save_field_2 = localStorage.getItem('Password');

	if(save_field_1){
		document.getElementById('username').value = save_field_1;
	}

	if(save_field_2){
		document.getElementById('password').value = save_field_2;
	}
}

load();

// Прокрутка сторінки
window.onload = function(){
	var scroll;
	var time;
	document.getElementById("top").onclick=function(){
		scroll = window.pageYOffset; //координати на яких ми знаходимось
		scrollUp(); //запускаємо функцію
	}

	// Плавна прокрутка
	function scrollUp(){
		if (scroll>0){
			window.scrollTo(0,scroll);
			scroll -= 100; //200 - швидкість прокрутки
			time = setTimeout(scrollUp,70); //кожні 70 мс
		}
		else{
			clearTimeout(time);
			window.scrollTo(0,0);
		}
	}
}
