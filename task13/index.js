"use strict";
function rand(min, max) {
    return Math.ceil((max - min + 1) * Math.random()) + min - 1;
}

function generateId() {
    return Array(4).fill(1).map(value => rand(1000, 9999)).join('-');
}

const pointsInfo = [
    { title: 'Темная сторона Луны', coords: [500, 200, 97] },
    { title: 'Седьмое кольцо Юпитера', coords: [934, -491, 712] },
    { title: 'Саратов', coords: [30, 91, 77] }
];

console.log("Задание 1");
function OrdersTeleportationPoint(name, x, y, z){
    this.title = name;
    this.x = x;
    this.y = y;
    this.z = z;
}

OrdersTeleportationPoint.prototype.getDistance = function (x, y, z) {

    let distX = Math.pow((this.x - x),2);
    let distY = Math.pow((this.y - y),2);
    let distZ = Math.pow((this.z - z),2);

    return Math.sqrt(distX + distY + distZ);

};

const point = new OrdersTeleportationPoint('Темная сторона Луны', 500, 200, 97);
let distance = point.getDistance(100, -100, 33);
console.log(`Расстояние до пункта «${point.title}» составит ${distance.toFixed(0)} единиц`);


console.log("\nЗадание 2");


function OrdersTeleportationPointLocator(points){
    let i = 0;
    let obj = [];
    if (typeof points !== "object"){
        throw "wrong data";
    }
    for (let point of points){

        if (OrdersTeleportationPoint.prototype.isPrototypeOf(point)){
            obj[i] = {
                title : point.title,
                x : point.x,
                y : point.y,
                z : point.z}
            i++;
        }

    }
    this.obj = obj;

}

OrdersTeleportationPointLocator.prototype.getClosest = function (x,y,z){
    let dist = [];
    let i = 0;
    for (let object of this.obj){
        let distX = Math.pow((object.x - x),2);
        let distY = Math.pow((object.y - y),2);
        let distZ = Math.pow((object.z - z),2);
        dist[i] = Math.sqrt(distX + distY + distZ);
        i++;
    }
    let min = Math.min.apply(null, dist);
    let elemIndex = dist.indexOf(min);
    return this.obj[elemIndex];

}
const points = pointsInfo.map(point => new OrdersTeleportationPoint(point.title,...point.coords));

const locator = new OrdersTeleportationPointLocator(points);

const closestPoint = locator.getClosest(333, 294, 77);
console.log(`Ближайший пункт телепортации заказов «${closestPoint.title}»`);

const closestPoint2 = locator.getClosest(50, 294, 77);
console.log(`Ближайший пункт телепортации заказов «${closestPoint2.title}»`);


console.log("\nЗадание 3");

class LoyaltyCard{
    constructor(name, sum){
        this.owner = name;

        this.orders = [];

        this.append(sum);

        const config_id = {
            writable: false,
            enumerable: true,
            configurable: true,
            value: generateId()
        }

        Object.defineProperty(this, "id", config_id);

    }

    get balance(){
        return this.orders.reduce(function (memo, el){
            return memo+el;
        }, 0);
    }

    set balance(sum){

    }



    get discount(){

        if (this.balance < 3000){
            return 0;
        }
        else if(this.balance < 5000){
            return 3;
        }
        else if (this.balance<10000){
            return 5;
        }
        else {
            return 7;
        }

    }
    getFinalSum(summ){
        return summ-summ/100*this.discount;
    }

    append(summ){
        this.orders.push(summ);
    }

    show(){
        let strOrders = "", i = 0;;
        for (let order of this.orders){
            i++;
            strOrders += `  #${i} на сумму ${order} Q\n`;
        }
        return console.log(`Карта ${this.id}:\nВладелец: ${this.owner}\nБаланс: ${this.balance}\nТекущая скидка: ${this.discount}%\nЗаказы:\n${strOrders}`);
    }
}


const card = new LoyaltyCard('Иванов Иван', 6300);

let newOrderSum = 7000;
let finalSum = card.getFinalSum(newOrderSum);




console.log(`Итоговая сумма для заказа на ${newOrderSum} Q по карте
  составит ${finalSum} Q. Скидка ${card.discount} %.`);
card.balance=200000;
card.append(newOrderSum);
card.append(10000);
console.log(`Баланс карты после покупки ${card.balance} Q.`);
card.show();