import { Vertex3D } from './vertex.mjs'
import { Material } from './material.mjs'
import { Vector3 } from './vector.mjs'

class Mesh {
    constructor(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.triplets = new Array()
        this.material = new Material()
    }

    addTriplet(v1, v2, v3){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.triplets.push(new Triplet(v1, v2, v3))
    }

    setMaterial(material){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.material = material
    }

    getVertex(index){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return this.vertices[index]
    }

    getVertices(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return this.vertices
    }

    getMaterial(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return this.material
    }

    getVertexCount(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return this.vertices.length
    }


}


class Triplet {
    constructor(v1, v2, v3){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.v1 = v1
        this.v2 = v2
        this.v3 = v3
        this.normal = new Vector3(0, 0, 1)
        this.surfaceNormal()
    }

    surfaceNormal(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        const b = this.v2.position.sub(this.v1.position)
        const c = this.v3.position.sub(this.v1.position)
        this.normal = b.cross(c).normalize()
    }
}


export { Mesh, Triplet }
