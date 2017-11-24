"use strict";

      var positions = [
        'Отвертка ультразвуковая WHO-D',
        'Ховерборд Mattel 2016',
        'Нейтрализатор FLASH black edition',
        'Меч световой FORCE (синий луч)',
        'Машина времени DeLorean',
        'Репликатор домашний STAR-94',
        'Лингвенсор 000-17',
        'Целеуказатель электронный WAY-Y'
      ]
      
var positionsLength = positions.length;
console.log("Задание 1\n Список наименований:");


for (var i=0; i<=positionsLength-1; i++){
  console.log(`${i+1} ${positions[i]}`);
}

console.log("\nЗадание 2");
positions.push("Экзоскелет Trooper-111", "Нейроинтерфейс игровой SEGUN", "Семена дерева Эйва");

var positionsLength = positions.length;
console.log("Окончательный список наименований:");
for (var i=0; i<=positionsLength-1; i++){
  console.log(`${i+1} ${positions[i]}`);
}

console.log("\nЗадание 3");
var indexGoodToReceive = positions.indexOf("Машина времени DeLorean");
var goodToReceive = positions.splice(indexGoodToReceive, 1);
positions.unshift(goodToReceive[0]);
var positionsLength = positions.length;
console.log("Принять в первую очередь:");
for (var i=0; i<=2; i++){
  console.log(`${i+1} ${positions[i]}`);
}

console.log("\nЗадание 4");
var [firstGood, secondGood, thirdGood, forthGood, fifthGood, ...restElements] = positions;
console.log(`В магазине: ${firstGood}, ${secondGood}, ${thirdGood}, ${forthGood}, ${fifthGood}. \n\nОстальные товары: ${restElements} `);





