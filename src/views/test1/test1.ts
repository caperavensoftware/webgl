import {GLCanvas} from "./../../webgl/gl-canvas";
import {converter} from "./../../webgl/converter";

export class Test1 {
    glCanvas: GLCanvas;

    attached() {
        const canvas = document.getElementById("glCanvas");
        this.glCanvas = new GLCanvas(canvas, converter.rgbToColor({r:255, g:187, b:0, a:255}));
    }

    detached() {
        this.glCanvas.dispose();
    }
}