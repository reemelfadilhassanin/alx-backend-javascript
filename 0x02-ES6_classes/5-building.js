// 5-building.js
export default class Building {
    constructor(sqft) {
        this._sqft = this.validateSqft(sqft);
    }

    validateSqft(sqft) {
        if (typeof sqft !== 'number') {
            throw new TypeError('sqft must be a number');
        }
        return sqft;
    }

    get sqft() {
        return this._sqft;
    }

    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}
