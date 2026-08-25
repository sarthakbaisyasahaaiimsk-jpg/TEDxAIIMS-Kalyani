// @ts-nocheck
import { useEffect, useRef, useState } from "react";
//import { useEffect, useRef, useState } from "react";

// Dynamically import all jpg images from src/assets/pastphotos/
// Adjust "../assets/pastphotos/" if this file isn't one level below src/
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

// TEDx-inspired theme colors: very dark red/black background, crimson accents.
const THEME_BG = "#1A0408";
const THEME_ACCENT = "#EB0028";

class Utilities {
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
      this.ctx2.drawImage(
        this.image,
        0,
        0,
        imageWidth,
        imageHeight
      );

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

    const t =
      1.0 -
      Math.min(this.stopWatch.getElapsedTime() * 0.0002, 1.0);

    this.e = this.ease(t);

    for (let i = 0; i < this.dataArr.length; i++) {
      this.dataArr[i].width *= this.e;
    }
  }

  deleteImage(t) {
    if (!this.isLoaded) return;

    for (let i = 0; i < this.dataArr.length; i++) {
      this.ctx.putImageData(
        this.dataArr[i].image,
        this.width / 2 -
          this.canvas.width / 2 +
          this.dataArr[i].width +
          Math.tan(
            t * 0.01 +
              this.dataArr[i].height / Math.PI
          ) *
            100,
        this.height / 2 -
          this.canvas.height / 2 +
          this.dataArr[i].height
      );
    }
  }

  ease(x) {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
  }
}

class Shape {
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
      (Math.PI * 2 / this.numberOfShape) *
      this.xIndex;

    this.yRadian =
      (Math.PI * 2 / this.numberOfShape) *
      this.yIndex;
  }

  updateParams(infos) {
    this.x =
      Math.sin(
        this.xRadian + infos.delta.x
      ) * this.radius;

    this.y =
      Math.cos(
        this.yRadian + infos.delta.y
      ) * this.radius;

    this.ratio = this.getNormalizedDist();
  }

  getNormalizedDist() {
    let tmp =
      Math.sqrt(
        this.x * this.x +
          this.y * this.y
      ) / this.radius;

    tmp = this.ease(tmp);
    tmp = 1 - Math.min(tmp, 1);

    return tmp;
  }

  ease(t) {
    return t * t * t;
  }

  draw(infos) {
    this.updateParams(infos);

    if (
      Math.sin(
        this.yRadian + infos.delta.y
      ) > 0 ||
      Math.cos(
        this.xRadian + infos.delta.x
      ) > 0
    ) {
      this.displayed = false;
      return;
    }

    this.displayed = true;

    this.ctx.save();

    this.ctx.translate(this.x, this.y);
    this.ctx.scale(this.ratio, this.ratio);
    this.ctx.translate(-this.x, -this.y);

    this.ctx.globalAlpha = this.ratio;

    /*
     * IMPORTANT:
     * Draw the entire image instead of taking a square
     * crop from its center. This prevents portrait/landscape
     * photos from appearing extremely zoomed in.
     */
    if (
      this.image.complete &&
      this.image.naturalWidth > 0
    ) {
      const imageAspect =
        this.image.width / this.image.height;

      let drawWidth = this.size;
      let drawHeight = this.size;

      if (imageAspect > 1) {
        drawHeight = this.size / imageAspect;
      } else {
        drawWidth = this.size * imageAspect;
      }

      this.ctx.drawImage(
        this.image,
        this.x - drawWidth / 2,
        this.y - drawHeight / 2,
        drawWidth,
        drawHeight
      );
    }

    this.ctx.restore();
  }
}

class Glitch {
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

      addHeight = Utilities.randomInt(
        this.min,
        this.max
      );

