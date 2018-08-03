'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Canvas = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _gl = require('gl');

var _gl2 = _interopRequireDefault(_gl);

var _canvas = require('canvas');

var canvas = _interopRequireWildcard(_canvas);

var _xhr = require('xhr2');

var _xhr2 = _interopRequireDefault(_xhr);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _webgl = require('./webgl');

var webgl = _interopRequireWildcard(_webgl);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NODE_PIXI_WEBGL = false;

var Element = function () {
  function Element() {
    _classCallCheck(this, Element);

    this.style = {};
    this.offsetWidth = 20;
    this.offsetHeight = 20;
    this._clientWidth = 20;
    this._clientHeight = 20;
  }

  _createClass(Element, [{
    key: 'addEventListener',
    value: function addEventListener() {}
  }, {
    key: 'removeEventListener',
    value: function removeEventListener() {}
  }, {
    key: 'appendChild',
    value: function appendChild() {}
  }, {
    key: 'removeChild',
    value: function removeChild() {}
  }, {
    key: 'clientHeight',
    get: function get() {
      return this._clientHeight;
    },
    set: function set(value) {
      this._clientHeight = value;
    }
  }, {
    key: 'clientWidth',
    get: function get() {
      return this._clientWidth;
    },
    set: function set(value) {
      this._clientWidth = value;
    }
  }]);

  return Element;
}();

var AnchorElement = function (_Element) {
  _inherits(AnchorElement, _Element);

  function AnchorElement() {
    _classCallCheck(this, AnchorElement);

    var _this = _possibleConstructorReturn(this, (AnchorElement.__proto__ || Object.getPrototypeOf(AnchorElement)).call(this));

    _this._href = '';
    return _this;
  }

  _createClass(AnchorElement, [{
    key: 'href',
    get: function get() {
      return this._href;
    },
    set: function set(value) {
      this._href = value;
    }
  }]);

  return AnchorElement;
}(Element);

