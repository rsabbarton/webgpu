export function error (i){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
    switch (i){
        case 403: logError("Forbidden"); return;
        case 404: logError("Not Found"); return;
        default: logError("Unknown error code: " + i.toString())
    }
}

function logError(str){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        
    console.error(str)
}

