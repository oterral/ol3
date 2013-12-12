goog.provide('ol.style.Stroke');

goog.require('ol.color');



/**
 * @constructor
 * @param {ol.style.StrokeOptions=} opt_options Options.
 */
ol.style.Stroke = function(opt_options) {

  var options = goog.isDef(opt_options) ? opt_options : {};

  /**
   * @type {ol.Color|string}
   */
  this.color = goog.isDef(options.color) ? options.color : null;

  /**
   * @type {string|undefined}
   */
  this.lineCap = options.lineCap;

  /**
   * @type {Array.<number>}
   */
  this.lineDash = goog.isDef(options.lineDash) ? options.lineDash : null;

  /**
   * @type {string|undefined}
   */
  this.lineJoin = options.lineJoin;

  /**
   * @type {number|undefined}
   */
  this.miterLimit = options.miterLimit;

  /**
   * @type {number|undefined}
   */
  this.width = options.width;
};
