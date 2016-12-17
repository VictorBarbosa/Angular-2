"use strict";
/**
 * Crop
 */
var Crop = (function () {
    function Crop(_options) {
        this.options = _options;
        this.el = document.querySelector(this.options.imageBox);
    }
    return Crop;
}());
exports.Crop = Crop;
