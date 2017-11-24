"use strict";

const clients = [{
  name: '����� ����',
  email: 'fray@mail.un',
  isSubscribed: false,
  orders: [ 11700, 1980, 450, 5500 ]
}, {
  name: '������ ��������� ��������',
  email: 'bender.rodriges@rambler.un',
  isSubscribed: true,
  orders: [ 440, 226, 7650, 2990, 70 ]
}, {
  name: '������ ���� ��������',
  email: 'zoidberg-md@list.un',
  isSubscribed: true,
  orders: [ 720 ]
}];

console.log("������� 1:");

clients.findByName = function (name){
  return this.find(function (client) {
      return client.name === name;
  });
}

const clientOne = clients.findByName('������ ���� ��������');
console.log(clientOne.email); // zoidberg-md@list.un

const clientTwo = clients.findByName('����');
console.log(typeof clientTwo); // undefined


console.log("\n������� 2:");

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
  
  
console.log("\n������� 3:");

function sendMail(email) {
  console.log(`������ ���������� �� ����� ${email}`);
}

function getSubscribedEmails(list){
  let emailSet = new Set();
  // ���������, ����� ����������� ����� map, ���� �� ����������� ������� �������� �� ������� ���������
 list.forEach(function (element){
    if (element.isSubscribed){
      emailSet.add(element.email); 
    }
  })
  
  return emailSet;
}

getSubscribedEmails(clients).forEach(sendMail);
