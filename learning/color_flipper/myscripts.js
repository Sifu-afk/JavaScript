const colors = ["green", "red", "#f15025", "rgba(133, 122, 200)"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //get random number 0 - 3
    const randomNumer = getRandomNumber();
    console.log(randomNumer)

    document.body.style.backgroundColor = colors[randomNumer];
    document.TEXT_NODE.style.color
    color.textContent = colors[randomNumer];

});


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
