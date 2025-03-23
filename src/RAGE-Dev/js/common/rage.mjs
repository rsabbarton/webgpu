import {log} from './rage_modules/logger.mjs'
import {redTriangleSample} from './rage_modules/shader-samples.mjs'

import * as constants from './rage_modules/rage_constants.mjs'

import {ResourceManager} from './rage_modules/resource-manager.mjs'
import {Matrix} from './rage_modules/matrix.mjs'
import {Vector2, Vector3, Vector4} from './rage_modules/vector.mjs'
import {Material, Texture} from './rage_modules/material.mjs'
import {Vertex2D, Vertex3D} from './rage_modules/vertex.mjs'
import {Mesh} from './rage_modules/mesh.mjs'
import {Model} from './rage_modules/model.mjs'
import { SceneGraph, SceneNode, Transform } from './rage_modules/scenegraph.mjs'
import { degToRad, radToDeg } from "./rage_modules/utils.mjs"
import { cube } from "./rage_modules/primatives.mjs"

class RAGE {
    constructor(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.var = {}
        this.primitives = {}
        this.primitives.cube = cube
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
        this.metrics = {
            lastFramecount: 0,
            framerate: 0,
            framecount: 0,
            lastRunTimeStamp: 0
        }
        
        this.materials = new Array()

        this.resourceManager = false

        this.debugMode = false

        this.lastFrameTime = 0.0
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

    setDebugMode(mode){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.debugMode = mode
        this.updateMetrics()
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

    createVertex(x, y, z){
        // CODE: COMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return new Vertex3D(x, y, z)
    }

    createMesh(){
        // CODE: COMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return new Mesh()
    }

    createModel(){
        // CODE: COMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return new Model()
    }

    createSceneGraph(){
        // CODE: COMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return new SceneGraph()
    }
    
    createSceneNode(name){
        // CODE: COMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return new SceneNode(name)
    }

    createTransform(){
        // CODE: COMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return new Transform()
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


    async createPipeline(label, moduleId){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        log('creating pipeline')
        const pipeline = await this.device.createRenderPipeline({
            label: label,
            layout: 'auto',
            vertex: {
            module: this.modules[moduleId],
            },
            fragment: {
            module: this.modules[moduleId],
            targets: [{ format: this.presentationFormat }],
            },
        })
        let id = this.pipelines.length
        this.pipelines.push(pipeline)
        return id
    }

    async createMatrixUniformBuffer(label){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        log('Creating Matrix Uniform Buffer')
        const buffer = await this.device.createBuffer({
            label: label,
            size: 16 * 4,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        })
        return buffer
    }

    async createVertexBuffer(name, data){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        log('Creating Vertex Buffer')
        log(data.byteLength)
        log(data.length)
        const buffer =  await this.device.createBuffer({
            label: name,
            size: data.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
        return buffer
    }

    async createColorBuffer(name, data){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        log('Creating Color Buffer')
        const buffer = await this.device.createBuffer({
            label: name,
            size: data.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
        //new Float32Array(buffer.getMappedRange()).set(new Float32Array(data))
        //buffer.unmap()
        return buffer
    }

    async createUVBuffer(name, data){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        log('Creating UV Buffer')
        const buffer = await this.device.createBuffer({
            label: name,
            size: data.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
            //mappedAtCreation: true,
        })
        //new Float32Array(buffer.getMappedRange()).set(new Float32Array(data))
        //buffer.unmap()
        return buffer
    }

    async createNormalBuffer(name, data){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        log('Creating Normal Buffer')
        const buffer = await this.device.createBuffer({
            label: name,
            size: data.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
            //mappedAtCreation: true,
        })
        //new Float32Array(buffer.getMappedRange()).set(new Float32Array(data))
        //buffer.unmap()
        return buffer
    }

    async create3DBufferedPipeline(label, moduleId){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        log('creating pipeline')

        let module = this.modules[moduleId]
        
        const pipeline = await this.device.createRenderPipeline({
            label: '2 attributes with color',
            layout: 'auto',
            vertex: {
              module,
              buffers: [
                {
                  arrayStride: 12,
                  stepMode: 'vertex',
                  attributes: [
                    {shaderLocation: 0, offset: 0, format: 'float32x3'},  // position
                  ],
                },
                {
                  arrayStride: 4 * 4,
                  stepMode: 'vertex',
                  attributes: [
                    {shaderLocation: 1, offset: 0, format: 'float32x4'},  // color
                  ],
                },
                {
                  arrayStride: 8,
                  attributes: [
                    {shaderLocation: 2, offset: 0, format: 'float32x2'},  // uv
                  ],
                },
                {
                  arrayStride: 12,
                  stepMode: 'vertex',
                  attributes: [
                    {shaderLocation: 3, offset: 0, format: 'float32x3'},  // normal
                  ],
                },
              ],
            },
            fragment: {
              module,
              targets: [{ format: this.presentationFormat }],
            },
            primitive: {
              cullMode: 'back',
            },
            depthStencil: {
              depthWriteEnabled: true,
              depthCompare: 'less',
              format: 'depth24plus',
            },
          });


        let id = this.pipelines.length
        this.pipelines.push(pipeline)
        return id
    }

    async createRenderPassDescriptor(label, clearColor4f){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
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
            depthStencilAttachment: {
                // view: <- to be filled out when we render
                depthClearValue: 1.0,
                depthLoadOp: 'clear',
                depthStoreOp: 'store',
            },
        }
        
        return renderPassDescriptor

    }


    async createRenderPass(renderPassDescriptor){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE

        this.lastFrameTime = performance.now()

        this.canvasTexture = this.context.getCurrentTexture()

        renderPassDescriptor.colorAttachments[0].view =
            this.context.getCurrentTexture().createView()

        if (!this.depthTexture ||
            this.depthTexture.width !== this.canvasTexture.width ||
            this.depthTexture.height !== this.canvasTexture.height) {
            if (this.depthTexture) {
                this.depthTexture.destroy();
            }
            
            this.depthTexture = this.device.createTexture({
                size: [this.canvasTexture.width, this.canvasTexture.height],
                format: 'depth24plus',
                usage: GPUTextureUsage.RENDER_ATTACHMENT,
            });
        }

        renderPassDescriptor.depthStencilAttachment.view = this.depthTexture.createView();

        this.currentEncoder = await this.device.createCommandEncoder({ label: 'our encoder' })
        return await this.currentEncoder.beginRenderPass(renderPassDescriptor)
        


    }

    async endRenderPass(pass) {

        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        pass.end()
    
        const commandBuffer = await this.currentEncoder.finish()
        await this.device.queue.submit([commandBuffer])

        this.metrics.framecount++

        this.currentRenderPass = false
    
        if(this.debugMode){
            let debug
            if(!document.getElementById('debug')){
                debug = document.createElement('div')
                document.body.appendChild(debug)
            } else {
                debug = document.getElementById('debug')
            }
            debug.id = 'debug'
            debug.style.position = 'absolute'
            debug.style.top = '0'
            debug.style.left = '0'
            debug.style.color = 'white'
            debug.style.backgroundColor = 'black'
            debug.style.padding = '5px'
            debug.style.fontFamily = 'monospace'
            debug.innerHTML = this.getDebugInfo()
            
        }   
    
    }

    updateMetrics(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE

        //console.log('updating metrics')
        //console.log(this.metrics)

        let currentTimeStamp = performance.now()
        let timeDiff = currentTimeStamp - this.metrics.lastRunTimeStamp
        this.metrics.lastRunTimeStamp = currentTimeStamp
        let framecount = this.metrics.framecount - this.metrics.lastFramecount
        this.metrics.framerate = framecount / (timeDiff / 1000)
        this.metrics.lastFramecount = this.metrics.framecount
        setTimeout(() => {
            this.updateMetrics()
        }
        , 1000)
    }

    getDebugInfo(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE

        let moduleCount = this.modules.length
        let pipelineCount = this.pipelines.length
        let materialsCount = this.materials.length


        let info = `--- Debug Info ---<br>
        Module Count: ${moduleCount}<br>
        Pipeline Count: ${pipelineCount}<br>
        Materials Count: ${materialsCount}<br>
        <br>
        FrameRate: ${Math.round(this.metrics.framerate*100)/100}<br>
        <br>
        ${JSON.stringify(rage.var, '<br>', '<br>')}
       `
        return info
    }
}



export {
    RAGE, 
    log, 
    Matrix, 
    Vector2, 
    Vector3, 
    Vector4,
    Material,
    Texture, 
    Vertex2D,
    Vertex3D,
    Mesh,
    Model,
    SceneGraph,
    SceneNode,
    Transform,
    degToRad,
    radToDeg,
    cube,
    redTriangleSample
}

