/*Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.*/
var numero = 0;
var somma = 0;
var i = 0;
for ( i = 0; i < 5; i++){

  numero = parseInt(prompt("inserisci un numero"));

  somma = somma + numero;



}
console.log(somma);

// do {
//
//   numero = parseInt(prompt("inserisci un numero"));
//
//     somma = somma + parseInt(numero);
//
//     console.log(somma);
//
//     i++;
// } while( i < 5);
