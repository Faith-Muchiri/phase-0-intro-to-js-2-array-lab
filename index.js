// Write your solution here!
// beforeEach(function () {
//     cats.length = 0;
  
//     cats.push("Milo", "Otis", "Garfield");
//   });


const cats=["Milo", "Otis","Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
    return cats;
}
function destructivelyPrependCat(name)
{
    return cats.unshift("Bob");
}
function  destructivelyRemoveLastCat(){
    return cats.pop(cats.length-1);
}
function destructivelyRemoveFirstCat(){
    return cats.shift(cats[0]);
}
function appendCat(name){
    const newCats= [...cats,"Broom"];
    return newCats;
}
function prependCat(name){
    const newCats= ["Arnold",...cats];
    return newCats
}
function removeLastCat(){
    const newCats=cats.slice(0,cats.length-1);
    return newCats;
}
function removeFirstCat(){
    const newCats=cats.slice(1);
    return newCats;
}
console.log(cats);
