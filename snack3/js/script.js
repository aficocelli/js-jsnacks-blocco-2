/*Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di 3 invitati.*/


var nomi = ["Alfredo", "Samuele", "Francesco"];

var cognomi = ["Bianchi", "Rossi", "Verdi"];

var lista = [];

var j = 0;

do {



  lista.push(nomi[Math.floor(Math.random() * 3 )] + " " + cognomi[Math.floor(Math.random() * 3 )]);

  j++;

} while( j < nomi.length);





console.log(lista);
