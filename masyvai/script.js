const array1 = [];
array1[0] = "lol";
array1[1] = "valorant";
array1[2] = "CS2";
array1[3] = "Minecraft";
array1[4] = "GYTIS"
const naujokes = ["enrika", "emilija", "gabija"]

const visi = array1.concat(naujokes)

console.log(visi.every((el) => el.length > 2))



 const array2 = new Array (
     "obsidian",
     "diamond",
     "coblestone"
 );
 console.log(array2)

const array3 = Array.of("vandal", "guardian", "GYTIS", "bucky", "ghost");

console.log(array3[2])

const array4 = new Array(5).fill(0).map((e, index) => e+=index + 1)
console.log(array4)