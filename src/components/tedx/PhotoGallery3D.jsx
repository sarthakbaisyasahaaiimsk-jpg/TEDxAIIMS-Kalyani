import { useEffect, useRef, useState } from "react";

// Dynamically import all jpg images from src/assets/pastphotos/
const imageModules = import.meta.glob("../../assets/pastphotos/*.jpg", {
  eager: true,
  import: "default",
});

// Sort numerically by filename so order is 1, 2, 3... not 1, 10, 11, 2...
const imagePaths = Object.entries(imageModules)
  .sort(([a], [b]) => {
    const numA = parseInt(a.match(/(?:photo)?(\d+)\.jpg$/i)?.[1] || "0", 10);
    const numB = parseInt(b.match(/(?:photo)?(\d+)\.jpg$/i)?.[1] || "0", 10);
    return numA - numB;
  })
  .map(([, value]) => value);

// TEDx-inspired theme colors
const THEME_BG = "#1A0408";
const THEME_ACCENT = "#EB0028";

class Utilities {
  /**
   * @param {number} min
   * @param {number} max
   * @returns {number}
   */
  static randomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }
}

class Stopwatch {
  initialize() {
    const time = Date.now();
    this.startTime = time;
    this.lastTime = time;
  }

  calculateTime() {
    const time = Date.now();
    this.elapsedTime = time - this.startTime;
    this.lastTime = time;
  }

  getElapsedTime() {
    return this.elapsedTime;
  }
}

class DrawMainImage {
  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} width
   * @param {number} height
   */
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.canvas = document.createElement("canvas");
    this.ctx2 = this.canvas.getContext("2d");
    this.image = null;
    this.stopWatch = new Stopwatch();
    this.dataArr = [];
    this.isLoaded = false;
  }

  /** @param {string} src */
  drawImage(src) {
    this.isLoaded = false;
    this.image = new Image();
    this.image.src = src;

    this.image.addEventListener("load", () => {
      if (!this.image || !this.ctx2) return;

      this.stopWatch.initialize();

      let imageWidth;
      let ratio;
      let imageHeight;

      if (this.image.width >= this.image.height) {
        imageWidth = Math.min(this.width * 0.9, this.image.width);
        ratio = this.image.width / this.image.height;
        imageHeight = imageWidth / ratio;
      } else {
        imageHeight = Math.min(this.height * 0.9, this.image.height);
        ratio = this.image.height / this.image.width;
        imageWidth = imageHeight / ratio;

        if (imageWidth >= this.width * 0.9) {
          imageWidth = Math.min(this.width * 0.9, this.image.width);
          ratio = this.image.width / this.image.height;
          imageHeight = imageWidth / ratio;
        }
      }

      this.canvas.width = imageWidth;
      this.canvas.height = imageHeight;

      this.ctx2.clearRect(0, 0, imageWidth, imageHeight);
      this.ctx2.drawImage(this.image, 0, 0, imageWidth, imageHeight);

      this.getImageData();
      this.isLoaded = true;
    });
  }

  getImageData() {
    this.dataArr = [];

    let preHeight = 0;
    let addHeight = 0;

    for (let i = 0; i < this.canvas.height; i += addHeight) {
      const obj = {};
      addHeight = Utilities.randomInt(5, 20);

      if (preHeight + addHeight > this.canvas.height) {
        addHeight = Math.floor(this.canvas.height - preHeight);
      }

      if (addHeight === 0) return;

      const image = this.ctx2.getImageData(
        0,
        preHeight,
        this.canvas.width,
        addHeight
      );

      obj.image = image;
      obj.height = preHeight;
      obj.width =
        Math.random() * this.width * 0.5 - this.width * 0.25;

      this.dataArr.push(obj);
      preHeight += addHeight;
    }
  }

  addImage() {
    if (!this.isLoaded) return;

    for (let i = 0; i < this.dataArr.length; i++) {
      this.ctx.putImageData(
        this.dataArr[i].image,
        this.width / 2 -
          this.canvas.width / 2 +
          this.dataArr[i].width,
        this.height / 2 -
          this.canvas.height / 2 +
          this.dataArr[i].height
      );
    }

    this.moveImage();
  }

  moveImage() {
    this.stopWatch.calculateTime();

    const t = 1.0 -
      Math.min(this.stopWatch.getElapsedTime() * 0.0002, 1.0);

    this.e = this.ease(t);

    for (let i = 0; i < this.dataArr.length; i++) {
      this.dataArr[i].width *= this.e;
    }
  }

  /** @param {number} t */
  deleteImage(t) {
    if (!this.isLoaded) return;

    for (let i = 0; i < this.dataArr.length; i++) {
      this.ctx.putImageData(
        this.dataArr[i].image,
        this.width / 2 -
          this.canvas.width / 2 +
          this.dataArr[i].width +
          Math.tan(
            t * 0.01 + this.dataArr[i].height / Math.PI
          ) *
            100,
        this.height / 2 -
          this.canvas.height / 2 +
          this.dataArr[i].height
      );
    }
  }

  /** @param {number} x */
  ease(x) {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
  }
}

