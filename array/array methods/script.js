const uno = ['vienas', 'du', 'trys']
const dos = ['keturi', 'penki', 'sesi']
const number = [1, 2, 3, 4, 5, 6]
////
//console.log(uno.concat(dos))
////
//console.log(uno.every(isNaN))
////
//const ran = ['number']
//console.log(ran.fill(2))
////
//console.log(dos.filter(isNaN))
////
//const bigNumber = (element) => element > 2;
//console.log(number.find(bigNumber))
////
//const findNumber = (element) => element > 1
//console.log(number.findIndex(findNumber))
////
//uno.forEach((element) => console.log(element));
////
//console.log(number.includes(1))
////
//console.log(number.indexOf(2))
////
//console.log(uno.join(dos))
////
//console.log(number.lastIndexOf(1))
////
//console.log(uno.length)
////
//const map1 = number.map((x) => x *2)
//console.log(map1)
////
//console.log(number.pop())
//console.log(number)
////
//console.log(number.push(6))
//console.log(number)
////
//const myReducer = (returnValue, currentValue) =>
 //   returnValue + currentValue * currentValue;
//console.log(number.reduce(myReducer))
////
//console.log(uno.reverse())
////
//console.log(number.shift())
//console.log(number)
////
//console.log(uno.slice(1))
////
//const even = (element) => element % 2 ===0
//console.log(number.some(even))
////
//console.log(uno.sort())
////
//console.log(uno.splice(1))
////
//console.log(uno.unshift('nulis'))
//console.log(uno)


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////



const user = {
    name: "Gytis",
    age: 18,
    city: "Kaunas",
    grades: [ 
        {
        subject: "Math",
        avarage: 8

        },
        {
            subject: "Python",
            avarage: 9
        }
    ],
    printInfo: function(){
        console.log(`Hello, i am ${this.name}, I am ${this.age}, i live in ${this.city}, and my grade are ${this.grades.map((element) => `${element.subject}: ${element.avarage}`)}, bye`)
    }

}


user.printInfo()

/////////////////////////////////////////////////////////////////

const zmogus = {}

const asmuo = Object.create(zmogus);
asmuo.vardas = "Gytis";
asmuo.pavarde = "Stravinskas";
asmuo.metai = 18;

//console.log(asmuo)

///////////////////////////////////////////

function zmogus2(vardas, pavarde, age){
    this.name = vardas;
    this.lastName = pavarde;
    this.age = age;
}
const person = new zmogus2("tomas", "tam", 22);
//console.log(person)

////////////////////////////////////////////////

console.log(user.name);
console.log(asmuo.metai)
console.log(person.lastName)

/////////////////////////////////////////////////

const keys = Object.keys(person)
console.log(keys)


const values = Object.values(person);
console.log(values);

const entrys = Object.entries(person);
console.log(entrys);

delete person.age;
console.log(person);



const {name, lastName} = person;
console.log(name);
console.log(lastName);

    
