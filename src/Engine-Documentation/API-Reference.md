# Engine API Reference

## Instantiation

The Engine should have a single instance for each renderer implementation.  If you are using it with multiple canvasses then you can have separate renderer.

Because we are using a feature that is only supported in later browsers we are OK to require the use of JavaScript ES6 and the modules functionality.  In order to allow module imports your application script must be launched as an ES6 Module.

```
<script type="module" src='my-app.js'></script>
```

You can then use module imports within your my-app.js file:

```
import RAGE from 'modules/rage.js'
```

You will need a rendering canvas within your parent HTML page.  You can fix this or created it dynamically.  You must pass the canvas object (not the ID) to the RAGE constructor:

```
let myAwesomeCanvas = document.getElementById('my-awesome-canvas');
const rage = new RAGE(myawesomeCanvas)
```

## Initialisation

After importing Rage to your project you will then need to initialise it.  While doing this, you can also check if Rage is supported in your browser:

```
if(rage.isSupported){
    rage.init()
} else {
    console.log('WebGPU Cannot be loaded in this browser!')
}
```




