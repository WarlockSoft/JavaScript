"use strict";

var goodsInStore = 25;
var goodsInOrder = 25;

var message;

if (goodsInOrder < goodsInStore){
  message = "Заказ оформлен";
}
else if (goodsInOrder > goodsInStore)  {
  message = "На складе нет такого количества товаров";
}
else{
  message =  "Вы забираете весь товар с нашего склада";
}

console.log("Задание 1: \n" + message);

var planet = "Луна";

console.log("\nЗадание 2:");
switch (planet){
	case "Луна": 
	  console.log(`Стоимость доставки для области ${planet} : 150Q`); 
	  break;
	case "Крабовидная туманность": 
	  console.log(`Стоимость доставки для области ${planet} : 250Q`); 
	  break;
	case "Галактика Туманность Андромеды": 
	  console.log(`Стоимость доставки для области ${planet} : 550Q`); 
	  break;
	case "Туманность Ориона": 
	  console.log(`Стоимость доставки для области ${planet} : 600Q`); 
	  break;
	case "Звезда Смерти": 
	  console.log(`Цена договорная`); 
	  break;
	default: 
	  console.log(`В ваш квадрант доставка не осуществляется`); 
	  break;	
}

var price = 30;
console.log("\nЗадание 3:");
try{
	if (typeof(price) !== "number")
		throw `Вы допустили ошибку: ${price} не является числом`;
	else
		console.log("Цена товара введена корректно.");
}
catch (err){
	console.log (err);
}


var planet = "Земля";
var age = 151;
console.log("\nДополнительное задание:");
if (planet == "Земля"){
  if (age < 18){
	  console.log("Вы не достигли совершеннолетия");
  }
  else{
	  console.log("Приятных покупок");    
  }
}
else if (planet == "Юпитер"){
  if (age < 120){
    console.log("Сожалеем. Вернитесь на 120-й день рождения!");  
  }
  else{
    console.log("Чистого неба и удачных покупок!");
  }
}
else {
	console.log("Спасибо, что пользуетесь услугами нашего магазина!");
}

