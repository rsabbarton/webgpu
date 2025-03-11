import { Vector2, Vector3, Vector4 } from "./vector.mjs"
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
    }
}



export { Vertex2D, Vertex3D, Vector2, Vector3, Vector4, degToRad, radToDeg }

 
