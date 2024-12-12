// console.log('1 //////////////////////////////////////////')

// for(let i = 0; i < 11; i++){
//     console.log(i)
// }

// console.log('2 //////////////////////////////////////////')

// for(let i = 10; i > 0; i--){
//     console.log(i)
// }

// console.log('3 //////////////////////////////////////////')

// for(let i = 0; i < 11; i++){
//     console.log(i++)
// }

// console.log('4 //////////////////////////////////////////')

// for(let i = 0; i < 6; i++){
//     console.log(i * 2)
// }

// console.log('5 //////////////////////////////////////////')


// for(let i = 0; i < 11; i++){
//     if (i == 7) continue

//     console.log(i)
// }

// const leFamily = {
//     me: 33,
//     father: 55,
//     mother: 53,
//     sister: 32,
//     brother1: 28,
//     brother2: 25,
//     aunt: 61,
//     uncle: 60,
//     cousin1: 37,
//     cousin2: 37,
//     grandfather1: 79,
//     grandmother1: 77,
//     grandfather2: 81,
//     grandmother2: 80,
//     cat: 3,
//     dog: 7,
//     parrot: 2,
//   };

//   let amount = 0
  
//   for(let key in leFamily){
//     if(leFamily[key] > 65){
//         amount++
//     }
//   }

//   let lyginiai = 0
//   let nelyginiai = 0

//   for(let key in leFamily){
//     if(leFamily[key] % 2 === 0 ){
//          lyginiai++
//     }else{
//         nelyginiai++
//     }
//   }
  

const numbers = [4,21,5,78,8,34,7,2]

let sum = 0
for(let add of numbers){
    sum += add
}

console.log(sum)

const words = ['name', 'dog', 'teletubies', 'grinch']
let id = 0


for(let word of words){  
    console.log(`${words[id++]}, ${word.length} \n`)
}









let num =0


while(num <= 10){
    console.log(num)
    num++
}



let num1 = 10

while(num1 >= 0){
    console.log(num1)
    num1--
}




let num2 =0

while(num2 <= 10){
    if (num2 % 2 !== 0){
        console.log(num2)
    }

    
    num2++
}


