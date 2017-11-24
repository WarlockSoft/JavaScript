"use strict";

var positions = [
  {
    title: '�������� ������� VZHIH-101',
    price: 10000,
    discount: 7,
    available: 3
  },
  {
    title: '��������� Mattel 2016',
    price: 9200,
    discount: 4,
    available: 14
  },
  {
    title: '��� �������� FORCE (����� ���)',
    price: 57000,
    discount: 0,
    available: 1
  }
];


console.log("������� 1:");

const itemPrototype = {
  hold(amount = 1) {
    if (this.available < amount) {
      return false;
    }
    this.available -= amount;
    this.holded += amount;
    return true;
  },
  toString() {
    return `${this.title} (������� ${this.available}, � ������� ${this.holded})`;
  },
  unhold(amount){
    if (amount && this.holded < amount){
      return false;
    }
    if (amount === undefined){
      this.available += this.holded;
      this.holded = 0;
    }
    else{
      this.available += amount;
      this.holded -= amount;
    }
    return true;
  }
  
  
  
};






function createItem(title, amount) {
  const item = Object.create(itemPrototype);
  item.title = title;
  item.available = amount;
  item.holded = 0;
  return item;
}

const items = [];
for (let item of positions) {
  items.push(createItem(item.title, item.available));
}

items[0].hold(2);
items[1].hold(8);
items[1].hold(12);
items[2].hold(1);

items[0].unhold(5);
items[1].unhold();


for (let item of items) {
  console.log(`����� ${item}`);
}


console.log("\n������� 2:");

const config = {
  get (){
    return this.price - this.price/100*this.discount;
  },
  set (newPrice){
    this.discount = ((this.price - newPrice)/this.price*100).toFixed(0);
  }
  
}

for (let item of positions) {
  Object.defineProperty(item, "finalPrice", config)
}
console.log(positions[1].finalPrice +  ' ' + positions[1].discount);
positions[1].discount = 15;
console.log(positions[1].finalPrice +  ' ' + positions[1].discount);
positions[1].finalPrice = 8000;
console.log(positions[1].finalPrice +  ' ' + positions[1].discount);


console.log("\n������� 3:");
function isValidPosition(form, fields){
  for (let item of fields){
    if (!form.hasOwnProperty(item)){
      return false;
    }
  }
  return true;
}

const requiredFields = [ 'title', 'price', 'discount' ];
let form1 = {
  title: '����� �������� ������� VZHIH-101',
  price: 7800,
  discount: 10
};
let form2 = {
  title: '����� �������� ������� VZHIH-101',
  discount: 10
}

if (isValidPosition(form1, requiredFields)){
  console.log('����� � 1 ��������� �����');
}
else{
  console.log('� ����� � 1 �� ��������� ����������� ����');
}

if (isValidPosition(form2, requiredFields)){
  console.log('����� � 2 ��������� �����');
}
else{
  console.log('� ����� �2 �� ��������� ����������� ����');
}