class Shape {
  /**
   * @param {{
   *   c: CanvasRenderingContext2D,
   *   x: number,
   *   y: number,
   *   i: number,
   *   r: number,
   *   n: number,
   *   s: number,
   *   image?: HTMLImageElement,
   *   p?: string
   * }} params
   */
  constructor(params) {
    this.ctx = params.c;
    this.xIndex = params.x;
    this.yIndex = params.y;
    this.index = params.i;
    this.radius = params.r;
    this.numberOfShape = params.n;
    this.size = params.s;
    this.image = params.image || new Image();

    if (!params.image) {
      this.image.src = params.p;
    }

    this.ratio = 0;
    this.displayed = true;

    this.xRadian =
      (Math.PI * 2 / this.numberOfShape) * this.xIndex;
    this.yRadian =
      (Math.PI * 2 / this.numberOfShape) * this.yIndex;
  }

  /** @param {{ delta: { x: number, y: number } }} infos */
  updateParams(infos) {
    this.x =
      Math.sin(this.xRadian + infos.delta.x) * this.radius;
    this.y =
      Math.cos(this.yRadian + infos.delta.y) * this.radius;

    this.ratio = this.getNormalizedDist();
  }

  getNormalizedDist() {
    let tmp =
      Math.sqrt(this.x * this.x + this.y * this.y) /
      this.radius;

    tmp = this.ease(tmp);
    tmp = 1 - Math.min(tmp, 1);

    return tmp;
  }

  /** @param {number} t */
  ease(t) {
    return t * t * t;
  }

  /** @param {{ delta: { x: number, y: number } }} infos */
  draw(infos) {
    this.updateParams(infos);

    if (
      Math.sin(this.yRadian + infos.delta.y) > 0 ||
      Math.cos(this.xRadian + infos.delta.x) > 0
    ) {
      this.displayed = false;
      return;
    }

    this.displayed = true;

    this.ctx.save();

    this.ctx.translate(this.x, this.y);
    this.ctx.scale(this.ratio, this.ratio);
    this.ctx.globalAlpha = this.ratio;

    /*
     * IMPORTANT:
     * The old implementation used:
     *
     *   image.width / 2 - size / 2
     *
     * as the source crop. `size` is a canvas/tile size, not an
     * image-pixel size, so high-resolution photos were being
     * cropped to a tiny central portion and appeared extremely
     * zoomed in.
     *
     * We now use the complete source image and scale it
     * proportionally so the actual photograph is visible.
     */
    if (this.image.complete && this.image.naturalWidth > 0) {
      const imageWidth = this.image.naturalWidth;
      const imageHeight = this.image.naturalHeight;
      const imageRatio = imageWidth / imageHeight;

      let drawWidth;
      let drawHeight;

      if (imageRatio > 1) {
        // Landscape: fit width
        drawWidth = this.size;
        drawHeight = this.size / imageRatio;
      } else {
        // Portrait or square: fit height
        drawHeight = this.size;
        drawWidth = this.size * imageRatio;
      }

      this.ctx.drawImage(
        this.image,
        -drawWidth / 2,
        -drawHeight / 2,
        drawWidth,
        drawHeight
      );
    }

    this.ctx.restore();
  }
}

