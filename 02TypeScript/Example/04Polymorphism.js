var Red = /** @class */ (function () {
    function Red() {
        this.r = 255;
        this.g = 0;
        this.b = 0;
    }
    Red.prototype.show = function () {
        console.log("R:".concat(this.r, ", G:").concat(this.g, ", B:").concat(this.b));
    };
    return Red;
}());
var Green = /** @class */ (function () {
    function Green() {
        this.r = 0;
        this.g = 255;
        this.b = 0;
    }
    Green.prototype.show = function () {
        console.log("R:".concat(this.r, ", G:").concat(this.g, ", B:").concat(this.b));
    };
    return Green;
}());
var Blue = /** @class */ (function () {
    function Blue() {
        this.r = 0;
        this.g = 0;
        this.b = 255;
    }
    Blue.prototype.show = function () {
        console.log("R:".concat(this.r, ", G:").concat(this.g, ", B:").concat(this.b));
    };
    return Blue;
}());
var red = new Red();
red.show();
var blue = new Blue();
blue.show();
//多型(同名異式)
var myColor;
myColor = new Red();
myColor.show();
