/*

Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Mail BONUS:
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

*/

// Chiedo all'utente la sua mail
//const userMailEl = prompt('inserisci la tua mail');
//console.log(userMailEl);

// creo la lista delle mail con i permessi
const allowMails = [
   'pincopallino@bool.it',
   'pincopallino1@bool.it',
   'pincopallino2@bool.it',
   'pincopallino3@bool.it',
   'pincopallino4@bool.it'
];
console.log(allowMails);

// BONUS seleziono l'input dal DOM
const userInputMailEl = document.getElementById('userMail');
console.log(userInputMailEl.value);

// BONUS seleziono l'elemento che stamperà il messaggio dal DOM
const finalMessageEl = document.getElementById('message');

// BONUS seleziono il bottone a cui aggiungo l'evento di verifica
const btnEl = document.getElementById('subBtn');

btnEl.addEventListener('click', function () {
   
   // verifico se la mail inserita corrisponde alla lista
   if (allowMails.includes(userInputMailEl.value)) {

      //alert('accesso effettuato con successo');
      finalMessageEl.innerHTML = `<p> Utente ${userInputMailEl.value} autorizzato all'accesso </p>`;

   } else {

      //alert('spiacenti utente non abilitato all accesso');
      finalMessageEl.innerHTML = `<p> Utente ${userInputMailEl.value} non autorizzato all'accesso </p>`;
   }

})


