import {result} from "./data.js";

const infoLS = localStorage.getItem("countrys");
//console.log(infoLS)


const countrys = infoLS === null ? localStorage.setItem("countrys", JSON.stringify([])) : JSON.parse(infoLS)
//console.log(countrys)

const getCount = (countID) => {
    const count = result.filter((el) => el.suffixes === countID)
    console.log(count[0].name.common)
    return count[0]
}

getCount(11586)   


const countList = (id) => {
    const countObj = {
        id: getCount(id).idd
    }
}