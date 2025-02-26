import {log as log} from './logger.js'

class ResourceManager {
    constructor(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        log('Initialising Resource Manager')
        this.images = new Array()
        this.vertexArrays = new Array()
        this.colours = new Array()
    }

    createImageTexture(name, url){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        let imageTexture = new ImageTexture(name, url)
        this.images.push(imageTexture)
        this.images.forEach((img, index)=>{
            if(img.imageName == name){
                imageTexture.index = index
            }
        })

        console.log(imageTexture)

        return imageTexture.index
    }

    
}


class ImageTexture {
    constructor(name, url){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        log('Creating: ' + name + ' from url: ' + url)
        this.imageLoaded = false
        this.imageName = name
        this.image = new Image()
        this.image.src = url
        this.image.onload = (event)=>{
            this.imageOnload()
        }

    }

    imageOnload(){
        // CODE: INCOMPLETE
        // UNIT: FALSE
        // DOCS: FALSE
        this.imageLoaded = true
    }
}


export {ResourceManager}