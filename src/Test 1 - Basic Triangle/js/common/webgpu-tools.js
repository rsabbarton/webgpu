
import {log as log} from 'logger'


class WebGPUTools {
    constructor(){

    }

    async isSupported(){
        const adapter = await navigator.gpu?.requestAdapter()
        const device = await adapter?.requestDevice()   
        if(adapter && device) return true
        return false
    }

    async init(canvas){
        log(canvas)
        this.canvas = canvas
        this.adapter = await navigator.gpu?.requestAdapter()
        this.device = await this.adapter?.requestDevice()   
        if(!this.adapter || !this.device){
            log('WebGPU Not Supported in this browser')
            return false
        }

        this.context = canvas.getContext('webgpu')
        this.presentationFormat = navigator.gpu.getPreferredCanvasFormat()
        this.context.configure({
            device: this.device,
            format: this.presentationFormat,
        })

        log(this.context)
        log('context configured')
    }

    createShaderModule(source){
        log('Creating Shader Module')
        return this.device.createShaderModule(source)
    }
}

const WG = new WebGPUTools()

export {WG}