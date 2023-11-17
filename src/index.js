import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency-exchange';

function getExchange(altCurrency) {
  CurrencyExchange.getExchange(altCurrency)
  .then (function (response) {
    if (response.data) {
      printElements(response, altCurrency);
    } else {
      printError(response, altCurrency);
    }
  });
}