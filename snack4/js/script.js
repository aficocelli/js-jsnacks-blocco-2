/*Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore*/


var bike = [

  {
    nome: "Atala",
    peso: 400
  },
  {
    nome: "Santa Cruz",
    peso: 900
  },

  {
    nome: "Merida",
    peso: 800
  }


];

var pesoBici = bike[0].peso;

for ( var i = 0; i < bike.length; i++){


  if (pesoBici < bike[i].peso == false){

    pesoBici = bike[i].peso;
  }
}

console.log(pesoBici);
