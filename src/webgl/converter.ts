export class converter {
    static colorToFloat(number: number): number {
        const rgbOffset: number = 0.00392156862;
        return number * rgbOffset;
    }

    static rgbToColor(rgb: IColor): IColor {
        const r = this.colorToFloat(rgb.r);
        const g = this.colorToFloat(rgb.g);
        const b = this.colorToFloat(rgb.b);
        const a = this.colorToFloat(rgb.a);

        return {
            r: r,
            g: g,
            b: b,
            a: a
        }
    }
}