

// console.log('1')
// const arr = Array.from({length: 30}, () => Math.floor(Math.random() * 21) + 5)
// console.log(arr)

// ///////////////////////////////////////////////

// console.log('2a')
// const number = arr.filter((element) => element > 10)
// console.log(number.length)

// ///////////////////////////////////////////////

// console.log('2b')
// function largestElement(arr) {
//     return arr.reduce((largest, current) =>
//         (current > largest ? current : largest), arr[0]);
// }
// const index = arr.indexOf(largestElement(arr));
// console.log(largestElement(arr), index);

// ///////////////////////////////////////////////

// console.log('2c')
// const lyginiai = arr.filter((x, index) => index % 2 === 0 ).reduce((prev, curr) => prev + curr)
// console.log(lyginiai)

// ///////////////////////////////////////////////

// console.log('2d')
// const masyvas = arr.map((value, index) => value - index)
// console.log(masyvas)

// ///////////////////////////////////////////////

// console.log('2e')
// const newArr = Array.from({length: 10}, () => Math.floor(Math.random() * 21) + 5)
// const arrays = masyvas.concat(newArr)
// console.log(arrays)

// ///////////////////////////////////////////////

// console.log('2f')
// const evenArr = array.filter((x) => x % 2 === 0);
// const oddArr = array.filter((x) => x % 2 !== 0);
// console.log(evenArr)
// console.log(oddArr)

// ///////////////////////////////////////////////

// console.log('2g')
// const evenToNull = evenArr.map((x, i) => {
//     if (i % 2 === 0 && x > 15){
//         return 0
//     }
//     return x
// })
// console.log(evenToNull)

// ///////////////////////////////////////////////

// console.log('2h')
// const indexas = array.filter((x) => x < 10)
// console.log(indexas);

// /////////////////////////////////////////////

// console.log('pratybos 1.2')
// console.log(1)

// let aRes = 0
// let bRes = 0
// let cRes = 0
// let dRes = 0

// const arrr = Array.from({length: 200}, () => 'abcd'[Math.floor(Math.random() * 4)])
// console.log(arr)

// arrr.forEach((x) => {
//     if (x === 'a'){
//         return aRes++
//     }else if (x === 'b'){
//         return bRes++
//     }else if (x === 'c'){
//         return cRes++
//     }else{
//         return dRes++
//     }
        
    
// })

// console.log(aRes)
// console.log(bRes)
// console.log(cRes)
// console.log(dRes)

// ///////////////////////////////////////////////

// console.log('2')

// let sortedArr = arr.sort()
// console.log(sortedArr)

// ///////////////////////////////////////////////

// console.log('3')

// const allNumbers = Array.from({ length: 900 }, (_, i) => i + 100).sort(() => Math.random() - 0.5);
// const array1 = allNumbers.slice(0, 100);
// const array2 = allNumbers.slice(100, 200);

// console.log(array1);
// console.log(array2);

// ///////////////////////////////////////////////

// console.log('4')

// const oneArr = Array.from({length: 100}, () => array1[Math.floor(Math.random() * 4)])

// console.log(oneArr)

// ///////////////////////////////////////////////

// console.log('5')




// const masiveArr = Array.from({length: 900}, () => allNumbers[Math.floor(Math.random() * 4)])
// const rlyMasive = allNumbers.slice(50, 150);

// console.log(rlyMasive)

// ///////////////////////////////////////////////

// console.log('6')

// const array = Array.from({length: 11}, () => Math.floor(Math.random() * 21) + 5)

// const pairwiseSums = array.slice(1).map((num, i) => num + array[i]);
// console.log(pairwiseSums);

// ///////////////////////////////////////////////

console.log('pratybos 1.3')
console.log('1')

const user = {
    name: 'Tomas',
    lastName: 'Tomavicius',
    age: 19,
    hobby: 'swiming, flying',

}
console.log(user)

user.alergies = 'peanut'

console.log(user)

///////////////////////////////////////////////

console.log('2')

delete user.alergies

console.log(user)

///////////////////////////////////////////////

console.log('3')

console.log(Object.keys(user));
console.log(Object.values(user));


// const check = Object.hasOwnPoperty('name')

///////////////////////////////////////////////

console.log('4')

const pazymiai = {
    lt: 10,
    math: 10,
    anglu: 5,
    info: 10
}

const mathP = Object.values(pazymiai).reduce((a, b) => a + b, 0);

console.log(mathP)

///////////////////////////////////////////////

console.log('5')

// function biggerValue(num) {
//     numbers.num = num.filter((n) => n > 15);
// }

const biggerValue = Object.values(pazymiai).filter((n) => n > 7);

console.log(biggerValue);

///////////////////////////////////////////////

console.log('6')

const users = {
    name: 'Gytis',
    lastName: 'gytavicius',
    age: 999,
    hobbys: 'drinking',

    printAllData: function(){
        console.log(`${this.name}, ${this.lastName}, ${this.age}, ${this.hobbys}`)
    }

}

users.printAllData()

//console.log(`${user.name}, ${user.lastName}, ${user.age}, ${user.hobby}`);    

///////////////////////////////////////////////

console.log('7')



const objLenght = Object.keys(user).length

console.log(objLenght)


///////////////////////////////////////////////