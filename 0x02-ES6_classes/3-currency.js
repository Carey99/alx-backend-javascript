export default class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }
    get code() {
        return this._code;
    }
    set code(value) {
        this._code = value;
    }
    displayFullCurrency() {
        return `${this.name} (${this.code})`;
    }
}