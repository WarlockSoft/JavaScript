"use strict";

      var positions = [
        '�������� �������������� WHO-D',
        '��������� Mattel 2016',
        '������������� FLASH black edition',
        '��� �������� FORCE (����� ���)',
        '������ ������� DeLorean',
        '���������� �������� STAR-94',
        '���������� 000-17',
        '������������� ����������� WAY-Y'
      ]
      
var positionsLength = positions.length;
console.log("������� 1\n ������ ������������:");


for (var i=0; i<=positionsLength-1; i++){
  console.log(`${i+1} ${positions[i]}`);
}

console.log("\n������� 2");
positions.push("���������� Trooper-111", "�������������� ������� SEGUN", "������ ������ ����");

var positionsLength = positions.length;
console.log("������������� ������ ������������:");
for (var i=0; i<=positionsLength-1; i++){
  console.log(`${i+1} ${positions[i]}`);
}

console.log("\n������� 3");
var indexGoodToReceive = positions.indexOf("������ ������� DeLorean");
var goodToReceive = positions.splice(indexGoodToReceive, 1);
positions.unshift(goodToReceive[0]);
var positionsLength = positions.length;
console.log("������� � ������ �������:");
for (var i=0; i<=2; i++){
  console.log(`${i+1} ${positions[i]}`);
}

console.log("\n������� 4");
var [firstGood, secondGood, thirdGood, forthGood, fifthGood, ...restElements] = positions;
console.log(`� ��������: ${firstGood}, ${secondGood}, ${thirdGood}, ${forthGood}, ${fifthGood}. \n\n��������� ������: ${restElements} `);





