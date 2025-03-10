# Vector Module Reference

## Creating a Vector

```
import {Vector2, Vector3, Vector4} from "vector.js"
let v2 = new Vector2(0, 0)
let v3 = new Vector3(0, 0, 0)
let v3 = new Vector4(0, 0, 0, 0)
```

## Vector Functions

### Vector Modifiers

These functions are (unless specified) available for 2D, 3D and 4D Vectors. If a Vector is supplied as a function attribute then it must be of the same class 2,3 or 4D as the parent of the called function.

#### add(Vector: v) -> Vector: this

Adds the supplied vector to the current vector and returns the vector object.

#### sub(Vector: v) -> Vector: this

Subracts v from your vector and returns it.

#### mul(float: f) -> Vector: this

Multplies your vector by f and returns it.

#### div(float: f) -> Vector: this

Divides your vector by f and returns it.

#### normalize() -> Vector: this

Divides this vector by its length, converting it to a unit (normalised) vector with a length of 1.0.


### Vector Calculations

#### dot(Vector: v) -> float

Returns the dot product of this vector and the supplied vector as a single float value.  Neither vector is modified.