var CanvasContext = function () {
  function CanvasContext(canvas) {
    _classCallCheck(this, CanvasContext);

    this._canvas = canvas;
    this._ctx = this._canvas.getContext('2d');
  }

  _createClass(CanvasContext, [{
    key: 'arc',
    value: function arc(x, y, radius, startAngle, endAngle, anticlockwise) {
      this._ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    }
  }, {
    key: 'arcTo',
    value: function arcTo(x1, y1, x2, y2, radius) {
      this._ctx.arcTo(x1, y1, x2, y2, radius);
    }
  }, {
    key: 'beginPath',
    value: function beginPath() {
      this._ctx.beginPath();
    }
  }, {
    key: 'bezierCurveTo',
    value: function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
      this._ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }
  }, {
    key: 'clearRect',
    value: function clearRect(x, y, w, h) {
      this._ctx.clearRect(x, y, w, h);
    }
  }, {
    key: 'clip',
    value: function clip() {
      this._ctx.clip();
    }
  }, {
    key: 'closePath',
    value: function closePath() {
      this._ctx.closePath();
    }
  }, {
    key: 'createImageData',
    value: function createImageData(w, h) {
      return this._ctx.createImageData(w, h);
    }
  }, {
    key: 'createLinearGradient',
    value: function createLinearGradient(x0, y0, x1, y1) {
      return this._ctx.createLinearGradient(x0, y0, x1, y1);
    }
  }, {
    key: 'createPattern',
    value: function createPattern(image, repetition) {
      return this._ctx.createPattern(image instanceof Canvas ? image._canvas : image, repetition);
    }
  }, {
    key: 'createRadialGradient',
    value: function createRadialGradient(x0, y0, r0, x1, y1, r1) {
      return this._ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    }
  }, {
    key: 'drawImage',
    value: function drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) {
      this._ctx.drawImage(image instanceof Canvas ? image._canvas : image, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }, {
    key: 'fill',
    value: function fill() {
      this._ctx.fill();
    }
  }, {
    key: 'fillRect',
    value: function fillRect(x, y, w, h) {
      this._ctx.fillRect(x, y, w, h);
    }
  }, {
    key: 'fillText',
    value: function fillText(text, x, y, maxWidth) {
      this._ctx.fillText(text, x, y, maxWidth);
    }
  }, {
    key: 'getImageData',
    value: function getImageData(sx, sy, sw, sh) {
      return this._ctx.getImageData(sx, sy, sw, sh);
    }
  }, {
    key: 'isPointInPath',
    value: function isPointInPath(x, y) {
      return this._ctx.isPointInPath(x, y);
    }
  }, {
    key: 'lineTo',
    value: function lineTo(x, y) {
      this._ctx.lineTo(x, y);
    }
  }, {
    key: 'measureText',
    value: function measureText(text) {
      return this._ctx.measureText(text);
    }
  }, {
    key: 'moveTo',
    value: function moveTo(x, y) {
      this._ctx.moveTo(x, y);
    }
  }, {
    key: 'putImageData',
    value: function putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
      this._ctx.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
    }
  }, {
    key: 'quadraticCurveTo',
    value: function quadraticCurveTo(cpx, cpy, x, y) {
      this._ctx.quadraticCurveTo(cpx, cpy, x, y);
    }
  }, {
    key: 'rect',
    value: function rect(x, y, w, h) {
      this._ctx.rect(x, y, w, h);
    }
  }, {
    key: 'restore',
    value: function restore() {
      this._ctx.restore();
    }
  }, {
    key: 'rotate',
    value: function rotate(angle) {
      this._ctx.rotate(angle);
    }
  }, {
    key: 'save',
    value: function save() {
      this._ctx.save();
    }
  }, {
    key: 'scale',
    value: function scale(sx, sy) {
      this._ctx.scale(sx, sy);
    }
  }, {
    key: 'setTransform',
    value: function setTransform(m11, m12, m21, m22, dx, dy) {
      this._ctx.setTransform(m11, m12, m21, m22, dx, dy);
    }
  }, {
    key: 'stroke',
    value: function stroke() {
      this._ctx.stroke();
    }
  }, {
    key: 'strokeRect',
    value: function strokeRect(x, y, w, h) {
      this._ctx.strokeRect(x, y, w, h);
    }
  }, {
    key: 'strokeText',
    value: function strokeText(text, x, y, maxWidth) {
      this._ctx.strokeText(text, x, y, maxWidth);
    }
  }, {
    key: 'translate',
    value: function translate(dx, dy) {
      this._ctx.translate(dx, dy);
    }
  }, {
    key: 'transform',
    value: function transform(m11, m12, m21, m22, dx, dy) {
      this._ctx.transform(m11, m12, m21, m22, dx, dy);
    }
  }, {
    key: 'canvas',
    get: function get() {
      return this._canvas;
    }
  }, {
    key: 'fillStyle',
    get: function get() {
      return this._ctx.fillStyle;
    },
    set: function set(value) {
      this._ctx.fillStyle = value;
    }
  }, {
    key: 'font',
    get: function get() {
      return this._ctx.font;
    },
    set: function set(value) {
      this._ctx.font = value;
    }
  }, {
    key: 'globalAlpha',
    get: function get() {
      return this._ctx.globalAlpha;
    },
    set: function set(value) {
      this._ctx.globalAlpha = value;
    }
  }, {
    key: 'globalCompositeOperation',
    get: function get() {
      return this._ctx.globalCompositeOperation;
    },
    set: function set(value) {
      this._ctx.globalCompositeOperation = value;
    }
  }, {
    key: 'lineCap',
    get: function get() {
      return this._ctx.lineCap;
    },
    set: function set(value) {
      this._ctx.lineCap = value;
    }
  }, {
    key: 'lineJoin',
    get: function get() {
      return this._ctx.lineJoin;
    },
    set: function set(value) {
      this._ctx.lineJoin = value;
    }
  }, {
    key: 'lineWidth',
    get: function get() {
      return this._ctx.lineWidth;
    },
    set: function set(value) {
      this._ctx.lineWidth = value;
    }
  }, {
    key: 'miterLimit',
    get: function get() {
      return this._ctx.miterLimit;
    },
    set: function set(value) {
      this._ctx.miterLimit = value;
    }
  }, {
    key: 'shadowBlur',
    get: function get() {
      return this._ctx.shadowBlur;
    },
    set: function set(value) {
      this._ctx.shadowBlur = value;
    }
  }, {
    key: 'shadowColor',
    get: function get() {
      return this._ctx.shadowColor;
    },
    set: function set(value) {
      this._ctx.shadowColor = value;
    }
  }, {
    key: 'shadowOffsetX',
    get: function get() {
      return this._ctx.shadowOffsetX;
    },
    set: function set(value) {
      this._ctx.shadowOffsetX = value;
    }
  }, {
    key: 'shadowOffsetY',
    get: function get() {
      return this._ctx.shadowOffsetY;
    },
    set: function set(value) {
      this._ctx.shadowOffsetY = value;
    }
  }, {
    key: 'strokeStyle',
    get: function get() {
      return this._ctx.strokeStyle;
    },
    set: function set(value) {
      this._ctx.strokeStyle = value;
    }
  }, {
    key: 'textAlign',
    get: function get() {
      return this._ctx.textAlign;
    },
    set: function set(value) {
      this._ctx.textAlign = value;
    }
  }, {
    key: 'textBaseline',
    get: function get() {
      return this._ctx.textBaseline;
    },
    set: function set(value) {
      this._ctx.textBaseline = value;
    }
  }]);

  return CanvasContext;
}();

