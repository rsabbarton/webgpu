

class Logger {
    constructor(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        
    }

    log(a){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        let outputDiv = document.getElementById('text-output')
        let div = document.createElement('div')
        div.innerText = a
        console.log(a)

        outputDiv.prepend(div)
    }
}

const LOGGER = new Logger()
const log =  LOGGER.log
export {log as log}
export {Logger as Logger}
export default log

