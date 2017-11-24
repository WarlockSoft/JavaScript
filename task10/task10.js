const items = [
  {
    title: '�������� ������� VZHIH-101',
    available: 7,
    holded: 0
  },
  {
    title: '��������� Mattel 2016',
    available: 4,
    holded: 5
  },
  {
    title: '��� �������� FORCE (����� ���)',
    available: 1,
    holded: 1
  }
];


console.log("������� 1:");

const itemPrototype = {
  sell(field, amount = 1) {
    if (this[field] < amount) {
      throw `������������ ������ ��� ������� (${this[field]} �� ${amount})`
    }
    this[field] -= amount;
    return true;
  },
  sellHolded(amount = 1) {
    return itemPrototype.sell.call(this, 'holded', amount);
  },
  sellAvailable(amount = 1) {
    return itemPrototype.sell.call(this, 'available', amount);
  }
};

function sellItem(item, amount, isHolded){
  try{
    if (isHolded){
        itemPrototype.sellHolded.call(item, amount);
    }
    else{
        itemPrototype.sellAvailable.call(item, amount);
    }
  }
  catch(e){
    console.log(e);
  }
}

sellItem(items[2], 3);
console.log(items[2].available);
console.log(items[2].holded); 

sellItem(items[1], 4, true);
console.log(items[1].available); 
console.log(items[1].holded); 

const item = { available: 0, holded: 1 };
sellItem(item, 1, true);
console.log(item.available); 
console.log(item.holded); 

console.log("\n������� 2:");

function formatFull() {
  return `${this.title}:\n\t�������� ${this.available} ��.\n\t� ������� ${this.holded} ��.`;
}

function formatLite() {
  return `${this.title} (${this.available} + ${this.holded})`;
}

function formatUser() {
  return `${this.title} (� �������: ${this.available}, ���������������: ${this.holded})`;
}

function show(format) {
  console.log(format);
}

function showItems(list, formatter){
  for (let item of list){
    show(formatter.call(item));
  }
}

showItems(items, formatFull);
console.log('---');
showItems(items, formatLite);
console.log('---');
showItems(items, formatUser);

console.log("\n������� 3:");

function createButton(title, onclick) {
  
  return {
    title,
    onclick,
    click() {
      this.onclick.call(this);
    }
  };
}

function createBuyButtons(items){
  let buttons = [], i = 0;
  for (let item of items){
    buttons[i] = createButton("������", () => showResult(item));
    i++;
  }
  
  return buttons;
}

function showResult(item){
  console.log(`${item.title} �������� � ������� `);
}

const buttons = createBuyButtons(items);
buttons[0].click();
buttons[2].click();
buttons[1].click();
buttons[0].click();
