/*

Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Mail Bonus:
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

*/

// Chiedo all'utente la sua mail
const userMailEl = prompt('inserisci la tua mail');
console.log(userMailEl);

// creo la lista delle mail con i permessi
const allowMails = [
   'pincopallino@bool.it',
   'pincopallino1@bool.it',
   'pincopallino2@bool.it',
   'pincopallino3@bool.it',
   'pincopallino4@bool.it'
];
console.log(allowMails);

// verifico se la mail inserita corrisponde alla lista
if (allowMails.includes(userMailEl)) {
   alert('accesso effettuato con successo');
} else {
   alert('spiacenti utente non abilitato all accesso');
}