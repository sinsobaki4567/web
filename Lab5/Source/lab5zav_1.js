var person_1 = {
	surname:"Kalinovska", 
	name:"Bohdana", 
	data:"6/1/2001", 
	gender:"F"
};

var person_2 = {
	surname:"Elo", 
	name:"Mark", 
	data:"7/12/1986", 
	gender:"M"
};

var person_3 = {
	surname:"Yk", 
	name:"Ik", 
	data:"23/5/1992", 
	gender:"F"
};

//Повертає слово без голосних букв
function removeVowels(word){              
    return word.replace(/[aeiouy]/gi, "");
}

//Повертає слово без приголосних букв
function removeConsonant(word){              
    return word.replace(/[bcdfghjklmnpqrstvwxz]/gi, "");
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Фамілія

function lenght_surname(word){
	var new_surname = "";
	var len = 0;

	//Якщо фамілія складається більше ніж з 3 приголосні або 3 приголосні, удаляємо всі голосні записуємо тільки перші 3 приголосні (переводимо все в верхній регістр)
	if(removeVowels(word).length >= 3){
		for(var i=0; i<3; i++){
			new_surname +=removeVowels(word.toUpperCase())[i];
		}
		return new_surname;
	}

	//Якщо приголосних менше 3 + голосні в тому порядку
	if(removeVowels(word).length < 3 && word.length >= 3){
		new_surname = removeVowels(word.toUpperCase());
		len = 3 - new_surname.length;
		for(var i=0; i<len; i++){
			new_surname += removeConsonant(word.toUpperCase())[i];
		}
		return new_surname;
	}

	if(word.length < 3){
		var z = "XXX";
		len = 3 - word.length;
		new_surname = word.toUpperCase();
		for(var i = 0; i<len; i++){
			new_surname += z[i];
		}
		return new_surname;
	}
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Ім'я

function lenght_name(word){
	var new_name = "";
	var len = 0;

	//Якщо ім'я складається з рівно з 3 приголосних то виводимо їх в тому ж порядку
	if(removeVowels(word).length == 3){
		new_name=removeVowels(word.toUpperCase());
		return new_name;
	}
	
	//Якщо ім'я складається більше ніж з 3 приголосні виводимо 1,3,4 (переводимо все в верхній регістр)
	if(removeVowels(word).length > 3){
		for(var i=0; i<4; i++){
			if(i==1){
				continue;
			}
			new_name +=removeVowels(word.toUpperCase())[i];
		}
		return new_name;
	}

	//Якщо ім'я складається менш ніж з 3 приголосних: додаємо в кінець голосні (переводимо все в верхній регістр)
	if(removeVowels(word).length < 3 && word.length >= 3){
		new_name = removeVowels(word.toUpperCase());
		len = 3 - new_name.length;
		for(var i=0; i<len; i++){
			new_name += removeConsonant(word.toUpperCase())[i];
		}
		return new_name;
	}

	//Якщо ім'я складається менше ніж з 3 букв то виводимо їх спочатку приголосні потім голосні і поки не стане 3 букви додаємо X (переводимо все в верхній регістр)
	if(word.length < 3){
		var z = "XXX";
		new_name = removeVowels(word.toUpperCase()) + removeConsonant(word.toUpperCase());
		len = 3 - new_name.length;
		for(var i = 0; i<len; i++){
			new_name += z[i];
		}
		return new_name;
	}
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Дата і стать

function data_division(data, gender){
	var day ="";
	var month ="";
	var year ="";
	day=data.split('/')[0]; //зчитування до знака /
	month=data.split('/')[1];
	year=data.split('/')[2];

	var new_year = year[2]+year[3]; //з 2001 робимо 01 - за умовою
	var new_day = "";

	//Робота з днем
	if(gender === "F"){
		new_day=parseInt(day)+40; //parseInt - перетворює строку в число
	}
	if(gender === "M" && day < 10){
		new_day="0"+day;
	}
	if(gender === "M" && day >= 10){
		new_day=day;
	}

	var list_months = { 
		1: "A", 
		2: "B", 
		3: "C", 
		4: "D", 
		5: "E", 
		6: "H", 
		7: "L", 
		8: "M", 
		9: "P", 
		10: "R", 
		11: "S", 
		12: "T" 
	};

	var new_month=list_months[month];
	var full_data = new_year + new_month + new_day;
	return full_data; 

}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("-------Завдання №1-------");
console.log("Person_1:");
console.log("       "+"surname:" + person_1.surname);
console.log("       "+"name:" + person_1.name);
console.log("       "+"data:" + person_1.data);
console.log("       "+"gender:" + person_1.gender);
console.log("Ідентифікаційний код:");
console.log( lenght_surname(person_1.surname) + lenght_name(person_1.name) + data_division(person_1.data, person_1.gender));
console.log(" ");

console.log("Person_2:");
console.log("       "+"surname:" + person_2.surname);
console.log("       "+"name:" + person_2.name);
console.log("       "+"data:" + person_2.data);
console.log("       "+"gender:" + person_2.gender);
console.log("Ідентифікаційний код:");
console.log(lenght_surname(person_2.surname) + lenght_name(person_2.name) + data_division(person_2.data, person_2.gender));
console.log(" ");

console.log("Person_3:");
console.log("       "+"surname:" + person_3.surname);
console.log("       "+"name:" + person_3.name);
console.log("       "+"data:" + person_3.data);
console.log("       "+"gender:" + person_3.gender);
console.log("Ідентифікаційний код:");
console.log(lenght_surname(person_3.surname) + lenght_name(person_3.name) + data_division(person_3.data, person_3.gender));
console.log(" ");
