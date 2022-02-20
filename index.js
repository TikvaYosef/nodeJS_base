
// // import 
// const EventEmitter = require('events');

// // class 
// class MyClass extends EventEmitter { };

// // object 
// const myClass = new MyClass();

// // make event 
// myClass.on('someEvent', () => {
//     console.log('someEvent occurred!');
// });
// myClass.emit('someEvent');




const EventEmitter = require("events");

class someClass extends EventEmitter { };

const myObject = new someClass();

myObject.on("Hello", () => {
    console.log("Hello There")
})
myObject.emit("Hello")