

class Logger {
    constructor(){

    }

    log(a){
        let outputDiv = document.getElementById('text-output')
        let div = document.createElement('div')
        div.innerText = a
        console.log(a)

        outputDiv.prepend(div)
    }
}

const LOGGER = new Logger()
const log =  LOGGER.log
export {log}
