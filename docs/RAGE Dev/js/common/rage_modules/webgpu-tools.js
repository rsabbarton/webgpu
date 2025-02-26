
import {log} from './logger.js'


class WebGPUTools {
    constructor(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        
    }

    async isSupported(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        const adapter = await navigator.gpu?.requestAdapter()
        const device = await adapter?.requestDevice()   
        if(adapter && device) return true
        return false
    }

    async init(canvas){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        log(canvas)
        this.canvas = canvas
        
        this.adapter = await navigator.gpu?.requestAdapter()
        log(this.adaptor)
        this.device = await this.adapter?.requestDevice()   
        log(this.device)
        if(!this.adapter || !this.device){
            log('WebGPU Not Supported in this browser')
            return false
        }

        

        this.context = canvas.getContext('webgpu')
        log(this.context)
        this.presentationFormat = await navigator.gpu.getPreferredCanvasFormat()
        log(this.presentationFormat)
        this.context.configure({
            device: this.device,
            format: this.presentationFormat,
        })

        log('WebGPU Tools Init() Completed!')

        return this
    }

    async createShaderModule(source){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        log('Creating Shader Module')
        return await this.device.createShaderModule(source)
    }
}

const WEBGPUTools = new WebGPUTools()

export {WEBGPUTools}