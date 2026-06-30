import { useEffect, useRef, useState } from "react";

const imagePaths = [
  "https://images.unsplash.com/photo-1608687087357-845abfade367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1604818640599-71bda0165d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1574357278720-2809ce8065db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1602136773736-34d445b989cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1501769752-a59efa2298ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1558961166-9c584702dcb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1571182160015-2169f6e1aa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1555852224-2a3e675fc47e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1620215175664-cb9a6f5b6103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1539606328118-80c679838702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1574357265250-10c88f63ebfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1536901766856-5d45744cd180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
];

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
    this.image.crossOrigin = "anonymous";

    this.image.addEventListener("load", () => {
      this.stopWatch.initialize();

      let imageWidth, ratio, imageHeight;

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
    let preHeight = 0, addHeight = 0;
    for (let i = 0; i < this.canvas.height; i += addHeight) {
      const obj = {};
      addHeight = Utilities.randomInt(5, 20);

      if (preHeight + addHeight > this.canvas.height) {
        addHeight = Math.floor(this.canvas.height - preHeight);
      }
      if (addHeight === 0) return;

      const image = this.ctx2.getImageData(0, preHeight, this.canvas.width, addHeight);

      obj.image = image;
      obj.height = preHeight;
      obj.width = Math.random() * this.width * 0.5 - this.width * 0.25;

      this.dataArr.push(obj);
      preHeight += addHeight;
    }
  }

  addImage() {
    if (!this.isLoaded) return;
    for (let i = 0; i < this.dataArr.length; i++) {
      this.ctx.putImageData(
        this.dataArr[i].image,
        this.width / 2 - this.canvas.width / 2 + this.dataArr[i].width,
        this.height / 2 - this.canvas.height / 2 + this.dataArr[i].height
      );
    }
    this.moveImage();
  }

  moveImage() {
    this.stopWatch.calculateTime();
    const t = 1.0 - Math.min(this.stopWatch.getElapsedTime() * 0.0002, 1.0);
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
        this.width / 2 - this.canvas.width / 2 + this.dataArr[i].width + Math.tan(t * 0.01 + this.dataArr[i].height / Math.PI) * 100,
        this.height / 2 - this.canvas.height / 2 + this.dataArr[i].height
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
    this.image = new Image();
    this.image.crossOrigin = "anonymous";
    this.image.src = params.p;
    this.ratio = 0;
    this.displayed = true;
    this.xRadian = (Math.PI * 2 / this.numberOfShape) * this.xIndex;
    this.yRadian = (Math.PI * 2 / this.numberOfShape) * this.yIndex;
  }

  updateParams(infos) {
    this.x = Math.sin(this.xRadian + infos.delta.x) * this.radius;
    this.y = Math.cos(this.yRadian + infos.delta.y) * this.radius;
    this.ratio = this.getNormalizedDist();
  }

  getNormalizedDist() {
    let tmp = Math.sqrt(this.x * this.x + this.y * this.y) / this.radius;
    tmp = this.ease(tmp);
    tmp = 1 - Math.min(tmp, 1);
    return tmp;
  }

  ease(t) {
    return t * t * t;
  }

  draw(infos) {
    this.updateParams(infos);

    if (Math.sin(this.yRadian + infos.delta.y) > 0 || Math.cos(this.xRadian + infos.delta.x) > 0) {
      this.displayed = false;
      return;
    }
    this.displayed = true;

    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.scale(this.ratio, this.ratio);
    this.ctx.translate(-this.x, -this.y);
    this.ctx.globalAlpha = this.ratio;

    if (this.image.complete && this.image.naturalWidth > 0) {
      this.ctx.drawImage(
        this.image,
        this.image.width / 2 - this.size / 2,
        this.image.height / 2 - this.size / 2,
        this.size,
        this.size,
        this.x - this.size / 2,
        this.y - this.size / 2,
        this.size,
        this.size
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
    let preHeight = 0, addHeight = 0;
    for (let i = 0; i < this.height; i += addHeight) {
      const obj = {};
      addHeight = Utilities.randomInt(this.min, this.max);

      if (preHeight + addHeight > this.height) {
        addHeight = Math.floor(this.height - preHeight);
      }
      if (addHeight === 0) return;

      const image = this.ctx.getImageData(0, preHeight, this.width, preHeight + addHeight);
      obj.image = image;
      obj.height = preHeight;

      this.dataArr.push(obj);
      preHeight += addHeight;
    }
  }

  addImage(t) {
    for (let i = 0; i < this.dataArr.length; i++) {
      if (Math.random() > 0.01) {
        this.ctx.putImageData(
          this.dataArr[i].image,
          Math.tan(this.dataArr[i].height * 0.1 + t) * 10 * Math.random(),
          this.dataArr[i].height
        );
      } else {
        this.ctx.putImageData(
          this.dataArr[Math.floor(this.dataArr.length * Math.random())].image,
          this.width * Math.random() - this.width / 2,
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
    canvas.style.background = "#01012A";
    canvas.style.cursor = "default";
    canvas.ariaLabel = "TEDx photo gallery";
    canvas.role = "img";
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    let loadedCount = 0;
    imagePaths.forEach((path) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = path;
      img.addEventListener("load", () => {
        loadedCount++;
        const pct = Math.floor((loadedCount / imagePaths.length) * 100);
        setProgress(pct);
        if (loadedCount === imagePaths.length) {
          setTimeout(() => setLoaded(true), 300);
        }
      });
      img.addEventListener("error", () => {
        loadedCount++;
        const pct = Math.floor((loadedCount / imagePaths.length) * 100);
        setProgress(pct);
        if (loadedCount === imagePaths.length) {
          setTimeout(() => setLoaded(true), 300);
        }
      });
    });

    function setupSizes() {
      const rect = container.getBoundingClientRect();
      sketchState.width = canvas.width = rect.width;
      sketchState.height = canvas.height = rect.height;
      sketchState.preWidth = rect.width;
    }

    function setupShapes() {
      const edge = Math.max(sketchState.width, sketchState.height);
      sketchState.radius = edge / 2;
      sketchState.numberOfShape = 16;
      sketchState.size = sketchState.radius / (sketchState.numberOfShape / 6);
      sketchState.shapes = [];

      let index = 0;
      for (let x = 0; x < sketchState.numberOfShape; x++) {
        for (let y = 0; y < sketchState.numberOfShape; y++) {
          const params = {
            x, y, i: index++,
            c: ctx,
            s: sketchState.size,
            r: sketchState.radius,
            n: sketchState.numberOfShape,
            p: imagePaths[Math.floor(Math.random() * (imagePaths.length - 1))],
          };
          sketchState.shapes.push(new Shape(params));
        }
      }
    }

    function isHovered(shape, x, y) {
      return (
        shape.displayed === true &&
        x > shape.x - sketchState.size / 2 * shape.ratio &&
        x < shape.x + sketchState.size / 2 * shape.ratio &&
        y > shape.y - sketchState.size / 2 * shape.ratio &&
        y < shape.y + sketchState.size / 2 * shape.ratio
      );
    }

    function drawFocus(s, hover) {
      if (!sketchState.focus) sketchState.focus = { x: 0, y: 0, s: sketchState.size };
      const focus = sketchState.focus;

      if (hover === false) {
        focus.s += (0 - focus.s) * 0.16;
        focus.x += (sketchState.touchInfos.mouse.x - focus.x) * 0.16;
        focus.y += (sketchState.touchInfos.mouse.y - focus.y) * 0.16;
        ctx.save();
        ctx.strokeStyle = "#EB0028";
        ctx.lineWidth = 1;
        ctx.strokeRect(focus.x - focus.s / 2, focus.y - focus.s / 2, focus.s, focus.s);
        ctx.restore();
      } else if (s) {
        focus.s += (sketchState.size * s.ratio - focus.s) * 0.16;
        focus.x += (s.x - focus.x) * 0.16;
        focus.y += (s.y - focus.y) * 0.16;
        ctx.save();
        ctx.strokeStyle = "#EB0028";
        ctx.lineWidth = 5 * s.ratio;
        ctx.strokeRect(focus.x - focus.s / 2, focus.y - focus.s / 2, focus.s, focus.s);
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
      ctx.clearRect(0, 0, sketchState.width, sketchState.height);
      ctx.save();
      ctx.translate(sketchState.width / 2, sketchState.height / 2);

      let hoveredIndex;
      for (let i = 0; i < sketchState.shapes.length; i++) {
        const s = sketchState.shapes[i];
        s.draw(sketchState.touchInfos);
        if (isHovered(s, sketchState.touchInfos.mouse.x, sketchState.touchInfos.mouse.y)) {
          canvas.style.cursor = "zoom-in";
          sketchState.hover = true;
          hoveredIndex = i;
        }
      }

      drawFocus(sketchState.shapes[hoveredIndex], sketchState.hover);

      if (Math.random() < 0.01) {
        sketchState.glitch.draw(t);
      }

      if (sketchState.isDisplayed && !sketchState.isDeleting) {
        ctx.globalAlpha = 0.8;
        ctx.fillRect(-sketchState.width / 2, -sketchState.height / 2, sketchState.width, sketchState.height);
        sketchState.mainImage.addImage(t);
      }

      if (sketchState.isDeleting) {
        sketchState.mainImage.deleteImage(t);
      }

      ctx.restore();
      animationId = requestAnimationFrame(render);
    }

    function init() {
      setupSizes();
      setupShapes();

      sketchState.isDisplayed = false;
      sketchState.isDeleting = false;
      sketchState.touchInfos = {
        mouse: { x: 0, y: 0 },
        delta: { x: 0, y: 0 },
        fing: { start: { x: null, y: null }, move: { x: null, y: null }, end: { x: null, y: null } },
      };
      sketchState.glitch = new Glitch(ctx, sketchState.width, sketchState.height, 50, 200);
      sketchState.mainImage = new DrawMainImage(ctx, sketchState.width, sketchState.height);

      render(0);
    }

    function onMousemove(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      sketchState.touchInfos.mouse.x = (x / sketchState.width) * sketchState.width - sketchState.width / 2;
      sketchState.touchInfos.mouse.y = (y / sketchState.height) * sketchState.height - sketchState.height / 2;
    }

    function onTouchstart(e) {
      const t = e.targetTouches[0];
      sketchState.touchInfos.fing.start.x = t.pageX;
      sketchState.touchInfos.fing.start.y = t.pageY;
    }

    function onTouchmove(e) {
      const t = e.targetTouches[0];
      const rect = canvas.getBoundingClientRect();
      const x = t.pageX - rect.left;
      const y = t.pageY - rect.top;

      sketchState.touchInfos.mouse.x = (x / sketchState.width) * sketchState.width - sketchState.width / 2;
      sketchState.touchInfos.mouse.y = (y / sketchState.height) * sketchState.height - sketchState.height / 2;

      sketchState.touchInfos.fing.move.x = t.pageX;
      sketchState.touchInfos.fing.move.y = t.pageY;

      sketchState.touchInfos.fing.end.x = sketchState.touchInfos.fing.start.x - sketchState.touchInfos.fing.move.x;
      sketchState.touchInfos.fing.end.y = sketchState.touchInfos.fing.start.y - sketchState.touchInfos.fing.move.y;

      sketchState.touchInfos.delta.x += sketchState.touchInfos.fing.end.x * 0.0003;
      sketchState.touchInfos.delta.y += sketchState.touchInfos.fing.end.y * 0.0003;
    }

    function onWheel(e) {
      e.preventDefault();
      sketchState.touchInfos.delta.x += e.deltaX * 0.0005;
      sketchState.touchInfos.delta.y += e.deltaY * 0.0005;
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

      const rect = canvas.getBoundingClientRect();
      const x = sketchState.touchInfos.mouse.x = ((e.clientX - rect.left) / sketchState.width) * sketchState.width - sketchState.width / 2;
      const y = sketchState.touchInfos.mouse.y = ((e.clientY - rect.top) / sketchState.height) * sketchState.height - sketchState.height / 2;

      for (let i = 0; i < sketchState.shapes.length; i++) {
        const s = sketchState.shapes[i];
        if (isHovered(s, x, y)) {
          sketchState.isDisplayed = true;
          sketchState.mainImage.drawImage(s.image.src);
          return;
        }
      }
    }

    function onResize() {
      const rect = container.getBoundingClientRect();
      if (sketchState.preWidth === rect.width) {
        sketchState.height = canvas.height = rect.height;
        return;
      }
      init();
    }

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    canvas.addEventListener("mousemove", onMousemove);
    canvas.addEventListener("wheel", onWheel, { passive: false });
    canvas.addEventListener("click", onClick);
    canvas.addEventListener("touchstart", onTouchstart);
    canvas.addEventListener("touchmove", onTouchmove);

    init();

    return () => {
      destroyed = true;
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", onMousemove);
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("click", onClick);
      canvas.removeEventListener("touchstart", onTouchstart);
      canvas.removeEventListener("touchmove", onTouchmove);
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video bg-[#01012A] overflow-hidden rounded-sm"
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#01012A] z-10">
          <div className="relative w-2/3 max-w-xs">
            <p className="text-ted-red text-center pb-3 text-sm tracking-widest">{progress}%</p>
            <div className="relative h-[2px] bg-white/10 w-full overflow-hidden">
              <div
                className="absolute left-0 bottom-0 h-full bg-ted-red transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
