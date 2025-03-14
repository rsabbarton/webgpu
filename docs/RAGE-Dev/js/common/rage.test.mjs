import { expect } from 'chai'
import { RAGE } from './rage.mjs'

describe('RAGE', () => {
    let rage

    beforeEach(() => {
        rage = new RAGE()
    })

    it('should initialize with default values', () => {
        expect(rage.def).to.exist
        expect(rage.constants).to.exist
        expect(rage.vertexType).to.be.false
        expect(rage.viewMode).to.be.false
        expect(rage.shaderMode).to.be.false
        expect(rage.canvas).to.be.false
        expect(rage.context).to.be.false
        expect(rage.modules).to.be.an('array').that.is.empty
        expect(rage.pipelines).to.be.an('array').that.is.empty
        expect(rage.renderPassDescriptors).to.be.an('array').that.is.empty
        expect(rage.currentRenderPass).to.be.false
        expect(rage.currentEncoder).to.be.false
        expect(rage.adapter).to.be.false
        expect(rage.device).to.be.false
        expect(rage.presentationFormat).to.be.false
        expect(rage.materials).to.be.an('array').that.is.empty
        expect(rage.resourceManager).to.be.false
    })

    it('should create a matrix', () => {
        const matrix = rage.createMatrix()
        expect(matrix).to.exist
    })

    it('should create a 2D vector', () => {
        const vector = rage.createVector2d(1, 2)
        expect(vector).to.exist
        expect(vector.x).to.equal(1)
        expect(vector.y).to.equal(2)
    })

    it('should create a 3D vector', () => {
        const vector = rage.createVector3d(1, 2, 3)
        expect(vector).to.exist
        expect(vector.x).to.equal(1)
        expect(vector.y).to.equal(2)
        expect(vector.z).to.equal(3)
    })

    it('should create a 4D vector', () => {
        const vector = rage.createVector4d(1, 2, 3, 4)
        expect(vector).to.exist
        expect(vector.x).to.equal(1)
        expect(vector.y).to.equal(2)
        expect(vector.z).to.equal(3)
        expect(vector.w).to.equal(4)
    })

    it('should create a material', () => {
        const materialId = rage.createMaterial('testMaterial')
        expect(materialId).to.equal(0)
        expect(rage.materials).to.have.lengthOf(1)
        expect(rage.materials[0].name).to.equal('testMaterial')
    })

    it('should set vertex type', () => {
        const vertexType = rage.def.VERTEX_TYPE_3D
        rage.setVertexType(vertexType)
        expect(rage.vertexType).to.equal(vertexType)
    })

    it('should set view mode', () => {
        const viewMode = 'VIEW_MODE'
        rage.setViewMode(viewMode)
        expect(rage.viewMode).to.equal(viewMode)
    })

    it('should set shader mode', () => {
        const shaderMode = 'SHADER_MODE'
        rage.setShaderMode(shaderMode)
        expect(rage.shaderMode).to.equal(shaderMode)
    })
})