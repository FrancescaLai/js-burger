/* Quando clicco sul bottone Calculate devo per forza inserire del testo in Name Your Burger.
Aggiungo gli ingredienti e faccio la somma.
Aggiungo il coupon e calcolo sconto */

// 0. Definisco le variabili
var calcolatore = document.getElementById('calculate');
var burgerName = document.getElementById('burger-name-input');
var ingredients = document.getElementsByClassName("check");
var somma = 50;
var coupons = ["abc", "cba", "123"];
var coupon = document.getElementById('coupon-input');
var percentualeSconto = 0.2;
var total = document.getElementById('totale');


// 1. Aggiungo evento click al bottone
calculate.addEventListener("click",
  function() {
  // 2. Controllo se il nome è stato inserito
  if (burgerName.value != "") {
    // 3. Ciclo gli ingredienti
    for (var i = 0; i < ingredients.length; i++) {
      // 4. Se l'ingrediente è selezionato, prendo il suo Value e lo aggiungo al prezzo di partenza
      if (ingredients[i].checked == true ) {
        somma += parseInt(ingredients[i].value);
      }
    }
      // 5. Applico lo Sconto
    if (coupons.includes(coupon.value)) {
      somma -= somma * 0.2;
    }
    // Stampo nella pagina il totale
    total.innerHTML = somma.toFixed(2) + "€";
  } else {
    alert("Inserisci nome burger")
  }
}
);
