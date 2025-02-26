# Matrix Module Reference

## Create a Matrix

If you are using the Rage Engine then you can import the matrix module from there. You can also use the built-in function within Rage to access the Matrix Module without importing it.

Alternatively, if you want to use the matrix module on its own you can import the matrix.js file directly.

```
import Matrix from 'modules/rage.js
```

```
import Matrix from 'modules/matrix.js'
```

```
const myMatrix = rage.createMatrix()
```

The Matrix object will be created with the default/identity matrix loaded.

```
1   0   0   0
0   1   0   0
0   0   1   0
0   0   0   1
```
The matrix is stored in the matrix member.  This is a Float32Array(16) array and can be accessed using the matrix member of the Matrix object.

```
let myIdentityMatrix = new Matrix()
console.log(myIdentityMatrix.matrix)

// Matrix {matrix: Float32Array(16)}
```

## Quick Start Guide

### Create a single Identity Matrix

```
const matrix = new Matrix()
```

### Translate a Matrix

To translate a matrix you can either translate an existing matrix by x,y,z or you can create a standalone translation matrix that can be re-used.

```
const matrix = new Matrix()
matrix.translate(20,30,40)

```
## Matrix Functions and Attributes

After importing Rage to your project you will then need to initialise it.  While doing this, you can also check if Rage is supported in your browser:

```
if(rage.isSupported){
    rage.init()
} else {
    console.log('WebGPU Cannot be loaded in this browser!')
}
```




