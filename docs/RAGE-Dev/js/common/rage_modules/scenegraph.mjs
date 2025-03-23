import { Vector3 } from './vector.mjs';
import { Matrix } from './matrix.mjs';
import { Float32Concat, Uint8ClampedConcat } from './utils.mjs';


class SceneGraph {
    constructor() {
        this.rage = false
        this.root = new SceneNode('root');
        this.projectionMatrix = new Matrix();
        this.transform = new Transform();
        this.transform.matrix.createIdentity();
        this.transform.matrix.translate(50.0, 0, -1.0);
    }

    addNode(node) {
        this.root.addChild(node);
    }

    removeNode(node) {
        this.root.removeChild(node);
    }

    update() {
        this.root.update();
    }

    getVertexCount() {
        return this.root.getVertexCount();
    }

    getVertexBufferData() {
        let modelViewMatrix = new Matrix();
        modelViewMatrix.createIdentity();
        //modelViewMatrix.multiplyBy(this.projectionMatrix);
        //modelViewMatrix.multiplyBy(this.transform.matrix);
        return this.root.getVertexBufferData(modelViewMatrix);
    }

    getNormalBufferData() {
        let modelViewMatrix = new Matrix();
        modelViewMatrix.createIdentity();
        //modelViewMatrix.multiplyBy(this.projectionMatrix);
        //modelViewMatrix.multiplyBy(this.transform.matrix);
        return this.root.getNormalBufferData(modelViewMatrix);
    }

    getUVBufferData() {
        return this.root.getUVBufferData();
    }

    getVertexColorBufferData() {
        return this.root.getVertexColorBufferData();
    }

    attachToRenderer(rage) {
        this.rage = rage;
    }

    createViewMatrix(viewingAngle, near, far) {

        this.projectionMatrix.createPerspective(
            this.rage.canvas.width, 
            this.rage.canvas.height, 
            viewingAngle, 
            near, 
            far);

        log(this.projectionMatrix);
    }


}


class SceneNode {
    constructor(name) {
        this.name = name;
        this.children = [];
        this.parent = null;
        this.transform = new Transform();
        this.models = new Array();
    }

    addChild(node) {
        node.parent = this;
        this.children.push(node);
    }

    removeChild(node) {
        const index = this.children.indexOf(node);
        if (index !== -1) {
            node.parent = null;
            this.children.splice(index, 1);
            return true;
        }
        return false;
    }

    update() {
        this.children.forEach(child => child.update());
    }

    render() {
        this.children.forEach(child => child.render());
    }

    getVertexCount() {
        let count = 0;
        this.models.forEach(model => count += model.getVertexCount());
        this.children.forEach(child => count += child.getVertexCount());
        return count;
    }

    getVertexBufferData(modelViewMatrix) {
        modelViewMatrix.push();

            modelViewMatrix.multiplyBy(this.transform.getMatrix());
            let data = [];
            this.models.forEach(model => data = Float32Concat(data, model.getVertexBufferData(modelViewMatrix)));
            this.children.forEach(child => data = Float32Concat(data, child.getVertexBufferData(modelViewMatrix)));
        
        modelViewMatrix.pop();
        return data;
    }

    getNormalBufferData(modelViewMatrix) {
        modelViewMatrix.push();
            modelViewMatrix.multiplyBy(this.transform.getMatrix());
            let data = [];
            this.models.forEach(model => data = Float32Concat(data, model.getNormalBufferData(modelViewMatrix)));
            this.children.forEach(child => data = Float32Concat(data, child.getNormalBufferData(modelViewMatrix)));
        modelViewMatrix.pop();
                
        return data;
    }

    getUVBufferData() {
        let data = [];
        this.models.forEach(model => data = Float32Concat(data, model.getUVBufferData()));
        this.children.forEach(child => data = Float32Concat(data, child.getUVBufferData()));
        return data;
    }

    getVertexColorBufferData() {
        let data = [];
        this.models.forEach(model => data = Float32Concat(data, model.getColorBufferData()));
        this.children.forEach(child => data = Float32Concat(data, child.getVertexColorBufferData()));
        return data;
    }

    attachModel(model) {
        this.models.push(model);
    }

    detachModel(model) {
        const index = this.models.indexOf(model);
        if (index !== -1) {
            this.models.splice(index, 1);
        }
    }

}   

class Transform {
    constructor() {
        this.position = new Vector3(0, 0, 0);
        this.rotation = new Vector3(0, 0, 0);
        this.scale = new Vector3(1, 1, 1);

        this.matrix = new Matrix();
    }

    updateMatrix() {
        this.matrix.createIdentity();
        this.matrix.translate(this.position.x, this.position.y, this.position.z);
        this.matrix.rotate(this.rotation.y, Matrix.Y_AXIS);
        this.matrix.rotate(this.rotation.x, Matrix.X_AXIS);
        this.matrix.rotate(this.rotation.z, Matrix.Z_AXIS);
        this.matrix.scale(this.scale.x, this.scale.y, this.scale.z);
    }

    getMatrix() {
        return this.matrix;
    }

    setPosition(x, y, z) {
        this.position.set(x, y, z);
        this.updateMatrix();
    }

    setRotation(x, y, z) {
        this.rotation.set(x, y, z);
        this.updateMatrix();
    }

    setScale(x, y, z) {
        this.scale.set(x, y, z);
        this.updateMatrix();
    }   

}   

export { SceneGraph, SceneNode, Transform };