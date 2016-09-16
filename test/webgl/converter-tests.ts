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
});