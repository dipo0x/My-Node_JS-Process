const EventEmitter = require('events')

class Person extends EventEmitter{
    constructor(name, age){
        super();
        this.name = name
        this.age = age
    }
    get_stuff(){
        return (this._name, this._age)
    }
}

let Dickson = new Person('Dickson', 45);
let christina = new Person('christina', 23);

Dickson.on('age', () => console.log("Yoooo!", Dickson.name, Dickson.age))
christina.on('age', () => console.log("Yoooo!", christina.name, christina.age))

Dickson.emit('age2')
christina.emit('age')