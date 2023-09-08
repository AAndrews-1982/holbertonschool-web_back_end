// 4-pricing.js
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and Setter for 'amount' attribute
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // Getter and Setter for 'currency' attribute
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new TypeError('Currency must be an instance of Currency class');
    }
  }

  // Method to display the full price in the specified format
  displayFullPrice() {
    const { amount, currency } = this;
    return `${amount} ${currency.name} (${currency.code})`;
  }

  // Static method to convert price using a conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    } else {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
  }
}
