"use strict";

const clients = [{
  name: 'Филип Фрай',
  email: 'fray@mail.un',
  isSubscribed: false,
  orders: [ 11700, 1980, 450, 5500 ]
}, {
  name: 'Бендер Сгибатель Родригес',
  email: 'bender.rodriges@rambler.un',
  isSubscribed: true,
  orders: [ 440, 226, 7650, 2990, 70 ]
}, {
  name: 'Доктор Джон Зоидберг',
  email: 'zoidberg-md@list.un',
  isSubscribed: true,
  orders: [ 720 ]
}];

console.log("Задание 1:");

clients.findByName = function (name){
  return this.find(function (client) {
      return client.name === name;
  });
}

const clientOne = clients.findByName('Доктор Джон Зоидберг');
console.log(clientOne.email); // zoidberg-md@list.un

const clientTwo = clients.findByName('Люрр');
console.log(typeof clientTwo); // undefined


console.log("\nЗадание 2:");

function compareByTotalSumm(left, right){
  
  let leftSumm = left.orders.reduce(function (memo, el){
    return memo+el;
  }, 0);
  
    let rightSumm = right.orders.reduce(function (memo, el){
    return memo+el;
  }, 0);
  
  if (leftSumm > rightSumm){
    return -1;
  }
  else if (leftSumm < rightSumm){
    return 1;
  }
  else {
    return 0;
  }
  
}


clients
  .sort(compareByTotalSumm)
  .forEach(client => console.log(client.name));
  
  
console.log("\nЗадание 3:");

function sendMail(email) {
  console.log(`Письмо отправлено на адрес ${email}`);
}

function getSubscribedEmails(list){
  let emailSet = new Set();
  // непонятно, зачем используете метод map, если не возвращаете никаких значений из функции итератора
 list.forEach(function (element){
    if (element.isSubscribed){
      emailSet.add(element.email); 
    }
  })
  
  return emailSet;
}

getSubscribedEmails(clients).forEach(sendMail);
