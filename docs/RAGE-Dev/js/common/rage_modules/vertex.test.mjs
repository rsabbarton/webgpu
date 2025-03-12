import { expect } from 'chai';
import { Vertex2D, Vertex3D } from './vertex.mjs';

describe('Vertex2D', function() {
    it('should create a Vertex2D with given x and y', function() {
        const vertex = new Vertex2D(1, 2);
        expect(vertex.position.x).to.equal(1);
        expect(vertex.position.y).to.equal(2);
    });
});

describe('Vertex3D', function() {
    it('should create a Vertex3D with given x, y, and z', function() {
        const vertex = new Vertex3D(1, 2, 3);
        expect(vertex.position.x).to.equal(1);
        expect(vertex.position.y).to.equal(2);
        expect(vertex.position.z).to.equal(3);
    });

    it('should initialize uv to (0, 0)', function() {
        const vertex = new Vertex3D(1, 2, 3);
        expect(vertex.uv.x).to.equal(0);
        expect(vertex.uv.y).to.equal(0);
    });

    it('should initialize normal to (0, 0, 1)', function() {
        const vertex = new Vertex3D(1, 2, 3);
        expect(vertex.normal.x).to.equal(0);
        expect(vertex.normal.y).to.equal(0);
        expect(vertex.normal.z).to.equal(1);
    });
});



