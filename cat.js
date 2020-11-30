class Cat {

    constructor(name, weight, maxSpeed) {
        this._name = name;
        this._weight = weight;
        this._maxSpeed = maxSpeed;
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

    meow() {
        return +this._name + 'mèo méo meo mèo meo';
    }

    catchRat(rat) {
        if (this._maxSpeed > rat._maxSpeed) {
            return true;
        }
        return false;
    }

    eatRat(rat) {
        let oldWeight = this._weight;
        if (this.catchRat(rat) === true && rat.status == true) {
            this._weight += rat._weight;
        }
        alert('Cân nặng của mèo tên ' + this._name + ' là: ' + oldWeight + ' .Cân nặng mới sau khi ăn chuột tên: ' + rat._name + ' là: ' + this._weight);
    }

}

let cat = new Cat("Milo", 4, 40);
