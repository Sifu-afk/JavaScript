import { result } from "./data.js";

console.log(result);

// const name = "Jonas";

// localStorage.setItem("personName",name);
// const nameFromLS = localStorage.getItem("personName");
// console.log(nameFromLS)

// const person = {
//   Firstname: "Jonas",
//   Lastname: "Jonaitis",
//   Age: 654,
// };

// localStorage.setItem("personOBJ", JSON.stringify(person));

// const PersonLS = localStorage.getItem("personOBJ");
// console.log(PersonLS)

// const PersonParsed = JSON.parse(localStorage.getItem("personOBJ"));
// console.log(PersonParsed)

//

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

const myfav = () => {
  const Fav = JSON.parse(localStorage.getItem("favorites"));
  for (let i = 0; i < Fav.length; i++) {
    console.log(Fav[i].title);
  };
};
myfav()

//7

const deleter = (id) => {
  let favorites = JSON.parse(localStorage.getItem('favorites'));

  if (favorites) {
    favorites = favorites.filter(favorite => favorite.id !== id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }else{
    console.log("Sorry it apears that this id is not in your favorites")
  }
};

deleter(829280)

console.log("////////////////////////////////////////////")
myfav()