import { expect } from 'chai';
import { Vector2, Vector3, Vector4 } from './vector.mjs';

// filepath: /home/richard/dev/webgpu/src/RAGE Dev/js/common/rage_modules/vector.test.mjs

describe('Vector2', function() {
    it('should create a Vector2 with given x and y', function() {
        const v = new Vector2(1, 2);
        expect(v.x).to.equal(1);
        expect(v.y).to.equal(2);
    });

    it('should add two Vector2 instances', function() {
        const v1 = new Vector2(1, 2);
        const v2 = new Vector2(3, 4);
        const result = v1.add(v2);
        expect(result).to.deep.equal(new Vector2(4, 6));
    });

    it('should subtract two Vector2 instances', function() {
        const v1 = new Vector2(5, 6);
        const v2 = new Vector2(3, 4);
        const result = v1.sub(v2);
        expect(result).to.deep.equal(new Vector2(2, 2));
    });

    it('should multiply a Vector2 by a scalar', function() {
        const v = new Vector2(1, 2);
        const result = v.mul(2);
        expect(result).to.deep.equal(new Vector2(2, 4));
    });

    it('should divide a Vector2 by a scalar', function() {
        const v = new Vector2(4, 8);
        const result = v.div(2);
        expect(result).to.deep.equal(new Vector2(2, 4));
    });

    it('should calculate the dot product of two Vector2 instances', function() {
        const v1 = new Vector2(1, 2);
        const v2 = new Vector2(3, 4);
        const result = v1.dot(v2);
        expect(result).to.equal(11);
    });

    it('should normalize a Vector2', function() {
        const v = new Vector2(3, 4);
        const result = v.normalize();
        expect(result).to.deep.equal(new Vector2(0.6, 0.8));
    });

    it('should calculate the length of a Vector2', function() {
        const v = new Vector2(3, 4);
        const result = v.length();
        expect(result).to.equal(5);
    });

    it('should calculate the distance between two Vector2 instances', function() {
        const v1 = new Vector2(1, 2);
        const v2 = new Vector2(4, 6);
        const result = v1.distance(v2);
        expect(result).to.equal(5);
    });

    it('should calculate the angle between two Vector2 instances', function() {
        const v1 = new Vector2(1, 0);
        const v2 = new Vector2(0, 1);
        const result = v1.angle(v2);
        expect(result).to.equal(Math.PI / 2);
    });

    it('should clone a Vector2', function() {
        const v = new Vector2(1, 2);
        const result = v.clone();
        expect(result).to.deep.equal(new Vector2(1, 2));
    });

    it('should convert a Vector2 to a string', function() {
        const v = new Vector2(1, 2);
        const result = v.toString();
        expect(result).to.equal('(1, 2)');
    });

    it('should create a Vector2 from an array', function() {
        const arr = [1, 2];
        const result = Vector2.fromArray(arr);
        expect(result).to.deep.equal(new Vector2(1, 2));
    });

    it('should convert a Vector2 to an array', function() {
        const v = new Vector2(1, 2);
        const result = v.toArray();
        expect(result).to.deep.equal([1, 2]);
    });
});

describe('Vector3', function() {
    it('should create a Vector3 with given x, y, and z', function() {
        const v = new Vector3(1, 2, 3);
        expect(v.x).to.equal(1);
        expect(v.y).to.equal(2);
        expect(v.z).to.equal(3);
    });

    it('should add two Vector3 instances', function() {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 5, 6);
        const result = v1.add(v2);
        expect(result).to.deep.equal(new Vector3(5, 7, 9));
    });

    it('should subtract two Vector3 instances', function() {
        const v1 = new Vector3(7, 8, 9);
        const v2 = new Vector3(4, 5, 6);
        const result = v1.sub(v2);
        expect(result).to.deep.equal(new Vector3(3, 3, 3));
    });

    it('should multiply a Vector3 by a scalar', function() {
        const v = new Vector3(1, 2, 3);
        const result = v.mul(2);
        expect(result).to.deep.equal(new Vector3(2, 4, 6));
    });

    it('should divide a Vector3 by a scalar', function() {
        const v = new Vector3(4, 8, 12);
        const result = v.div(2);
        expect(result).to.deep.equal(new Vector3(2, 4, 6));
    });

    it('should calculate the dot product of two Vector3 instances', function() {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 5, 6);
        const result = v1.dot(v2);
        expect(result).to.equal(32);
    });

    it('should calculate the cross product of two Vector3 instances', function() {
        const v1 = new Vector3(1, 0, 0);
        const v2 = new Vector3(0, 1, 0);
        const result = v1.cross(v2);
        expect(result).to.deep.equal(new Vector3(0, 0, 1));
    });

    it('should normalize a Vector3', function() {
        const v = new Vector3(3, 4, 0);
        const result = v.normalize();
        expect(result).to.deep.equal(new Vector3(0.6, 0.8, 0));
    });

    it('should calculate the length of a Vector3', function() {
        const v = new Vector3(3, 4, 0);
        const result = v.length();
        expect(result).to.equal(5);
    });

    it('should calculate the distance between two Vector3 instances', function() {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 5, 6);
        const result = v1.distance(v2);
        expect(result).to.equal(Math.sqrt(27));
    });

    it('should calculate the angle between two Vector3 instances', function() {
        const v1 = new Vector3(1, 0, 0);
        const v2 = new Vector3(0, 1, 0);
        const result = v1.angle(v2);
        expect(result).to.equal(Math.PI / 2);
    });

    it('should clone a Vector3', function() {
        const v = new Vector3(1, 2, 3);
        const result = v.clone();
        expect(result).to.deep.equal(new Vector3(1, 2, 3));
    });

    it('should convert a Vector3 to a string', function() {
        const v = new Vector3(1, 2, 3);
        const result = v.toString();
        expect(result).to.equal('(1, 2, 3)');
    });

    it('should create a Vector3 from an array', function() {
        const arr = [1, 2, 3];
        const result = Vector3.fromArray(arr);
        expect(result).to.deep.equal(new Vector3(1, 2, 3));
    });

    it('should convert a Vector3 to an array', function() {
        const v = new Vector3(1, 2, 3);
        const result = v.toArray();
        expect(result).to.deep.equal([1, 2, 3]);
    });

    it('should calculate the surface normal of three Vector3 instances', function() {
        const v1 = new Vector3(0, 0, 0);
        const v2 = new Vector3(1, 0, 0);
        const v3 = new Vector3(0, 1, 0);
        const result = Vector3.surfaceNormal(v1, v2, v3);
        expect(result).to.deep.equal(new Vector3(0, 0, 1));
    });
});

