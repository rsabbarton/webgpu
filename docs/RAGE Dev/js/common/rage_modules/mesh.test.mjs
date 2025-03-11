import { expect } from 'chai';
import { Mesh, Triplet } from './mesh.mjs';
import { Material } from './material.mjs';
import { Vector3 } from './vector.mjs';
import { Vertex3D } from './vertex.mjs';


describe('Mesh', function() {
    it('should initialize with an empty triplets array and a default material', function() {
        const mesh = new Mesh();
        expect(mesh.triplets).to.be.an('array').that.is.empty;
        expect(mesh.material).to.be.an.instanceof(Material);
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