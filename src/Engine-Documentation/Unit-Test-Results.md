

##  Custom Assertion Module
   
#### ✔ Should assert equal values
   
#### ✔ Should assert not equal values
   
#### ✔ Should assert typed array
   
#### ✔ Should disable debug assertions

##  Logger
   
#### ✔ Should log a message to the console and prepend it to the output div

##  Material
   
#### ✔ Should set base color
   
#### ✔ Should set ambient color
   
#### ✔ Should set diffuse color
   
#### ✔ Should set specular color
   
#### ✔ Should set emission color
   
#### ✔ Should set base color from hex
   
#### ✔ Should create texture
   
#### ✔ Should handle texture loaded

##  Matrix
   
#### ✔ Should create an identity matrix
   
#### ✔ Should push and pop matrix
   
#### ✔ Should create a perspective matrix
   
#### ✔ Should create an orthographic matrix
   
#### ✔ Should copy from another matrix
   
#### ✔ Should multiply by another matrix
   
#### ✔ Should invert a matrix
   
#### ✔ Should create a translation matrix
   
#### ✔ Should create a scaling matrix
   
#### ✔ Should create a rotation matrix around X axis
   
#### ✔ Should create a rotation matrix around Y axis
   
#### ✔ Should create a rotation matrix around Z axis
   
#### ✔ Should return a pretty printable string representation of the matrix

##  Mesh
   
#### ✔ Should initialize with an empty triplets array and a default material
   
#### ✔ Should import a mesh from an array of vertices
   
#### ✔ Should export a float32 array of vertices
   
#### ✔ Should export a float32 array of normals
   
#### ✔ Should export a uint8 array of colors

##  Mesh
   
#### ✔ Should initialize with an empty triplets array and a default material
   
#### ✔ Should add triplets correctly
   
#### ✔ Should set material correctly
   
#### ✔ Should return the correct triplet
   
#### ✔ Should return the correct number of vertices
   
#### ✔ Should load from object array correctly
   
#### ✔ Should return correct Float32Array for XYZ
   
#### ✔ Should return correct Float32Array for UV
   
#### ✔ Should return correct Uint8ClampedArray for color
   
#### ✔ Should return correct Float32Array for normals
   
#### ✔ Should return correct transformed vertex array
   
#### ✔ Should return correct transformed normal array

##  Triplet
   
#### ✔ Should initialize with three vertices and a default normal vector
   
#### ✔ Should calculate the correct surface normal

##  Model
   
#### ✔ Should initialize with an empty meshes array
   
#### ✔ Should add a mesh to the meshes array
   
#### ✔ Should return a mesh by index
   
#### ✔ Should return all meshes
   
#### ✔ Should return the correct mesh count
   
#### ✔ Should remove a mesh by index
   
#### ✔ Should compile render buffers

##  Model
   
#### ✔ Should initialize with an empty meshes array
   
#### ✔ Should add a mesh to the meshes array
   
#### ✔ Should return a mesh by index
   
#### ✔ Should return all meshes
   
#### ✔ Should return the correct mesh count
   
#### ✔ Should remove a mesh by index
   
#### ✔ Should compile render buffers
   
#### ✔ Should return the correct vertex count
   
#### ✔ Should return the correct vertex buffer data
   
#### ✔ Should return the correct normal buffer data
   
#### ✔ Should return the correct UV buffer data
   
#### ✔ Should return the correct color buffer data

##  RAGE Constants
   
#### ✔ Should have correct X_AXIS value
   
#### ✔ Should have correct Y_AXIS value
   
#### ✔ Should have correct Z_AXIS value
   
#### ✔ Should have correct VERTEX_TYPE_2D value
   
#### ✔ Should have correct VERTEX_TYPE_3D value
   
#### ✔ Should have correct VERTEX_TYPE_2DUV value
   
#### ✔ Should have correct VERTEX_TYPE_3DUV value
   
#### ✔ Should have correct VERTEX_TYPE_2DUVC value
   
