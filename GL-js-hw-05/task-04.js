class StringBuilder {
  constructor(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._value = value;
  }

  get value() {
    // eslint-disable-next-line no-underscore-dangle
    return this._value;
  }

  set value(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._value = value;
  }

  append(str) {
    this.value = `${this.value + str}`;
    return this.value;
  }

  prepend(str) {
    this.value = `${str + this.value}`;
    return this.value;
  }

  pad(str) {
    this.value = `${str + this.value + str}`;
    return this.value;
  }
}
console.log(`Task 04`);

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
