var tenPerBtn = document.querySelector('.tenPercent');
var fifteenPerBtn = document.querySelector('.fifteenPercent');
var twentyPerBtn = document.querySelector('.twentyPercent');
var customPerBtn = document.querySelector('.customTipBtn');
var bill = document.getElementById('billInput');
var tipSuggestion = document.getElementById('tipAmount');


function calcTen() {
  var billInput = bill.value;
  var tipAmount = billInput * .1;
  tipSuggestion.innerHTML = 'A ten percent tip would equal $' + tipAmount;
  console.log(tipAmount);
}

function calcFifteen() {
  var billInput = bill.value;
  var tipAmount = billInput * .15;
  tipSuggestion.innerHTML = 'A fifteen percent tip would equal $' + tipAmount;
}

function calcTwenty() {
  var billInput = bill.value;
  var tipAmount = billInput * .2;
  tipSuggestion.innerHTML = 'A twenty percent tip would equal $' + tipAmount;
}

function calcCustom() {
  var billInput = bill.value;
  var customTipAmount = document.querySelector('#customTip').value;
  var tipAmount = billInput * customTipAmount;
  tipSuggestion.innerHTML = 'A ' + customTipAmount + ' percent tip would equal $' + tipAmount;
}

tenPerBtn.addEventListener('click', calcTen)
fifteenPerBtn.addEventListener('click', calcFifteen)
twentyPerBtn.addEventListener('click', calcTwenty)
customPerBtn.addEventListener('click', calcCustom)