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

    getTriplet(index){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return this.triplets[index]
    }

    getTriplets(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return this.triplets
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
        return this.triplets.length * 3
    }

    loadFromObjectArray(vxa){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        for (let i = 0; i < vxa.length; i += 3){
            const v1 = new Vertex3D(vxa[i].x, vxa[i].y, vxa[i].z)
            v1.setUV(vxa[i].u, vxa[i].v)
            v1.setColor(vxa[i].r, vxa[i].g, vxa[i].b, vxa[i].a)
            const v2 = new Vertex3D(vxa[i + 1].x, vxa[i + 1].y, vxa[i + 1].z)
            v2.setUV(vxa[i + 1].u, vxa[i + 1].v)
            v2.setColor(vxa[i + 1].r, vxa[i + 1].g, vxa[i + 1].b, vxa[i + 1].a)
            const v3 = new Vertex3D(vxa[i + 2].x, vxa[i + 2].y, vxa[i + 2].z)
            v3.setUV(vxa[i + 2].u, vxa[i + 2].v)
            v3.setColor(vxa[i + 2].r, vxa[i + 2].g, vxa[i + 2].b, vxa[i + 2].a)
            this.addTriplet(v1, v2, v3)
        }
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
        this.v1.setNormal(this.normal)
        this.v2.setNormal(this.normal)
        this.v3.setNormal(this.normal)
    }
}


export { Mesh, Triplet }