class Glitch {
  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} width
   * @param {number} height
   * @param {number} min
   * @param {number} max
   */
  constructor(ctx, width, height, min, max) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.min = min;
    this.max = max;
    this.dataArr = [];
  }

  getImageData() {
    let preHeight = 0;
    let addHeight = 0;

    for (let i = 0; i < this.height; i += addHeight) {
      const obj = {};

      addHeight = Utilities.randomInt(this.min, this.max);

      if (preHeight + addHeight > this.height) {
        addHeight = Math.floor(this.height - preHeight);
      }

      if (addHeight === 0) return;
      if (!this.ctx) return;

      const image = this.ctx.getImageData(
        0,
        preHeight,
        this.width,
        addHeight
      );

      obj.image = image;
      obj.height = preHeight;

      this.dataArr.push(obj);
      preHeight += addHeight;
    }
  }

  /** @param {number} t */
  addImage(t) {
    for (let i = 0; i < this.dataArr.length; i++) {
      if (Math.random() > 0.01) {
        this.ctx.putImageData(
          this.dataArr[i].image,
          Math.tan(
            this.dataArr[i].height * 0.1 + t
          ) *
            10 *
            Math.random(),
          this.dataArr[i].height
        );
      } else {
        const randomIndex = Math.floor(
          this.dataArr.length * Math.random()
        );

        this.ctx.putImageData(
          this.dataArr[randomIndex].image,
          this.width * Math.random() - this.width / 2,
          this.dataArr[i].height
        );
      }
    }
  }

  /** @param {number} t */
  draw(t) {
    this.dataArr = [];
    this.getImageData();
    this.addImage(t);
  }
}

