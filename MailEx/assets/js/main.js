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

   /* 
   ---------------- SOLUZIONE CON INCLUDE() ------------------------------------
   // verifico se la mail inserita corrisponde alla lista
   if (allowMails.includes(userInputMailEl.value)) {

      //alert('accesso effettuato con successo');
      finalMessageEl.innerHTML = `<p> Utente ${userInputMailEl.value} autorizzato all'accesso </p>`;

   } else {

      //alert('spiacenti utente non abilitato all accesso');
      finalMessageEl.innerHTML = `<p> Utente ${userInputMailEl.value} non autorizzato all'accesso </p>`;
   } 
   */

   /* -------------------- SOLUZIONE CON CICLO FOR ------------------------- */

   // ASSEGNO AD UNA VARIABILE UN VALORE FALSE (MAIL NON PRESENTE) PER FACILITARE IL CONTROLLO
   let check = false;

   // SCORRO LA LISTA DELLE MAIL E LE ASSEGNO AD UNA VARIABILE
   for (let i = 0; i < allowMails.length; i++) {
      const allowList = allowMails[i];

      if (allowList == userInputMailEl.value) {
         check = true;

         console.log(check);
      }
   }


   // VERIFICO SE L'ELEMENTO DELLA LISTA COMBACIA CON L'INPUT UTENTE
   if (check == true) {

      finalMessageEl.innerHTML = `<p> Utente ${userInputMailEl.value} autorizzato all'accesso </p>`;

   } else {

      finalMessageEl.innerHTML = `<p> Utente ${userInputMailEl.value} non autorizzato all'accesso </p>`;
   }

})


