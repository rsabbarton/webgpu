import { Mesh } from './mesh.mjs'
import { Material } from './material.mjs'
import { Vector3 } from './vector.mjs'
import { Vertex3D } from './vertex.mjs'
import { Float32Concat, Uint8ClampedConcat } from './utils.mjs'


class Model {
    constructor(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.meshes = new Array()

    }

    addMesh(mesh){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.meshes.push(mesh)
    }

    getMesh(index){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return this.meshes[index]
    }

    getMeshes(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return this.meshes
    }

    getMeshCount(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return this.meshes.length
    }

    removeMesh(index){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.meshes.splice(index, 1)
    }

    compileRenderBuffers(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE

    }

    getVertexCount(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        let count = 0
        this.meshes.forEach(mesh => count += mesh.getVertexCount())
        return count
    }

    getVertexBufferData(modelViewMatrix){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        modelViewMatrix.push()

        let data = new Float32Array()
        this.meshes.forEach((mesh) => {
            data = Float32Concat(data, mesh.getVertexArray(modelViewMatrix))
        })

        modelViewMatrix.pop()
        return data
    }

    getNormalBufferData(modelViewMatrix){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        modelViewMatrix.push()

        let data = new Float32Array()
        this.meshes.forEach((mesh) => {
            data = Float32Concat(data, mesh.getNormalArray(modelViewMatrix))
        });

        modelViewMatrix.pop()
        return data
    }  
    
    getUVBufferData(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        let data = []
        this.meshes.forEach(mesh => data = Float32Concat(data, mesh.getUVArray()))
        return data
    }   

    getColorBufferData(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        let data = []
        this.meshes.forEach(mesh => data = Uint8ClampedConcat(data, mesh.getColorArray()))
        return data
    }   

}



export { Model, Mesh, Material, Vector3, Vertex3D }