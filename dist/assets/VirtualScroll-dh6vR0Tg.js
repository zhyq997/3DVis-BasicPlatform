import{cl as M,G as B,_ as R,y as L}from"./entry/index-BNp4bmLj-1732066199007.js";import{d as T,f as D,r as F,c as m,u as e,w as G,o as P,y as q,k as l,Z as A,a8 as U,a9 as u,G as H,$ as f,a0 as y}from"./vue-D4H2Ux2Y.js";import{P as Z}from"./index-3FyLWnMM.js";import{ab as N}from"./antd-DgCI0x_J.js";import"./useContentViewHeight-B2xTi02b.js";import"./useWindowSizeFn-Wb2xO1po.js";import"./onMountedOrActivated-B_y9TM8l.js";const j={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},g="virtual-scroll";function a(t,o="px"){if(!(t==null||t===""))return isNaN(+t)?String(t):`${Number(t)}${o}`}const z=T({name:"VirtualScroll",props:j,setup(t,{slots:o}){const s=D(null),r=F({first:0,last:0,scrollTop:0}),c=m(()=>parseInt(t.bench,10)),d=m(()=>parseInt(t.itemHeight,10)),_=m(()=>Math.max(0,r.first-e(c))),I=m(()=>Math.min((t.items||[]).length,r.last+e(c))),V=m(()=>({height:a((t.items||[]).length*e(d))})),C=m(()=>{const i={},n=a(t.height),h=a(t.minHeight),S=a(t.minWidth),w=a(t.maxHeight),b=a(t.maxWidth),x=a(t.width);return n&&(i.height=n),h&&(i.minHeight=h),S&&(i.minWidth=S),w&&(i.maxHeight=w),b&&(i.maxWidth=b),x&&(i.width=x),i});G([()=>t.itemHeight,()=>t.height],()=>{p()});function v(i){const n=e(s);if(!n)return 0;const h=parseInt(t.height||0,10)||n.clientHeight;return i+Math.ceil(h/e(d))}function $(){return Math.floor(r.scrollTop/e(d))}function p(){const i=e(s);i&&(r.scrollTop=i.scrollTop,r.first=$(),r.last=v(r.first))}function k(){const{items:i=[]}=t;return i.slice(e(_),e(I)).map(E)}function E(i,n){n+=e(_);const h=a(n*e(d));return l("div",{class:`${g}__item`,style:{top:h},key:n},[B(o,"default",{index:n,item:i})])}return P(()=>{r.last=v(0),q(()=>{const i=e(s);i&&M({el:i,name:"scroll",listener:p,wait:0})})}),()=>l("div",{class:g,style:e(C),ref:s},[l("div",{class:`${g}__container`,style:e(V)},[k()])])}}),J=R(z,[["__scopeId","data-v-16482a0c"]]),W=L(J),K={class:"virtual-scroll-demo-wrap"},O={class:"virtual-scroll-demo__item"},Q={class:"virtual-scroll-demo-wrap"},X={class:"virtual-scroll-demo__item"},Y=T({__name:"VirtualScroll",setup(t){const o=(()=>{const s=[];for(let r=1;r<2e4;r++)s.push({title:"列表项"+r});return s})();return(s,r)=>(A(),U(e(Z),{class:"virtual-scroll-demo"},{default:u(()=>[l(e(N),null,{default:u(()=>[H("基础滚动示例")]),_:1}),f("div",K,[l(e(W),{itemHeight:41,items:e(o),height:300,width:300},{default:u(({item:c})=>[f("div",O,y(c.title),1)]),_:1},8,["items"])]),l(e(N),null,{default:u(()=>[H("即使不可见，也预先加载50条数据，防止空白")]),_:1}),f("div",Q,[l(e(W),{itemHeight:41,items:e(o),height:300,width:300,bench:50},{default:u(({item:c})=>[f("div",X,y(c.title),1)]),_:1},8,["items"])])]),_:1}))}}),lt=R(Y,[["__scopeId","data-v-4bd1bb22"]]);export{lt as default};