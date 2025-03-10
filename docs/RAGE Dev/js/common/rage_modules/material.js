
import { hexToRgb } from './utils.js'



export class Material {
    constructor(){

        this.id = false

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

    addToResourceManager(rm){
        
    }

    setBaseColor(red, green, blue, alpha){
        this.baseColor[0] = red
        this.baseColor[1] = green
        this.baseColor[2] = blue
        this.baseColor[3] = alpha || 1
        return this
    }

    setAmbientColor(red, green, blue, alpha){
        this.ambientColor[0] = red
        this.ambientColor[1] = green
        this.ambientColor[2] = blue
        this.ambientColor[3] = alpha || 1
        return this
    }

    setDiffuseColor(red, green, blue, alpha){
        this.diffuseColor[0] = red
        this.diffuseColor[1] = green
        this.diffuseColor[2] = blue
        this.diffuseColor[3] = alpha || 1
        return this
    }

    setSpecularColor(red, green, blue, alpha){
        this.specularColor[0] = red
        this.specularColor[1] = green
        this.specularColor[2] = blue
        this.specularColor[3] = alpha || 1
        return this
    }

    setEmissionColor(red, green, blue, alpha){
        this.emissionColor[0] = red
        this.emissionColor[1] = green
        this.emissionColor[2] = blue
        this.emissionColor[3] = alpha || 1
        return this
    }

    setADSE(ambient, diffuse, specular, emission){
        this.setAmbientColor(ambient[0], ambient[1], ambient[2], ambient[3])
        this.setDiffuseColor(diffuse[0], diffuse[1], diffuse[2], diffuse[3])
        this.setSpecularColor(specular[0], specular[1], specular[2], specular[3])
        this.setEmissionColor(emission[0], emission[1], emission[2], emission[3])
        return this
    }

    setBaseColorFromHex(hex){
        let color = hexToRgb(hex)
        this.setBaseColor(color.r, color.g, color.b, color.a)
        return this
    }

    setAmbientColorFromHex(hex){
        let color = hexToRgb(hex)
        this.setAmbientColor(color.r, color.g, color.b, color.a)
        return this
    }

    setDiffuseColorFromHex(hex){
        let color = hexToRgb(hex)
        this.setDiffuseColor(color.r, color.g, color.b, color.a)
        return this
    }

    setSpecularColorFromHex(hex){
        let color = hexToRgb(hex)
        this.setSpecularColor(color.r, color.g, color.b, color.a)
        return this
    }

    setEmissionColorFromHex(hex){
        let color = hexToRgb(hex)
        this.setEmissionColor(color.r, color.g, color.b, color.a)
        return this
    }

    setADSEFromHex(ambient, diffuse, specular, emission){
        this.setAmbientColorFromHex(ambient)
        this.setDiffuseColorFromHex(diffuse)
        this.setSpecularColorFromHex(specular)
        this.setEmissionColorFromHex(emission)
        return this
    }


    createTexture(src){
        // CODE: COMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.texture = new Texture(this, src)
        return this
    }

    textureLoaded(){

        this.hasTexture = true
        this.useTexture = true
    
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