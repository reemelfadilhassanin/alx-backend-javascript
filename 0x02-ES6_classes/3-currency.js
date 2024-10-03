// 3-currency.js
export default class Currency {
    constructor(code, name) {
        this._code = this.validateCode(code);
        this._name = this.validateName(name);
    }

    validateCode(code) {
        if (typeof code !== 'string') {
            throw new TypeError('Code must be a string');
        }
        return code;
    }

    validateName(name) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        return name;
    }

    get code() {
        return this._code;
    }

    set code(newCode) {
        this._code = this.validateCode(newCode);
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = this.validateName(newName);
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}
