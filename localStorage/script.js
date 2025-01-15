import { result } from "./data.js";

console.log(result)

const name = `Jonas`;

localStorage.setItem("personName", name);
const nameFromLS = localStorage.getItem("personName")
console.log(nameFromLS)

const person = {
    firstName: `tomas`,
    lastName: `gritavinas`,
    age: 18
}
localStorage.setItem("personObj", person)
localStorage.setItem("personObj", JSON.stringify(person));

const nameObj = localStorage.getItem("personObj")

const personObjParse = JSON.parse(localStorage.getItem("personObj"))

console.log(nameObj)
console.log(personObjParse)

////////////////////////

const infoLS = localStorage.getItem("favorites");
console.log(infoLS);

const favorites =
  infoLS === null
    ? localStorage.setItem("favorites", JSON.stringify([]))
    : JSON.parse(infoLS);
console.log(favorites);

const getmovie = (movieID) => {
  const films = result.filter((el) => el.id === movieID);
  console.log(films[0].title);
  return films[0];
};

getmovie(436270);


////////////////////////////////


const favmovie = (id) => {
  const moviesObj = {
    id: getmovie(id).id,
    title: getmovie(id).title,
  };
  console.log(moviesObj);

  const movieExist = favorites.find((el) => el.id === moviesObj.id);

  if (movieExist) {
    // alert("This Movie Exists");
  } else {
    favorites.push(moviesObj);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    // alert("Movie saved");
  }
};

favmovie(436270);
favmovie(829280);


//////////////////////////////////////


const myfav = () => {
    const fav = JSON.parse(localStorage.getItem("favorites"));
    for (let i = 0; i < fav.lenght; i++){
        console.log(fac[i].title)
    }
}
myfav()


/////////////////////////////////////

const delmov = () => {
    let favorites = JSON.parse(localStorage.getItem('favorite'))
    if (favorites) {
        favorites.filter(favorite => favorite.id !== id)
        localStorage.setItem('favorites', JSON.stringify(favorites))

    }else{
        console.log("not in your favorites")
    }
}


delmov(829280)