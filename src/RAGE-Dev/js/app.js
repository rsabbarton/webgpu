

import {RAGE, log, Matrix, radToDeg} from 'rage'
import {cube} from './sample-model-cube.js'


let rage = new RAGE()
globalThis.rage = rage // for debugging
globalThis.log = log // for debugging

log(rage)

setListeners()
main()

const myShaders = {
    label: 'my shaders',
    code: `
      @vertex fn vs(
        @builtin(vertex_index) vertexIndex : u32
      ) -> @builtin(position) vec4f {
        let pos = array(
          vec2f( 0.0, -0.5),  // top center
          vec2f(-0.5, 0.5),  // bottom left
          vec2f( 0.5, 0.5)   // bottom right
        );
 
        return vec4f(pos[vertexIndex], 0.0, 1.0);
      }
 
      @fragment fn fs() -> @location(0) vec4f {
        return vec4f(0.0, 0.0, 1.0, 0.5);
      }
    `}



async function main(){
    
    let canvas = setCanvasDimensions()
    await rage.init(canvas)


    rage.var.rotateAmtX = 0.0
    rage.var.rotateAmtY = 0.0
    rage.var.rotateAmtZ = 0.0
    //const crateId = rage.createImageTexture('crate', '../Resources/Images/crate.jpg')
    //log(crateId)
    rage.setDebugMode(true)
    rage.setVertexType(rage.def.VERTEX_TYPE_3DUVC)
    rage.setViewMode(rage.def.VIEW_MODE_3D_PERSPECTIVE)
    rage.setShaderMode(rage.def.SHADER_MODE_V3D_FUV)

    let myScene = rage.createSceneGraph()
    let myNode = rage.createSceneNode('myNode')
    myScene.addNode(myNode)
    let myCube = rage.createMesh()
    myCube.loadFromObjectArray(rage.primitives.cube.vertexArray)
    let myModel = rage.createModel()
    myModel.addMesh(myCube)
    
    myNode.attachModel(myModel)
    myScene.attachToRenderer(rage)
    myScene.createViewMatrix(70, 0.1, -100.0)


    console.log(myScene)

    let module3DCode = `

      struct MatrixProjection {
        matrix: mat4x4f,
      };

      struct MatrixModelView {
        matrix: mat4x4f,
      };

      struct Vertex {
        @location(0) position: vec3f,
        @location(1) color: vec4f,
        @location(2) uv: vec2f,
        @location(3) normal: vec3f,
      };

      struct VSOutput {
        @builtin(position) position: vec4f,
        @location(0) color: vec4f,
        @location(1) uv: vec2f,
        @location(2) normal: vec4f,
      };

      @group(0) @binding(0) var<uniform> projection: MatrixProjection;
      @group(0) @binding(1) var<uniform> modelview: MatrixModelView;

      @vertex fn vs(vert: Vertex) -> VSOutput {
        var vsOut: VSOutput;
        vsOut.position = projection.matrix * modelview.matrix * vec4f(vert.position, 1.0);
        vsOut.color = vert.color;
        vsOut.uv = vert.uv;
        vsOut.normal = projection.matrix * modelview.matrix * vec4f(vert.normal, 1.0);
        return vsOut;
      }

      @fragment fn fs(vsOut: VSOutput) -> @location(0) vec4f {
        
        return vsOut.color * vsOut.normal;
      }
    `

    let projectionMatrix = new Matrix()
    projectionMatrix.createPerspective( 70, canvas.width / canvas.height, 0.1, -1000)

    let modelViewMatrix = new Matrix()
    modelViewMatrix.createIdentity()
    modelViewMatrix.translate(0, 0, -5)
    //modelViewMatrix.rotate(20, 0, 0)

    //log(projectionMatrix)


    let matrixUniformBuffer = await rage.createMatrixUniformBuffer('matrix buffer')
    let modelViewMatrixBuffer = await rage.createMatrixUniformBuffer('model view matrix buffer')
    

    let pointData = myScene.getVertexBufferData()
    let pointBuffer = await rage.createVertexBuffer('point buffer', pointData)
    
    let colorData = myScene.getVertexColorBufferData()
    let colorBuffer = await rage.createColorBuffer('color buffer', colorData)
    
    let uvData = myScene.getUVBufferData()
    let uvBuffer = await rage.createUVBuffer('uv buffer', uvData)
    
    let normalData = myScene.getNormalBufferData()
    let normalBuffer = await rage.createNormalBuffer('normal buffer', normalData)
    
    let module3D = await rage.createShaderModule({code: module3DCode})
    let pipeline3D = await rage.create3DBufferedPipeline('3D', module3D)
    
    const bindGroup = rage.device.createBindGroup({
      label: 'bind group for matrix',
      layout: rage.getPipeline(pipeline3D).getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: matrixUniformBuffer } },
        { binding: 1, resource: { buffer: modelViewMatrixBuffer } },
      ],
    });

    log(pointData)
    
    log(projectionMatrix.getPrettyString())

    render(rage.getPipeline(pipeline3D), 
      projectionMatrix, matrixUniformBuffer, 
      modelViewMatrix, modelViewMatrixBuffer,
      bindGroup,
      [pointBuffer, colorBuffer, uvBuffer, normalBuffer],
      [pointData, colorData, uvData, normalData])

    // let moduleId = await rage.createShaderModule(redTriangleSample)
    // let module2 = await rage.createShaderModule(myShaders)
    // let pipelineId = await rage.createPipeline('myPipe', moduleId, 'vs', 'fs')
    // let pipeline2 = await rage.createPipeline('myPipe2', module2, 'vs', 'fs')
    // let rpdId = await rage.createRenderPassDescriptor('my render pass', [0.0,0.0,0.0,1.0])

    // let pipelines = [rage.getPipeline(pipelineId), rage.getPipeline(pipeline2)]
}

