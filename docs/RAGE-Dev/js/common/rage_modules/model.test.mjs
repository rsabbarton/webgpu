import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from './model.mjs';
import { Mesh } from './mesh.mjs';
import { Matrix } from './matrix.mjs'; // Assuming Matrix4 is defined in matrix.mjs
import { Vertex3D } from './vertex.mjs';

describe('Model', function() {
    let model;
    let mesh;

    beforeEach(function() {
        model = new Model();
        mesh = new Mesh();
    });

    it('should initialize with an empty meshes array', function() {
        expect(model.meshes).to.be.an('array').that.is.empty;
    });

    it('should add a mesh to the meshes array', function() {
        model.addMesh(mesh);
        expect(model.meshes).to.have.lengthOf(1);
        expect(model.meshes[0]).to.equal(mesh);
    });

    it('should return a mesh by index', function() {
        model.addMesh(mesh);
        const retrievedMesh = model.getMesh(0);
        expect(retrievedMesh).to.equal(mesh);
    });

    it('should return all meshes', function() {
        model.addMesh(mesh);
        const meshes = model.getMeshes();
        expect(meshes).to.be.an('array').that.has.lengthOf(1);
        expect(meshes[0]).to.equal(mesh);
    });

    it('should return the correct mesh count', function() {
        expect(model.getMeshCount()).to.equal(0);
        model.addMesh(mesh);
        expect(model.getMeshCount()).to.equal(1);
    });

    it('should remove a mesh by index', function() {
        model.addMesh(mesh);
        model.removeMesh(0);
        expect(model.meshes).to.be.an('array').that.is.empty;
    });

    it('should compile render buffers', function() {
        // Assuming compileRenderBuffers is implemented
        // This test will need to be updated once the method is implemented
        expect(model.compileRenderBuffers).to.be.a('function');
    });
});
describe('Model', function() {
    let model;
    let mesh;

    beforeEach(function() {
        model = new Model();
        mesh = new Mesh();
    });

    it('should initialize with an empty meshes array', function() {
        expect(model.meshes).to.be.an('array').that.is.empty;
    });

    it('should add a mesh to the meshes array', function() {
        model.addMesh(mesh);
        expect(model.meshes).to.have.lengthOf(1);
        expect(model.meshes[0]).to.equal(mesh);
    });

    it('should return a mesh by index', function() {
        model.addMesh(mesh);
        const retrievedMesh = model.getMesh(0);
        expect(retrievedMesh).to.equal(mesh);
    });

    it('should return all meshes', function() {
        model.addMesh(mesh);
        const meshes = model.getMeshes();
        expect(meshes).to.be.an('array').that.has.lengthOf(1);
        expect(meshes[0]).to.equal(mesh);
    });

    it('should return the correct mesh count', function() {
        expect(model.getMeshCount()).to.equal(0);
        model.addMesh(mesh);
        expect(model.getMeshCount()).to.equal(1);
    });

    it('should remove a mesh by index', function() {
        model.addMesh(mesh);
        model.removeMesh(0);
        expect(model.meshes).to.be.an('array').that.is.empty;
    });

    it('should compile render buffers', function() {
        // Assuming compileRenderBuffers is implemented
        // This test will need to be updated once the method is implemented
        expect(model.compileRenderBuffers).to.be.a('function');
    });

    it('should return the correct vertex count', function() {
        sinon.stub(mesh, 'getVertexCount').returns(3);
        model.addMesh(mesh);
        expect(model.getVertexCount()).to.equal(3);
    });

    it('should return the correct vertex buffer data', function() {
        const modelViewMatrix = new Matrix();
        const vertexArray = new Float32Array([0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0]);
        
        const v1 = new Vertex3D(0, 0, 0);
        v1.setColor(255, 0, 0, 255);
        const v2 = new Vertex3D(1, 0, 0);
        v2.setColor(0, 255, 0, 255);
        const v3 = new Vertex3D(0, 1, 0);
        v3.setColor(0, 0, 255, 255);
        mesh.addTriplet(v1, v2, v3);
    
        model.addMesh(mesh);
        const data = model.getVertexBufferData(modelViewMatrix);
        expect(data).to.deep.equal(new Float32Array([0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0]));
    });

    it('should return the correct normal buffer data', function() {
        const modelViewMatrix = new Matrix();
        const normalArray = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]);
        
        const v1 = new Vertex3D(0, 0, 0);
        v1.setColor(255, 0, 0, 255);
        const v2 = new Vertex3D(1, 0, 0);
        v2.setColor(0, 255, 0, 255);
        const v3 = new Vertex3D(0, 1, 0);
        v3.setColor(0, 0, 255, 255);
        mesh.addTriplet(v1, v2, v3);
    
        model.addMesh(mesh);
        const data = model.getNormalBufferData(modelViewMatrix);
        expect(data).to.deep.equal(normalArray);
    });

    it('should return the correct UV buffer data', function() {
        const uvArray = new Float32Array([0, 0, 1, 0, 0, 1]);
        const v1 = new Vertex3D(0, 0, 0);
        v1.setColor(255, 0, 0, 255);
        v1.setUV(0, 0);
        const v2 = new Vertex3D(1, 0, 0);
        v2.setColor(0, 255, 0, 255);
        v2.setUV(1, 0);
        const v3 = new Vertex3D(0, 1, 0);
        v3.setColor(0, 0, 255, 255);
        v3.setUV(0, 1);
        mesh.addTriplet(v1, v2, v3);
        model.addMesh(mesh);
    const data = model.getUVBufferData();
        expect(data).to.deep.equal(uvArray);
    });

    it('should return the correct color buffer data', function() {
        const colorArray = new Uint8ClampedArray([255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255]);
        
        const v1 = new Vertex3D(0, 0, 0);
        v1.setColor(255, 0, 0, 255);
        v1.setUV(0, 0);
        const v2 = new Vertex3D(1, 0, 0);
        v2.setColor(0, 255, 0, 255);
        v2.setUV(1, 0);
        const v3 = new Vertex3D(0, 1, 0);
        v3.setColor(0, 0, 255, 255);
        v3.setUV(0, 1);
        mesh.addTriplet(v1, v2, v3);
        
        model.addMesh(mesh);
        const data = model.getColorBufferData();
        expect(data).to.deep.equal(colorArray);
    });
});