var Canvas = exports.Canvas = function (_Element2) {
  _inherits(Canvas, _Element2);

  _createClass(Canvas, null, [{
    key: 'imageToImageData',
    value: function imageToImageData(image) {
      var flip_y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (NODE_PIXI_WEBGL) {
        var c = canvas.createCanvas(image.width, image.height),
          ctx = c.getContext('2d');
        if (flip_y) {
          ctx.scale(1, -1);
          ctx.translate(0, -image.height);
        }
        ctx.drawImage(image, 0, 0);
        return ctx.getImageData(0, 0, image.width, image.height);
      } else {
        return image;
      }
    }
  }]);

  function Canvas() {
    _classCallCheck(this, Canvas);

    var _this2 = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this));

    _this2._canvas = canvas.createCanvas(1, 1);
    _this2._ctx = new CanvasContext(_this2._canvas);
    _this2._webgl = false;
    _this2._webglResizeExt = null;
    return _this2;
  }

  _createClass(Canvas, [{
    key: 'getContext',
    value: function getContext(value, contextOptions) {
      if (value === 'webgl') {
        this._ctx = (0, _gl2.default)(1, 1, contextOptions);
        global.window.WebGLRenderingContext = this._ctx;
        this._webgl = true;
        this._webglResizeExt = this._ctx.getExtension('STACKGL_resize_drawingbuffer');
        NODE_PIXI_WEBGL = true;
      }
      return this._ctx;
    }
  }, {
    key: 'toBuffer',
    value: function toBuffer() {
      var _this3 = this;

      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'png';
      var quality = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var c = this._webgl ? webgl.to_canvas(this._ctx, this.width, this.height) : this._canvas;

      return new Promise(function (resolve, reject) {
        if (format === 'jpg') {
          c.toDataURL('image/jpeg', quality, function (err, data) {
            if (err) return reject(err);
            data = data.replace(/^[^,]+/, '');
            resolve(new Buffer(data, 'base64'));
          });
        } else if (format === 'png') {
          resolve(c.toBuffer());
        } else if (format === 'pdf' || format === 'svg') {
          var cnv = canvas.createCanvas(_this3.width, _this3.height, format),
            ctx = cnv.getContext('2d'),
            img = new canvas.Image();

          img.onload = function () {
            ctx.drawImage(img, 0, 0, _this3.width, _this3.height);
            resolve(cnv.toBuffer());
          };
          img.onerror = function (err) {
            reject(err);
          };
          img.src = c.toBuffer();
        } else {
          reject(new Error('invalid format: ' + format));
        }
      });
    }
  }, {
    key: 'height',
    get: function get() {
      return this._canvas.height;
    },
    set: function set(value) {
      if (this._webglResizeExt) {
        this._webglResizeExt.resize(this.width, value);
      }
      this._canvas.height = value;
    }
  }, {
    key: 'width',
    get: function get() {
      return this._canvas.width;
    },
    set: function set(value) {
      if (this._webglResizeExt) {
        this._webglResizeExt.resize(value, this.height);
      }
      this._canvas.width = value;
    }
  }]);

  return Canvas;
}(Element);

