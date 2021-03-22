/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
2 step:
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
3 step:
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console*/

var team = [

  {
    nome: "Juventus",
    punti: 0,
    falli: 0
  },

  {
    nome: "Inter",
    punti: 0,
    falli: 0
  },

  {
    nome: "Milan",
    punti: 0,
    falli: 0
  }

];


const NewTeam = team.map((item) => {

   Math.floor(Math.random() * (10 - 1)) + 1;

  item.falli = Math.floor(Math.random() * (10 - 1)) + 1;

  item.punti = Math.floor(Math.random() * (10 - 1)) + 1;

  // let { nome, falli } = item;

  let nome = item.nome;

  let falli = item.falli;

  return {nome, falli};

});

console.log(NewTeam);


console.log(team);
  // for( var i = 0; i < team.length; i++){
  //
  //   var numeroRandom = Math.floor(Math.random() * (100 - 1)) + 1;
  //
  //   team[i].falli = numeroRandom;
  //   delete team[i].punti;
  // }
  //
  //
  // console.log(team);
