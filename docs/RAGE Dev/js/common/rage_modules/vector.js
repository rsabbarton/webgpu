


export class Vector2 {
    constructor(x, y){
        this.x = x
        this.y = y
    }

    add(v){
        return new Vector2(this.x + v.x, this.y + v.y)
    }

    sub(v){
        return new Vector2(this.x - v.x, this.y - v.y)
    }

    mul(s){
        return new Vector2(this.x * s, this.y * s)
    }

    div(s){
        return new Vector2(this.x / s, this.y / s)
    }

    dot(v){
        return this.x * v.x + this.y * v.y
    }

    normalize(){
        return this.div(this.length())
    }

    length(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    distance(v){
        return this.sub(v).length()
    }

    angle(v){
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
    }

    add(v){
        return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z)
    }

    sub(v){
        return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z)
    }

    mul(s){
        return new Vector3(this.x * s, this.y * s, this.z * s)
    }

    div(s){
        return new Vector3(this.x / s, this.y / s, this.z / s)
    }

    dot(v){
        return this.x * v.x + this.y * v.y + this.z * v.z
    }

    cross(v){
        return new Vector3(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x)
    }

    normalize(){
        return this.div(this.length())
    }

    length(){
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }

    distance(v){
        return this.sub(v).length()
    }

    angle(v){
        return Math.acos(this.dot(v) / (this.length() * v.length()))
    }

    clone(){
        return new Vector3(this.x, this.y, this.z)
    }

    toString(){
        return `(${this.x}, ${this.y}, ${this.z})`
    }

    static fromArray(arr){
        return new Vector3(arr[0], arr[1], arr[2])
    }

    toArray(){
        return [this.x, this.y, this.z]
    }

    
}


export class Vector4 {
    constructor(x, y, z, w){
        this.x = x
        this.y = y
        this.z = z
        this.w = w

        
    }

    add(v){
        return new Vector4(this.x + v.x, this.y + v.y, this.z + v.z, this.w + v.w)
    }

    sub(v){
        return new Vector4(this.x - v.x, this.y - v.y, this.z - v.z, this.w - v.w)
    }

    mul(s){
        return new Vector4(this.x * s, this.y * s, this.z * s, this.w * s)
    }

    div(s){
        return new Vector4(this.x / s, this.y / s, this.z / s, this.w / s)
    }

    dot(v){
        return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w
    }

    normalize(){
        return this.div(this.length())
    }

    length(){
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }

    distance(v){
        return this.sub(v).length()
    }

    angle(v){
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