export default function PhotoGallery3D() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let animationId;
    let sketchState = {};
    let destroyed = false;

    const canvas = document.createElement("canvas");

    canvasRef.current = canvas;

    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    canvas.style.background = THEME_BG;
    canvas.style.cursor = "default";
    canvas.style.touchAction = "pan-y";

    canvas.ariaLabel = "TEDx photo gallery";
    canvas.role = "img";

    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      canvas.remove();
      return;
    }

    let loadedCount = 0;

    const handleLoadingProgress = () => {
      loadedCount++;

      const pct =
        imagePaths.length > 0
          ? Math.floor(
              (loadedCount / imagePaths.length) * 100
            )
          : 100;

      setProgress(pct);

      if (loadedCount === imagePaths.length) {
        setTimeout(() => setLoaded(true), 300);
      }
    };

    if (imagePaths.length === 0) {
      setProgress(100);
      setLoaded(true);
    } else {
      imagePaths.forEach((path) => {
        const img = new Image();

        img.src = path;

        img.addEventListener(
          "load",
          handleLoadingProgress
        );

        img.addEventListener(
          "error",
          handleLoadingProgress
        );
      });
    }

    function setupSizes() {
      const rect = container.getBoundingClientRect();

      sketchState.width = canvas.width = rect.width;
      sketchState.height = canvas.height = rect.height;
      sketchState.preWidth = rect.width;
    }

    function setupShapes() {
      const edge = Math.max(
        sketchState.width,
        sketchState.height
      );

      sketchState.radius = edge / 2;

      sketchState.numberOfShape = window.matchMedia(
        "(max-width: 768px)"
      ).matches
        ? 10
        : 16;

      sketchState.size =
        sketchState.radius /
        (sketchState.numberOfShape / 6);

      sketchState.shapes = [];

      let index = 0;

      for (
        let x = 0;
        x < sketchState.numberOfShape;
        x++
      ) {
        for (
          let y = 0;
          y < sketchState.numberOfShape;
          y++
        ) {
          const params = {
            x,
            y,
            i: index++,
            c: ctx,
            s: sketchState.size,
            r: sketchState.radius,
            n: sketchState.numberOfShape,
            p:
              imagePaths.length > 0
                ? imagePaths[
                    Math.floor(
                      Math.random() *
                        imagePaths.length
                    )
                  ]
                : "",
          };

          sketchState.shapes.push(
            new Shape(params)
          );
        }
      }
    }

    function isHovered(shape, x, y) {
      return (
        shape.displayed === true &&
        x >
          shape.x -
            (sketchState.size / 2) *
              shape.ratio &&
        x <
          shape.x +
            (sketchState.size / 2) *
              shape.ratio &&
        y >
          shape.y -
            (sketchState.size / 2) *
              shape.ratio &&
        y <
          shape.y +
            (sketchState.size / 2) *
              shape.ratio
      );
    }

    function drawFocus(s, hover) {
      if (!sketchState.focus) {
        sketchState.focus = {
          x: 0,
          y: 0,
          s: sketchState.size,
        };
      }

      const focus = sketchState.focus;

      if (hover === false) {
        focus.s +=
          (0 - focus.s) * 0.16;

        focus.x +=
          (sketchState.touchInfos.mouse.x -
            focus.x) *
          0.16;

        focus.y +=
          (sketchState.touchInfos.mouse.y -
            focus.y) *
          0.16;

        ctx.save();
        ctx.strokeStyle = THEME_ACCENT;
        ctx.lineWidth = 1;

        ctx.strokeRect(
          focus.x - focus.s / 2,
          focus.y - focus.s / 2,
          focus.s,
          focus.s
        );

        ctx.restore();
      } else if (s) {
        focus.s +=
          (sketchState.size * s.ratio -
            focus.s) *
          0.16;

        focus.x +=
          (s.x - focus.x) * 0.16;

        focus.y +=
          (s.y - focus.y) * 0.16;

        ctx.save();
        ctx.strokeStyle = THEME_ACCENT;
        ctx.lineWidth = 5 * s.ratio;

        ctx.strokeRect(
          focus.x - focus.s / 2,
          focus.y - focus.s / 2,
          focus.s,
          focus.s
        );

        ctx.restore();
      }
    }

    function resetParams() {
      sketchState.hover = false;
      canvas.style.cursor = "default";
    }

    function render(t) {
      if (destroyed) return;

      resetParams();

      if (
        !sketchState.touchInfos ||
        !sketchState.shapes ||
        !sketchState.glitch ||
        !sketchState.mainImage
      ) {
        animationId =
          requestAnimationFrame(render);

        return;
      }

      ctx.clearRect(
        0,
        0,
        sketchState.width,
        sketchState.height
      );

      ctx.save();

      ctx.translate(
        sketchState.width / 2,
        sketchState.height / 2
      );

      let hoveredIndex;

      for (
        let i = 0;
        i < sketchState.shapes.length;
        i++
      ) {
        const s = sketchState.shapes[i];

        s.draw(sketchState.touchInfos);

        if (
          isHovered(
            s,
            sketchState.touchInfos.mouse.x,
            sketchState.touchInfos.mouse.y
          )
        ) {
          canvas.style.cursor = "zoom-in";
          sketchState.hover = true;
          hoveredIndex = i;
        }
      }

      drawFocus(
        hoveredIndex !== undefined
          ? sketchState.shapes[hoveredIndex]
          : undefined,
        sketchState.hover
      );

      if (Math.random() < 0.01) {
        sketchState.glitch.draw(t);
      }

      if (
        sketchState.isDisplayed &&
        !sketchState.isDeleting
      ) {
        ctx.globalAlpha = 0.8;

        ctx.fillRect(
          -sketchState.width / 2,
          -sketchState.height / 2,
          sketchState.width,
          sketchState.height
        );

        sketchState.mainImage.addImage(t);
      }

      if (sketchState.isDeleting) {
        sketchState.mainImage.deleteImage(t);
      }

      ctx.restore();

      animationId =
        requestAnimationFrame(render);
    }

    function init() {
      setupSizes();

      if (imagePaths.length === 0) {
        sketchState.shapes = [];
        sketchState.isDisplayed = false;
        sketchState.isDeleting = false;

        sketchState.touchInfos = {
          mouse: { x: 0, y: 0 },
          delta: { x: 0, y: 0 },
          fing: {
            start: { x: null, y: null },
            move: { x: null, y: null },
            end: { x: null, y: null },
          },
        };

        sketchState.glitch =
          new Glitch(
            ctx,
            sketchState.width,
            sketchState.height,
            50,
            200
          );

        sketchState.mainImage =
          new DrawMainImage(
            ctx,
            sketchState.width,
            sketchState.height
          );

        render(0);

        return;
      }

      setupShapes();

      sketchState.isDisplayed = false;
      sketchState.isDeleting = false;

      sketchState.touchInfos = {
        mouse: { x: 0, y: 0 },
        delta: { x: 0, y: 0 },
        fing: {
          start: { x: null, y: null },
          move: { x: null, y: null },
          end: { x: null, y: null },
        },
      };

      sketchState.glitch =
        new Glitch(
          ctx,
          sketchState.width,
          sketchState.height,
          50,
          200
        );

      sketchState.mainImage =
        new DrawMainImage(
          ctx,
          sketchState.width,
          sketchState.height
        );

      render(0);
    }

    function onMousemove(e) {
      const rect =
        canvas.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      sketchState.touchInfos.mouse.x =
        (x / sketchState.width) *
          sketchState.width -
        sketchState.width / 2;

      sketchState.touchInfos.mouse.y =
        (y / sketchState.height) *
          sketchState.height -
        sketchState.height / 2;
    }

    function onTouchstart(e) {
      const t = e.targetTouches[0];

      if (!t) return;

      sketchState.touchInfos.fing.start.x =
        t.pageX;

      sketchState.touchInfos.fing.start.y =
        t.pageY;
    }

    function onTouchmove(e) {
      const t = e.targetTouches[0];

      if (!t) return;

      const rect =
        canvas.getBoundingClientRect();

      const x = t.pageX - rect.left;
      const y = t.pageY - rect.top;

      sketchState.touchInfos.mouse.x =
        (x / sketchState.width) *
          sketchState.width -
        sketchState.width / 2;

      sketchState.touchInfos.mouse.y =
        (y / sketchState.height) *
          sketchState.height -
        sketchState.height / 2;

      const previousX =
        sketchState.touchInfos.fing.move.x ??
        sketchState.touchInfos.fing.start.x ??
        t.pageX;

      const previousY =
        sketchState.touchInfos.fing.move.y ??
        sketchState.touchInfos.fing.start.y ??
        t.pageY;

      sketchState.touchInfos.fing.move.x =
        t.pageX;

      sketchState.touchInfos.fing.move.y =
        t.pageY;

      sketchState.touchInfos.delta.x +=
        (previousX - t.pageX) * 0.0003;

      sketchState.touchInfos.delta.y +=
        (previousY - t.pageY) * 0.0003;
    }

    function onWheel(e) {
      sketchState.touchInfos.delta.x +=
        e.deltaX * 0.0005;

      sketchState.touchInfos.delta.y +=
        e.deltaY * 0.0005;
    }

    function onClick(e) {
      if (sketchState.isDisplayed) {
        sketchState.isDeleting = true;

        setTimeout(() => {
          sketchState.isDeleting = false;
          sketchState.isDisplayed = false;
        }, 160);

        return;
      }

      const rect =
        canvas.getBoundingClientRect();

      const x =
        (sketchState.touchInfos.mouse.x =
          ((e.clientX - rect.left) /
            sketchState.width) *
            sketchState.width -
          sketchState.width / 2);

      const y =
        (sketchState.touchInfos.mouse.y =
          ((e.clientY - rect.top) /
            sketchState.height) *
            sketchState.height -
          sketchState.height / 2);

      for (
        let i = 0;
        i < sketchState.shapes.length;
        i++
      ) {
        const s = sketchState.shapes[i];

        if (isHovered(s, x, y)) {
          sketchState.isDisplayed = true;
          sketchState.mainImage.drawImage(
            s.image.src
          );

          return;
        }
      }
    }

    function onResize() {
      const rect =
        container.getBoundingClientRect();

      if (sketchState.preWidth === rect.width) {
        sketchState.height =
          canvas.height = rect.height;

        return;
      }

      init();
    }

    const resizeObserver =
      new ResizeObserver(onResize);

    resizeObserver.observe(container);

    canvas.addEventListener(
      "mousemove",
      onMousemove
    );

    canvas.addEventListener(
      "wheel",
      onWheel,
      { passive: true }
    );

    canvas.addEventListener(
      "click",
      onClick
    );

    canvas.addEventListener(
      "touchstart",
      onTouchstart
    );

    canvas.addEventListener(
      "touchmove",
      onTouchmove
    );

    init();

    return () => {
      destroyed = true;

      cancelAnimationFrame(animationId);

      resizeObserver.disconnect();

      canvas.removeEventListener(
        "mousemove",
        onMousemove
      );

      canvas.removeEventListener(
        "wheel",
        onWheel
      );

      canvas.removeEventListener(
        "click",
        onClick
      );

      canvas.removeEventListener(
        "touchstart",
        onTouchstart
      );

      canvas.removeEventListener(
        "touchmove",
        onTouchmove
      );

      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }

      canvasRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden rounded-sm"
      style={{
        backgroundColor: THEME_BG,
      }}
    >
      {!loaded && (
        <div
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{
            backgroundColor: THEME_BG,
          }}
        >
          <div className="relative w-2/3 max-w-xs">
            <p className="text-ted-red text-center pb-3 text-sm tracking-widest">
              {progress}%
            </p>

            <div className="relative h-[2px] bg-white/10 w-full overflow-hidden">
              <div
                className="absolute left-0 bottom-0 h-full transition-all duration-300"
                style={{
                  width: `${progress}%`,
                  backgroundColor:
                    THEME_ACCENT,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}