"use strict";

var positions = [
  'Телепорт бытовой VZHIH-101',
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)'
];

var prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];

var hitName = positions[2], hitPrice = prices[2];

console.log("Задание 1:");
let hit = {};
hit.name = hitName;
hit.price = hitPrice;
console.log(`Хит продаж мартобря: <${hit.name}> цена ${hit.price} Q`);

console.log("\nЗадание 2:");
var items = [];
for (let i = 0; i < positions.length; i++){
  let obj = {};
  obj.name = positions[i];
  obj.price = prices[i];
  items[i] = obj;
}

console.log(`Купите ${items[4].name} по цене ${items[4].price} Q`);


console.log("\nЗадание 3:");
function showDiscount(obj, cnt){
  var discount;
  if (cnt < 10){
    discount = 5;
  }
  else if (cnt < 50){
    discount = 7;
  }
  else if (cnt < 100){
    discount = 10;
  }
  else{
    discount = 15;
  }
  
  let price = obj.price * cnt - obj.price * cnt / 100 * discount;
  let discountSum = obj.price * cnt / 100 * discount;
  console.log(`${obj.name} - стоимость партии из ${cnt} штук ${price} Q (скидка ${discount}%), Ваша выгода составляет ${discountSum} Q`);
  
}

showDiscount(items[0], 12);
showDiscount(items[3], 97);




console.log("\nЗадание 4:");


items[3].amount = 4;
function updateAmount(obj, cnt = 1){
  if (!("amount" in obj)){
    return;
  }
  
  if (cnt > obj.amount || obj.amount == 0){
    console.log(`${obj.name} закончился на складе`);
  }
  else if (cnt < obj.amount){
    obj.amount = obj.amount - cnt;
    console.log(`${obj.name} - остаток ${obj.amount} шт`);
  }
  else{
    obj.amount = obj.amount - cnt;
    console.log(`Это был последний ${obj.name}, вам повезло!`);
  }
}

updateAmount(items[1], 17);
updateAmount(items[3], 3);
updateAmount(items[3]);





