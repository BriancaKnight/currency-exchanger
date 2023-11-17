import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency-exchange';

function getExchange(altCurrency) {
  CurrencyExchange.getExchange(altCurrency)
  .then (function (response) {
    if (response.conversion_rates) {
      printElements(response, altCurrency);
    } else {
      printError(response, altCurrency);
    }
  });
}

function printElements(response, altCurrency) {
  document.querySelector('#response-div').innerText = `The currency exchange for USD to ${altCurrency} is ${response.conversion_rates}`
}

function printError(eroror, altCurrency) {
  document.querySelector('#response-div').innerText = `There was an error accessing the data for ${altCurrency}: ${error}`
}

