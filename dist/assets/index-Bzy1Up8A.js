import{d as Z,r as Ee,f as L,o as N,a6 as V,a7 as k,Z as c,_ as S,$ as m,k as d,a9 as r,G as u,a8 as g,ab as f,a1 as A,a0 as z,B as W,F as K,a2 as Ce,a3 as Se}from"./vue-D4H2Ux2Y.js";import{m as l,u as Te,e as B,$ as R,_ as Pe}from"./entry/index-BNp4bmLj-1732066199007.js";import{u as De}from"./use-lifecycle-CyVQVRUS.js";import"./antd-DgCI0x_J.js";let T,y;const H=new l.BaseClass;function xe(h){T=h,y=new l.layer.GraphicLayer,T.addLayer(y)}function Le(){T=null,G()}function G(){y.clear()}function q(){y.startDraw({type:"coneVisibility",style:{radius:200,addHeight:1}})}function Q(){y.startDraw({type:"pointVisibility",style:{radius:200,addHeight:1}})}function Ge(h){y.clear(),y.enabledEvent=!1;const P=[119.474745,28.436478,119.484204,28.444144],v=l.PolyUtil.getGridPoints(P,h,140);for(let s=0;s<v.points.length;++s){const n=v.points[s],D=s+1,o=new l.graphic.PointVisibility({position:n,style:{radius:100},attr:{index:D}});y.addGraphic(o),T.viewer.entities.add({position:new Cesium.CallbackProperty(()=>o.position,!1),point:{pixelSize:10}})}return y.enabledEvent=!0,v.points.length}function Oe(h){return y.getGraphicById(h)}const Me=Object.freeze(Object.defineProperty({__proto__:null,addRandomGraphicByCount:Ge,clear:G,eventTarget:H,getGraphic:Oe,get graphicLayer(){return y},get map(){return T},onMounted:xe,onUnmounted:Le,startDrawGraphic:q,startDrawGraphic2:Q},Symbol.toStringTag,{value:"Module"})),O=h=>(Ce("data-v-fea33aed"),h=h(),Se(),h),Ue={class:"f-mb"},$e=O(()=>m("span",{class:"mars-pannel-item-label"},"图层状态:",-1)),Ne={key:0,class:"mars-pannel-item-label",title:"不是所有矢量数据均支持修改全局透明度"},ze={key:0,class:"f-mb"},Be=O(()=>m("span",{class:"mars-pannel-item-label"},"图层交互:",-1)),Re={key:1,class:"f-mb"},He=O(()=>m("span",{class:"mars-pannel-item-label"},"数据维护:",-1)),Ie={class:"data-edit"},Je={class:"f-mb f-pt"},je={class:"f-mb"},Fe=O(()=>m("span",{class:"mars-pannel-item-label"},"数据导出:",-1)),Ve={class:"f-mb data-list"},Ae=Z({__name:"graphic-layer-state",props:{interaction:{type:Boolean,default:!0},enabledDraw:{type:Boolean,default:!0},enabledTable:{type:Boolean,default:!0},drawLabel1:{default:"图上标绘"},drawLabel2:{default:void 0},defaultCount:{default:100},customEditor:{default:""}},emits:["onStartEditor","onStopEditor"],setup(h,{expose:P,emit:v}){De(Me);const s=h,n=Ee({enabledShowHide:!0,enabledPopup:!0,enabledTooltip:!1,enabledRightMenu:!1,enabledOpacity:!0,opacity:1,enabledEdit:!0,hasEdit:!1,hasTable:!1,count:s.defaultCount,isDrawing:!1}),D=L(5);P({addTableData(e){w.value=[],_.value=[];const a=e.graphics;for(let t=a.length-1;t>=0;t--){const i=a[t];i.isPrivate||(w.value.push({key:i.id,name:x(i)}),i.show&&_.value.push(i.id))}}}),N(()=>{H&&H.on("defuatData",e=>{n.opacity=1,n.enabledShowHide=e.enabledShowHide,n.enabledPopup=e.enabledPopup,n.enabledTooltip=e.enabledTooltip,n.enabledRightMenu=e.enabledRightMenu}),setTimeout(()=>{const e=o();if(e){n.enabledShowHide=e.show,n.enabledPopup=e.hasPopup(),n.enabledTooltip=e.hasTooltip(),n.enabledRightMenu=e.hasContextMenu(),n.hasEdit=e.hasEdit;const a=e.getGraphics();if(a.length>0){const t=a[a.length-1];n.enabledOpacity=t.hasOpacity,n.enabledEdit=t.hasEdit}n.hasTable=a.length>0,e.on([l.EventType.drawCreated,l.EventType.addGraphic,l.EventType.removeGraphic],function(t){n.isDrawing=e.isDrawing})}},500)});function o(){return y}const X=e=>{D.value=e.pageSize},Y=()=>{const e=o();e.hasEdit=n.hasEdit,n.enabledPopup=!n.hasEdit,J()},ee=()=>{const e=o();e.opacity=n.opacity},I=()=>{o().flyTo({scale:1.2})},te=()=>{s.customEditor?E("onStopEditor"):C("graphic-editor"),q();const e=o();n.isDrawing=e==null?void 0:e.isDrawing},ae=()=>{s.customEditor?E("onStopEditor"):C("graphic-editor"),Q();const e=o();n.isDrawing=e==null?void 0:e.isDrawing},ne=()=>{const e=o();e.clearDrawing(),n.isDrawing=e==null?void 0:e.isDrawing},ie=()=>{const e=o();e.show=n.enabledShowHide},J=()=>{const e=o();n.enabledPopup?le():e.unbindPopup()},oe=()=>{const e=o();n.enabledTooltip?e.bindTooltip(function(a){var i;const t=j(a);return t.类型=(i=a.graphic)==null?void 0:i.type,t.来源="我是layer上绑定的Toolip",t.备注="我支持鼠标移入交互",l.Util.getTemplateHtml({title:"矢量图层",template:"all",attr:t})},{pointerEvents:!1}):e.unbindTooltip()},re=()=>{const e=o();n.enabledRightMenu?se():e.unbindContextMenu(!0)};function le(){o().bindPopup(function(a){var i;const t=j(a);return t.类型=(i=a.graphic)==null?void 0:i.type,t.来源="我是layer上绑定的Popup",t.备注="我支持鼠标交互",l.Util.getTemplateHtml({title:"矢量图层",template:"all",attr:t})},{pointerEvents:!0})}function j(e){var t;if((t=e==null?void 0:e.graphic)!=null&&t.attr)return e.graphic.attr;if(!e.czmObject)return{};let a=e.czmObject._attr||e.czmObject.properties||e.czmObject.attribute;return a&&a.type&&a.attr&&(a=a.attr),a!=null?a:{}}function se(){const e=o();e.bindContextMenu([{text:"开始编辑对象",icon:"fa fa-edit",show:function(a){const t=a.graphic;return!t||!t.hasEdit?!1:!t.isEditing},callback:a=>{const t=a.graphic;if(!t)return!1;t&&e.startEditing(t)}},{text:"停止编辑对象",icon:"fa fa-edit",show:function(a){const t=a.graphic;return!t||!t.hasEdit?!1:t.isEditing},callback:a=>{const t=a.graphic;if(!t)return!1;t&&t.stopEditing()}},{text:"删除对象",icon:"fa fa-trash-o",show:a=>{const t=a.graphic;return!(!t||t.isDestroy)},callback:a=>{const t=a.graphic;if(!t)return;const i=t.parent;e.removeGraphic(t),i&&e.removeGraphic(i)}},{text:"计算长度",icon:"fa fa-medium",show:function(a){const t=a.graphic;return t?t.type==="polyline"||t.type==="polylineP"||t.type==="curve"||t.type==="curveP"||t.type==="polylineVolume"||t.type==="polylineVolumeP"||t.type==="corridor"||t.type==="corridorP"||t.type==="wall"||t.type==="wallP":!1},callback:a=>{const t=a.graphic,i=l.MeasureUtil.formatDistance(t.distance);B("该对象的长度为:"+i)}},{text:"计算周长",icon:"fa fa-medium",show:function(a){const t=a.graphic;return t?t.type==="circle"||t.type==="circleP"||t.type==="rectangle"||t.type==="rectangleP"||t.type==="polygon"||t.type==="polygonP":!1},callback:a=>{const t=a.graphic,i=l.MeasureUtil.formatDistance(t.distance);B("该对象的周长为:"+i)}},{text:"计算面积",icon:"fa fa-reorder",show:function(a){var i;const t=a.graphic;return t?t.type==="circle"||t.type==="circleP"||t.type==="rectangle"||t.type==="rectangleP"||(t.type==="polygon"||t.type==="polygonP"||t.type==="wall"||t.type==="scrollWall"||t.type==="water")&&((i=t.positionsShow)==null?void 0:i.length)>2:!1},callback:a=>{const t=a.graphic,i=l.MeasureUtil.formatArea(t.area);B("该对象的面积为:"+i)}}])}const ce=()=>{const e=o();e.enabledEvent=!1,e.clear(),G&&G(),e.enabledEvent=!0,n.isDrawing=!1,w.value=[],_.value=[],s.customEditor?E("onStopEditor"):C("graphic-editor")},de=()=>{const e=o();if(e.length===0){R("当前没有标注任何数据，无需保存！");return}const a=e.toJSON();l.Util.downloadFile("矢量数据构造参数.json",JSON.stringify(a))},pe=()=>{const e=o();if(e.length===0){R("当前没有标注任何数据，无需保存！");return}const a=e.toGeoJSON();l.Util.downloadFile("矢量数据GeoJSON.json",JSON.stringify(a))};L([]);const{activate:ue,disable:C,isActivate:Ke,updateWidget:he}=Te();N(()=>{const e=o();e.on(l.EventType.drawCreated,function(a){(n.hasEdit||s.customEditor)&&U(a.graphic)}),e.on(l.EventType.editStart,a=>{setTimeout(()=>{U(a.graphic)},150)}),e.on([l.EventType.editMovePoint,l.EventType.editStyle,l.EventType.editRemovePoint],function(a){he("graphic-editor",{data:{graphic:V(a.graphic)}})}),e.on([l.EventType.editStop,l.EventType.removeGraphic],function(a){setTimeout(()=>{e.isEditing||(s.customEditor?E("onStopEditor"):C("graphic-editor"))},100)})});let M="";const U=e=>{if(!e.isDestroy){if(s.customEditor===e.type){C("graphic-editor"),E("onStartEditor",{graphicId:e.id,graphicName:x(e)});return}E("onStopEditor"),e._conventStyleJson||(e.style=e.toJSON().style,e._conventStyleJson=!0),M!==e.id?(ue({name:"graphic-editor",data:{graphic:V(e)}}),M=e.id):M=""}},w=L([]),_=L([]),fe=[{title:"名称",dataIndex:"name",key:"name"},{title:"操作",dataIndex:"caozuo",key:"caozuo"}],ye={hideSelectAll:!0,hideDefaultSelections:!0,selectedRowKeys:_,onChange:e=>{_.value=e},onSelect:(e,a)=>{const i=o().getGraphicById(e.key);if(i){if(i.isEditing){R("编辑状态不允许修改show属性");return}i.show=a}}};N(()=>{const e=o();ge(e),e.on(l.EventType.drawCreated,function(a){const t=a.graphic;t.isPrivate||(w.value.push({key:t.id,name:x(t)}),_.value.push(t.id))}),e.on(l.EventType.removeGraphic,function(a){const t=a.graphic.id,i=w.value.findIndex(b=>b.key===t);i!==-1&&w.value.splice(i,1)})});function ge(e){const a=e.graphics;for(let t=a.length-1;t>=0;t--){const i=a[t];i.isPrivate||(w.value.push({key:i.id,name:x(i)}),i.show&&_.value.push(i.id))}}function x(e){var a,t;return e.name?`${e.type} - ${e.name}`:e.attr.index?`${e.type} - ${e.attr.index}`:e.attr.remark?`${e.type} - ${e.attr.remark}`:(t=(a=e==null?void 0:e.style)==null?void 0:a.label)!=null&&t.text&&e.style.label.text!=="0"?`${e.type} - ${e.style.label.text}`:`${e.type} - ${e.name||"未命名"}`}const me=e=>({onClick:()=>{o().getGraphicById(e.key).flyTo()}}),E=v;function be(e){const t=o().getGraphicById(e.key);U(t)}const we=e=>{const t=o().getGraphicById(e.key);t&&t.remove(!0)};return(e,a)=>{const t=k("a-checkbox"),i=k("mars-button"),b=k("a-space"),_e=k("mars-slider"),F=k("mars-icon"),ke=k("mars-table");return c(),S(K,null,[m("div",Ue,[m("div",null,[d(b,null,{default:r(()=>[$e,d(t,{checked:n.enabledShowHide,"onUpdate:checked":a[0]||(a[0]=p=>n.enabledShowHide=p),onChange:ie,title:"显示隐藏状态"},{default:r(()=>[u("显示")]),_:1},8,["checked"]),n.enabledOpacity?f("",!0):(c(),g(i,{key:0,onClick:I,title:"视角定位",size:"small"},{default:r(()=>[u(" 定位 ")]),_:1}))]),_:1})]),m("div",null,[d(b,null,{default:r(()=>[n.enabledOpacity?(c(),S("span",Ne,"透明度:")):f("",!0),n.enabledOpacity?(c(),g(_e,{key:1,value:n.opacity,"onUpdate:value":a[1]||(a[1]=p=>n.opacity=p),min:0,max:1,step:.1,onChange:ee},null,8,["value"])):f("",!0),n.enabledOpacity?(c(),g(i,{key:2,onClick:I,title:"视角定位",size:"small"},{default:r(()=>[u(" 定位 ")]),_:1})):f("",!0)]),_:1})])]),s.interaction?(c(),S("div",ze,[d(b,null,{default:r(()=>[Be,d(t,{checked:n.enabledPopup,"onUpdate:checked":a[2]||(a[2]=p=>n.enabledPopup=p),onChange:J,title:"是否绑定Popup鼠标单击弹窗"},{default:r(()=>[u("单击Popup")]),_:1},8,["checked"]),d(t,{checked:n.enabledTooltip,"onUpdate:checked":a[3]||(a[3]=p=>n.enabledTooltip=p),onChange:oe,title:"是否绑定Tooltip鼠标移入弹窗"},{default:r(()=>[u("移入Tooltip")]),_:1},8,["checked"])]),_:1}),d(t,{class:"rightMenu-checkbox f-pt",checked:n.enabledRightMenu,"onUpdate:checked":a[4]||(a[4]=p=>n.enabledRightMenu=p),onChange:re,title:"是否绑定右键菜单"},{default:r(()=>[u("右键菜单")]),_:1},8,["checked"])])):f("",!0),s.enabledDraw?(c(),S("div",Re,[d(b,null,{default:r(()=>[He,n.isDrawing?f("",!0):(c(),g(i,{key:0,class:A(s.drawLabel2&&!n.isDrawing?"data-maintain-two":"data-maintain"),onClick:te},{default:r(()=>[u(z(s.drawLabel1),1)]),_:1},8,["class"])),s.drawLabel2&&!n.isDrawing?(c(),g(i,{key:1,class:A(s.drawLabel2&&!n.isDrawing?"data-maintain-two":"data-maintain"),onClick:ae},{default:r(()=>[u(z(s.drawLabel2),1)]),_:1},8,["class"])):f("",!0),n.isDrawing?(c(),g(i,{key:2,class:"data-maintain",onClick:ne},{default:r(()=>[u("取消绘制")]),_:1})):f("",!0)]),_:1})])):f("",!0),m("div",Ie,[s.interaction&&n.enabledEdit?(c(),g(t,{key:0,checked:n.hasEdit,"onUpdate:checked":a[5]||(a[5]=p=>n.hasEdit=p),onChange:Y,title:"是否单击进行编辑状态"},{default:r(()=>[u("是否编辑")]),_:1},8,["checked"])):f("",!0),e.enabledTable?(c(),g(t,{key:1,checked:n.hasTable,"onUpdate:checked":a[6]||(a[6]=p=>n.hasTable=p),title:"显示图层内所有矢量数据列表"},{default:r(()=>[u("显示列表")]),_:1},8,["checked"])):f("",!0)]),m("div",Je,[d(b,null,{default:r(()=>[d(i,{onClick:ce,danger:""},{default:r(()=>[u(" 清除 ")]),_:1})]),_:1})]),m("div",je,[d(b,null,{default:r(()=>[Fe,d(i,{onClick:pe,title:"保存GeoJSON"},{default:r(()=>[u(" 导出GeoJSON ")]),_:1}),d(i,{onClick:de,title:"导出构造参数Json"},{default:r(()=>[u(" 导出构造JSON ")]),_:1})]),_:1})]),m("div",Ve,[e.enabledTable&&n.hasTable?(c(),g(ke,{key:0,class:"mars-noHeader-table",size:"small",pagination:{pageSize:D.value,simple:!0},customRow:me,"row-selection":ye,dataSource:w.value,columns:fe,scroll:{y:400},onChange:X,showHeader:!1,bordered:!1},{bodyCell:r(({column:p,record:$})=>[p.key==="caozuo"?(c(),g(b,{key:0},{default:r(()=>[d(F,{title:"修改矢量数据样式",icon:"editor",color:"#f2f2f2",class:"icon-vertical-a",onClick:W(ve=>be($),["stop"])},null,8,["onClick"]),d(F,{title:"删除矢量数据",icon:"delete",color:"#F96868",class:"icon-vertical-a",onClick:W(ve=>we($),["stop"])},null,8,["onClick"])]),_:2},1024)):(c(),S(K,{key:1},[u(z($.name),1)],64))]),_:1},8,["pagination","dataSource"])):f("",!0)])],64)}}}),We=Pe(Ae,[["__scopeId","data-v-fea33aed"]]),Ye=Z({__name:"index",setup(h){return(P,v)=>{const s=k("mars-dialog");return c(),g(s,{right:"10",top:"60",width:"360"},{default:r(()=>[d(We,{drawLabel1:"椎形",drawLabel2:"圆形",defaultCount:10,interaction:!1})]),_:1})}}});export{Ye as default};