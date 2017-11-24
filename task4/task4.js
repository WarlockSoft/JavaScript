'use strict';

console.log('Задание №1:');
function getWarrantyServiceSum(years) {
  // зачем тогда переменная result?
  
  if (years == 1) {
    return 1250;
  } else if (years == 2) {
    return 2300;
  } else {
    return 0;
  }
}
var warrantyServiceSum = getWarrantyServiceSum(0);
if (warrantyServiceSum > 0) {
  console.log(
    `Дополнительное гарантийное обслуживание: ${warrantyServiceSum} Q`
  );
} else {
  console.log(`Дополнительное гарантийное обслуживание не выбрано`);
}

console.log('\nЗадание №2:');
function getSumOfEngraving(engravingStr) {
  function countWordsForEngraving(engravingStr) {
    return engravingStr.split(' ');
  }
  if (engravingStr) {
    var wordsForEngraving = countWordsForEngraving(engravingStr);
    return wordsForEngraving.length * 11;
  } else {
    return 0;
  }
}

var sumOfEngraving = getSumOfEngraving('');
console.log(`Подарочная упаковка и гравировка: ${sumOfEngraving} Q`);

console.log('\nЗадание №3:');

function deliverGoods(needToDelivery, planet) {
  if (needToDelivery) {
    switch (planet) {
      case 'Луна':
        return 150;
      case 'Крабовидная туманность':
        return 250;
      case 'Галактика Туманность Андромеды':
        return 550;
      case 'Туманность Ориона':
        return 650;
      case 'Звезда Смерти':
        return 'Цена договорная';
      default:
        return NaN;
    }
  } else {
    return 0;
  }
}

var deliveryGoods = deliverGoods(true, '');

if (deliveryGoods == 0) {
  console.log(`Доставка не требуется`);
} else if (isNaN(deliveryGoods)) {
  console.log(`Ошибка при расчете стоимости доставки`);
} else {
  if (typeof deliveryGoods === 'number') {
    deliveryGoods += ' Q.';
  }
  console.log(`Стоимость доставки: ${deliveryGoods}`);
}

console.log('\nЗадание №4:');
function order(orderSumm, years, engravingStr, needToDelivery, planet) {
  function _getWarrantyServiceSum(years) {
    if (years == 1) {
      return 1250;
    } else if (years == 2) {
      return 2300;
    } else {
      return 0;
    }
  }

  function _getSumOfEngraving(engravingStr) {
    function countWordsForEngraving(engravingStr) {
      return engravingStr.split(' ');
    }
    if (engravingStr) {
      var wordsForEngraving = countWordsForEngraving(engravingStr);
      return wordsForEngraving.length * 11;
    } else {
      return 0;
    }
  }

  function _deliverGoods(needToDelivery, planet) {
    if (needToDelivery) {
      switch (planet) {
        case 'Луна':
          return 150;
        case 'Крабовидная туманность':
          return 250;
        case 'Галактика Туманность Андромеды':
          return 550;
        case 'Туманность Ориона':
          return 650;
        case 'Звезда Смерти':
          return 'Цена договорная';
        default:
          return NaN;
      }
    } else {
      return 0;
    }
  }


  var warrantyServiceSum = _getWarrantyServiceSum(years);

  var sumOfEngraving = _getSumOfEngraving(engravingStr);

  var deliveryGoods = _deliverGoods(needToDelivery, planet);

  if (isNaN(deliveryGoods)) {
    orderSumm = orderSumm + warrantyServiceSum + sumOfEngraving;
  } else {
    orderSumm = orderSumm + warrantyServiceSum + sumOfEngraving + deliveryGoods;
  }

  return [orderSumm, warrantyServiceSum, sumOfEngraving, deliveryGoods];
}

var yearsToWarrantyService = 2;
var deliveryToPlanet = 'Галактика Туманность Андромеды';
var strToEngrave = 'С днем рождения тебя, Василий Пупкин!';
var orderData = order(
  3250,
  yearsToWarrantyService,
  strToEngrave,
  true,
  deliveryToPlanet
);
console.log(`Общая стоимость заказа: ${orderData[0]} Q.`);
console.log(
  `Из них ${orderData[1]} Q за гарантийное обслуживание на ${yearsToWarrantyService} год/года.`
);
console.log(`Гравировка на сумму ${orderData[2]} Q.`);
if (typeof orderData[3] === 'number') {
  orderData[3] += ' Q.';
}
console.log(`Доставка в область ${deliveryToPlanet}: ${orderData[3]}`);
