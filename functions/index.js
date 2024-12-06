"use strict";

////////////////////////////////////////////////3

// let names;

// const nameSaver = (input) => {
//     names = input
// };

// nameSaver("tom");


////////////////////////////////////////////////4

// let countLogIns = 0;

// const sayingHello = (x) => {
//     countLogIns++;
//     console.log(`hello ${x} you logged in for ${countLogIns}`)
// };


// sayingHello(names);

////////////////////////////////////////////////5

// const income = (x, y) => {

//     let yearlyIncome = y * 12
//     console.log(`${x} is making ${yearlyIncome} yearly`)

// }

// income("Tom", 1666)

////////////////////////////////////////////////6

// const fuelUsage = (x, y) => {

//     let costs = Math.round(x * y)
//     console.log(`this trip cost ${costs}`)

// };

// fuelUsage(20, 1.32);

////////////////////////////////////////////////7

// const metai = (x) => {

//     let lyginiaiMetai = x % 2
//     if (lyginiaiMetai === 0) {
//         console.log(`siti metai yra lyginiai`)
//     }
//     else{
//         console.log(`siti metai nera lyginiai`)
//     }


// }

// metai(2043)

////////////////////////////////////////////////Pratybos 3 klausimas 1

// const x = parseInt(prompt(`Iveskite pirma numery`))
// const y = parseInt(prompt(`Iveskite antra numery`))

// console.log(`dvieju skaiciu suma lygi ${x+y}`)

//////// arba

// const suma = (x, y) => {
//     console.log(`dvieju skaiciu suma lygi ${x+y}`)
// }

// const x = parseInt(prompt(`Iveskite pirma numery`))
// const y = parseInt(prompt(`Iveskite antra numery`))

// suma(x, y);


////////////////////////////////////////////////2

// const x = parseInt(prompt(`Iveskite numery`))

// let ats = x**2

// console.log(`${x} numerio kvadratas yra ${ats}`)

/////// arba

// const kvadratas = (x) => {
//     let ats = x**2
//     console.log(`${x} numerio kvadratas yra ${ats}`)
// }

// const x = parseInt(prompt(`Iveskite numery`))
// kvadratas(x);

////////////////////////////////////////////////3

// const skaiciuTikrinimas = (x) => {
    
//     if (Math.sign(x) == 1){
//         console.log(`Number ${x} is positive`)
//     }
//     else{
//         console.log(`Number ${x} is negative`)
//     }

// }
// const x = parseInt(prompt(`Iveskite numery`))
// skaiciuTikrinimas(x);

////////////////////////////////////////////////4

// const words = (x, y) => {
//     console.log(`word conjunction is ${x + y}`)
// };

// const x = prompt(`Iveskite zody`);
// const y = prompt(`Iveskite zody`);

// words(x, y);

////////////////////////////////////////////////5

// const lyginiai = (x) => {
    
//     let lyginiaiskaiciai = x % 2

//     if (lyginiaiskaiciai == 0) {
//         console.log(`Lyginis`)
//     }
//     else{
//         console.log(`Nelyginis`)
//     }
// }

// const x = parseInt(prompt(`Iveskite zody`));
// lyginiai(x);

////////////////////////////////////////////////6

// const beLiekanos = (x, y) => {
//     let modulus = x % y; 
    
//     if (modulus == 0) {
//         console.log(`this numbers doesnt make decimals`)
//     }
//     else{
//         console.log(`this number makes decimals`)
//     };

// };

// const x = parseInt(prompt(`Input first number`));
// const y = parseInt(prompt(`Input second number`));

// beLiekanos(x, y);

////////////////////////////////////////////////7

// const bigNumber = (x, y, z) => {
//     let number = Math.max(x, y, z)
//     console.log(`the biggest number is ${number}`)
// }

// const x = parseInt(prompt(`Input first number`));
// const y = parseInt(prompt(`Input second number`));
// const z = parseInt(prompt(`Input third number`));
// bigNumber(x, y, z);

////////////////////////////////////////////////8

// const calcucation = (x, y, z, d) => {
//     let ats = x + y + z + d
//     console.log(`the result of calculations is ${ats}`)
// }

// const x = parseInt(prompt(`Input number`));

// calcucation(x, 22, 9, 5);

////////////////////////////////////////////////Pratybos 4 klausimas 1

// const advancedCalculations = (x) => {
//     let root = Math.round(Math.sqrt(x), 0)
//    console.log(`the answer is ${root}`)
// }

// const x = parseInt(prompt(`Input number`));
// advancedCalculations(x);

////////////////////////////////////////////////2

// const randomNumber = () => {
//     let x = Math.floor(Math.random() * 45) + 5;
//     console.log(`ats ${x}`)
// }
// randomNumber();

////////////////////////////////////////////////3

// const bigNumber = (x, y, z) => {
//     let number = Math.max(x, y, z)
//     console.log(`the biggest number is ${number}`)
// }

// const x = parseInt(prompt(`Input first number`));
// const y = parseInt(prompt(`Input second number`));
// const z = parseInt(prompt(`Input third number`));
// bigNumber(x, y, z);

