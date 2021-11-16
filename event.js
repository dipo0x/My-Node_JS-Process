const EventEmitter = require('events')

//Creating a Person class which a name and age object
class Person extends EventEmitter{
    constructor(name, age){
        super();
        this.name = name
        this.age = age
    }
    //the getter
    get_stuff(){
        return (this._name, this._age)
    }
}

//assigning thier names to the person class 
let Dickson = new Person('Dickson', 45);
let christina = new Person('christina', 23);

//using event to lookout for anytime I pass in a number argument as age parameter
Dickson.on('age', () => console.log("Yoooo!", Dickson.name, Dickson.age))
christina.on('age', () => console.log("Yoooo!", christina.name, christina.age))

//to trigger the event
Dickson.emit('age2')
christina.emit('age')