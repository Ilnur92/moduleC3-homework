function ElectricalAppliance(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function (){
    console.log(this.name + ' включен')
    this.isPlugged = true;
};

ElectricalAppliance.prototype.unplug = function (){
    console.log(this.name + ' выключен')
    this.isPlugged = false;
};

function Lamp(name, brand, power, bulbType){
    this.name = name
    this.brand = brand
    this.power = power
    this.bulbType = bulbType
    this.isPlugget = true;
}

Lamp.prototype = new ElectricalAppliance();

function Computer(name, brand, power, type, functionality){
    this.name = name
    this.brand = brand
    this.power = power
    this.type = type
    this.functionality = functionality
    this.isPlugget = false;
}

Computer.prototype = new ElectricalAppliance();

const tableLamp = new Lamp('Table lamp', 'Philips', '6', 'LED');

const homePC = new Computer('Table PC','ACER','50','stationary',' для работы');

tableLamp.unplug();

homePC.plugIn();

console.log(homePC)
console.log(tableLamp)

