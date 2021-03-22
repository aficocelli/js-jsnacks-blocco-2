/*In un array sono contenuti i nomi degli invitati alla festa del
grande Gatsby, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa.*/


const Invitati = ["alfredo", "gianluca", "mario", "paolo"];


let cliente = prompt("inserisci il tuo nome");

Invitati.map( (item) => {

  if (cliente == item){

    return alert("Puoi entrare");
    
  }

});
