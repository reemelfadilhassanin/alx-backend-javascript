// 6-sky_high.js
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft); // Call the parent constructor
        this._floors = this.validateFloors(floors);
    }

    validateFloors(floors) {
        if (typeof floors !== 'number') {
            throw new TypeError('floors must be a number');
        }
        return floors;
    }

    get sqft() {
        return this._sqft;
    }

    get floors() {
        return this._floors;
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors.`;
    }
}
