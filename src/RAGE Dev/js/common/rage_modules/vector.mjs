import {assertEqual} from "./assert.mjs"

const VECTOR2 = 2
const VECTOR3 = 3
const VECTOR4 = 4


export class Vector2 {
    constructor(x, y){
        this.x = x
        this.y = y
        this.type = VECTOR2
    }

    add(v){
        assertEqual(v.type, this.type, "Vector add: v is not a Vector" + this.type)
        return new Vector2(this.x + v.x, this.y + v.y)
    }

    sub(v){
        assertEqual(v.type, this.type, "Vector add: v is not a Vector" + this.type)
        return new Vector2(this.x - v.x, this.y - v.y)
    }

    mul(s){
        return new Vector2(this.x * s, this.y * s)
    }

    div(s){
        return new Vector2(this.x / s, this.y / s)
    }

    dot(v){
        assertEqual(v.type, this.type, "Vector add: v is not a Vector" + this.type)
        return this.x * v.x + this.y * v.y
    }

    normalize(){
        return this.div(this.length())
    }

    length(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    distance(v){
        assertEqual(v.type, this.type, "Vector add: v is not a Vector" + this.type)
        return this.sub(v).length()
    }

    angle(v){
        assertEqual(v.type, this.type, "Vector add: v is not a Vector" + this.type)
        return Math.acos(this.dot(v) / (this.length() * v.length()))
    }

    clone(){
        return new Vector2(this.x, this.y)
    }

    toString(){
        return `(${this.x}, ${this.y})`
    }

    static fromArray(arr){
        return new Vector2(arr[0], arr[1])
    }

    toArray(){
        return [this.x, this.y] 
    }
    
}


export class Vector3 {
    constructor(x, y, z){
        this.x = x
        this.y = y
        this.z = z

        this.type = VECTOR3
    }

    add(v){
        assertEqual(v.type, this.type, "Vector add: v is not a Vector" + this.type)
        return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z)
    }

    sub(v){
        assertEqual(v.type, this.type, "Vector add: v is not a Vector" + this.type)
        return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z)
    }

    mul(s){
        return new Vector3(this.x * s, this.y * s, this.z * s)
    }

    div(s){
        return new Vector3(this.x / s, this.y / s, this.z / s)
    }

    dot(v){
        assertEqual(v.type, this.type, "Vector add: v is not a Vector" + this.type)
        return this.x * v.x + this.y * v.y + this.z * v.z
    }

    cross(v){
        assertEqual(v.type, this.type, "Vector add: v is not a Vector" + this.type)
        return new Vector3(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x)
    }

    normalize(){
        return this.div(this.length())
    }

    length(){
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }

    distance(v){
        assertEqual(v.type, this.type, "Vector add: v is not a Vector" + this.type)
        return this.sub(v).length()
    }

    angle(v){
        assertEqual(v.type, this.type, "Vector add: v is not a Vector" + this.type)
        return Math.acos(this.dot(v) / (this.length() * v.length()))
    }

    clone(){
        return new Vector3(this.x, this.y, this.z)
    }

    toString(){
        return `(${this.x}, ${this.y}, ${this.z})`
    }

    toArray(){
        return [this.x, this.y, this.z]
    }

    // STATIC METHODS
    //
    //

    static surfaceNormal(v1, v2, v3){
        assertEqual(v1.type, this.type, "Vector add: v1 is not a Vector" + this.type)
        assertEqual(v2.type, this.type, "Vector add: v2 is not a Vector" + this.type)
        assertEqual(v3.type, this.type, "Vector add: v3 is not a Vector" + this.type)
        const u = v2.sub(v1)
        const v = v3.sub(v1)
        return u.cross(v).normalize()
    }

    
    static fromArray(arr){
        return new Vector3(arr[0], arr[1], arr[2])
    }

    
}


export class Vector4 {
    constructor(x, y, z, w){
        this.x = x
        this.y = y
        this.z = z
        this.w = w

        this.type = VECTOR4
        
    }

    add(v){
        assertEqual(v.type, this.type, "Vector add: v is not a Vector" + this.type)
        return new Vector4(this.x + v.x, this.y + v.y, this.z + v.z, this.w + v.w)
    }

    sub(v){
        assertEqual(v.type, this.type, "Vector add: v is not a Vector" + this.type)
        return new Vector4(this.x - v.x, this.y - v.y, this.z - v.z, this.w - v.w)
    }

    mul(s){
        return new Vector4(this.x * s, this.y * s, this.z * s, this.w * s)
    }

    div(s){
        return new Vector4(this.x / s, this.y / s, this.z / s, this.w / s)
    }

    dot(v){
        assertEqual(v.type, this.type, "Vector add: v is not a Vector" + this.type)
        return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w
    }

    normalize(){
        return this.div(this.length())
    }

    length(){
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }

    distance(v){
        assertEqual(v.type, this.type, "Vector add: v is not a Vector" + this.type)
        return this.sub(v).length()
    }

    angle(v){
        assertEqual(v.type, this.type, "Vector add: v is not a Vector" + this.type)
        return Math.acos(this.dot(v) / (this.length() * v.length()))
    }

    clone(){
        return new Vector4(this.x, this.y, this.z, this.w)
    }

    toString(){
        return `(${this.x}, ${this.y}, ${this.z}, ${this.w})`
    }

    static fromArray(arr){
        return new Vector4(arr[0], arr[1], arr[2], arr[3])
    }

    toArray(){
        return [this.x, this.y, this.z, this.w]
    }


}