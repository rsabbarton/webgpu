

import {log as log} from 'logger'
log('Logger Initialised!')

import {WG as wg} from 'webgpu-tools'
import {WGSL as wgsl} from 'wgsl-tools'
import {redTriangleSample} from 'shader-samples'



setListeners()
main()


async function main(){
    
    if(!await wg.isSupported()){
        log('WebGPU Not Supported')
        return 1
    }
    
    let canvas = setCanvasDimensions()
    
    await wg.init(canvas)

    log(redTriangleSample.code)
    let module = wg.createShaderModule(redTriangleSample)

    log('creating pipeline')
    const pipeline = wg.device.createRenderPipeline({
        label: 'our hardcoded red triangle pipeline',
        layout: 'auto',
        vertex: {
          entryPoint: 'vs',
          module,
        },
        fragment: {
          entryPoint: 'fs',
          module,
          targets: [{ format: wg.presentationFormat }],
        },
      })


    log('Creating renderPassDescriptor')
    const renderPassDescriptor = {
        label: 'our basic canvas renderPass',
        colorAttachments: [
            {
            // view: <- to be filled out when we render
            clearValue: [0.3, 0.3, 0.3, 1],
            loadOp: 'clear',
            storeOp: 'store',
            },
        ],
    }

    function render() {
        // Get the current texture from the canvas context and
        // set it as the texture to render to.
        renderPassDescriptor.colorAttachments[0].view =
            wg.context.getCurrentTexture().createView()
    
        // make a command encoder to start encoding commands
        const encoder = wg.device.createCommandEncoder({ label: 'our encoder' })
    
        // make a render pass encoder to encode render specific commands
        const pass = encoder.beginRenderPass(renderPassDescriptor)
        pass.setPipeline(pipeline)
        pass.draw(3)  // call our vertex shader 3 times.
        pass.end()
    
        const commandBuffer = encoder.finish()
        wg.device.queue.submit([commandBuffer])
      }
    
    render()

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