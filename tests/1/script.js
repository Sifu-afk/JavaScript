console.log('pratybos 7')
console.log('1')

import { questions1} from "./test.js"

console.log(questions1)


const length = questions1.length

console.log(length)

//function running throu all of the questions

for (let i = 0; i < questions1.length; i++){

    let answer = prompt(`${questions1[i].question}, ${questions1[i].answers.map((x) => x.text)}`)
    var x = Number(answer)
    let position = x - 1

   if(questions1[i].answers[position].isCorrect){
    alert(`correct`)
   }else{
    alert(`incorrect`)
   }

}


    