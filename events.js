
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




// const EventEmitter = require("events");

// class someClass extends EventEmitter { };

// const myObject = new someClass();

// myObject.on("Hello", () => {
//     console.log("Hello There")
// })
// myObject.emit("Hello")


// we can transform data from emit to on like this :
// const EventEmitter = require("events");

// class someClass extends EventEmitter { };

// const myObject = new someClass();

// myObject.on("Hello", (emitArgu) => {
//     console.log("Hello There", emitArgu)
// })
// myObject.emit("Hello", "how you doing")


// const EventEmitter = require("events")

// class myclass extends EventEmitter { };

// const myObject = new myclass();

// myObject.on("printName", (name) => {
//     console.log(`Hello there: ${name}`)
// })
// myObject.emit("printName", "Tikva yosef")






// const EventEmitter = require("events")
// class myclass extends EventEmitter {
//     constructor() {
//         super();
//         this.onPrintNow();
//     }
//     onPrintNow() {
//         this.on("printName", (name) => {
//             console.log(`Hello there: ${name}`)
//         })
//     }
//     emitPrintNow(data) {
//         this.emit("printName",data)
//     }
// }
// module.exports = new myclass;



// שאלה 9
// const EventEmitter = require("events")

// class myclass extends EventEmitter { };

// const myObject = new myclass();

// myObject.on("printName", (num) => {
//     for (let i = 0; i < num; i++) {
//         console.log(`Hello there`)
//     }
// })
// myObject.emit("printName", 8)