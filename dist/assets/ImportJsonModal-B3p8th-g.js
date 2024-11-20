var y=Object.defineProperty,I=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var C=(e,o,a)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,c=(e,o)=>{for(var a in o||(o={}))E.call(o,a)&&C(e,a,o[a]);if(h)for(var a of h(o))U.call(o,a)&&C(e,a,o[a]);return e},i=(e,o)=>I(e,M(o));import{u as j}from"./useFormDesignState-DJyajJ-E.js";import{f as k,g as w}from"./index-C5Ls9rd3.js";import{C as D,M as F}from"./index-CL--Hxdg.js";import{w as J,_ as S}from"./entry/index-BNp4bmLj-1732066199007.js";import{a6 as g,M as O}from"./antd-DgCI0x_J.js";import{d as B,r as N,I as $,a7 as r,Z as x,a8 as T,a9 as n,k as l,G as u,$ as b,a2 as V,a3 as A}from"./vue-D4H2Ux2Y.js";import"./useWindowSizeFn-Wb2xO1po.js";const K=B({name:"ImportJsonModal",components:{CodeEditor:D,Upload:g,Modal:O},setup(){const{createMessage:e}=J(),o=N({visible:!1,json:`{
  "schemas": [
    {
      "component": "input",
      "label": "输入框",
      "field": "input_2",
      "span": 24,
      "props": {
        "type": "text"
      }
    }
  ],
  "layout": "horizontal",
  "labelLayout": "flex",
  "labelWidth": 100,
  "labelCol": {},
  "wrapperCol": {}
}`,jsonData:{schemas:{},config:{}},handleSetSelectItem:null}),{formDesignMethods:a}=j(),p=()=>{o.visible=!1},m=()=>{o.visible=!0},d=()=>{try{const s=JSON.parse(o.json);s.schemas&&k(s.schemas,t=>{w(t)}),a.setFormConfig(i(c({},s),{activeKey:1,currentItem:{component:""}})),p(),e.success("导入成功")}catch(s){e.error("导入失败，数据格式不对")}};return i(c({handleImportJson:d,beforeUpload:s=>{const t=new FileReader;return t.readAsText(s),t.onload=function(){o.json=this.result,d()},!1},handleCancel:p,showModal:m},$(o)),{MODE:F})}}),L=e=>(V("data-v-62ebfefa"),e=e(),A(),e),R=L(()=>b("p",{class:"hint-box"},"导入格式如下:",-1)),z={class:"v-json-box"};function G(e,o,a,p,m,d){const f=r("CodeEditor"),s=r("a-button"),t=r("Upload"),_=r("Modal");return x(),T(_,{title:"JSON数据",open:e.visible,onOk:e.handleImportJson,onCancel:e.handleCancel,cancelText:"关闭",destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:850},{footer:n(()=>[l(s,{onClick:e.handleCancel},{default:n(()=>[u("取消")]),_:1},8,["onClick"]),l(t,{class:"upload-button",beforeUpload:e.beforeUpload,showUploadList:!1,accept:"application/json"},{default:n(()=>[l(s,{type:"primary"},{default:n(()=>[u("导入json文件")]),_:1})]),_:1},8,["beforeUpload"]),l(s,{type:"primary",onClick:e.handleImportJson},{default:n(()=>[u("确定")]),_:1},8,["onClick"])]),default:n(()=>[R,b("div",z,[l(f,{value:e.json,"onUpdate:value":o[0]||(o[0]=v=>e.json=v),ref:"myEditor",mode:e.MODE.JSON},null,8,["value","mode"])])]),_:1},8,["open","onOk","onCancel"])}const ee=S(K,[["render",G],["__scopeId","data-v-62ebfefa"]]);export{ee as default};
