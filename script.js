//Milestone 2
// Recupero tutti gli elementi del DOM che occorrono
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const form = document.querySelector('form');
const nome = document.getElementById('nome-cognome');
const km = document.getElementById('km');
const eta = document.getElementById('eta');

//recupero campi card
const offerta = document.getElementById('offerta');
const carrozza = document.getElementById('carrozza');
const codice = document.getElementById('codice');
const costo = document.getElementById('costo');

//Creo l'azione click del bottone
button1.addEventListener('click', function(event) {
    event.preventDefault(); 
    //Controllo se i campi sono stati compilati
    carrozza.innerHTML = Math.floor(Math.random() * 9) + 1;
    codice.innerHTML = Math.floor(Math.random() * 10000) + 90000;

}
);  