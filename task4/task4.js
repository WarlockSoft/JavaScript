'use strict';

console.log('������� �1:');
function getWarrantyServiceSum(years) {
  // ����� ����� ���������� result?
  
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
    `�������������� ����������� ������������: ${warrantyServiceSum} Q`
  );
} else {
  console.log(`�������������� ����������� ������������ �� �������`);
}

console.log('\n������� �2:');
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
console.log(`���������� �������� � ����������: ${sumOfEngraving} Q`);

console.log('\n������� �3:');

function deliverGoods(needToDelivery, planet) {
  if (needToDelivery) {
    switch (planet) {
      case '����':
        return 150;
      case '����������� ����������':
        return 250;
      case '��������� ���������� ���������':
        return 550;
      case '���������� ������':
        return 650;
      case '������ ������':
        return '���� ����������';
      default:
        return NaN;
    }
  } else {
    return 0;
  }
}

var deliveryGoods = deliverGoods(true, '');

if (deliveryGoods == 0) {
  console.log(`�������� �� ���������`);
} else if (isNaN(deliveryGoods)) {
  console.log(`������ ��� ������� ��������� ��������`);
} else {
  if (typeof deliveryGoods === 'number') {
    deliveryGoods += ' Q.';
  }
  console.log(`��������� ��������: ${deliveryGoods}`);
}

console.log('\n������� �4:');
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
        case '����':
          return 150;
        case '����������� ����������':
          return 250;
        case '��������� ���������� ���������':
          return 550;
        case '���������� ������':
          return 650;
        case '������ ������':
          return '���� ����������';
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
var deliveryToPlanet = '��������� ���������� ���������';
var strToEngrave = '� ���� �������� ����, ������� ������!';
var orderData = order(
  3250,
  yearsToWarrantyService,
  strToEngrave,
  true,
  deliveryToPlanet
);
console.log(`����� ��������� ������: ${orderData[0]} Q.`);
console.log(
  `�� ��� ${orderData[1]} Q �� ����������� ������������ �� ${yearsToWarrantyService} ���/����.`
);
console.log(`���������� �� ����� ${orderData[2]} Q.`);
if (typeof orderData[3] === 'number') {
  orderData[3] += ' Q.';
}
console.log(`�������� � ������� ${deliveryToPlanet}: ${orderData[3]}`);
