import {expect} from 'chai';
import {converter} from './../../src/webgl/converter';

describe('Converter Tests', function() {
    it('colorToFloat', function() {
        // Arrange
        const colorValue = 255;

        // Act
        const result = converter.colorToFloat(colorValue);

        // Assert
        expect(result).to.be.greaterThan(0.99);
    });

    it ('rgbToColor', function() {
        // Act
        const result = converter.rgbToColor({r:255, g:255, b:255, a:255});

        // Assert
        expect(result.r).to.be.greaterThan(0.99);
        expect(result.g).to.be.greaterThan(0.99);
        expect(result.b).to.be.greaterThan(0.99);
        expect(result.a).to.be.greaterThan(0.99);
    });
});