var J=(t,o,s)=>new Promise((c,a)=>{var f=i=>{try{y(s.next(i))}catch(h){a(h)}},p=i=>{try{y(s.throw(i))}catch(h){a(h)}},y=i=>i.done?c(i.value):Promise.resolve(i.value).then(f,p);y((s=s.apply(t,o)).next())});import{m as r,u as ie,_ as K}from"./entry/index-BNp4bmLj-1732066199007.js";import"./antd-DgCI0x_J.js";import{u as se}from"./use-lifecycle-CyVQVRUS.js";import{d as Z,r as re,f as _,o as z,a6 as j,a7 as P,Z as T,_ as F,$ as S,k as v,a9 as g,G as b,a8 as O,ab as M,F as le,a2 as q,a3 as Q}from"./vue-D4H2Ux2Y.js";let H,u;function ce(t){H=t,u=new r.layer.GraphicLayer,H.addLayer(u),u.on(r.EventType.click,function(o){}),ee(),te()}function de(){H=null,U()}let m;const N="data/河流水面.json";function C(){r.Util.fetchJson({url:N}).then(t=>{let o=[];t.features.forEach(s=>{const c=s.attributes.RASTERVALU,a=s.geometry.x,f=s.geometry.y;o.push([a,f,c])}),m=new r.graphic.DynamicRiver({positions:o,style:{image:"./img/textures/poly-rivers.png",width:35,speed:10,height:60}}),u.addGraphic(m)})}let B=!1;function ue(){B=!1,u.clear(),u.enabledEvent=!1,r.Util.fetchJson({url:N}).then(t=>{const o=[];t.features.forEach(p=>{const y=p.attributes.RASTERVALU,i=p.geometry.x,h=p.geometry.y;o.push([i,h,y])});const s=Math.ceil(o.length/50),c=[];for(let p=0;p<o.length;p+=s)c.push(o.slice(p,p+s));let a=0;function f(){if(B||a>=c.length)return;const p=c[a],y=5+600*Math.sin(a/50*(Math.PI/2)),i=2+10*Math.sin(a/50*(Math.PI/2)),h=new r.graphic.DynamicRiver({positions:p,style:{image:"./img/textures/poly-rivers.png",width:y,speed:10,height:i}});u.addGraphic(h),a++,V(h,i,120),setTimeout(f,500)}f()})}let W;function pe(){W=new r.ColorRamp({steps:[0,30],colors:["rgb(33, 113, 181)","rgb(8, 48, 107)"]}),u.clear(),u.enabledEvent=!1,r.Util.fetchJson({url:N}).then(t=>J(this,null,function*(){const o=[];t.features.forEach(i=>{const h=i.attributes.RASTERVALU,w=i.geometry.x,k=i.geometry.y;o.push([w,k,h])});const s=3,c=[];for(let i=0;i<o.length;i+=s)c.push(o.slice(i,i+s));let a=[];function f(){c.forEach(i=>{const h=i.reduce((w,k)=>w+k[2],0)/i.length;a.push({positions:i,style:{color:W.getColor(h)},attr:{depth:h}})})}f();const p=[],y=new r.graphic.PolygonCombine({instances:a,popup:"深度:{depth}米"});u.addGraphic(y),yield y.readyPromise,p.length>3&&p.shift().remove(),p.push(y)}))}function fe(){}function he(t){u.clear(),u.enabledEvent=!1;const o=[116.984788,31.625909,117.484068,32.021504],s=r.PolyUtil.getGridPoints(o,t,30);for(let c=0;c<s.points.length;++c){const a=s.points[c],f=c+1,p=r.PointUtil.getPositionByDirectionAndLen(a,225,s.radius),y=r.PointUtil.getPositionByDirectionAndLen(a,315,s.radius),i=new r.graphic.DynamicRiver({positions:[p,a,y],style:{image:"./img/textures/poly-rivers.png",width:280,height:30,speed:10},attr:{index:f}});u.addGraphic(i)}return u.enabledEvent=!0,s.points.length}function ye(){u.startDraw({type:"dynamicRiver",style:{image:"./img/textures/poly-rivers.png",width:280,height:30,speed:10}})}function X(t){return m=u.getGraphicById(t),m}function ge(t){m&&(m.width=t)}function me(t){m&&(m.height=t)}function ve(t){m&&(m.speed=t)}let D=!0;function V(t,o,s){if(t){if(!D){globalMsg("上次操作未完成");return}t.setOffsetHeight(o,s)}}function be(){if(m){if(!D){globalMsg("上次操作未完成");return}m.setOffsetHeight(30,5),Y()}}function Ee(){if(m){if(!D){globalMsg("上次操作未完成");return}m.setOffsetHeight(-30,5),Y()}}function Y(){setTimeout(()=>{D=!0},2e3),D=!1}function U(){u.clear(),B=!0}function ee(){u.bindPopup(function(t){const o=t.graphic.attr||{};return o.类型=t.graphic.type,o.来源="我是layer上绑定的Popup",o.备注="我支持鼠标交互",r.Util.getTemplateHtml({title:"矢量图层",template:"all",attr:o})})}function te(){u.bindContextMenu([{text:"删除对象",icon:"fa fa-trash-o",show:t=>{const o=t.graphic;return!(!o||o.isDestroy)},callback:t=>{const o=t.graphic;if(!o)return;const s=o.parent;u.removeGraphic(o),s&&u.removeGraphic(s)}},{text:"抬深",show:t=>{const o=t.graphic;return!(!o||o.isDestroy)},callback:t=>{V(1,0)}}])}const _e=Object.freeze(Object.defineProperty({__proto__:null,addDemoGraphic1:C,addDemoGraphic2:ue,addDemoGraphic3:pe,addHeight:be,addRandomGraphicByCount:he,addRiver:fe,addSlowHeight:V,bindLayerContextMenu:te,bindLayerPopup:ee,clear:U,getGraphic:X,get graphicLayer(){return u},heightChange:me,lowerHeight:Ee,get map(){return H},onMounted:ce,onUnmounted:de,speedChange:ve,startDrawGraphic:ye,widthChange:ge},Symbol.toStringTag,{value:"Module"})),we=t=>(q("data-v-820d41a6"),t=t(),Q(),t),ke={class:"f-mb"},xe=we(()=>S("span",{class:"mars-pannel-item-label"},"图层状态:",-1)),Ce={key:0,class:"mars-pannel-item-label",title:"不是所有矢量数据均支持修改全局透明度"},Se={class:"f-mb f-pt"},Te=Z({__name:"graphic-layer-state",props:{interaction:{type:Boolean,default:!0},enabledDraw:{type:Boolean,default:!0},enabledTable:{type:Boolean,default:!0},drawLabel1:{default:"图上标绘"},drawLabel2:{default:void 0},defaultCount:{default:100},customEditor:{default:""}},emits:["onStartEditor","onStopEditor"],setup(t,{expose:o,emit:s}){se(_e);const c=t,a=re({enabledShowHide:!0,enabledPopup:!0,enabledTooltip:!1,enabledRightMenu:!1,enabledOpacity:!0,opacity:1,enabledEdit:!0,hasEdit:!1,hasTable:!1,count:c.defaultCount,isDrawing:!1});_(5),o({addTableData(e){x.value=[],G.value=[];const n=e.graphics;for(let d=n.length-1;d>=0;d--){const l=n[d];l.isPrivate||(x.value.push({key:l.id,name:R(l)}),l.show&&G.value.push(l.id))}}}),z(()=>{setTimeout(()=>{const e=f();if(e){a.enabledShowHide=e.show,a.enabledPopup=e.hasPopup(),a.enabledTooltip=e.hasTooltip(),a.enabledRightMenu=e.hasContextMenu(),a.hasEdit=e.hasEdit;const n=e.getGraphics();if(n.length>0){const d=n[n.length-1];a.enabledOpacity=d.hasOpacity,a.enabledEdit=d.hasEdit}a.hasTable=n.length>0,e.on([r.EventType.drawCreated,r.EventType.addGraphic,r.EventType.removeGraphic],function(d){a.isDrawing=e.isDrawing})}},500)});function f(){return u}const p=()=>{const e=f();e.opacity=a.opacity},y=()=>{f().flyTo({scale:1.2})},i=()=>{const e=f();e.show=a.enabledShowHide},h=()=>{const e=f();e.enabledEvent=!1,e.clear(),U&&U(),e.enabledEvent=!0,a.isDrawing=!1,x.value=[],G.value=[],c.customEditor?L("onStopEditor"):k("graphic-editor")};_([]);const{activate:w,disable:k,isActivate:Re,updateWidget:ne}=ie();z(()=>{const e=f();e.on(r.EventType.drawCreated,function(n){(a.hasEdit||c.customEditor)&&A(n.graphic)}),e.on(r.EventType.editStart,n=>{setTimeout(()=>{A(n.graphic)},150)}),e.on([r.EventType.editMovePoint,r.EventType.editStyle,r.EventType.editRemovePoint],function(n){ne("graphic-editor",{data:{graphic:j(n.graphic)}})}),e.on([r.EventType.editStop,r.EventType.removeGraphic],function(n){setTimeout(()=>{e.isEditing||(c.customEditor?L("onStopEditor"):k("graphic-editor"))},100)})});let I="";const A=e=>{if(!e.isDestroy){if(c.customEditor===e.type){k("graphic-editor"),L("onStartEditor",{graphicId:e.id,graphicName:R(e)});return}L("onStopEditor"),e._conventStyleJson||(e.style=e.toJSON().style,e._conventStyleJson=!0),I!==e.id?(w({name:"graphic-editor",data:{graphic:j(e)}}),I=e.id):I=""}},x=_([]),G=_([]);z(()=>{const e=f();ae(e),e.on(r.EventType.drawCreated,function(n){const d=n.graphic;d.isPrivate||(x.value.push({key:d.id,name:R(d)}),G.value.push(d.id))}),e.on(r.EventType.removeGraphic,function(n){const d=n.graphic.id,l=x.value.findIndex($=>$.key===d);l!==-1&&x.value.splice(l,1)})});function ae(e){const n=e.graphics;for(let d=n.length-1;d>=0;d--){const l=n[d];l.isPrivate||(x.value.push({key:l.id,name:R(l)}),l.show&&G.value.push(l.id))}}function R(e){var n,d;return e.name?`${e.type} - ${e.name}`:e.attr.index?`${e.type} - ${e.attr.index}`:e.attr.remark?`${e.type} - ${e.attr.remark}`:(d=(n=e==null?void 0:e.style)==null?void 0:n.label)!=null&&d.text&&e.style.label.text!=="0"?`${e.type} - ${e.style.label.text}`:`${e.type} - ${e.name||"未命名"}`}const L=s;return(e,n)=>{const d=P("a-checkbox"),l=P("mars-button"),$=P("a-space"),oe=P("mars-slider");return T(),F(le,null,[S("div",ke,[S("div",null,[v($,null,{default:g(()=>[xe,v(d,{checked:a.enabledShowHide,"onUpdate:checked":n[0]||(n[0]=E=>a.enabledShowHide=E),onChange:i,title:"显示隐藏状态"},{default:g(()=>[b("显示")]),_:1},8,["checked"]),a.enabledOpacity?M("",!0):(T(),O(l,{key:0,onClick:y,title:"视角定位",size:"small"},{default:g(()=>[b(" 定位 ")]),_:1}))]),_:1})]),S("div",null,[v($,null,{default:g(()=>[a.enabledOpacity?(T(),F("span",Ce,"透明度:")):M("",!0),a.enabledOpacity?(T(),O(oe,{key:1,value:a.opacity,"onUpdate:value":n[1]||(n[1]=E=>a.opacity=E),min:0,max:1,step:.1,onChange:p},null,8,["value"])):M("",!0),a.enabledOpacity?(T(),O(l,{key:2,onClick:y,title:"视角定位",size:"small"},{default:g(()=>[b(" 定位 ")]),_:1})):M("",!0)]),_:1})]),S("div",null,[v(l,{onClick:n[2]||(n[2]=E=>void 0),title:"视角定位",size:"small"},{default:g(()=>[b(" 5年一遇 ")]),_:1}),v(l,{onClick:n[3]||(n[3]=E=>C()),title:"视角定位",size:"small"},{default:g(()=>[b(" 10年一遇 ")]),_:1}),v(l,{onClick:n[4]||(n[4]=E=>C()),title:"视角定位",size:"small"},{default:g(()=>[b(" 20年一遇 ")]),_:1}),v(l,{onClick:n[5]||(n[5]=E=>C()),title:"视角定位",size:"small"},{default:g(()=>[b(" 50年一遇 ")]),_:1}),v(l,{onClick:n[6]||(n[6]=E=>C()),title:"视角定位",size:"small"},{default:g(()=>[b(" 100年一遇 ")]),_:1}),v(l,{onClick:n[7]||(n[7]=E=>C()),title:"视角定位",size:"small"},{default:g(()=>[b(" 1000年一遇 ")]),_:1}),v(l,{onClick:n[8]||(n[8]=E=>C()),title:"视角定位",size:"small"},{default:g(()=>[b(" 溃坝洪水 ")]),_:1})])]),S("div",Se,[v($,null,{default:g(()=>[v(l,{onClick:h,danger:""},{default:g(()=>[b(" 清除 ")]),_:1})]),_:1})])],64)}}}),Ge=K(Te,[["__scopeId","data-v-820d41a6"]]),$e=t=>(q("data-v-7b60a8a9"),t=t(),Q(),t),Pe=$e(()=>S("span",{style:{color:"#ccc"}},"提示:沿水流方向选点，直线也多标点",-1)),De=Z({__name:"index",setup(t){_(["1","2"]);const o=_(""),s=_(!1);function c(i){const h=X(i.graphicId);o.value=i.graphicName,f.value=h.width,p.value=h.height,y.value=h.speed,s.value=!0}function a(){s.value=!1}const f=_(280),p=_(30),y=_(10);return(i,h)=>{const w=P("mars-dialog");return T(),O(w,{right:"10",top:"60",width:"330"},{default:g(()=>[v(Ge,{defaultCount:100,customEditor:"dynamicRiver",onOnStartEditor:c,onOnStopEditor:a}),Pe]),_:1})}}}),Ie=K(De,[["__scopeId","data-v-7b60a8a9"]]);export{Ie as default};