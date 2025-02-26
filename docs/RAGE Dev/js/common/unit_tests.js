let units = new Array()
let log = console.log

function runAll(){
    units.forEach((u, i)=>{log(`Test ${i} - ${u()}`)})
}

units.push(()=>{
    let NAME = "Create Identity Matrix Test"
    let RESULT = "SUCCESS"

    let m = rage.createMatrix()
    let m4 = new Float32Array(16)
    m.setIdentity()
    mat4.identity(m4)

    m.prettyPrint()
    if(!matrixMatch(m,m4)) RESULT = "FAIL - Matrices do not match"
    return NAME + " - " + RESULT
})


units.push(()=>{
    let NAME = "Create Translation Matrix Test"
    let RESULT = "SUCCESS"

    let m = rage.createMatrix()
    let m4 = new Float32Array(16)
    m.setIdentity()
    mat4.identity(m4)

    m.createTranslation(20,30,40)
    mat4.translation([20,30,40],m4)

    m.prettyPrint()
    if(!matrixMatch(m,m4)) RESULT = "FAIL - Matrices do not match"
    return NAME + " - " + RESULT
})


units.push(()=>{
    let NAME = "Translate Matrix"
    let RESULT = "SUCCESS"

    let m = rage.createMatrix()
    m.setIdentity()
    m.translate(20,30,40)    

    let m4 = new Float32Array(16)
    let m4x = new Float32Array(16)
    let m4out = new Float32Array(16)
    mat4.identity(m4)
    mat4.translate(m4, [20,30,40], m4out)
    //mat4.multiply(m4, m4x, m4out)

    m.prettyPrint()

    if(!matrixMatch(m,m4out)) RESULT = "FAIL - Matrices do not match"
    return NAME + " - " + RESULT
})





function matrixMatch(m, m4){
    m.matrix.forEach((f,i)=>{
        if(m.matrix[i] != m4[i]){
            return false
        }
    })
    return true
}