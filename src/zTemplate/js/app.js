

import {log as log} from 'logger'
log('Logger Initialised!')

import {WG as wg} from 'webgpu-tools'
import {WGSL as wgsl} from 'wgsl-tools'



setListeners()
main()




async function main(){
    
    if(!await wg.isSupported()){
        log('WebGPU Not Supported')
        return 1
    }
    
    let canvas = setCanvasDimensions()
    
    await wg.init(canvas)

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