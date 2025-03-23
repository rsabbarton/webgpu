import { expect } from 'chai';
import { Mesh, Triplet } from './mesh.mjs';
import { Material } from './material.mjs';
import { Vector3 } from './vector.mjs';
import { Vertex3D } from './vertex.mjs';
import { cube } from '../test_data/cube.mjs';
import { Matrix } from './matrix.mjs';


describe('Mesh', function() {
    it('should initialize with an empty triplets array and a default material', function() {
        const mesh = new Mesh();
        expect(mesh.triplets).to.be.an('array').that.is.empty;
        expect(mesh.material).to.be.an.instanceof(Material);
    });
    it('should import a mesh from an array of vertices', function() {
        const mesh = new Mesh();
        mesh.loadFromObjectArray(cube.vertexArray); 
        expect(mesh.triplets).to.have.lengthOf(12);
    });
    it('should export a float32 array of vertices', function() {
        const mesh = new Mesh();
        mesh.loadFromObjectArray(cube.vertexArray);
        const vertexArray = mesh.getFloat32ArrayXYZ();
        expect(vertexArray).to.have.lengthOf(36 * 3);
    });
    it('should export a float32 array of normals', function() {
        const mesh = new Mesh();
        mesh.loadFromObjectArray(cube.vertexArray);
        const normalArray = mesh.getFloat32ArrayNormal();
        expect(normalArray).to.have.lengthOf(36 * 3);
    });
    it('should export a uint8 array of colors', function() {
        const mesh = new Mesh();
        mesh.loadFromObjectArray(cube.vertexArray);
        const colorArray = mesh.getUint8ClampedArrayColor();
        expect(colorArray).to.have.lengthOf(36 * 4);
    });
});
describe('Mesh', function() {
    it('should initialize with an empty triplets array and a default material', function() {
        const mesh = new Mesh();
        expect(mesh.triplets).to.be.an('array').that.is.empty;
        expect(mesh.material).to.be.an.instanceof(Material);
    });

    it('should add triplets correctly', function() {
        const mesh = new Mesh();
        const v1 = new Vertex3D(0, 0, 0);
        const v2 = new Vertex3D(1, 0, 0);
        const v3 = new Vertex3D(0, 1, 0);
        mesh.addTriplet(v1, v2, v3);

        expect(mesh.triplets).to.have.lengthOf(1);
        expect(mesh.triplets[0]).to.be.an.instanceof(Triplet);
    });

    it('should set material correctly', function() {
        const mesh = new Mesh();
        const material = new Material();
        mesh.setMaterial(material);

        expect(mesh.material).to.equal(material);
    });

    it('should return the correct triplet', function() {
        const mesh = new Mesh();
        const v1 = new Vertex3D(0, 0, 0);
        const v2 = new Vertex3D(1, 0, 0);
        const v3 = new Vertex3D(0, 1, 0);
        mesh.addTriplet(v1, v2, v3);

        const triplet = mesh.getTriplet(0);
        expect(triplet).to.be.an.instanceof(Triplet);
        expect(triplet.v1).to.equal(v1);
        expect(triplet.v2).to.equal(v2);
        expect(triplet.v3).to.equal(v3);
    });

    it('should return the correct number of vertices', function() {
        const mesh = new Mesh();
        const v1 = new Vertex3D(0, 0, 0);
        const v2 = new Vertex3D(1, 0, 0);
        const v3 = new Vertex3D(0, 1, 0);
        mesh.addTriplet(v1, v2, v3);

        expect(mesh.getVertexCount()).to.equal(3);
    });

    it('should load from object array correctly', function() {
        const mesh = new Mesh();
        const vxa = [
            { x: 0, y: 0, z: 0, u: 0, v: 0, r: 255, g: 0, b: 0, a: 255 },
            { x: 1, y: 0, z: 0, u: 1, v: 0, r: 0, g: 255, b: 0, a: 255 },
            { x: 0, y: 1, z: 0, u: 0, v: 1, r: 0, g: 0, b: 255, a: 255 }
        ];
        mesh.loadFromObjectArray(vxa);

        expect(mesh.triplets).to.have.lengthOf(1);
        const triplet = mesh.triplets[0];
        expect(triplet.v1.position).to.deep.equal(new Vector3(0, 0, 0));
        expect(triplet.v2.position).to.deep.equal(new Vector3(1, 0, 0));
        expect(triplet.v3.position).to.deep.equal(new Vector3(0, 1, 0));
    });

    it('should return correct Float32Array for XYZ', function() {
        const mesh = new Mesh();
        const v1 = new Vertex3D(0, 0, 0);
        const v2 = new Vertex3D(1, 0, 0);
        const v3 = new Vertex3D(0, 1, 0);
        mesh.addTriplet(v1, v2, v3);

        const array = mesh.getFloat32ArrayXYZ();
        expect(array).to.be.an.instanceof(Float32Array);
        expect(array).to.deep.equal(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]));
    });

    it('should return correct Float32Array for UV', function() {
        const mesh = new Mesh();
        const v1 = new Vertex3D(0, 0, 0);
        v1.setUV(0, 0);
        const v2 = new Vertex3D(1, 0, 0);
        v2.setUV(1, 0);
        const v3 = new Vertex3D(0, 1, 0);
        v3.setUV(0, 1);
        mesh.addTriplet(v1, v2, v3);

        const array = mesh.getFloat32ArrayUV();
        expect(array).to.be.an.instanceof(Float32Array);
        expect(array).to.deep.equal(new Float32Array([0, 0, 1, 0, 0, 1]));
    });

    it('should return correct Uint8ClampedArray for color', function() {
        const mesh = new Mesh();
        const v1 = new Vertex3D(0, 0, 0);
        v1.setColor(255, 0, 0, 255);
        const v2 = new Vertex3D(1, 0, 0);
        v2.setColor(0, 255, 0, 255);
        const v3 = new Vertex3D(0, 1, 0);
        v3.setColor(0, 0, 255, 255);
        mesh.addTriplet(v1, v2, v3);

        const array = mesh.getUint8ClampedArrayColor();
        expect(array).to.be.an.instanceof(Uint8ClampedArray);
        expect(array).to.deep.equal(new Uint8ClampedArray([255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255]));
    });

    it('should return correct Float32Array for normals', function() {
        const mesh = new Mesh();
        const v1 = new Vertex3D(0, 0, 0);
        const v2 = new Vertex3D(1, 0, 0);
        const v3 = new Vertex3D(0, 1, 0);
        mesh.addTriplet(v1, v2, v3);

        const array = mesh.getFloat32ArrayNormal();
        expect(array).to.be.an.instanceof(Float32Array);
        expect(array).to.deep.equal(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]));
    });

    it('should return correct transformed vertex array', function() {
        const mesh = new Mesh();
        const v1 = new Vertex3D(0, 0, 0);
        const v2 = new Vertex3D(1, 0, 0);
        const v3 = new Vertex3D(0, 1, 0);
        mesh.addTriplet(v1, v2, v3);

        const modelViewMatrix = new Matrix();
        const array = mesh.getVertexArray(modelViewMatrix);
        expect(array).to.be.an.instanceof(Float32Array);
        expect(array).to.deep.equal(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]));
    });

    it('should return correct transformed normal array', function() {
        const mesh = new Mesh();
        const v1 = new Vertex3D(0, 0, 0);
        const v2 = new Vertex3D(1, 0, 0);
        const v3 = new Vertex3D(0, 1, 0);
        mesh.addTriplet(v1, v2, v3);

        const modelViewMatrix = new Matrix();
        const array = mesh.getNormalArray(modelViewMatrix);
        expect(array).to.be.an.instanceof(Float32Array);
        expect(array).to.deep.equal(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]));
    });
});

describe('Triplet', function() {
    it('should initialize with three vertices and a default normal vector', function() {
        const v1 = new Vertex3D(1, 0, 0);
        const v2 = new Vertex3D(0, 1, 0);
        const v3 = new Vertex3D(0, 0, 0);
        const triplet = new Triplet(v1, v2, v3);

        expect(triplet.v1).to.equal(v1);
        expect(triplet.v2).to.equal(v2);
        expect(triplet.v3).to.equal(v3);
        expect(triplet.normal).to.be.an.instanceof(Vector3);
        expect(triplet.normal).to.deep.equal(new Vector3(0, 0, 1));
    });

    it('should calculate the correct surface normal', function() {
        const v1 = new Vertex3D(0, 0, 0);
        const v2 = new Vertex3D(1, 0, 0);
        const v3 = new Vertex3D(0, 1, 0);
        const triplet = new Triplet(v1, v2, v3);

        expect(triplet.normal).to.deep.equal(new Vector3(0, 0, 1));
    });
});