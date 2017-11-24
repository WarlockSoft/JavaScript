"use strict";

console.log("Задание 1:");
const tax = 73;
var taxAmount = 0;
function calculateTax(){
  return function getTaxAmount(priceGood){
    taxAmount += priceGood/100*tax;
  }
}

const calcTax = calculateTax();
calcTax(100);
calcTax(100);
calcTax(100);

console.log(`Налог с продаж (73 %), к оплате: ${taxAmount} Q`);





console.log("\nЗадание 2:");
var paper = 30;
function willPack(){
  return function checkPaper(length, width, height){
    let squarePaper = 2*length*width + 2*length*height + 2*height*width;
    if (paper-squarePaper > 0){
      paper -= squarePaper
      return true;
    }
    else{
      return false;
    }
  }
}

const willPackGood = willPack();
var lengthGood1 = 2, widthGood1 = 1, heightGood1 = 1;
var lengthGood2 = 3, widthGood2 = 3, heightGood2 = 3;
var lengthGood3 = 1, widthGood3 = 2, heightGood3 = 1;

const good1 = willPackGood(lengthGood1,widthGood1,heightGood1);
if (good1){
  console.log(`Заказ (${lengthGood1}/${widthGood1}/${heightGood1} м) упакован, осталось упаковочной бумаги ${paper} м2`);
}
else{
  console.log(`Заказ (${lengthGood1}/${widthGood1}/${heightGood1} м) не упакован, осталось упаковочной бумаги ${paper} м2`);
}

const good2 = willPackGood(lengthGood2,widthGood2,heightGood2);
if (good2){
  console.log(`Заказ (${lengthGood2}/${widthGood2}/${heightGood2} м) упакован, осталось упаковочной бумаги ${paper} м2`);
}
else{
  console.log(`Заказ (${lengthGood2}/${widthGood2}/${heightGood2} м) не упакован, осталось упаковочной бумаги ${paper} м2`);
}

const good3 = willPackGood(lengthGood3,widthGood3,heightGood3);
if (good3){
  console.log(`Заказ (${lengthGood3}/${widthGood3}/${heightGood3} м) упакован, осталось упаковочной бумаги ${paper} м2`);
}
else{
  console.log(`Заказ (${lengthGood3}/${widthGood3}/${heightGood3} м) не упакован, осталось упаковочной бумаги ${paper} м2`);
}







console.log("\nЗадание 3:");
const arrayFuel = [5,7,2];
const arrayTeleport = [];
function startTeleport(teleportNumber){
  return function getTeleportFuel(){
    if (arrayFuel[teleportNumber] > 0){
      arrayFuel[teleportNumber]--;
      return console.log(`Телепорт ${teleportNumber} использован, заряд — ${arrayFuel[teleportNumber]} единиц`);
    }
    else{
      return console.log(`Телепорт ${teleportNumber} недоступен. Перезаряжается`);
    }
    
  }
}

for (let i=0; i<=arrayFuel.length-1;i++){
  arrayTeleport[i] = startTeleport(i);
}

arrayTeleport[0]();
arrayTeleport[0]();
arrayTeleport[0]();
arrayTeleport[0]();
arrayTeleport[0]();
arrayTeleport[0]();
arrayTeleport[1]();
arrayTeleport[1]();
arrayTeleport[1]();
arrayTeleport[1]();
arrayTeleport[1]();
arrayTeleport[1]();
arrayTeleport[1]();
arrayTeleport[1]();
arrayTeleport[2]();
arrayTeleport[2]();
arrayTeleport[2]();
arrayTeleport[2]();
arrayTeleport[2]();
