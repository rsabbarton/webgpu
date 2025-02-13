import fs from 'fs'
import path from 'path'

let sourceFolder = "/home/richard/dev/webgpu/src"

let files = fs.readdirSync(sourceFolder)

files = files.filter(file => fs.lstatSync(path.join(sourceFolder, file)).isDirectory() && 
                             file !== "js" && 
                             file !== "css" && 
                             file !== "images")

files = files.map(file => file + "/index.html")

console.log(files)

let links = files.map(file => `<a href="${file}">${file}</a>`).join("\n")

console.log(links)

let index = `<!DOCTYPE html>
<html>
<head>
    <title>WebGPU Samples</title>

    <style> 

        body {

            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        
        header {
            background-color: #333;
            color: white;
            padding: 10px;
            text-align: center;
        }

        .content {
            padding: 20px;
        }


    </style>
</head>
<body>
    <header>
        <h1>WebGPU Samples</h1>
    </header>
    <div class="content">
        ${links}
    </div>  

</body>
</html>
`

let indexPath = path.join(sourceFolder, "index.html")
let indexFile = fs.openSync(indexPath, "w")
fs.writeSync(indexFile, index)
fs.closeSync(indexFile)

console.log("Index file created at " + indexPath)

