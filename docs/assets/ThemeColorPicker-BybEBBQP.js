import{p as l}from"./entry/index-BNp4bmLj-1732066199007.js";import{b as p}from"./index-DTuMbvdT.js";import{aW as u}from"./antd-DgCI0x_J.js";import{d,Z as n,_ as s,F as f,aa as k,a1 as m,u as t,ag as C,k as _}from"./vue-D4H2Ux2Y.js";import"./index-DT9L8pdu.js";import"./useContentViewHeight-B2xTi02b.js";import"./useWindowSizeFn-Wb2xO1po.js";import"./useSortable-CJyFTRXy.js";import"./index-CQBDqv3G.js";import"./lock-B4ikw9HR.js";const h=["onClick"],S=d({name:"ThemeColorPicker",__name:"ThemeColorPicker",props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(r){const i=r,{prefixCls:a}=l("setting-theme-picker");function c(o){i.event&&p(i.event,o)}return(o,y)=>(n(),s("div",{class:m(t(a))},[(n(!0),s(f,null,k(r.colorList||[],e=>(n(),s("span",{key:e,onClick:g=>c(e),class:m([`${t(a)}__item`,{[`${t(a)}__item--active`]:r.def===e}]),style:C({background:e})},[_(t(u))],14,h))),128))],2))}});export{S as default};