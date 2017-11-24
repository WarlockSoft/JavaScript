"use strict";

console.log("������� 1:");
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

console.log(`����� � ������ (73 %), � ������: ${taxAmount} Q`);





console.log("\n������� 2:");
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
  console.log(`����� (${lengthGood1}/${widthGood1}/${heightGood1} �) ��������, �������� ����������� ������ ${paper} �2`);
}
else{
  console.log(`����� (${lengthGood1}/${widthGood1}/${heightGood1} �) �� ��������, �������� ����������� ������ ${paper} �2`);
}

const good2 = willPackGood(lengthGood2,widthGood2,heightGood2);
if (good2){
  console.log(`����� (${lengthGood2}/${widthGood2}/${heightGood2} �) ��������, �������� ����������� ������ ${paper} �2`);
}
else{
  console.log(`����� (${lengthGood2}/${widthGood2}/${heightGood2} �) �� ��������, �������� ����������� ������ ${paper} �2`);
}

const good3 = willPackGood(lengthGood3,widthGood3,heightGood3);
if (good3){
  console.log(`����� (${lengthGood3}/${widthGood3}/${heightGood3} �) ��������, �������� ����������� ������ ${paper} �2`);
}
else{
  console.log(`����� (${lengthGood3}/${widthGood3}/${heightGood3} �) �� ��������, �������� ����������� ������ ${paper} �2`);
}







console.log("\n������� 3:");
const arrayFuel = [5,7,2];
const arrayTeleport = [];
function startTeleport(teleportNumber){
  return function getTeleportFuel(){
    if (arrayFuel[teleportNumber] > 0){
      arrayFuel[teleportNumber]--;
      return console.log(`�������� ${teleportNumber} �����������, ����� � ${arrayFuel[teleportNumber]} ������`);
    }
    else{
      return console.log(`�������� ${teleportNumber} ����������. ��������������`);
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
