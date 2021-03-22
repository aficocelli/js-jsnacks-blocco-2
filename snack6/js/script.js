/*Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.*/

//
function generaArray (arrayUtente, a, b){

  var newArray = [];

  for (let i = 0; i < arrayUtente.length; i++){

    if (i >= a && i <= b){

      newArray.push(arrayUtente[i]);

    }
  }

  return newArray;
}

var numeri = ["ciao", "cane", "pane", "ladro", "sedano"]



var newArray = generaArray(numeri, 2, 4);

console.log(newArray);

// const students = {
//   name: "paolo",
//
//   age: 20,
//
//   mail: "ciao"
//
// }
//
//
//
// let {name, age } = students;
//
// console.log(name);
// console.log(students.name);
//
// // students.name = "pippo";
// //
// // console.log(students);
