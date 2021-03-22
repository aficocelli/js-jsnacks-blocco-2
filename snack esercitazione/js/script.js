/*L’utente inserisce due numeri in successione, con due
prompt. Il software stampa il maggiore*/

const majorFunction = (x, y) => {

  x = parseInt(prompt("inserisci un numero"));

  y = parseInt(prompt("inserisci un altro numero"));

  if ( x < y) {
    return y;
  } else {
    return x;
  }
};


let numeroMaggiore = majorFunction();

console.log(numeroMaggiore);
