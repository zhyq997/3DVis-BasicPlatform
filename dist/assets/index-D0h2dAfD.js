import{m,_ as X}from"./entry/index-BNp4bmLj-1732066199007.js";import{u as z}from"./use-lifecycle-CyVQVRUS.js";import{d as I,f as g,a7 as s,Z as U,a8 as $,a9 as n,$ as o,k as a,G as _,a2 as B,a3 as F}from"./vue-D4H2Ux2Y.js";import"./antd-DgCI0x_J.js";let t,l,h;const O={scene:{center:{lat:31.840106,lng:117.216768,alt:554,heading:0,pitch:-59},orderIndependentTranslucency:!1,contextOptions:{webgl:{alpha:!0}},showMoon:!1,showSkyBox:!1,showSkyAtmosphere:!1,fog:!1,globe:{depthTestAgainstTerrain:!0}}};function j(e){t=e,t.container.style.backgroundColor="#546a53",N()}function M(){E(),t=null}function N(){l=new m.thing.Underground({alpha:.5}),t.addThing(l);const e=new m.layer.TilesetLayer({name:"地下管网",url:"//data.mars3d.cn/3dtiles/max-piping/tileset.json",position:{lng:117.215457,lat:31.843363,alt:-3.6},rotation:{z:336.7},maximumScreenSpaceError:2,highlight:{type:"click",color:"#00FFFF"},popup:"all",center:{lat:31.838081,lng:117.216584,alt:406,heading:1,pitch:-34},flyTo:!0});t.addLayer(e),h=new m.layer.GraphicLayer,t.addLayer(h)}function E(){h.clear(),l.remove()}function y(){t.setCameraView({y:31.840106,x:117.216768,z:554.36,heading:0,pitch:-59.3,roll:0})}function b(){t.setCameraView({y:31.841263,x:117.21538,z:-13.35,heading:40.6,pitch:15.7,roll:.1})}function k(){t.setCameraView({y:31.838908,x:117.217486,z:-63.75,heading:349.2,pitch:18.2,roll:0})}function v(e){l.alpha=e}function w(e){l.enabled=e}const G=Object.freeze(Object.defineProperty({__proto__:null,centerAtDX1:y,centerAtDX2:b,centerAtDX3:k,chkUnderground:w,get map(){return t},mapOptions:O,onMounted:j,onUnmounted:M,opacityChange:v},Symbol.toStringTag,{value:"Module"})),f=e=>(B("data-v-afde36b8"),e=e(),F(),e),P={class:"f-mb"},W=f(()=>o("span",{class:"mars-pannel-item-label"},"状态控制:",-1)),Z=f(()=>o("span",{class:"pannel_label"},"开启地下模式",-1)),q={class:"f-mb"},H=f(()=>o("span",{class:"mars-pannel-item-label"},"地表透明度:",-1)),J=I({__name:"index",setup(e){z(G);const r=g(.5),i=g(!0),x=()=>{y()},C=()=>{b()},S=()=>{k()},A=()=>{v(r.value)},L=()=>{w(i.value)};return(K,c)=>{const T=s("mars-switch"),d=s("a-space"),V=s("mars-slider"),p=s("mars-button"),D=s("mars-dialog");return U(),$(D,{title:"地表透明",right:"10",top:"60",width:"340"},{default:n(()=>[o("div",P,[a(d,null,{default:n(()=>[W,a(T,{class:"switch_btn",onChange:L,checked:i.value,"onUpdate:checked":c[0]||(c[0]=u=>i.value=u)},null,8,["checked"]),Z]),_:1})]),o("div",q,[a(d,null,{default:n(()=>[H,a(V,{onChange:A,value:r.value,"onUpdate:value":c[1]||(c[1]=u=>r.value=u),min:0,max:1,step:.1},null,8,["value"])]),_:1})]),o("div",null,[a(d,null,{default:n(()=>[a(p,{class:"control_btn",onClick:x},{default:n(()=>[_("俯视视角")]),_:1}),a(p,{class:"control_btn",onClick:C},{default:n(()=>[_("地下视角1")]),_:1}),a(p,{class:"control_btn",onClick:S},{default:n(()=>[_("地下视角2")]),_:1})]),_:1})])]),_:1})}}}),te=X(J,[["__scopeId","data-v-afde36b8"]]);export{te as default};