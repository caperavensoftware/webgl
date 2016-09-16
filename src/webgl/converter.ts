export class converter {

    static colorToFloat(number: number): number {
        const rgbOffset: number = 0.00392156862;
        return number * rgbOffset;
    }
}