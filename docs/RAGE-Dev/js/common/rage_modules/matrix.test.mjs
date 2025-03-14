import { expect } from 'chai';
import { Matrix } from './matrix.mjs';

describe('Matrix', () => {
    let matrix;

    beforeEach(() => {
        matrix = new Matrix();
    });

    it('should create an identity matrix', () => {
        const identity = new Float32Array([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
        expect(matrix.matrix).to.deep.equal(identity);
    });

    it('should push and pop matrix', () => {
        const originalMatrix = matrix.matrix.slice();
        matrix.push();
        matrix.createTranslation(1, 2, 3);
        matrix.createTranslation(4, 5, 6);
        matrix.pop();
        expect(matrix.matrix).to.deep.equal(originalMatrix);
    });

    it('should create a perspective matrix', () => {
        matrix.createPerspective(Math.PI / 4, 1, 0.1, 100);
        expect(matrix.matrix[0]).to.be.closeTo(2.414213, 0.000001);
    });

    it('should create an orthographic matrix', () => {
        matrix.createOrthographic(-1, 1, -1, 1, -1, 1);
        expect(matrix.matrix[0]).to.equal(1);
        expect(matrix.matrix[5]).to.equal(1);
        expect(matrix.matrix[10]).to.equal(-0.5);
    });

    it('should copy from another matrix', () => {
        const src = new Matrix();
        src.createTranslation(1, 2, 3);
        matrix.copyFromMatrix(src);
        expect(matrix.matrix).to.deep.equal(src.matrix);
    });

    it('should multiply by another matrix', () => {
        const m1 = new Matrix().createTranslation(1, 2, 3);
        const m2 = new Matrix().createScaling(2, 2, 2);
        m2.multiplyBy(m1);
        expect(m2.matrix[12]).to.equal(2);
        expect(m2.matrix[13]).to.equal(4);
        expect(m2.matrix[14]).to.equal(6);
    });

    it('should invert a matrix', () => {
        matrix.createTranslation(1, 2, 3).invert();
        expect(matrix.matrix[12]).to.be.closeTo(-1, 0.000001);
        expect(matrix.matrix[13]).to.be.closeTo(-2, 0.000001);
        expect(matrix.matrix[14]).to.be.closeTo(-3, 0.000001);
    });

    it('should create a translation matrix', () => {
        matrix.createTranslation(1, 2, 3);
        expect(matrix.matrix[12]).to.equal(1);
        expect(matrix.matrix[13]).to.equal(2);
        expect(matrix.matrix[14]).to.equal(3);
    });

    it('should create a scaling matrix', () => {
        matrix.createScaling(2, 3, 4);
        expect(matrix.matrix[0]).to.equal(2);
        expect(matrix.matrix[5]).to.equal(3);
        expect(matrix.matrix[10]).to.equal(4);
    });

    it('should create a rotation matrix around X axis', () => {
        matrix.rotationX(Math.PI / 2);
        expect(matrix.matrix[5]).to.be.closeTo(0, 0.000001);
        expect(matrix.matrix[6]).to.be.closeTo(1, 0.000001);
        expect(matrix.matrix[9]).to.be.closeTo(-1, 0.000001);
        expect(matrix.matrix[10]).to.be.closeTo(0, 0.000001);
    });

    it('should create a rotation matrix around Y axis', () => {
        matrix.rotationY(Math.PI / 2);
        expect(matrix.matrix[0]).to.be.closeTo(0, 0.000001);
        expect(matrix.matrix[2]).to.be.closeTo(-1, 0.000001);
        expect(matrix.matrix[8]).to.be.closeTo(1, 0.000001);
        expect(matrix.matrix[10]).to.be.closeTo(0, 0.000001);
    });

    it('should create a rotation matrix around Z axis', () => {
        matrix.rotationZ(Math.PI / 2);
        expect(matrix.matrix[0]).to.be.closeTo(0, 0.000001);
        expect(matrix.matrix[1]).to.be.closeTo(1, 0.000001);
        expect(matrix.matrix[4]).to.be.closeTo(-1, 0.000001);
        expect(matrix.matrix[5]).to.be.closeTo(0, 0.000001);
    });

    it('should return a pretty printable string representation of the matrix', () => {
        let output = matrix.getPrettyString();
        expect(output).to.include('1 0 0 0');
    });
});
