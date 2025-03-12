// Custom Assertion Module

let assertEqual = function (a,b,message) {
    if(!message) message = ""
    console.assert(a==b,'Values not equal - ' + message)
}

let assertNotEqual = function (a,b,message) {
    if(!message) message = ""
    console.assert(a!=b,'Values the same - ' + message)
}

let assertTypedArray = function (a,message) {
    if(!message) message = ""
    console.assert(typeof(a.byteLength) == 'number', 'Assertion Failed: Not Typed Array - ' + message)
}


function disableDebugAssertion(){
    assertEqual = ()=>{}
    assertNotEqual = ()=>{}
    assertTypedArray = ()=>{}
}


export {assertEqual, assertNotEqual, assertTypedArray, disableDebugAssertion}