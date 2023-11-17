import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency-exchange';

function getExchange(altCurrency) {
  CurrencyExchange.getExchange(altCurrency)
  .then (function (response) {
    if (response.conversion_rates) {
      const conversion = convertCurrency(response);
      printElements(response, altCurrency, conversion);
    } else {
      printError(response, altCurrency);
    }
  });
}

function convertCurrency(response, altCurrency) {
  let USD = parseInt(document.querySelector('#USD-amount').value);
  let conversionRate = response.conversion_rates;
  return USD / conversionRate;
}

function printElements(response, altCurrency, conversion) {
  document.querySelector('#response-div').innerText = `The currency exchange for USD to ${altCurrency} is ${conversion}`;
}

function printError(error, altCurrency) {
  document.querySelector('#response-div').innerText = `There was an error accessing the data for ${altCurrency}: ${error}.`;
}

function handleForm (e) {
  e.preventDefault();
  const altCurrency = document.querySelector('#alt-currency').value;
  getExchange(altCurrency);
}

window.addEventListener("load", function () {
  document.querySelector('#currency-form').addEventListener('submit', handleForm);
})