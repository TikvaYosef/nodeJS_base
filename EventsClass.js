
//  שאלה10    
const EventEmitter = require("events")

class MyEvents extends EventEmitter {
    constructor() {
        super();
        this.OnPrintToLog();
    }
    OnPrintToLog() {
        this.on("print to log", (data) => {
            console.log(`${data}`)
        })
    }
    EmitPrintToLog(Data) {
        this.emit("print to log", Data)
    }
}
module.exports = new MyEvents;
