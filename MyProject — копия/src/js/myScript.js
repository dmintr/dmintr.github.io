"use strict"

	let a = 5000
	let b = 10000
	let c = 15000 
	let start = 0
	let finish1
	let finish2
	let finish3
	



var design = prompt ("Дизайн \n" 
+ "Введите один из вариантов ответа \n"
+ "a - Шаблонный \n"
+ "b - Уникальный \n"
+ "c - Wow-дизайн \n"
);

console.log(design)

 if  (design == "a") {
	finish1 = start + a;
} else {
	finish1 = 0;
}

if  (design == "b") {
	finish1 = start + b;
} else {
	finish1 = 0;
}
if  (design == "c") {
	finish1 = start + c;
} else {
	finish1 = 0;
}

console.log(finish1)

var type = prompt ("Тип сайта \n" 
+ "Введите один из вариантов ответа \n"
+ "a - Сайт-визитка \n"
+ "b - Корпоративный сайт \n"
+ "c - Интернет-магазин \n"
);

console.log(type)

 if  (type == "a") {
	finish2 = start + a;
} else{
	finish2 = 0;
}

if  (type == "b") {
	finish2 = start + b;
} else{
	finish2 = 0;
}
if  (type == "c") {
	finish2 = start + c;
} else{
	finish2 = 0;
}

console.log(finish2)


var adapt = prompt ("Адаптивность сайта\n" 
+ "Введите один из вариантов ответа \n"
+ "a - Только ПК \n"
+ "b - Только мобильный сайт сайт \n"
+ "c - ПК + Мобильный \n"
);

console.log(adapt)

 if  (adapt == "a") {
	finish3 = start + a;
} else{
	finish3 = 0;
}

if  (adapt == "b") {
	finish3 = start + b;
} else{
	finish3 = 0;
}

if  (adapt == "c") {
	finish3 = start + c;
} else{
	finish3 = 0;
}

console.log(finish3)

let finish = finish1 + finish2 + finish3

console.log (finish)

alert ("Стоимость вашего сайта составляет " + finish + " рублей")









