console.log('/// 1 ///')

const numbers = [1, 2, 3, 4, 5]

for (let element of numbers){

    console.log(element)

}

console.log('/// 2 ///')

const library = [
    'Dracula',
    'The Thursday Murder Club',
    'Dune',
    'Bridgerton',
    'Normal People',
    '1984'
]

let id = 0

for(let word of library){  
    if(word.length < 10){
        console.log(word)
    }
}

console.log('/// 3 ///')

const bike = {
    name: 'kawasaki',
    color: 'orange',
    fuelcons: '8l/100km',
    enginepw: '1000cc'
}

console.log(Object.values(bike));