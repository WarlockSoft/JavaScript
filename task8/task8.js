"use strict";

var positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    price: 10000,
    discount: 7,
    available: 3
  },
  {
    title: 'Ховерборд Mattel 2016',
    price: 9200,
    discount: 4,
    available: 14
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    price: 57000,
    discount: 0,
    available: 1
  }
];


console.log("Задание 1:");

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
    return `${this.title} (остаток ${this.available}, в резерве ${this.holded})`;
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
  console.log(`Товар ${item}`);
}


console.log("\nЗадание 2:");

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


console.log("\nЗадание 3:");
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
  title: 'Товар Телепорт бытовой VZHIH-101',
  price: 7800,
  discount: 10
};
let form2 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  discount: 10
}

if (isValidPosition(form1, requiredFields)){
  console.log('Форма № 1 заполнена верно');
}
else{
  console.log('В форме № 1 не заполнены необходимые поля');
}

if (isValidPosition(form2, requiredFields)){
  console.log('Форма № 2 заполнена верно');
}
else{
  console.log('В форме №2 не заполнены необходимые поля');
}

