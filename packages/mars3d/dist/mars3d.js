/**
 * Mars3D三维可视化平台  mars3d
 *
 * 版本信息：v3.7.22
 * 编译日期：2024-07-15 11:21:49
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：泉州中科星桥空天技术有限公司 ，2024-07-15
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.Cesium || require('mars3d-cesium')), (window.turf || require('@turf/turf'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'mars3d-cesium', '@turf/turf'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.mars3d = {}, global.Cesium, global.turf));
})(this, (function (exports, Cesium, turf) { 
}));