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

### Matrix Creation Functions

Matrix creation functions overwrite the existing contents of your matrix.

#### createIdentity()

Creates an Identity Matrix.
```
1   0   0   0
0   1   0   0
0   0   1   0
0   0   0   1
```
#### createTranslation(float: x, float:y, float: z)

Creates a translation matrix that can be used to translate other matrices without being modified itself.
```
let translation = new Matrix()
translation.createTranslation(30.0, 40.0, 50.0)
```
```
1 0 0 30
0 1 0 40
0 0 1 50
0 0 0 1
```
#### createRotation(float: angleInRadians, const: axis)

 - angleInRadians: (Required) Amount of rotation to apply.  Use negative values to rotate in the opposite direction.
 - axis: (Required) One of X_AXIS, Y_AXIS or Z_AXIS.  The axis around which to rotate.

#### createScale()

#### createOrthographic()

#### createPerspective()

#### createProjection()


### Matrix Modifier Functions

#### multiplyBy(Matrix: matrix)

Multiplies the matrix by the matrix object provided.  The matrix of the provided object is not modified.

*** NOTE: The order of multiplication impacts the results. ***

```
let m = new Matrix()
m.multiplyBy(rage.createMatrix().createTranslation(20,30,40))
m.multiplyBy(rage.createMatrix().createTranslation(30,40,50))
```
```
1 0 0 50
0 1 0 70
0 0 1 90
0 0 0 1
```

#### copyFromMatrix(Matrix: matrix)

#### copyFromFloat32Array(Float32Array(16): array)

#### translate(float: x, float: y, float: z)

Applies a translation to the current matrix based on the values supplied.

#### rotate(float: radians, int: axis)

Applies rotation to the current matrix.  Rotation is applied around a specific axis.

radians defines the angle in radians to apply around the selected axis.

Axis is defined as one of the following:

 - X_AXIS
 - Y_AXIS
 - Z_AXIS

#### scale(float: x, float: y, float: z)

### Matrix Stacks

One excellent way of manipulating matrices is to use a matrix stack.  In this implementation, each matrix has its own unique stack.  It allows the contents of the matrix to be pushed onto the stack.  You can then make as many changes or creations as you like without impacting the stack.  When you are done, you can pop the matrix from the top of the stack.  This restores the matrix to its pushed state.

#### push()

Pushes a copy of the current matrix to the stack for this matrix object.

#### pop()

Pops the matrix from the top of the stack into the current matrix, restoring its pre-push state.

If the stack is empty no error will be generated.  In this case, no action is taken and the matrix remains unchanged.

#### Stack usage

```
let m = new Matrix()
m.multiplyBy(rage.createMatrix().createTranslation(20,30,40))

1 0 0 20
0 1 0 30
0 0 1 40
0 0 0 1

m.push() // Push matrix to the stack
    m.rotate(45, Y_AXIS)

    0.52  0 0.85  20
    0     1 0     30
    -0.85 0 0.52  40
    0     0 0     1
    // Do something with rotated matrix
m.pop() // Pop matrix back from the stack

1 0 0 20
0 1 0 30
0 0 1 40
0 0 0 1
// Original restored

```

Stacks can contain more than one matrix.

```
let m = new Matrix()
m.translate(30,40,50)
m.rotate(20, Y_AXIS)

m.push()
    m.translate(0,0,50)
    m.push()
        m.rotate(10, X_AXIS)
        // some action
    m.pop()
    m.push()
        m.rotate(-10, X_AXIS)
        // another action
    m.pop()
m.pop()
```

This is very useful and, as per this example, it is common to indent after each push() call so that you can track which stack layer you are working on.


