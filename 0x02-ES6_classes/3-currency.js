export default class Currency {
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }
    get code() {
        return this._code;
    }
    set code(value) {
        if (value.length !== 3) {
        throw new Error('Currency code must be 3 characters.');
        }
        this._code = value;
    }
    displayFullCurrency() {
        return `${this.name} (${this.code})`;
    }
}