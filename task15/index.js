"use strict";

console.log("Задание 1:");

class BarcodeGenerator{
    constructor(size){
        this.size = size;
    }



    create(){
        let num = "";

        for (let i=1; i<=this.size; i++){

            num += Math.floor(Math.random() * (9 - 0)) + 0;
        }
        if (generator[BarcodeGenerator.prefix]){
            num = generator[BarcodeGenerator.prefix] + '-' + num;
        }
        return num;
    }
}


const generator = new BarcodeGenerator(4);

generator[BarcodeGenerator.prefix] = 'AA';
console.log(generator.create());

generator[BarcodeGenerator.prefix] = 'XX';
console.log(generator.create());
console.log(generator.create());
console.log(generator.create());

delete generator[BarcodeGenerator.prefix];
console.log(generator.create());


console.log("\nЗадание 2:");


class HexRange{
    constructor(from, to){
        this.from = from;
        this.to = to;
    }

    [Symbol.iterator](){
        let curNum = this.from;
        const self = this;
        const iterator = {
            next(){
                let num = curNum++;
                return {
                    done: curNum > self.to,
                    value: num.toString(16)
                }
            }
        }
        return iterator;
    }
}

let queue = new HexRange(247, 253);
console.log(...queue);

console.log("\nЗадание 3:");

class DateRange extends Date{
    constructor(from, to){
        super();
        this.from = from;
        this.to = to;
    }


    [Symbol.iterator](){
        let curDate = this.from;
        const self = this;
        const iterator = {
            next(){

                let newDate = new Date(curDate);

                let day = newDate.getDay();

                if (day === 6){
                    newDate.setDate(newDate.getDate() + 2);
                    curDate.setDate(curDate.getDate() + 2);

                }
                else if (day === 0){
                    newDate.setDate(newDate.getDate() + 1);
                    curDate.setDate(curDate.getDate() + 1);
                }
                else{
                    curDate.setDate(curDate.getDate() + 1);
                }


                return {
                    done: curDate > self.to,
                    value: newDate
                }
            }
        }
        return iterator;
    }

}


const from = new Date(2017, 2, 13, 23, 59);
const to = new Date(2017, 2, 21, 0, 1);
console.log(to);
let range = new DateRange(from, to);

console.log(range);
for (let day of range) {
    console.log(day.toLocaleDateString('ru-Ru'));
}