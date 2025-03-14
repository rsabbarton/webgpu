import { expect } from 'chai';
import { hexToRgb, rgbToHex, rgbaToHex, degToRad, radToDeg } from './utils.mjs';

describe('utils.mjs', () => {
    describe('hexToRgb', () => {
        it('should convert hex to rgb correctly', () => {
            const hex = '#ff5733';
            const expected = { r: 255, g: 87, b: 51, a: 255 };
            const result = hexToRgb(hex);
            expect(result).to.deep.equal(expected);
        });

        it('should handle hex with alpha correctly', () => {
            const hex = '#ff573380';
            const expected = { r: 255, g: 87, b: 51, a: 128 };
            const result = hexToRgb(hex);
            expect(result).to.deep.equal(expected);
        });
    });

    describe('rgbToHex', () => {
        it('should convert rgb to hex correctly', () => {
            const r = 255, g = 87, b = 51;
            const expected = '#ff5733';
            const result = rgbToHex(r, g, b);
            expect(result).to.equal(expected);
        });
    });

    describe('rgbaToHex', () => {
        it('should convert rgba to hex correctly', () => {
            const r = 255, g = 87, b = 51, a = 128;
            const expected = '#ff573380';
            const result = rgbaToHex(r, g, b, a);
            expect(result).to.equal(expected);
        });
    
    });

    describe('degToRad', () => {
        it('should convert degrees to radians correctly', () => {
            const degrees = 180;
            const expected = Math.PI;
            const result = degToRad(degrees);
            expect(result).to.be.closeTo(expected, 0.0001);
        });
    });

    describe('radToDeg', () => {
        it('should convert radians to degrees correctly', () => {
            const radians = Math.PI;
            const expected = 180;
            const result = radToDeg(radians);
            expect(result).to.be.closeTo(expected, 0.0001);
        });
    });
});