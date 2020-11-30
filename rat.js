class Rat {
    constructor(name, weight, maxSpeed ,status) {
        this._name = name;
        this._weight = weight;
        this._maxSpeed = maxSpeed;
        this._status = status;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get maxSpeed() {
        return this._maxSpeed;
    }

    set maxSpeed(value) {
        this._maxSpeed = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    peek() {
        return this._name + 'chi chít chít';
    }

}

let rat = new Rat("Gấu", 1, 30, true);
