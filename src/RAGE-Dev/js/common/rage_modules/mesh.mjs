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
            
            // convert entries for colours from u8 to f32 IF needed
            if(vxa[i].r > 1 || vxa[i].g > 1 || vxa[i].b > 1 || vxa[i].a > 1){
                vxa[i].r /= 255
                vxa[i].g /= 255
                vxa[i].b /= 255
                vxa[i].a /= 255
            }
            if(vxa[i + 1].r > 1 || vxa[i + 1].g > 1 || vxa[i + 1].b > 1 || vxa[i + 1].a > 1){
                vxa[i + 1].r /= 255
                vxa[i + 1].g /= 255
                vxa[i + 1].b /= 255
                vxa[i + 1].a /= 255
            }
            if(vxa[i + 2].r > 1 || vxa[i + 2].g > 1 || vxa[i + 2].b > 1 || vxa[i + 2].a > 1){
                vxa[i + 2].r /= 255
                vxa[i + 2].g /= 255
                vxa[i + 2].b /= 255
                vxa[i + 2].a /= 255
            }   
            
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

    getFloat32ArrayXYZ(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        const f32 = new Float32Array(this.getVertexCount() * 3)
        let i = 0
        for (let triplet of this.triplets){
            f32[i++] = triplet.v1.position.x
            f32[i++] = triplet.v1.position.y
            f32[i++] = triplet.v1.position.z
            f32[i++] = triplet.v2.position.x
            f32[i++] = triplet.v2.position.y
            f32[i++] = triplet.v2.position.z
            f32[i++] = triplet.v3.position.x
            f32[i++] = triplet.v3.position.y
            f32[i++] = triplet.v3.position.z
        }
        return f32
    }

    getFloat32ArrayUV(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        const f32 = new Float32Array(this.getVertexCount() * 2)
        let i = 0
        for (let triplet of this.triplets){
            f32[i++] = triplet.v1.uv.x
            f32[i++] = triplet.v1.uv.y
            f32[i++] = triplet.v2.uv.x
            f32[i++] = triplet.v2.uv.y
            f32[i++] = triplet.v3.uv.x
            f32[i++] = triplet.v3.uv.y
        }
        return f32
    }

    getUint8ClampedArrayColor(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        const u8 = new Uint8ClampedArray(this.getVertexCount() * 4)
        let i = 0
        for (let triplet of this.triplets){
            u8[i++] = triplet.v1.color.r
            u8[i++] = triplet.v1.color.g
            u8[i++] = triplet.v1.color.b
            u8[i++] = triplet.v1.color.a
            u8[i++] = triplet.v2.color.r
            u8[i++] = triplet.v2.color.g
            u8[i++] = triplet.v2.color.b
            u8[i++] = triplet.v2.color.a
            u8[i++] = triplet.v3.color.r
            u8[i++] = triplet.v3.color.g
            u8[i++] = triplet.v3.color.b
            u8[i++] = triplet.v3.color.a
        }
        return u8
    }

    getFloat32ArrayNormal(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        const f32 = new Float32Array(this.getVertexCount() * 3)
        let i = 0
        for (let triplet of this.triplets){
            f32[i++] = triplet.v1.normal.x
            f32[i++] = triplet.v1.normal.y
            f32[i++] = triplet.v1.normal.z
            f32[i++] = triplet.v2.normal.x
            f32[i++] = triplet.v2.normal.y
            f32[i++] = triplet.v2.normal.z
            f32[i++] = triplet.v3.normal.x
            f32[i++] = triplet.v3.normal.y
            f32[i++] = triplet.v3.normal.z
        }
        return f32
    }
    

    getVertexArray(modelViewMatrix){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        const f32 = new Float32Array(this.getVertexCount() * 3)
        let i = 0
        for (let triplet of this.triplets){
            let v1 = triplet.v1.position.clone()
            let v2 = triplet.v2.position.clone()
            let v3 = triplet.v3.position.clone()
            v1.multiplyByMatrix(modelViewMatrix)    
            v2.multiplyByMatrix(modelViewMatrix)
            v3.multiplyByMatrix(modelViewMatrix)
            f32[i++] = v1.x
            f32[i++] = v1.y
            f32[i++] = v1.z
            f32[i++] = v2.x
            f32[i++] = v2.y
            f32[i++] = v2.z
            f32[i++] = v3.x
            f32[i++] = v3.y
            f32[i++] = v3.z
        }
        return f32
    }

    getNormalArray(modelViewMatrix){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        const f32 = new Float32Array(this.getVertexCount() * 3)
        let i = 0
        for (let triplet of this.triplets){
            let v1 = triplet.v1.normal.clone()
            let v2 = triplet.v2.normal.clone()
            let v3 = triplet.v3.normal.clone()
            v1.multiplyByMatrix(modelViewMatrix)    
            v2.multiplyByMatrix(modelViewMatrix)
            v3.multiplyByMatrix(modelViewMatrix)
            f32[i++] = v1.x
            f32[i++] = v1.y
            f32[i++] = v1.z
            f32[i++] = v2.x
            f32[i++] = v2.y
            f32[i++] = v2.z
            f32[i++] = v3.x
            f32[i++] = v3.y
            f32[i++] = v3.z
        }
        return f32
    }

    getUVArray(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        const f32 = new Float32Array(this.getVertexCount() * 2)
        let i = 0
        for (let triplet of this.triplets){
            f32[i++] = triplet.v1.uv.x
            f32[i++] = triplet.v1.uv.y
            f32[i++] = triplet.v2.uv.x
            f32[i++] = triplet.v2.uv.y
            f32[i++] = triplet.v3.uv.x
            f32[i++] = triplet.v3.uv.y
        }
        return f32
    }

    getColorArray(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        const u8 = new Uint8ClampedArray(this.getVertexCount() * 4)
        let i = 0
        for (let triplet of this.triplets){
            u8[i++] = triplet.v1.color.r
            u8[i++] = triplet.v1.color.g
            u8[i++] = triplet.v1.color.b
            u8[i++] = triplet.v1.color.a
            u8[i++] = triplet.v2.color.r
            u8[i++] = triplet.v2.color.g
            u8[i++] = triplet.v2.color.b
            u8[i++] = triplet.v2.color.a
            u8[i++] = triplet.v3.color.r
            u8[i++] = triplet.v3.color.g
            u8[i++] = triplet.v3.color.b
            u8[i++] = triplet.v3.color.a
        }
        return u8
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
