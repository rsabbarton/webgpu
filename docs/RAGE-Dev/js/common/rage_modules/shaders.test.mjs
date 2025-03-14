import { expect } from 'chai';
import { Colour3DShader } from './shaders.mjs';

describe('Colour3DShader', () => {
    it('should have the correct label', () => {
        expect(Colour3DShader.label).to.equal('Default Colour 3D Shader');
    });

    it('should contain vertex shader code', () => {
        expect(Colour3DShader.code).to.include('@vertex fn vs');
    });

    it('should contain fragment shader code', () => {
        expect(Colour3DShader.code).to.include('@fragment fn fs');
    });

    it('should return the correct vertex positions', () => {
        const vertexPositions = [
            'vec2f( 0.0,  0.5)',  // top center
            'vec2f(-0.5, -0.5)',  // bottom left
            'vec2f( 0.5, -0.5)'   // bottom right
        ];
        vertexPositions.forEach(pos => {
            expect(Colour3DShader.code).to.include(pos);
        });
    });

    it('should return the correct fragment color', () => {
        expect(Colour3DShader.code).to.include('vec4f(1.0, 0.0, 0.0, 1.0)');
    });
});