"use strict";

var positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    producer: {
      name: 'Рязанский телепортостроительный завод',
      deferPeriod: 10,
      lot: 3
    },
    price: 10000
  },
  {
    title: 'Ховерборд Mattel 2016',
    producer: {
      name: 'Волжский Ховерборд Завод',
      deferPeriod: 24,
      lot: 14
    },
    price: 9200
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    producer: {
      name: 'Тульский оружейный комбинат',
      deferPeriod: 5,
      lot: 1
    },
    price: 57000
  }
];

console.log("Задание 1:");

function lotCalculator(good, cnt){
  
  let obj={};
  obj.lots = Math.ceil(cnt/good.producer.lot);
  obj.total = obj.lots*good.producer.lot*good.price;
  
  return obj;
  
}

var obj1Cnt = 4;
let needOrder = lotCalculator(positions[1], obj1Cnt);
console.log(`${positions[1].title} ${obj1Cnt} штук: заказать партий ${needOrder.lots}, стоимость ${needOrder.total} Q`);
var obj2Cnt = 1000;
needOrder = lotCalculator(positions[0], obj2Cnt);
console.log(`${positions[0].title} ${obj2Cnt} штук: заказать партий ${needOrder.lots}, стоимость ${needOrder.total} Q`);

console.log("\nЗадание 2:");

const deferedPayments = [];

function deferPay(producer, amount, paymentDate){
  
  let dateNow = new Date(paymentDate);
  let dayNow = dateNow.getDate();
  const obj = {};
  dateNow.setDate(dayNow + producer.deferPeriod);
  obj.producer = producer;
  obj.amount = amount;
  obj.paymentDate = dateNow;
  deferedPayments.push(obj);

}

deferPay(positions[0].producer, 7500, "2017-11-03");
deferPay(positions[1].producer, 7500, "2017-11-03");



for (let i in deferedPayments){
  console.log(`${deferedPayments[i].paymentDate.toLocaleDateString('ru-Ru')} ${deferedPayments[i].producer.name}, сумма ${deferedPayments[i].amount}`);
}

console.log("\nЗадание 3:");

function loadCurrencyJSON() {
  return '{"AUD":44.95,"AZN":33.73,"GBP":73.42,"AMD":0.12,"BYN":30.96,"BGN":32.01,"BRL":18.8,"HUF":0.2,"DKK":8.42,"USD":58.85,"EUR":62.68,"INR":0.88,"KZT":0.18,"CAD":44.74,"KGS":0.85,"CNY":8.55,"MDL":2.94,"NOK":7.02,"PLN":14.55,"RON":13.92,"ZZZ":79.91,"SGD":41.36,"TJS":7.43,"TRY":15.97,"TMT":16.84,"UZS":0.02,"UAH":2.16,"CZK":2.32,"SEK":6.6,"CHF":58.69,"ZAR":4.4,"KRW":0.05,"JPY":0.52}';
}

function convertCurrency(amount, from, to){
  let coursesJSon = loadCurrencyJSON();
  let courses;
  if (coursesJSon){
    try{
      courses = JSON.parse(coursesJSon);
      from = courses[from];
      to = courses[to];
      return (from/to*amount).toFixed(2);      
    }
    catch (e){
      console.log(`ОШИБКА ${e}`);
    }
  }

}

let price1 = convertCurrency(7000, 'ZZZ', 'USD');
console.log(`Сумма ${price1} USD`);

let price2 = convertCurrency(790, 'EUR', 'ZZZ');
console.log(`Сумма ${price2} Q`);


