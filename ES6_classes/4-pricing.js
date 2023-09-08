// 3-currency.js
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and Setter for 'code' attribute
  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // Getter and Setter for 'name' attribute
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Method to display the full currency in the specified format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