async function render(pipeline, matrixPro, uniformPro, matrixMod, uniformMod, bindGroup, buffers, dataarrays){
  
    // CODE: INCOMPLETE
    // UNIT: FALSE
    // DOCS: FALSE
    // Single Render Frame
    
    let interval = performance.now() - rage.lastFrameTime
    rage.var.rotateAmtY += 0.001 * interval
    rage.var.rotateAmtX += 0.001 * interval
    rage.var.rotateAmtZ += 0.0001 * interval

    matrixMod.push()


    //console.log(rage.var.rotateAmt)
    matrixMod.rotate(rage.var.rotateAmtY, Matrix.Y_AXIS)
    matrixMod.rotate(rage.var.rotateAmtX, Matrix.X_AXIS)
    matrixMod.rotate(rage.var.rotateAmtZ, Matrix.Z_AXIS)

    let rpd = await rage.createRenderPassDescriptor('my render pass', [0.1,0.1,0.1,1.0])

    rage.device.queue.writeBuffer(uniformPro, 0, matrixPro.matrix)
    rage.device.queue.writeBuffer(uniformMod, 0, matrixMod.matrix)

    rage.device.queue.writeBuffer(buffers[0], 0, dataarrays[0])
    rage.device.queue.writeBuffer(buffers[1], 0, dataarrays[1])
    rage.device.queue.writeBuffer(buffers[2], 0, dataarrays[2])
    rage.device.queue.writeBuffer(buffers[3], 0, dataarrays[3])

    const pass = await rage.createRenderPass(rpd)
    pass.setPipeline(pipeline)
    
    pass.setVertexBuffer(0, buffers[0])
    pass.setVertexBuffer(1, buffers[1])
    pass.setVertexBuffer(2, buffers[2])
    pass.setVertexBuffer(3, buffers[3])
    pass.setBindGroup(0, bindGroup);
    pass.draw(dataarrays[0].length/3, 1, 0, 0)

    rage.endRenderPass(pass)

    matrixMod.pop()
    //window.requestAnimationFrame(()=>{render(rpdId, pipelines)})
    setTimeout(()=>{render(pipeline, 
      matrixPro, uniformPro, 
      matrixMod, uniformMod, 
      bindGroup, 
      buffers, dataarrays)}, 
      1000/60)

}


function setListeners(){

    log('Setting Listeners')
    window.addEventListener('resize', (event)=>{setCanvasDimensions()})

}

function setCanvasDimensions(){
    
    log('Setting Canvas Dimentions')
    let canvas = document.getElementById('test-canvas')
    canvas.width = window.innerWidth * 0.6
    canvas.height = canvas.width * (9/16)
    canvas.style.width = canvas.width
    canvas.style.height = canvas.height
    log(`Width: ${canvas.width} x Height: ${canvas.height}`)

    return canvas

}