var he=Object.defineProperty;var z=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var K=(g,t,m)=>t in g?he(g,t,{enumerable:!0,configurable:!0,writable:!0,value:m}):g[t]=m,q=(g,t)=>{for(var m in t||(t={}))de.call(t,m)&&K(g,m,t[m]);if(z)for(var m of z(t))ge.call(t,m)&&K(g,m,t[m]);return g};var Q=(g,t,m)=>new Promise((y,I)=>{var R=v=>{try{b(m.next(v))}catch(P){I(P)}},d=v=>{try{b(m.throw(v))}catch(P){I(P)}},b=v=>v.done?y(v.value):Promise.resolve(v.value).then(R,d);b((m=m.apply(g,t)).next())});import{m as ee,_ as pe}from"./entry/index-BNp4bmLj-1732066199007.js";import{u as ve}from"./use-lifecycle-CyVQVRUS.js";import{d as we,f as X,a7 as Z,Z as Y,a8 as Ae,a9 as j,k as G,G as $,_ as ye,ab as Pe,$ as be}from"./vue-D4H2Ux2Y.js";import"./antd-DgCI0x_J.js";(function(g){var t=se(),m=ce(),y=le(),I=fe(),R={imagePlaceholder:void 0,cacheBust:!1},d={toSvg:b,toPng:P,toJpeg:M,toBlob:H,toPixelData:v,impl:{fontFaces:y,images:I,util:t,inliner:m,options:{}}};g.domtoimage=d;function b(r,n){return n=n||{},oe(n),Promise.resolve(r).then(function(a){return J(a,n.filter,!0)}).then(ie).then(ae).then(o).then(function(a){return ue(a,n.width||t.width(r),n.height||t.height(r))});function o(a){return n.bgcolor&&(a.style.backgroundColor=n.bgcolor),n.width&&(a.style.width=n.width+"px"),n.height&&(a.style.height=n.height+"px"),n.style&&Object.keys(n.style).forEach(function(l){a.style[l]=n.style[l]}),a}}function v(r,n){return F(r,n||{}).then(function(o){return o.getContext("2d").getImageData(0,0,t.width(r),t.height(r)).data})}function P(r,n){return F(r,n||{}).then(function(o){return o.toDataURL()})}function M(r,n){return n=n||{},F(r,n).then(function(o){return o.toDataURL("image/jpeg",n.quality||1)})}function H(r,n){return F(r,n||{}).then(t.canvasToBlob)}function oe(r){typeof r.imagePlaceholder=="undefined"?d.impl.options.imagePlaceholder=R.imagePlaceholder:d.impl.options.imagePlaceholder=r.imagePlaceholder,typeof r.cacheBust=="undefined"?d.impl.options.cacheBust=R.cacheBust:d.impl.options.cacheBust=r.cacheBust}function F(r,n){return b(r,n).then(t.makeImage).then(t.delay(100)).then(function(a){var l=o(r);return l.getContext("2d").drawImage(a,0,0),l});function o(a){var l=document.createElement("canvas");if(l.width=n.width||t.width(a),l.height=n.height||t.height(a),n.bgcolor){var s=l.getContext("2d");s.fillStyle=n.bgcolor,s.fillRect(0,0,l.width,l.height)}return l}}function J(r,n,o){if(!o&&n&&!n(r))return Promise.resolve();return Promise.resolve(r).then(a).then(function(i){return l(r,i,n)}).then(function(i){return s(r,i)});function a(i){return i instanceof HTMLCanvasElement?t.makeImage(i.toDataURL()):i.cloneNode(!1)}function l(i,c,x){var T=i.childNodes;if(T.length===0)return Promise.resolve(c);return p(c,t.asArray(T),x).then(function(){return c});function p(V,E,A){var _=Promise.resolve();return E.forEach(function(S){_=_.then(function(){return J(S,A)}).then(function(B){B&&V.appendChild(B)})}),_}}function s(i,c){if(!(c instanceof Element))return c;return Promise.resolve().then(x).then(T).then(p).then(V).then(function(){return c});function x(){E(window.getComputedStyle(i),c.style);function E(A,_){A.cssText?_.cssText=A.cssText:S(A,_);function S(B,U){t.asArray(B).forEach(function(e){U.setProperty(e,B.getPropertyValue(e),B.getPropertyPriority(e))})}}}function T(){[":before",":after"].forEach(function(A){E(A)});function E(A){var _=window.getComputedStyle(i,A),S=_.getPropertyValue("content");if(S===""||S==="none")return;var B=t.uid();c.className=c.className+" "+B;var U=document.createElement("style");U.appendChild(e(B,A,_)),c.appendChild(U);function e(u,h,f){var w="."+u+":"+h,C=f.cssText?N(f):W(f);return document.createTextNode(w+"{"+C+"}");function N(k){var O=k.getPropertyValue("content");return k.cssText+" content: "+O+";"}function W(k){return t.asArray(k).map(O).join("; ")+";";function O(L){return L+": "+k.getPropertyValue(L)+(k.getPropertyPriority(L)?" !important":"")}}}}}function p(){i instanceof HTMLTextAreaElement&&(c.innerHTML=i.value),i instanceof HTMLInputElement&&c.setAttribute("value",i.value)}function V(){c instanceof SVGElement&&(c.setAttribute("xmlns","http://www.w3.org/2000/svg"),c instanceof SVGRectElement&&["width","height"].forEach(function(E){var A=c.getAttribute(E);A&&c.style.setProperty(E,A)}))}}}function ie(r){return y.resolveAll().then(function(n){var o=document.createElement("style");return r.appendChild(o),o.appendChild(document.createTextNode(n)),r})}function ae(r){return I.inlineAll(r).then(function(){return r})}function ue(r,n,o){return Promise.resolve(r).then(function(a){return a.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(a)}).then(t.escapeXhtml).then(function(a){return'<foreignObject x="0" y="0" width="100%" height="100%">'+a+"</foreignObject>"}).then(function(a){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+n+'" height="'+o+'">'+a+"</svg>"}).then(function(a){return"data:image/svg+xml;charset=utf-8,"+a})}function se(){return{escape:V,parseExtension:n,mimeType:o,dataAsUrl:p,isDataUrl:a,canvasToBlob:s,resolveUrl:i,getAndEncode:T,uid:c(),delay:E,asArray:A,escapeXhtml:_,makeImage:x,width:S,height:B};function r(){var e="application/font-woff",u="image/jpeg";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:u,jpeg:u,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function n(e){var u=/\.([^\.\/]*?)$/g.exec(e);return u?u[1]:""}function o(e){var u=n(e).toLowerCase();return r()[u]||""}function a(e){return e.search(/^(data:)/)!==-1}function l(e){return new Promise(function(u){for(var h=window.atob(e.toDataURL().split(",")[1]),f=h.length,w=new Uint8Array(f),C=0;C<f;C++)w[C]=h.charCodeAt(C);u(new Blob([w],{type:"image/png"}))})}function s(e){return e.toBlob?new Promise(function(u){e.toBlob(u)}):l(e)}function i(e,u){var h=document.implementation.createHTMLDocument(),f=h.createElement("base");h.head.appendChild(f);var w=h.createElement("a");return h.body.appendChild(w),f.href=u,w.href=e,w.href}function c(){var e=0;return function(){return"u"+u()+e++;function u(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function x(e){return new Promise(function(u,h){var f=new Image;f.crossOrigin="*",f.onload=function(){u(f)},f.onerror=function(w){h(w)},f.src=e})}function T(e){var u=1e5;return d.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime()),e.startsWith("http")&&e.indexOf(location.hostname)==-1&&(d.proxy?e=d.proxy(e):d.preUrl&&(e=d.preUrl+e)),new Promise(function(h){var f=new XMLHttpRequest;f.onreadystatechange=W,f.ontimeout=k,f.responseType="blob",f.timeout=u;var w;e.indexOf(location.origin)!=-1?w="get":w="post",d.hasGet&&(w=d.hasGet(e,w)),f.open(w,e,!0),f.send();var C;if(d.impl.options.imagePlaceholder){var N=d.impl.options.imagePlaceholder.split(/,/);N&&N[1]&&(C=N[1])}function W(){if(f.readyState===4)if(f.status!==200)C?h(C):O("无法获取资源: "+e+", 状态: "+f.status);else{var L=new FileReader;L.onloadend=function(){var me=L.result.split(/,/)[1];h(me)},L.readAsDataURL(f.response)}}function k(){C?h(C):O("抓取资源时发生超时（"+u+"ms）: "+e)}function O(L){h("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEXMzMwAov9iAAKCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAACklEQVQImWNgAAAAAgAB9HFkpgAAAABJRU5ErkJggg==")}})}function p(e,u){return"data:"+u+";base64,"+e}function V(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function E(e){return function(u){return new Promise(function(h){setTimeout(function(){h(u)},e)})}}function A(e){for(var u=[],h=e.length,f=0;f<h;f++)u.push(e[f]);return u}function _(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")}function S(e){var u=U(e,"border-left-width"),h=U(e,"border-right-width");return e.scrollWidth+u+h}function B(e){var u=U(e,"border-top-width"),h=U(e,"border-bottom-width");return e.scrollHeight+u+h}function U(e,u){var h=window.getComputedStyle(e).getPropertyValue(u);return parseFloat(h.replace("px",""))}}function ce(){var r=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:l,shouldProcess:n,impl:{readUrls:o,inline:a}};function n(s){return s.search(r)!==-1}function o(s){for(var i=[],c;(c=r.exec(s))!==null;)i.push(c[1]);return i.filter(function(x){return!t.isDataUrl(x)})}function a(s,i,c,x){return Promise.resolve(i).then(function(p){return c?t.resolveUrl(p,c):p}).then(x||t.getAndEncode).then(function(p){return t.dataAsUrl(p,t.mimeType(i))}).then(function(p){return s.replace(T(i),"$1"+p+"$3")});function T(p){return new RegExp(`(url\\(['"]?)(`+t.escape(p)+`)(['"]?\\))`,"g")}}function l(s,i,c){if(x())return Promise.resolve(s);return Promise.resolve(s).then(o).then(function(T){var p=Promise.resolve(s);return T.forEach(function(V){p=p.then(function(E){return a(E,V,i,c)})}),p});function x(){return!n(s)}}}function le(){return{resolveAll:r,impl:{readAll:n}};function r(){return n().then(function(o){return Promise.all(o.map(function(a){return a.resolve()}))}).then(function(o){return o.join(`
`)})}function n(){return Promise.resolve(t.asArray(document.styleSheets)).then(a).then(o).then(function(s){return s.map(l)});function o(s){return s.filter(function(i){return i.type===CSSRule.FONT_FACE_RULE}).filter(function(i){return m.shouldProcess(i.style.getPropertyValue("src"))})}function a(s){var i=[];return s.forEach(function(c){try{t.asArray(c.cssRules||[]).forEach(i.push.bind(i))}catch(x){}}),i}function l(s){return{resolve:function(){var c=(s.parentStyleSheet||{}).href;return m.inlineAll(s.cssText,c)},src:function(){return s.style.getPropertyValue("src")}}}}}function fe(){return{inlineAll:n,impl:{newImage:r}};function r(o){return{inline:a};function a(l){return t.isDataUrl(o.src)?Promise.resolve():Promise.resolve(o.src).then(l||t.getAndEncode).then(function(s){return t.dataAsUrl(s,t.mimeType(o.src))}).then(function(s){return new Promise(function(i,c){o.onload=i,o.onerror=c,o.src=s})})}}function n(o){if(!(o instanceof Element))return Promise.resolve(o);return a(o).then(function(){return o instanceof HTMLImageElement?r(o).inline():Promise.all(t.asArray(o.childNodes).map(function(l){return n(l)}))});function a(l){var s=l.style.getPropertyValue("background");return s?m.inlineAll(s).then(function(i){l.style.setProperty("background",i,l.style.getPropertyPriority("background"))}).then(function(){return l}):Promise.resolve(l)}}}})(window);let D;new ee.BaseClass;function xe(g){D=g}function Ee(){D=null}function te(g={}){return D.expImage(q({download:!1},g)).then(t=>t.image)}function ne(){D.expImage()}function Ce(){D.expImage({height:300,download:!0})}function re(){return Q(this,null,function*(){const g=yield D.expImage({download:!1}),t=D.container.getElementsByClassName("cesium-viewer-cesiumWidgetContainer"),m=yield window.domtoimage.toPng(D.container,{filter:function(I){return I!==t[0]}}),y=yield Ie(g.image,m,g.width,g.height);ee.Util.downloadBase64Image("场景出图_含DIV.png",y)})}function Ie(g,t,m,y){return new Promise((I,R)=>{const d=document.createElement("canvas");d.width=m,d.height=y;const b=d.getContext("2d"),v=new Image;v.crossOrigin="Anonymous",v.onload=()=>{b.drawImage(v,0,0,m,y);const P=new Image;P.crossOrigin="Anonymous",P.onload=()=>{b.drawImage(P,0,0,m,y);const M=d.toDataURL("image/png");I(M)},P.src=t},v.src=g})}const _e=Object.freeze(Object.defineProperty({__proto__:null,downLoad:ne,downLoad2:Ce,downLoadDiv:re,onMounted:xe,onUnmounted:Ee,showMapImg:te},Symbol.toStringTag,{value:"Module"})),Be=["src"],Te=["src"],Ue=we({__name:"index",setup(g){ve(_e);const t=X(!1),m=X(!1),y=X(),I=()=>{te().then(b=>{y.value=b,t.value=!0})},R=()=>{ne()},d=()=>{re()};return(b,v)=>{const P=Z("mars-button"),M=Z("mars-dialog");return Y(),Ae(M,{title:"场景出图",width:"340",top:"60","min-width":340},{default:j(()=>[G(P,{class:"btn",onClick:I},{default:j(()=>[$("查看场景出图(弹窗)")]),_:1}),G(P,{class:"btn",onClick:R},{default:j(()=>[$("下载场景出图")]),_:1}),G(P,{class:"btn_div",onClick:d},{default:j(()=>[$("下载场景出图(含DIV部分)")]),_:1}),m.value?(Y(),ye("img",{key:0,class:"f-mt",src:y.value,style:{width:"100%",height:"100%"}},null,8,Be)):Pe("",!0),G(M,{left:"100",right:"100",top:"50",bottom:"60",title:"场景出图",visible:t.value,"onUpdate:visible":v[0]||(v[0]=H=>t.value=H)},{default:j(()=>[be("img",{src:y.value,style:{width:"100%",height:"100%"}},null,8,Te)]),_:1},8,["visible"])]),_:1})}}}),Ve=pe(Ue,[["__scopeId","data-v-ca85f299"]]);export{Ve as default};