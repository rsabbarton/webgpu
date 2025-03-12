import { Mesh } from './mesh.mjs'
import { Material } from './material.mjs'
import { Vector3 } from './vector.mjs'
import { Vertex3D } from './vertex.mjs'


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
}



export { Model }