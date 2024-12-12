console.log('1 //////////////////////////////////////////')

for(let i = 0; i < 11; i++){
    console.log(i)
}

console.log('2 //////////////////////////////////////////')

for(let i = 10; i > 0; i--){
    console.log(i)
}

console.log('3 //////////////////////////////////////////')

for(let i = 0; i < 11; i++){
    console.log(i++)
}

console.log('4 //////////////////////////////////////////')

for(let i = 0; i < 6; i++){
    if(i == 3){
        break
    }

    console.log(i)
}

console.log('5 //////////////////////////////////////////')


for(let i = 0; i < 11; i++){
    if (i == 7) continue

    console.log(i)
}
