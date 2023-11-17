import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency-exchange';

function getExchange(altCurrency) {
  CurrencyExchange.getExchange(altCurrency)
  .then (function (response) {
    if (response.conversion_rates && response.conversion_rates[altCurrency]) {
      const conversion = convertCurrency(response, altCurrency);
      printElements(altCurrency, conversion);
    } else {
      printError(response, altCurrency);
    }
  });
}

function handleForm (e) {
  e.preventDefault();
  const altCurrency = document.querySelector('#alt-currency').value;
  getExchange(altCurrency);
  clearResults();
}

function convertCurrency(response, altCurrency) {
  const conversionRate = response.conversion_rates[altCurrency];
  const USD = parseInt(document.querySelector('#USD-amount').value);
  return USD * conversionRate;
}

function printElements(altCurrency, conversion) {
  const responseDiv = document.querySelector('#response-div');
  const p = document.createElement('p');
  p.append(`The currency exchange from USD to ${altCurrency} is ${conversion}`);
  responseDiv.append(p);
}

function printError(error, altCurrency) {
  document.querySelector('#response-div').innerText = `There was an error accessing the data for ${altCurrency}: ${error}.`;
}

function clearResults() {
  const responseDiv = document.getElementById('response-div');
  responseDiv.innerText = ""
}

window.addEventListener("load", function () {
  document.querySelector('#currency-form').addEventListener('submit', handleForm);
})