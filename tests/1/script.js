console.log('pratybos 7')
console.log('1')

import { questions1} from "./test.js"

console.log(questions1)


const length = questions1.length

console.log(length)

for (let i = 0; i < questions1.length; i++){

    let question = prompt(`${questions1[i].question}, ${questions1[i].answers.map((x) => x.text)}`)

    if(question == questions1[i].answers.map((x) => x.isCorrect)){
        alert('you are correct')
    }else{
        alert('INCORECT')
    }

   
}


    