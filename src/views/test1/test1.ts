import {GLCanvas} from "./../../webgl/gl-canvas";

export class Test1 {
    glCanvas: GLCanvas;

    attached() {
        const canvas = document.getElementById("glCanvas");
        this.glCanvas = new GLCanvas(canvas, {r: 0.5, g: 0.0, b:0.0, a:1});
    }

    detached() {
        this.glCanvas.dispose();
    }
}