

// שאלה 11+12

const EventEmitter = require("events");
const fs = require("fs");


class Event4 extends EventEmitter {
    constructor() {
        super();
        this.OnPrintToFile();
    }
    OnPrintToFile() {
        this.on("PrintToFile", (Data) => {
            fs.writeFile("./event4.txt", `${Data}`, () => {

            })
        })
    }
    EmitPrintToFile(data) {
        this.emit("PrintToFile", data)
    }
}
module.exports = new Event4;

