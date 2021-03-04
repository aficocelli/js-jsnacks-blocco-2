/*Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di 3 invitati.*/


var nomi = ["Alfredo", "Samuele", "Francesco", "Pierpaolo", "Luca"];

var cognomi = ["Bianchi", "Rossi", "Verdi", "Gialli", "Neri"];

var lista = [];

var j = 0;

do {

  lista.push(nomi[Math.floor(Math.random() * nomi.length )] + " " + cognomi[Math.floor(Math.random() * cognomi.length )]);

  j++;

} while( lista.length < nomi.length);





console.log(lista);
