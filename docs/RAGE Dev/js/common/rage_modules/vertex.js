
class Vertex2D {
    constructor(x, y){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.x = x
        this.y = y
        
    }
}

class Vertex3D {
    constructor(x, y, z){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.x = x
        this.y = y
        this.z = z
    }
}


        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        
const vec3 = {
    cross(a, b, dst) {
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        dst = dst || new Float32Array(3);

        const t0 = a[1] * b[2] - a[2] * b[1];
        const t1 = a[2] * b[0] - a[0] * b[2];
        const t2 = a[0] * b[1] - a[1] * b[0];

        dst[0] = t0;
        dst[1] = t1;
        dst[2] = t2;

        return dst;
    },

    subtract(a, b, dst) {
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        dst = dst || new Float32Array(3);

        dst[0] = a[0] - b[0];
        dst[1] = a[1] - b[1];
        dst[2] = a[2] - b[2];

        return dst;
    },

    normalize(v, dst) {
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        dst = dst || new Float32Array(3);

        const length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
        // make sure we don't divide by 0.
        if (length > 0.00001) {
        dst[0] = v[0] / length;
        dst[1] = v[1] / length;
        dst[2] = v[2] / length;
        } else {
        dst[0] = 0;
        dst[1] = 0;
        dst[2] = 0;
        }

        return dst;
    },
    getTranslation(m, dst) {
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        dst = dst || new Float32Array(3);

        dst[0] = m[12];
        dst[1] = m[13];
        dst[2] = m[14];

        return dst;
    },
    };

 
const degToRad = d => d * Math.PI / 180;
const radToDeg = r => r * 180 / Math.PI;

  