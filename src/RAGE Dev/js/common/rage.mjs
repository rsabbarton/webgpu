import {log} from './rage_modules/logger.mjs'
import {redTriangleSample} from './rage_modules/shader-samples.mjs'

import * as constants from './rage_modules/rage_constants.mjs'

import {ResourceManager} from './rage_modules/resource-manager.mjs'
import {Matrix} from './rage_modules/matrix.mjs'
import {Vector2, Vector3, Vector4} from './rage_modules/vector.mjs'
import {Material, Texture} from './rage_modules/material.mjs'


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
        this.context = false
        
        this.modules = new Array()
        this.pipelines = new Array()
        this.renderPassDescriptors = new Array()
        this.currentRenderPass = false
        this.currentEncoder = false
        this.adapter = false
        this.device = false
        this.presentationFormat = false
        
        this.materials = new Array()

        this.resourceManager = false
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

        
        this.resourceManager = new ResourceManager()
        
        log('Rage Init() Completed!')
        return this
    }

    createMaterial(name){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        let material = new Material()
        material.name = name
        let id = this.materials.length
        material.id = id
        this.materials.push(material)   
        return id
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
        // CODE: COMPLETE
        // UNIT: TRUE
        // DOCS: FALSE
        return new Matrix()
    }

    createVector2d(x,y){
        // CODE: COMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return new Vector2(x,y)
    }
    createVector3d(x,y,z){
        // CODE: COMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return new Vector3(x,y,z)
    }
    createVector4d(x,y,z,a){
        // CODE: COMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return new Vector4(x,y,z,a)
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
        log('Creating Shader Module')
        let newModule = await this.device.createShaderModule(shaderSrc)
        let id = this.modules.length
        this.modules.push(newModule)
        return id
    }


    async createPipeline(label, moduleId, vsEntry, fsEntry){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        log('creating pipeline')
        const pipeline = await this.device.createRenderPipeline({
            label: label,
            layout: 'auto',
            vertex: {
            entryPoint: vsEntry,
            module: this.modules[moduleId],
            },
            fragment: {
            entryPoint: fsEntry,
            module: this.modules[moduleId],
            targets: [{ format: this.presentationFormat }],
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
            this.context.getCurrentTexture().createView()
        
        this.currentEncoder = this.device.createCommandEncoder({ label: 'our encoder' })
        this.currentRenderPass = this.currentEncoder.beginRenderPass(this.renderPassDescriptors[renderPassDescriptorId])
        return this.currentRenderPass


    }

    endRenderPass() {

        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.currentRenderPass.end()
    
        const commandBuffer = this.currentEncoder.finish()
        this.device.queue.submit([commandBuffer])

        this.currentRenderPass = false
    }
}



export {RAGE, log, Matrix, Vector2, Vector3, Vector4, redTriangleSample}

