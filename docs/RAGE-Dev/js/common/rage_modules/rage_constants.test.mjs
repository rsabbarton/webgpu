
import { expect } from 'chai';
import * as constants from './rage_constants.mjs';

// filepath: /home/richard/dev/webgpu/src/RAGE-Dev/js/common/rage_modules/rage_constants.test.mjs

describe('RAGE Constants', function() {
    it('should have correct X_AXIS value', function() {
        expect(constants.X_AXIS).to.equal(101);
    });

    it('should have correct Y_AXIS value', function() {
        expect(constants.Y_AXIS).to.equal(102);
    });

    it('should have correct Z_AXIS value', function() {
        expect(constants.Z_AXIS).to.equal(103);
    });

    it('should have correct VERTEX_TYPE_2D value', function() {
        expect(constants.VERTEX_TYPE_2D).to.equal(1001);
    });

    it('should have correct VERTEX_TYPE_3D value', function() {
        expect(constants.VERTEX_TYPE_3D).to.equal(1002);
    });

    it('should have correct VERTEX_TYPE_2DUV value', function() {
        expect(constants.VERTEX_TYPE_2DUV).to.equal(1003);
    });

    it('should have correct VERTEX_TYPE_3DUV value', function() {
        expect(constants.VERTEX_TYPE_3DUV).to.equal(1004);
    });

    it('should have correct VERTEX_TYPE_2DUVC value', function() {
        expect(constants.VERTEX_TYPE_2DUVC).to.equal(1005);
    });

    it('should have correct VERTEX_TYPE_3DUVC value', function() {
        expect(constants.VERTEX_TYPE_3DUVC).to.equal(1006);
    });

    it('should have correct VERTEX_TYPE_3DUVN value', function() {
        expect(constants.VERTEX_TYPE_3DUVN).to.equal(1007);
    });

    it('should have correct VERTEX_TYPE_3DUVCN value', function() {
        expect(constants.VERTEX_TYPE_3DUVCN).to.equal(1008);
    });

    it('should have correct SHADER_TYPE_V3D_FCOL value', function() {
        expect(constants.SHADER_TYPE_V3D_FCOL).to.equal(2001);
    });

    it('should have correct SHADER_TYPE_V3D_FTEX value', function() {
        expect(constants.SHADER_TYPE_V3D_FTEX).to.equal(2002);
    });

    it('should have correct SHADER_TYPE_V3D_FTEXCOL value', function() {
        expect(constants.SHADER_TYPE_V3D_FTEXCOL).to.equal(2003);
    });

    it('should have correct VIEW_MODE_3D_PERSPECTIVE value', function() {
        expect(constants.VIEW_MODE_3D_PERSPECTIVE).to.equal(3001);
    });

    it('should have correct VIEW_MODE_2D value', function() {
        expect(constants.VIEW_MODE_2D).to.equal(3002);
    });

    it('should have correct VIEW_MODE_3D_FIXED value', function() {
        expect(constants.VIEW_MODE_3D_FIXED).to.equal(3003);
    });

    it('should have correct MATRIX_TYPE_IDENTITY value', function() {
        expect(constants.MATRIX_TYPE_IDENTITY).to.equal(4001);
    });

    it('should have correct MATRIX_TYPE_PERSPECTIVE value', function() {
        expect(constants.MATRIX_TYPE_PERSPECTIVE).to.equal(4002);
    });

    it('should have correct MATRIX_TYPE_ORTHOGRAPHIC value', function() {
        expect(constants.MATRIX_TYPE_ORTHOGRAPHIC).to.equal(4003);
    });

    it('should have correct MATRIX_TYPE_ROTATION value', function() {
        expect(constants.MATRIX_TYPE_ROTATION).to.equal(4004);
    });

    it('should have correct MATRIX_TYPE_TRANSLATION value', function() {
        expect(constants.MATRIX_TYPE_TRANSLATION).to.equal(4005);
    });

    it('should return true for existing definitions', function() {
        expect(constants.defExists(101)).to.be.true;
        expect(constants.defExists(1001)).to.be.true;
        expect(constants.defExists(2001)).to.be.true;
        expect(constants.defExists(3001)).to.be.true;
        expect(constants.defExists(4001)).to.be.true;
    });

    it('should return false for non-existing definitions', function() {
        expect(constants.defExists(9999)).to.be.false;
    });
});