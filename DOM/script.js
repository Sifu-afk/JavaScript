const h1 = document.getElementsByTagName('h1')
console.log(h1)

const p1 = document.getElementsByClassName('p1')
console.log(p1)

const myDiv = document.getElementById('myDiv')
console.log(myDiv)

console.log('+++++++++++++++++++++++++++++++')

const universalSingle = document.querySelector('h1')
const universalSingle1 = document.querySelector('.p2')
const universalSingle2 = document.querySelector('#myDiv')


// console.log(universalSingle)
// console.log(universalSingle1)
// console.log(universalSingle2)

const universalAll = document.querySelectorAll('p')
console.log(universalAll)

console.log('+++++++++++++++++++++++++++++++')

universalSingle.setAttribute('class', 'h1')
universalSingle.id = 'mainHeading'

universalAll.forEach((el) => console.log(el.getAttribute('class')))

console.log('+++++++++++++++++++++++++++++++')

universalSingle2.classList.add('myDiv')
//universalSingle2.classList.remove('myDiv')
universalSingle2.classList.replace('myDiv', 'notDiv')

const checkIsContaining = universalSingle2.classList.contains('notDiv')
console.log(checkIsContaining)

function changeColor() {
    if(window.innerWidth < 400){
        universalSingle2.classList.add('class2')
        universalSingle2.classList.remove('class1')
    }else{
        universalSingle2.classList.add('class1')
        universalSingle2.classList.remove('class2')
    }

}

window.addEventListener('resize', changeColor)

console.log('+++++++++++++++++++++++++++++++')

const changeP2Color = document.querySelector('.p2')
changeP2Color.style.color = '#f6ff00'

changeP2Color.style.color = '#f6ff00'
changeP2Color.style.backgroundColor = 'black'
changeP2Color.style.padding = '20px'

console.log('+++++++++++++++++++++++++++++++')

const containerDiv = document.getElementById('containerDiv');
const myImage = document.createElement('img');
myImage.setAttribute('src', 'data:image/jpeg;base64,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');

myImage.alt='mountain standing on earth'
myImage.style.width = '300px'

//containerDiv.appendChild(myImage)
// containerDiv.append

const textNode = document.createElement('p')

textNode.innerText = 'this is a mountain that is standing on earth'
//textNode.textContent = 'this is a mountain that is standing on earth'

containerDiv.append(myImage, textNode)

let click = false
textNode.addEventListener('click', ()=>{
    // textNode.style.fontSize = '20px'
    // textNode.style.color = 'red'
        myImage.classList.toggle('class2')
        myImage.classList.toggle('class1')
})


//////////////////////////////////////////////////////
console.log('//////  1   //////')

////Creates HTML elements and adds  text to it
const textNode1 = document.createElement('p')
textNode1.innerText = 'hallo gunter bunger '

//////////////////////////////////////////////////////
console.log('//////  2   //////')

//create element that take DOM elements into html and then i append previous text node
const divNode = document.createElement('div')
containerDiv.appendChild(divNode)
divNode.appendChild(textNode1)


//////////////////////////////////////////////////////
console.log('//////  3   //////')


////add classes and id to elements
divNode.setAttribute('class', 'myClass')
divNode.setAttribute('id', 'myld')


//Creates HTML elements
const aNode = document.createElement('a')
const imgNode = document.createElement('img')

//it puts DOM elements into html
divNode.append(aNode, imgNode)

////add classes and id to elements
aNode.setAttribute('href', '#')
imgNode.setAttribute('src', '')

//////////////////////////////////////////////////////
console.log('//////  4   //////')

//Creates HTML elements
const wrapperNode = document.createElement('div')
const p1Node = document.createElement('p')
const p2Node = document.createElement('p')
const p3Node = document.createElement('p')
const p4Node = document.createElement('p')

//add classes and id to elements
wrapperNode.setAttribute('class', 'wrap')
wrapperNode.setAttribute('id', 'wraper')
p1Node.setAttribute('class', 'pColor1')
p2Node.setAttribute('class', 'pColor1')
p3Node.setAttribute('class', 'pColor1')
p4Node.setAttribute('class', 'pColor1')

