import {log} from './rage_modules/logger.js'
import {WEBGPUTools as webgpuTools} from './rage_modules/webgpu-tools.js'
import {WGSLTOOLS as wgslTools} from './rage_modules/wgsl-tools.js'
import {redTriangleSample} from './rage_modules/shader-samples.js'

import * as constants from './rage_modules/rage_constants.js'

import {ResourceManager} from './rage_modules/resource-manager.js'
import {Matrix} from './rage_modules/matrix.js'



class RAGE {
    constructor(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.def = constants
        this.constants = constants
        this.vertexType = false
        this.viewMode = false
        this.shaderMode = false
        this.canvas = false
        this.webgpuTools = webgpuTools
        this.wgslTools = wgslTools

        this.modules = new Array()
        this.pipelines = new Array()
        this.renderPassDescriptors = new Array()
    }

    isSupported(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return this.webgpuTools.isSupported()
    }

    log(text){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        log(text)
    }

    async init(canvas){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        log('Checking for Rage Support')
        if(!this.isSupported()){
            log('Rage is not supported on this browser!')
            return false
        }
        log('Rage is supported')
        log('Setting canvas with Id: ' + canvas.id)
        this.canvas = canvas
        log('Initialising Rage')
        await this.webgpuTools.init(this.canvas)
        this.resourceManager = new ResourceManager()
        return this
    }

    createImageTexture(name, url){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return this.resourceManager.createImageTexture(name, url)
    }

    setVertexType(type){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        if(this.def.defExists(type))
            this.vertexType = type
        return type
    }

    setViewMode(mode){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.viewMode = mode
    }

    setShaderMode(mode){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.shaderMode = mode
    }

    createMatrix() {
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return new Matrix()
    }


    getPipeline(id) { 
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return this.pipelines[id]
    }
    getRenderPassDescriptor(id) { 
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return this.renderPassDescriptors[id]
    }
    getModule(id) { 
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return this.modules[id]
    }

    async createShaderModule(shaderSrc){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        let newModule = await this.webgpuTools.createShaderModule(shaderSrc)
        let id = this.modules.length
        this.modules.push(newModule)
        return id
    }


    async createPipeline(label, moduleId, vsEntry, fsEntry){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        log('creating pipeline')
        const pipeline = await webgpuTools.device.createRenderPipeline({
            label: label,
            layout: 'auto',
            vertex: {
            entryPoint: vsEntry,
            module: this.modules[moduleId],
            },
            fragment: {
            entryPoint: fsEntry,
            module: this.modules[moduleId],
            targets: [{ format: this.webgpuTools.presentationFormat }],
            },
        })
        let id = this.pipelines.length
        this.pipelines.push(pipeline)
        return id
    }

    async createRenderPassDescriptor(label, clearColor4f){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        log('Creating renderPassDescriptor')
        const renderPassDescriptor = {
            label: label,
            colorAttachments: [
                {
                // view: <- to be filled out when we render
                clearValue: clearColor4f,
                loadOp: 'clear',
                storeOp: 'store',
                },
            ],
        }
        let id = this.renderPassDescriptors.length
        this.renderPassDescriptors.push(renderPassDescriptor)
        return id

    }


    createRenderPass(renderPassDescriptorId){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        if(this.currentRenderPass){
            log('renderPass already exists - using existing Render Pass')
            return this.currentRenderPass
        }

        this.renderPassDescriptors[renderPassDescriptorId].colorAttachments[0].view =
            this.webgpuTools.context.getCurrentTexture().createView()
        
        this.currentEncoder = this.webgpuTools.device.createCommandEncoder({ label: 'our encoder' })
        this.currentRenderPass = this.currentEncoder.beginRenderPass(this.renderPassDescriptors[renderPassDescriptorId])
        return this.currentRenderPass


    }

    endRenderPass() {

        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.currentRenderPass.end()
    
        const commandBuffer = this.currentEncoder.finish()
        this.webgpuTools.device.queue.submit([commandBuffer])

        this.currentRenderPass = false
    }
}



export {RAGE, log, Matrix, redTriangleSample}