      if (preHeight + addHeight > this.height) {
        addHeight = Math.floor(
          this.height - preHeight
        );
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

  addImage(t) {
    if (!this.ctx) return;

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
          this.width * Math.random() -
            this.width / 2,
          this.dataArr[i].height
        );
      }
    }
  }

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

    canvas.ariaLabel = "TEDx photo gallery";
    canvas.role = "img";

    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      canvas.remove();
      return;
    }

    let loadedCount = 0;

    // Progressive reveal: don't block the whole gallery on all 73
    // images downloading. Show it as soon as a reasonably-sized first
    // batch is ready, then keep streaming the rest in the background
    // (setupShapes() re-randomizes into the shape grid as more finish,
    // since Shape() picks a random path from imagePaths lazily via
    // "p:" at construction time in setupShapes()).
    const REVEAL_THRESHOLD = Math.min(
      12,
      imagePaths.length
    );
    let revealed = false;

    function maybeReveal() {
      if (revealed) return;

      if (
        loadedCount >= REVEAL_THRESHOLD ||
        loadedCount === imagePaths.length
      ) {
        revealed = true;
        setTimeout(() => setLoaded(true), 200);
      }
    }

    imagePaths.forEach((path) => {
      const img = new Image();

      // Loading="lazy" has no effect on manually-constructed Image()
      // objects, but decoding="async" lets the browser decode off the
      // main thread instead of blocking layout/paint.
      img.decoding = "async";
      img.src = path;

      img.addEventListener("load", () => {
        loadedCount++;

        const pct = Math.floor(
          (loadedCount / imagePaths.length) * 100
        );

        setProgress(pct);
        maybeReveal();
      });

      img.addEventListener("error", () => {
        loadedCount++;

        const pct = Math.floor(
          (loadedCount / imagePaths.length) * 100
        );

        setProgress(pct);
        maybeReveal();
      });
    });

    function setupSizes() {
      const rect =
        container.getBoundingClientRect();

      sketchState.width =
        canvas.width = rect.width;

      sketchState.height =
        canvas.height = rect.height;

      sketchState.preWidth = rect.width;
    }

    function setupShapes() {
      const edge = Math.max(
        sketchState.width,
        sketchState.height
      );

      sketchState.radius = edge / 2;

      sketchState.numberOfShape =
        window.matchMedia(
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
              imagePaths[
                Math.floor(
                  Math.random() *
                    imagePaths.length
                )
              ],
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
          (sketchState.size *
            s.ratio -
            focus.s) *
          0.16;

        focus.x +=
          (s.x - focus.x) *
          0.16;

        focus.y +=
          (s.y - focus.y) *
          0.16;

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
        const s =
          sketchState.shapes[i];

        s.draw(
          sketchState.touchInfos
        );

        if (
          isHovered(
            s,
            sketchState.touchInfos.mouse.x,
            sketchState.touchInfos.mouse.y
          )
        ) {
          canvas.style.cursor =
            "zoom-in";

          sketchState.hover = true;
          hoveredIndex = i;
        }
      }

      drawFocus(
        hoveredIndex !== undefined
          ? sketchState.shapes[
              hoveredIndex
            ]
          : undefined,
        sketchState.hover
      );

      // Reduced from 0.01 (~1% per frame, effectively multiple times
      // per second at 60fps) to lower the frequency of full-canvas
      // getImageData/putImageData calls, which are the most expensive
      // operation in this render loop.
      if (Math.random() < 0.003) {
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

        sketchState.mainImage.addImage(
          t
        );
      }

      if (sketchState.isDeleting) {
        sketchState.mainImage.deleteImage(
          t
        );
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

          delta: {
            x: 0,
            y: 0,
          },

          fing: {
            start: {
              x: null,
              y: null,
            },

            move: {
              x: null,
              y: null,
            },

            end: {
              x: null,
              y: null,
            },
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
        mouse: {
          x: 0,
          y: 0,
        },

        delta: {
          x: 0,
          y: 0,
        },

        fing: {
          start: {
            x: null,
            y: null,
          },

          move: {
            x: null,
            y: null,
          },

          end: {
            x: null,
            y: null,
          },
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

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      sketchState.touchInfos.mouse.x =
        (x / sketchState.width) *
          sketchState.width -
        sketchState.width / 2;

      sketchState.touchInfos.mouse.y =
        (y / sketchState.height) *
          sketchState.height -
        sketchState.height / 2;
    }

    /*
     * Touch movement is intentionally NOT used
     * for rotation anymore.
     *
     * This allows normal single-finger scrolling
     * on mobile.
     */
    function onTouchstart(e) {
      const t =
        e.targetTouches[0];

      if (!t) return;

      sketchState.touchInfos.fing.start.x =
        t.pageX;

      sketchState.touchInfos.fing.start.y =
        t.pageY;

      sketchState.touchInfos.fing.move.x =
        t.pageX;

      sketchState.touchInfos.fing.move.y =
        t.pageY;
    }

    function onTouchmove(e) {
      const t =
        e.targetTouches[0];

      if (!t) return;

      const rect =
        canvas.getBoundingClientRect();

      const x =
        t.pageX - rect.left;

      const y =
        t.pageY - rect.top;

      sketchState.touchInfos.mouse.x =
        (x / sketchState.width) *
          sketchState.width -
        sketchState.width / 2;

      sketchState.touchInfos.mouse.y =
        (y / sketchState.height) *
          sketchState.height -
        sketchState.height / 2;

      /*
       * Do NOT modify sketchState.touchInfos.delta here.
       * Touch scrolling should remain native.
       */
    }

    /*
     * Wheel/trackpad input is intentionally ignored.
     *
     * This allows the page to scroll normally when
     * the pointer is over the gallery.
     */
    function onWheel() {
      // Intentionally empty.
      // Do not rotate the gallery from wheel input.
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
        const s =
          sketchState.shapes[i];

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

      if (
        sketchState.preWidth ===
        rect.width
      ) {
        sketchState.height =
          canvas.height =
          rect.height;

        return;
      }

      init();
    }

    /*
     * Keep native vertical page scrolling enabled
     * on touch devices.
     */
    canvas.style.touchAction =
      "pan-y";

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
      onTouchstart,
      { passive: true }
    );

    canvas.addEventListener(
      "touchmove",
      onTouchmove,
      { passive: true }
    );

    init();

    return () => {
      destroyed = true;

      cancelAnimationFrame(
        animationId
      );

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

      if (
        container.contains(canvas)
      ) {
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
