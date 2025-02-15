
import {log} from 'logger'

import * as samples from './shader-samples.js'


class WGSLTools {
    constructor(){
        log(`Shader Samples Loaded: ${samples.shaderSamplesLoaded}`)
    }



}



const WGSL = new WGSLTools()

export {WGSL}