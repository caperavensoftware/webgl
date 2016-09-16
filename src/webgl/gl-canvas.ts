export class GLCanvas {
    canvas: HTMLCanvasElement;
    gl: any;

    constructor(canvas: HTMLElement, color: IColor) {
        if (canvas) {
            this.canvas = <HTMLCanvasElement>canvas;
        }
        else {
            this.canvas = document.createElement("canvas");
        }

        this.gl = this.canvas.getContext("webgl") || this.canvas.getContext("experimental-webgl");
        this.gl.clearColor(color.r, color.g, color.b, color.a);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    }

    dispose() {
        this.canvas = null;
        this.gl = null;
    }

    resize() {
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }
}