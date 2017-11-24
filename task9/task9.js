"use strict";


function showSpecialPrice() {
  console.log('������ ��������� ���. ��� ���� ��������� �����!');
}


console.log("������� 1:");
function fixAmount(amount) {
  if (typeof amount === "number"){
    return amount;
  }
  else{
    
    let result = amount.trim().replace(',', '.').split(" ").shift();
    if (isNaN(result)){
      return -1;
    }
    else{
      return result;
    }
  }
}


const orders = [
  { price: 21, amount: 4 },
  { price: 50, amount: '17 ����' },
  { price: 7, amount: '1,5 ����������' },
  { price: 2, amount: ' 2.7 ����� ' },
  { price: 1, amount: '���� ������' }
];


for (let order of orders) {
  let result = fixAmount(order.amount);
  console.log(`����� �� �����: ${result * order.price} Q`);
}

console.log("\n ������� 2:");

var secretKey = "";
function handleKey(char){
  secretKey += char;
  
  if (secretKey.indexOf("r2d2") !== -1 || secretKey.indexOf("R2d2") !== -1 || secretKey.indexOf("r2D2") !== -1 || secretKey.indexOf("R2D2") !== -1){
    showSpecialPrice();
  }
}

var keys = ['2', '4', 'R', '2', 'd', '2'];
for (let key of keys) {
  handleKey(key);
}

console.log("\n ������� 3:");

function parseData(cells, strs, delim=","){
  let arr = [];
  for (let i = 0; i < strs.length; i++){
    let CVSData = strs[i].split(delim);
    let obj = {};
    for (let i1 = 0; i1 < cells.length; i1++){
      obj[cells[i1]] = CVSData[i1].trim();
    } 
    arr[i] = obj;
  }
  
  return arr;
}


const data = [
  '12,�������� ������� VZHIH-101 ,17,10000',
  '77, ��� �������� FORCE (����� ���), 2,57000'
];


let items = parseData(['id', 'name', 'amount', 'price'], data);
console.log(items);
