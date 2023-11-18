export default class CurrencyExchange {
  static getExchange() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function (response) {
        if (!response.ok) {
          return response.json()
            .then(function (apiErrorMessage) {
              const errorText = `${response.status} ${response.statusText} ${apiErrorMessage}`;
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
