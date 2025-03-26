//RECUPERO TUTTI GLI ELEMENTIO DEL DOM CHE MI SERVONO
//vado a recuperare tutti in camdpi della form e la form stessa
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

const form = document.querySelector('form');

const nameField = document.getElementById('name-field'); // Fixed typo in 'name-fied'
const kmField = document.getElementById('km-field'); // Corrected variable name
const ageField = document.getElementById('age-field'); // Fixed typo in 'range-field'

//vado a recuperarre tutti i campi della card
const offerta = document.getElementById('offerta');
const carrozza = document.getElementById('carrozza');
const codice = document.getElementById('codice');
const costo = document.getElementById('costo');
const passName = document.getElementById('pass-name');


//creo azione al click del bottone
button1.addEventListener('click', function(event) {
    event.preventDefault(); // blocco il comportamento predefinito del form
    carrozza.innerHTML = Math.floor(Math.random() * 9) + 1; // genero un numero casuale per la carrozza
    codice.innerHTML = Math.floor(Math.random() * 10000) + 1; // genero un numero casuale per il codice CP
    passName.innerHTML = nameField.value; // accedo al valore del campo di input nameField

   // calcolo il prezzo del biglietto
    let prezzo = 0;
    const costoKm = 0.21; // costo al km
    prezzo = costoKm * parseFloat(kmField.value); 
    
    // calcolo il costo del biglietto
    if (ageField.value === 'minorenne') { // accedo al valore del campo di input ageField
        costo.innerHTML = (prezzo - (prezzo * 20 / 100)).toFixed(2);
        offerta.innerHTML = 'Sconto minorenne';
    } else if (ageField.value === 'over 65') { // accedo al valore del campo di input ageField
        costo.innerHTML = (prezzo - (prezzo * 40 / 100)).toFixed(2);
        offerta.innerHTML = 'Sconto over 65';
    } else {
        costo.innerHTML = prezzo.toFixed(2);
        offerta.innerHTML = 'Tariffa standard';
    }
});