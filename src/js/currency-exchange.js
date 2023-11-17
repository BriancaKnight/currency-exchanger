export default class CurrencyExchange {
  static getExchange(altCurrency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${altCurrency}`)
      .then(function (response) {
        if (!response.ok) {
          return response.json()
            .then(function (errorMessage) {
              const errorText = `${response.status} ${response.statusText}`;
              throw new Error(errorText);
            });
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        return error;
      });
  }
}
}