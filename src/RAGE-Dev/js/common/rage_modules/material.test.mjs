import { expect } from 'chai';
import sinon from 'sinon';
import {JSDOM} from 'jsdom';
import { Material, Texture } from './material.mjs';
import { hexToRgb } from './utils.mjs';

describe('Material', function() {
    let material;

    beforeEach(function() {
        material = new Material();
    });

    it('should set base color', function() {
        material.setBaseColor(255, 0, 0, 1);
        expect(material.baseColor).to.deep.equal(new Uint8ClampedArray([255, 0, 0, 1]));
    });

    it('should set ambient color', function() {
        material.setAmbientColor(0, 255, 0, 1);
        expect(material.ambientColor).to.deep.equal(new Uint8ClampedArray([0, 255, 0, 1]));
    });

    it('should set diffuse color', function() {
        material.setDiffuseColor(0, 0, 255, 1);
        expect(material.diffuseColor).to.deep.equal(new Uint8ClampedArray([0, 0, 255, 1]));
    });

    it('should set specular color', function() {
        material.setSpecularColor(255, 255, 0, 1);
        expect(material.specularColor).to.deep.equal(new Uint8ClampedArray([255, 255, 0, 1]));
    });

    it('should set emission color', function() {
        material.setEmissionColor(0, 255, 255, 1);
        expect(material.emissionColor).to.deep.equal(new Uint8ClampedArray([0, 255, 255, 1]));
    });

    it('should set base color from hex', function() {
        material.setBaseColorFromHex('#ff0000');
        expect(material.baseColor).to.deep.equal(new Uint8ClampedArray([255, 0, 0, 255]));
    });

    before(function() {
        const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
        window = dom.window;
        document = window.document;
        global.Image = window.Image;
    });

    it('should create texture', function() {
        const material = new Material();
        material.createTexture('../../../../Resources/Images/crate.jpg');
        material.texture.img.onload();
        expect(material.texture).to.be.instanceOf(Texture);
        expect(material.hasTexture).to.be.true;
    });

    it('should handle texture loaded', function() {
        material.textureLoaded();
        expect(material.hasTexture).to.be.true;
        expect(material.useTexture).to.be.true;
    });
});

