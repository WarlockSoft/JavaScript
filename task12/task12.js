"use strict";

console.log("������� 1:");
function checkCoupon(code){
  let exCode = /[a-z0-9]+/ig;
  let res = code.match(exCode);
  let newStr = "", newStr2 = "";
  let arrStr = [];
  for (let part of res){
    newStr += part;
  }
  if (newStr.length<10){
    return false;
  }
  else{
    arrStr = newStr.split("");
    for (let i = arrStr.length; i > 0; i--){
      newStr2 += arrStr[i-1];  
    }
    if (newStr.toLowerCase() === newStr2.toLowerCase()){
      return true;
    }
  }
  
}




let codes = [
  'Madam, I�m Adam',
  'A man, a plan, a canal. Panama',
  '----<-------Eve------->-----',
  '[__777-x-44-x-777__]',
  '1234564321',
  'Olson in Oslo'
];

for (let code of codes) {
  let result = checkCoupon(code) ? '��������' : '�� ��������';
  console.log(`��� �${code}� ${result}`);
}

console.log("\n������� 2:");

function stripTags(text){
  let expCode = /<(\/?[a-z]+)>/gi;
  let res = text.replace(expCode, "");
  return res;
}


const texts = [
  '<strong>����</strong> <em>����������</em> ������ � <u>����</u>!',
  '<EM>�������� ���</EM> � <strong>������</strong> ���!'
];

for (let text of texts) {
  console.log(stripTags(text));
}

console.log("\n������� 3:");

function validate(form, fields){
  let regExp = "", result = "";
  for (let field of fields){
    if (field.rule === "phone"){
      regExp = /\+7[0-9]{10}/;
      if (!form.phone.match(regExp)){
        return false;
      }      
    }
    else if (field.rule === "email"){
      regExp = /[a-z0-9-_]+@[a-z0-9-]+\.[a-z]+/;
      if (!form.email.match(regExp)){
        return false;
      }      
    }
    else if (typeof field.rule !== "string"){
      regExp = field.rule;
      if (!form.name.match(regExp)){
        return false;
      }
    }
  }
  
  return true;
}


const fields = [
  { name: 'name', rule: /^[a-z ]{5,}$/i },
  { name: 'email', rule: 'email' },
  { name: 'phone', rule: 'phone' }
];

const forms = [
  { name: 'Ivan Ivanov', email: 'ivan@test.co', phone: '+79212753690' },
  { name: 'III', email: 'ivan@test', phone: '11111' }
];

for (let form of forms) {
  console.log(form);
  if (validate(form, fields)) {
    console.log('������ ���');
  } else {
    console.log('����� ��������� �������');
  }
}
