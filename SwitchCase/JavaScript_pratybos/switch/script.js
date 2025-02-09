"use strict";


let month = "Liepa";

const months = {
    Sausis: 1,
    Vasaris: 2,
    Kovas: 3,
    Balandis: 4,
    Gegužė: 5,
    Birželis: 6,
    Liepa: 7,
    Rugpjūtis: 8,
    Rugsėjis: 9,
    Spalis: 10,
    Lapkritis: 11,
    Gruodis: 12
};

let monthNumber = months[month];



switch (monthNumber) {
    case 1:
        console.log(`This month is ${1}`);
        break;
    case 2:
        console.log(`This month is ${2}`);
        break;
    case 3:
        console.log(`This month is ${3}`);
        break;
    case 4:
        console.log(`This month is ${4}`);
        break;
    case 5:
        console.log(`This month is ${5}`);
        break;
    case 6:
        console.log(`This month is ${6}`);
        break;
    case 7:
        console.log(`This month is ${7}`);
        break;
    case 8:
        console.log(`This month is ${8}`);
        break;
    case 9:
        console.log(`This month is ${9}`);
        break;
    case 10:
        console.log(`This month is ${10}`);
        break;
    case 11:
        console.log(`This month is ${11}`);
        break;
    case 12:
        console.log(`This month is ${12}`);
        break;
    default:
        console.log("Yrasytas ne menesio pavadinimas");
        break;




};
