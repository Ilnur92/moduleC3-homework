class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugIn = function () {
        console.log(this.name + ' включен')
        this.isPlugged = true;
    };

    unplug = function () {
        console.log(this.name + ' выключен')
        this.isPlugged = false;
    };
}

class Lamp {
    constructor(name, brand, power, bulbType) {

        this.name = name
        this.brand = brand
        this.power = power
        this.bulbType = bulbType
        this.isPlugget = true;
    }
}

class Computer {
    constructor(name, brand, power, type, functionality) {
        this.name = name
        this.brand = brand
        this.power = power
        this.type = type
        this.functionality = functionality
        this.isPlugget = false;
    }
}
Computer.prototype = new ElectricalAppliance();

const tableLamp = new Lamp('Table lamp', ' Philips', '6', 'LED');

const homePC = new Computer('Table PC',' ACER','50',' stationary',' for work');

tableLamp.unplug()

homePC.plugIn();

console.log(homePC)
console.log(tableLamp)

// в webStorm вызывает ошибку tableLamp.unplug() is not a function, а в песочнице нет ошибки