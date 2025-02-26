

import {RAGE, log, Matrix, redTriangleSample} from 'rage'
import {cube} from './sample-model-cube.js'


let rage = new RAGE()
globalThis.rage = rage // for debugging
globalThis.log = log // for debugging
globalThis.matrix = new Matrix() // for debugging

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
    `,
  }

async function main(){
    
    let canvas = setCanvasDimensions()
    await rage.init(canvas)

    const crateId = rage.createImageTexture('crate', '../Resources/Images/crate.jpg')
    log(crateId)

    rage.setVertexType(rage.def.VERTEX_TYPE_3DUVC)
    rage.setViewMode(rage.def.VIEW_MODE_3D_PERSPECTIVE)
    rage.setShaderMode(rage.def.SHADER_MODE_V3D_FUV)

    let moduleId = await rage.createShaderModule(redTriangleSample)
    let module2 = await rage.createShaderModule(myShaders) 
    let pipelineId = await rage.createPipeline('myPipe', moduleId, 'vs', 'fs')
    let pipeline2 = await rage.createPipeline('myPipe2', module2, 'vs', 'fs')
    let renderPassDescriptorId = await rage.createRenderPassDescriptor('my render pass', [0.0,0.0,0.0,1.0])
    
    const pass = rage.createRenderPass(renderPassDescriptorId) 

    pass.setPipeline(rage.getPipeline(pipelineId))
    pass.draw(3)
    pass.setPipeline(rage.getPipeline(pipeline2))
    pass.draw(3)

    rage.endRenderPass()
}



function setListeners(){

    log('Setting Listeners')
    window.addEventListener('resize', (event)=>{setCanvasDimensions()})

}

function setCanvasDimensions(){
    
    log('Setting Canvas Dimentions')
    let canvas = document.getElementById('test-canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerWidth * (9/16)
    canvas.style.width = canvas.width
    canvas.style.height = canvas.height
    log(`Width: ${canvas.width} x Height: ${canvas.height}`)

    return canvas

}