describe('Vector4', function() {
    it('should create a Vector4 with given x, y, z, and w', function() {
        const v = new Vector4(1, 2, 3, 4);
        expect(v.x).to.equal(1);
        expect(v.y).to.equal(2);
        expect(v.z).to.equal(3);
        expect(v.w).to.equal(4);
    });

    it('should add two Vector4 instances', function() {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const result = v1.add(v2);
        expect(result).to.deep.equal(new Vector4(6, 8, 10, 12));
    });

    it('should subtract two Vector4 instances', function() {
        const v1 = new Vector4(9, 10, 11, 12);
        const v2 = new Vector4(5, 6, 7, 8);
        const result = v1.sub(v2);
        expect(result).to.deep.equal(new Vector4(4, 4, 4, 4));
    });

    it('should multiply a Vector4 by a scalar', function() {
        const v = new Vector4(1, 2, 3, 4);
        const result = v.mul(2);
        expect(result).to.deep.equal(new Vector4(2, 4, 6, 8));
    });

    it('should divide a Vector4 by a scalar', function() {
        const v = new Vector4(4, 8, 12, 16);
        const result = v.div(2);
        expect(result).to.deep.equal(new Vector4(2, 4, 6, 8));
    });

    it('should calculate the dot product of two Vector4 instances', function() {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const result = v1.dot(v2);
        expect(result).to.equal(70);
    });

    it('should normalize a Vector4', function() {
        const v = new Vector4(1, 2, 3, 4);
        const length = Math.sqrt(30);
        const result = v.normalize();
        expect(result).to.deep.equal(new Vector4(1/length, 2/length, 3/length, 4/length));
    });

    it('should calculate the length of a Vector4', function() {
        const v = new Vector4(1, 2, 3, 4);
        const result = v.length();
        expect(result).to.equal(Math.sqrt(30));
    });

    it('should calculate the distance between two Vector4 instances', function() {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const result = v1.distance(v2);
        expect(result).to.equal(Math.sqrt(64));
    });

    it('should calculate the angle between two Vector4 instances', function() {
        const v1 = new Vector4(1, 0, 0, 0);
        const v2 = new Vector4(0, 1, 0, 0);
        const result = v1.angle(v2);
        expect(result).to.equal(Math.PI / 2);
    });

    it('should clone a Vector4', function() {
        const v = new Vector4(1, 2, 3, 4);
        const result = v.clone();
        expect(result).to.deep.equal(new Vector4(1, 2, 3, 4));
    });

    it('should convert a Vector4 to a string', function() {
        const v = new Vector4(1, 2, 3, 4);
        const result = v.toString();
        expect(result).to.equal('(1, 2, 3, 4)');
    });

    it('should create a Vector4 from an array', function() {
        const arr = [1, 2, 3, 4];
        const result = Vector4.fromArray(arr);
        expect(result).to.deep.equal(new Vector4(1, 2, 3, 4));
    });

    it('should convert a Vector4 to an array', function() {
        const v = new Vector4(1, 2, 3, 4);
        const result = v.toArray();
        expect(result).to.deep.equal([1, 2, 3, 4]);
    });
});