//adds text
p1Node.innerText = 'Halloo'
p2Node.innerText = 'Halloo'
p3Node.innerText = 'Halloo'
p4Node.innerText = 'Halloo'

//it puts DOM elements into html
containerDiv.append(wrapperNode)
wrapperNode.append(p1Node, p2Node, p3Node, p4Node)

//finds all the elements with the same class
const universalSingle3 = document.querySelectorAll('.pColor1')

//finds odd and changes those elements that are odd
for(let i=0; i < universalSingle3.length; i++){
    if ((i + 1) % 2 == 0) {  
        universalSingle3[i].classList.remove("pColor1")
        universalSingle3[i].classList.add("pColor2")       
        }
}

//////////////////////////////////////////////////////
console.log('//////  5   //////')

//Creates HTML elements
const inputNode = document.createElement('input')
const valuesNode = document.createElement('p')

//add classes and id to elements
inputNode.setAttribute('name', 'name')
inputNode.setAttribute('placeholder', 'enter some text')
valuesNode.setAttribute('id', 'values')

//it puts DOM elements into html
wrapperNode.append(inputNode, valuesNode)

//find elements
const input = document.querySelector("input");
const log = document.getElementById("values");


//On click it shows what i have typed in the input element and displays it below on value
input.addEventListener("input", (e) => {
           log.textContent = e.target.value;
           console.log(log)  
});


//////////////////////////////////////////////////////
console.log('//////  6   //////')

//Creates HTML elements
const btnWraper = document.createElement('div')
const buttonNode1 = document.createElement('button')
const buttonNode2 = document.createElement('button')

//add classes and id to elements
btnWraper.setAttribute('id', 'btnW')
buttonNode1.setAttribute('class', 'btn1')
buttonNode2.setAttribute('class', 'btn2')

//adds text
buttonNode1.innerText = 'add cookie'
buttonNode2.innerText = 'delete cookie'

//this is styling through JS using DOM
buttonNode1.style.width = '100px'
buttonNode2.style.width = '100px'
buttonNode1.style.marginRight = '20px'
buttonNode1.style.borderRadius = '7px'
buttonNode2.style.borderRadius = '7px'
buttonNode1.style.backgroundColor = 'lavender'
buttonNode2.style.backgroundColor = 'lavender'
buttonNode1.style.border = '1px solid purple'
buttonNode2.style.border = '1px solid purple'

//it puts DOM elements into html
containerDiv.append(btnWraper)
btnWraper.append(buttonNode1, buttonNode2)

//On click it executes arrow function
buttonNode1.addEventListener('click', () =>{
    const tempNode = document.createElement('p')
    tempNode.setAttribute('class', 'temporary')
    tempNode.innerText = 'I love cookies'
    btnWraper.append(tempNode)
})

//On click it executes arrow function
buttonNode2.addEventListener('click', () => {
    const element = document.querySelector('.temporary');
    element.remove()
})

//////////////////////////////////////////////////////
console.log('//////  7   //////')

let count = 0;

//Creates HTML elements
const counterWraper = document.createElement('div')
const counterElem = document.createElement('button')
const counterDisplayNode = document.createElement('p')

//this is styling through JS using DOM
counterWraper.style.padding = '20px'
counterElem.style.width = '100px'
counterElem.style.borderRadius = '7px'
counterElem.style.backgroundColor = 'lavender'
counterElem.style.border = '1px solid purple'

//Inputs text
counterElem.innerText = 'Click ME!!!!!'


//it puts DOM elements into html
containerDiv.append(counterWraper)
counterWraper.append(counterElem, counterDisplayNode)

updateDisplay();

//Everytime I click on button it runs it
counterElem.addEventListener('click', () => {
    count++;
    updateDisplay()
})

//Updates display element
function updateDisplay(){
    counterDisplayNode.innerText = count;
};