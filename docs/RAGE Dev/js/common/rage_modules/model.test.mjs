import { expect } from 'chai';
import { Model } from './model.mjs';
import { Mesh } from './mesh.mjs';


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