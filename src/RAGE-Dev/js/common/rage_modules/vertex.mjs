import { Vector2, Vector3, Vector4, ColorVector4 } from "./vector.mjs"
import { degToRad, radToDeg } from "./utils.mjs"




class Vertex2D {
    constructor(x, y){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.position = new Vector2(x, y)     
    }
}

class Vertex3D {
    constructor(x, y, z){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.position = new Vector3(x, y, z)
        this.uv = new Vector2(0, 0)
        this.normal = new Vector3(0, 0, 1 ) 
        this.color = new ColorVector4(255, 0, 0, 255)       
    }

    setUV(x, y){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.uv = new Vector2(x, y)
    }

    setNormal(v){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.normal = v
    }

    setColor(r, g, b, a){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.color = new ColorVector4(r, g, b, a)
    }

    clone(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        const newVertex = new Vertex3D(this.position.x, this.position.y, this.position.z)
        newVertex.setUV(this.uv.x, this.uv.y)
        newVertex.setNormal(this.normal)
        newVertex.setColor(this.color.r, this.color.g, this.color.b, this.color.a)
        return newVertex
    }
}



export { Vertex2D, Vertex3D, Vector2, Vector3, Vector4, degToRad, radToDeg }

 
