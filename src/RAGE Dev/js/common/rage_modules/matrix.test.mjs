import { expect } from 'chai';
import { Matrix } from './matrix.mjs';

describe('Matrix', function() {
    let matrix;

    beforeEach(function() {
        matrix = new Matrix();
    });

    it('should create an identity matrix', function() {
        const identity = new Float32Array([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
        expect(matrix.matrix).to.deep.equal(identity);
    });

    it('should push and pop matrix', function() {
        const originalMatrix = matrix.matrix.slice();
        matrix.push();
        matrix.createTranslation(1, 2, 3);
        matrix.createTranslation(4, 5, 6);
        matrix.pop();
        expect(matrix.matrix).to.deep.equal(originalMatrix);
    });

    it('should create a perspective matrix', function() {
        matrix.createPerspective(Math.PI / 4, 1, 1, 100);
        expect(matrix.matrix[0]).to.be.closeTo(2.414, 0.001);
        expect(matrix.matrix[5]).to.be.closeTo(2.414, 0.001);
        expect(matrix.matrix[10]).to.be.closeTo(-1.0101, 0.001);
        expect(matrix.matrix[11]).to.be.closeTo(-1.00, 0.001);
        expect(matrix.matrix[14]).to.be.closeTo(-1.0101, 0.001);
    });

    it('should create an orthographic matrix', function() {
        matrix.createOrthographic(-1, 1, -1, 1, -1, 1);
        const expectedMatrix = new Float32Array([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, -1, 0,
            0, 0, 0, 1
        ]);

    });
});
