var k=Object.defineProperty,v=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var y=(o,e,t)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,g=(o,e)=>{for(var t in e||(e={}))E.call(e,t)&&y(o,t,e[t]);if(_)for(var t of _(e))L.call(e,t)&&y(o,t,e[t]);return o},C=(o,e)=>v(o,w(e));import{m as p,$ as b}from"./entry/index-BNp4bmLj-1732066199007.js";import{u as j}from"./use-lifecycle-CyVQVRUS.js";import{d as M,a7 as i,Z as z,a8 as B,a9 as m,k as c,G as x}from"./vue-D4H2Ux2Y.js";import"./antd-DgCI0x_J.js";let a,n;const N={layers:[{type:"geojson",name:"示例数据",url:"//data.mars3d.cn/file/geojson/mars3d-draw.json",popup:"{type} {name}",show:!0},{type:"3dtiles",name:"测试模型",url:"//data.mars3d.cn/3dtiles/bim-daxue/tileset.json",position:{lng:116.313536,lat:31.217297,alt:80},scale:100,show:!0}]};function T(o){a=o,d(),a.on(p.EventType.addLayer,function(e){const t=n==null?void 0:n.mapEx;if(t){const l=e.layer.toJSON(),r=p.LayerUtil.create(l);t.addLayer(r)}})}function P(){a.off(p.EventType.addLayer),u(),a=null}function d(){if(n){b("控件已存在,请勿重复创建!");return}const o=document.getElementById("centerDiv");o.style.width="50%";const e=a.toJSON();e.control.baseLayerPicker=!0,e.control.sceneModePicker=!1;for(let t=0,l=e.layers.length;t<l;t++){const r=e.layers[t];if(r.compare)for(const s in r.compare)r[s]=r.compare[s]}n=new p.control.MapCompare(C(g({},e),{parentContainer:document.body})),a.addControl(n),n.mapEx.basemap="天地图电子"}function u(){if(!n){b("控件已销毁,无需重复销毁!");return}a.removeControl(n),n=null;const o=document.getElementById("centerDiv");o.style.width="100%"}const S=Object.freeze(Object.defineProperty({__proto__:null,createControl:d,destroyControl:u,get map(){return a},mapOptions:N,onMounted:T,onUnmounted:P},Symbol.toStringTag,{value:"Module"})),$=M({__name:"index",setup(o){j(S);const e=()=>{d()},t=()=>{u()};return(l,r)=>{const s=i("mars-icon"),f=i("mars-button"),O=i("a-space"),h=i("mars-dialog");return z(),B(h,{visible:!0,right:"10",top:"60",customClass:"compare-pannel",title:"双屏对比",width:"330"},{default:m(()=>[c(O,{size:20},{default:m(()=>[c(f,{onClick:e},{default:m(()=>[c(s,{icon:"split",size:20}),x(" 创建控件 ")]),_:1}),c(f,{onClick:t},{default:m(()=>[c(s,{icon:"delete-five",size:20}),x(" 销毁控件 ")]),_:1})]),_:1})]),_:1})}}});export{$ as default};