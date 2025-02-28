let units = new Array()
let log = console.log

function runAll(){
    units.forEach((u, i)=>{log(`Test ${i} - ${u()}`)})
}

function matrixMatch(m, m4){
    let result = true
    m.matrix.forEach((f,i)=>{
        if(f - m4[i] > 0.0001 || f - m4[i] < -0.0001){
            result = false
        }
    })
    return result   
}


units.push(()=>{
    let NAME = "Create Identity Matrix Test"
    let RESULT = "SUCCESS"

    let m = rage.createMatrix()
    
    let m4 = new Float32Array(16)
    mat4.identity(m4)

    //m.prettyPrint()
    if(!matrixMatch(m,m4)) RESULT = "FAIL - Matrices do not match"
    return NAME + " - " + RESULT
})


units.push(()=>{
    let NAME = "Create Translation Matrix Test"
    let RESULT = "SUCCESS"

    let m = rage.createMatrix()
    m.createTranslation(20,30,40)
    
    
    let m4 = new Float32Array(16)
    mat4.identity(m4)
    mat4.translation([20,30,40],m4)

    //m.prettyPrint()
    if(!matrixMatch(m,m4)) RESULT = "FAIL - Matrices do not match"
    return NAME + " - " + RESULT
})


units.push(()=>{
    let NAME = "Translate Matrix"
    let RESULT = "SUCCESS"

    let m = rage.createMatrix()
    m.translate(20,30,40)    

    let m4 = new Float32Array(16)
    let m4out = new Float32Array(16)
    mat4.identity(m4)
    mat4.translate(m4, [20,30,40], m4out)
    
    //m.prettyPrint()

    if(!matrixMatch(m,m4out)) RESULT = "FAIL - Matrices do not match"
    return NAME + " - " + RESULT
})



units.push(()=>{
    let NAME = "Rotate Matrix"
    let RESULT = "SUCCESS"

    let m = rage.createMatrix()
    m.rotate(45.0, rage.def.Y_AXIS)  

    let m4 = new Float32Array(16)
    let m4x = new Float32Array(16)
    let m4out = new Float32Array(16)
    mat4.identity(m4)
    mat4.rotateY(m4, 45.0, m4out)
    //mat4.multiply(m4, m4x, m4out)

   // m.prettyPrint()

    if(!matrixMatch(m,m4out)) RESULT = "FAIL - Matrices do not match"
    return NAME + " - " + RESULT
})



units.push(()=>{
    let NAME = "Rotate then Translate Matrix"
    let RESULT = "SUCCESS"

    let m = rage.createMatrix()
    m.rotate(45.0, rage.def.Y_AXIS)  
    m.translate(20,30,40)

    let m4 = new Float32Array(16)
    let m4x = new Float32Array(16)
    let m4out = new Float32Array(16)
    mat4.identity(m4)
    mat4.rotateY(m4, 45.0, m4out)
    mat4.translate(m4out, [20,30,40], m4out)

    //m.prettyPrint()

    if(!matrixMatch(m,m4out)) RESULT = "FAIL - Matrices do not match"
    return NAME + " - " + RESULT
})



units.push(()=>{
    let NAME = "Create Translation Matrix"
    let RESULT = "SUCCESS"

    let m = rage.createMatrix()
    m.createTranslation(40,50,60)

    let m4out = new Float32Array(16)
    mat4.translation( [40,50,60], m4out)
    //mat4.multiply(m4, m4x, m4out)

    //m.prettyPrint()

    if(!matrixMatch(m,m4out)) RESULT = "FAIL - Matrices do not match"
    return NAME + " - " + RESULT
})



units.push(()=>{
    let NAME = "Create Rotation Matrix"
    let RESULT = "SUCCESS"

    let m = rage.createMatrix()
    m.createRotation(30, rage.def.Z_AXIS)

    let m4out = new Float32Array(16)
    mat4.rotationZ( 30, m4out)
    //mat4.multiply(m4, m4x, m4out)

    //m.prettyPrint()

    if(!matrixMatch(m,m4out)) RESULT = "FAIL - Matrices do not match"
    return NAME + " - " + RESULT
})


units.push(()=>{
    let NAME = "Push and Pop Matrix"
    let RESULT = "SUCCESS"

    let v = new Float32Array(16)

    let m = rage.createMatrix()
    m.createRotation(30, rage.def.Z_AXIS)
    v = m.matrix.slice()

    m.push()

        m.translate(20,30,40)
        m.rotate(30, rage.def.Y_AXIS)

        m.push()

            m.translate(40,50,60)
            //m.prettyPrint()

        m.pop()

    m.pop()

    //m.prettyPrint()

    if(!matrixMatch(m,v)) RESULT = "FAIL - Matrices do not match"
    return NAME + " - " + RESULT
})