canvas.Image.prototype._eventemitter = null;
canvas.Image.prototype.tim = null;

canvas.Image.prototype.addEventListener = function (name, cb) {
  if (!this._eventemitter) {
    this._eventemitter = new _events2.default();
  }
  this._eventemitter.once(name, cb);
};
canvas.Image.prototype._src = '';
Object.defineProperty(canvas.Image.prototype, "src", {
  get: function src() {
    return this._src;
  },
  set: function src(value) {
    var _this4 = this;

    var isBuffer = value instanceof Buffer;

    if (typeof value === 'string' && value.match(/^https?/)) {
      (0, _request2.default)({
        method: 'GET',
        url: value,
        encoding: null
      }, function (err, res, body) {
        if (!this._eventemitter) return
        if (err) {
          _this4._eventemitter.emit('error', {
            target: {
              nodeName: err
            }
          });
        } else {
          _this4._src = value;
          _this4.source = body;
          _this4._eventemitter.emit('load');
        }
      });
    } else if (isBuffer || typeof value === 'string') {
      process.nextTick(function () {
        _this4._src = _this4.source = value;

        if (!this._eventemitter) return

        _this4._eventemitter.emit('load');
      });
    } else {
      process.nextTick(function () {
        if (!this._eventemitter) return

        _this4._eventemitter.emit('error', {
          target: {
            nodeName: new Error('unable to set Image#src')
          }
        });
      });
    }
  }
});

var Document = function () {
  function Document() {
    _classCallCheck(this, Document);

    this.body = new Element();
    this.documentElement = this.body;
  }

  _createClass(Document, [{
    key: 'addEventListener',
    value: function addEventListener() {}
  },{
    key: 'removeEventListener',
    value: function removeEventListener() {}
  }, {
    key: 'appendChild',
    value: function appendChild(child) {}
  }, {
    key: 'removeChild',
    value: function removeChild(child) {}
  }, {
    key: 'createElement',
    value: function createElement(tag) {
      switch (tag) {
        case 'canvas':
          return new Canvas();
        case 'div':
          return new Element();
        case 'a':
          return new AnchorElement();
        default:
          throw new Error('Document::createElement: unhandled "' + tag + '"');
      }
    }
  }]);

  return Document;
}();

var Window = function () {
  function Window(document) {
    _classCallCheck(this, Window);

    this.document = document;
    this.navigator = {
      userAgent: 'node-pixi',
      appVersion: '0.3.3'
    };
    this.location = "http://localhost/";
    this.Image = canvas.Image;
    this.WebGLRenderingContext = {};
  }

  _createClass(Window, [{
    key: 'addEventListener',
    value: function addEventListener() {}
  }]);

  _createClass(Window, [{
    key: 'removeEventListener',
    value: function removeEventListener() {}
  }]);

  return Window;
}();

global.document = new Document();
global.window = new Window(global.document);
global.navigator = global.window.navigator;
global.Image = canvas.Image;
global.XMLHttpRequest = _xhr2.default;
global.Canvas = Canvas;