#### ✔ Should have correct VERTEX_TYPE_3DUVC value
   
#### ✔ Should have correct VERTEX_TYPE_3DUVN value
   
#### ✔ Should have correct VERTEX_TYPE_3DUVCN value
   
#### ✔ Should have correct SHADER_TYPE_V3D_FCOL value
   
#### ✔ Should have correct SHADER_TYPE_V3D_FTEX value
   
#### ✔ Should have correct SHADER_TYPE_V3D_FTEXCOL value
   
#### ✔ Should have correct VIEW_MODE_3D_PERSPECTIVE value
   
#### ✔ Should have correct VIEW_MODE_2D value
   
#### ✔ Should have correct VIEW_MODE_3D_FIXED value
   
#### ✔ Should have correct MATRIX_TYPE_IDENTITY value
   
#### ✔ Should have correct MATRIX_TYPE_PERSPECTIVE value
   
#### ✔ Should have correct MATRIX_TYPE_ORTHOGRAPHIC value
   
#### ✔ Should have correct MATRIX_TYPE_ROTATION value
   
#### ✔ Should have correct MATRIX_TYPE_TRANSLATION value
   
#### ✔ Should return true for existing definitions
   
#### ✔ Should return false for non-existing definitions

##  rage_errors
   
#### ✔ Should log "Forbidden" for error code 403
   
#### ✔ Should log "Not Found" for error code 404
   
#### ✔ Should log "Unknown error code: <code>" for unknown error codes

##  SceneGraph
   
#### ✔ Should initialize with default values
   
#### ✔ Should add and remove nodes
    1) Should create view matrix

##  SceneNode
   
#### ✔ Should initialize with default values
   
#### ✔ Should add and remove child nodes
   
#### ✔ Should update all child nodes
   
#### ✔ Should render all child nodes
   
#### ✔ Should attach and detach models

##  Transform
   
#### ✔ Should initialize with default values
   
#### ✔ Should update matrix on position change
   
#### ✔ Should update matrix on rotation change
   
#### ✔ Should update matrix on scale change

##  SceneNode
   
#### ✔ Should initialize with default values
   
#### ✔ Should add and remove child nodes
   
#### ✔ Should update all child nodes
   
#### ✔ Should render all child nodes
   
#### ✔ Should attach and detach models
   
#### ✔ Should return the correct vertex count
   
#### ✔ Should return the correct vertex buffer data
   
#### ✔ Should return the correct normal buffer data
   
#### ✔ Should return the correct UV buffer data
    2) Should return the correct vertex color buffer data

##  Colour3DShader
   
#### ✔ Should have the correct label
   
#### ✔ Should contain vertex shader code
   
#### ✔ Should contain fragment shader code
   
#### ✔ Should return the correct vertex positions
   
#### ✔ Should return the correct fragment color

##  utils.mjs
##    hexToRgb
     
#### ✔ Should convert hex to rgb correctly
     
#### ✔ Should handle hex with alpha correctly
##    rgbToHex
     
#### ✔ Should convert rgb to hex correctly
##    rgbaToHex
     
#### ✔ Should convert rgba to hex correctly
##    degToRad
     
#### ✔ Should convert degrees to radians correctly
##    radToDeg
     
#### ✔ Should convert radians to degrees correctly

##  Vector2
   
#### ✔ Should create a Vector2 with given x and y
   
#### ✔ Should add two Vector2 instances
   
#### ✔ Should subtract two Vector2 instances
   
#### ✔ Should multiply a Vector2 by a scalar
   
#### ✔ Should divide a Vector2 by a scalar
   
#### ✔ Should calculate the dot product of two Vector2 instances
   
#### ✔ Should normalize a Vector2
   
#### ✔ Should calculate the length of a Vector2
   
#### ✔ Should calculate the distance between two Vector2 instances
   
#### ✔ Should calculate the angle between two Vector2 instances
   
