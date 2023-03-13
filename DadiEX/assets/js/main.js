/* 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// seleziono il bottone e assegno l'evento tira il dado
const btnEl = document.getElementById('throwBtn');

btnEl.addEventListener('click', function() {

   // genero i numeri casuali da 1 a 6
   const num1 = Math.floor(Math.random()* 6) + 1;
   console.log(num1);
   const num2 = Math.floor(Math.random()* 6) + 1;
   console.log(num2);

   // verifico e dichiaro il vincitore
   if (num1 > num2) {

      alert('Congratulazioni hai vinto!');
      
   } else if (num1 == num2) {
      
      alert('Pareggio!');

   } else {

      alert('Mi dispiace, hai perso');
      
   }
})