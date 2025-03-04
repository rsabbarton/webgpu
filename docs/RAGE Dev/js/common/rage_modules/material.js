


export class Material {
    constructor(){
        this.baseColor = new Uint8ClampedArray(4)
        this.ambientColor = new Uint8ClampedArray(4)
        this.diffuseColor = new Uint8ClampedArray(4)
        this.specularColor = new Uint8ClampedArray(4)
        this.emissionColor = new Uint8ClampedArray(4)

        this.useColor = true
        this.useADSE = false
        this.useTexture = false
        this.hasTexture = false
        this.texture = false

    }

    setBaseColor(red, green, blue, alpha){
        this.baseColor[0] = red
        this.baseColor[1] = green
        this.baseColor[2] = blue
        this.baseColor[3] = alpha || 1
    }

    createTexture(src){
        // CODE: COMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        return new Texture(this, src)
    }
    
    textureLoaded(){

        this.parent.hasTexture = true
        this.parent.useTexture = true
    }
}

export class Texture {
    constructor(parent, src){
        this.parent = parent
        this.src = src
        this.img = new Image()
        this.img = this.src
        this.img.onload = (event)=>{
            this.processImage(event)
        }

        this.processed = false

    }

    processImage(event){


        this.parent.textureLoaded()

    }
}