#### ✔ Should clone a Vector2
   
#### ✔ Should convert a Vector2 to a string
   
#### ✔ Should create a Vector2 from an array
   
#### ✔ Should convert a Vector2 to an array

##  Vector3
   
#### ✔ Should create a Vector3 with given x, y, and z
   
#### ✔ Should add two Vector3 instances
   
#### ✔ Should subtract two Vector3 instances
   
#### ✔ Should multiply a Vector3 by a scalar
   
#### ✔ Should divide a Vector3 by a scalar
   
#### ✔ Should calculate the dot product of two Vector3 instances
   
#### ✔ Should calculate the cross product of two Vector3 instances
   
#### ✔ Should normalize a Vector3
   
#### ✔ Should calculate the length of a Vector3
   
#### ✔ Should calculate the distance between two Vector3 instances
   
#### ✔ Should calculate the angle between two Vector3 instances
   
#### ✔ Should clone a Vector3
   
#### ✔ Should convert a Vector3 to a string
   
#### ✔ Should create a Vector3 from an array
   
#### ✔ Should convert a Vector3 to an array
   
#### ✔ Should calculate the surface normal of three Vector3 instances

##  Vector4
   
#### ✔ Should create a Vector4 with given x, y, z, and w
   
#### ✔ Should add two Vector4 instances
   
#### ✔ Should subtract two Vector4 instances
   
#### ✔ Should multiply a Vector4 by a scalar
   
#### ✔ Should divide a Vector4 by a scalar
   
#### ✔ Should calculate the dot product of two Vector4 instances
   
#### ✔ Should normalize a Vector4
   
#### ✔ Should calculate the length of a Vector4
   
#### ✔ Should calculate the distance between two Vector4 instances
   
#### ✔ Should calculate the angle between two Vector4 instances
   
#### ✔ Should clone a Vector4
   
#### ✔ Should convert a Vector4 to a string
   
#### ✔ Should create a Vector4 from an array
   
#### ✔ Should convert a Vector4 to an array

##  Vertex2D
   
#### ✔ Should create a Vertex2D with given x and y

##  Vertex3D
   
#### ✔ Should create a Vertex3D with given x, y, and z
   
#### ✔ Should initialize uv to (0, 0)
   
#### ✔ Should initialize normal to (0, 0, 1)

##  RAGE
   
#### ✔ Should initialize with default values
   
#### ✔ Should create a matrix
   
#### ✔ Should create a 2D vector
   
#### ✔ Should create a 3D vector
   
#### ✔ Should create a 4D vector
   
#### ✔ Should create a material
   
#### ✔ Should set vertex type
   
#### ✔ Should set view mode
   
#### ✔ Should set shader mode


  179 passing (166ms)
  2 failing

  1) SceneGraph
##       Should create view matrix:
##     ReferenceError: log is not defined
##      at SceneGraph.createViewMatrix (file:///home/richard/dev/webgpu/src/RAGE-Dev/js/common/rage_modules/scenegraph.mjs:69:9)
##      at Context.<anonymous> (file:///home/richard/dev/webgpu/src/RAGE-Dev/js/common/rage_modules/scenegraph.test.mjs:34:20)
##      at process.processImmediate (node:internal/timers:491:21)

  2) SceneNode
##       Should return the correct vertex color buffer data:
##     TypeError: model.getColorBufferData is not a function
##      at file:///home/richard/dev/webgpu/src/RAGE-Dev/js/common/rage_modules/scenegraph.mjs:147:71
##      at Array.forEach (<anonymous>)
##      at SceneNode.getVertexColorBufferData (file:///home/richard/dev/webgpu/src/RAGE-Dev/js/common/rage_modules/scenegraph.mjs:147:21)
##      at Context.<anonymous> (file:///home/richard/dev/webgpu/src/RAGE-Dev/js/common/rage_modules/scenegraph.test.mjs:230:27)
##      at process.processImmediate (node:internal/timers:491:21)



