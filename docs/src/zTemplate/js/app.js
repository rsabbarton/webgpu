

import {log as log} from 'logger'
log('Logger Initialised!')





setListeners()
main()




async function main(){
    let canvas = setCanvasDimensions()
    const context = canvas.getContext('webgpu')
    log('Getting Adapter')
    const adapter = await navigator.gpu?.requestAdapter()
    log('Getting Device')
    const device = await adapter?.requestDevice()
    log(adapter)
    log(device)

    

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