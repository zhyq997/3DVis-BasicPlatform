import{_ as P}from"./CurrentPermissionMode.vue_vue_type_script_setup_true_lang-CAeC2FhE.js";import{dk as k,v as U,ep as s,_ as g}from"./entry/index-BNp4bmLj-1732066199007.js";import{A as m}from"./index-RoatzKjm.js";import{P as C}from"./index-3FyLWnMM.js";import{aD as h,a4 as B,ab as d}from"./antd-DgCI0x_J.js";import{d as b,c as y,a7 as D,n as N,Z as l,a8 as u,a9 as t,k as o,$ as _,G as a,a0 as f,u as e,ab as S,m as T}from"./vue-D4H2Ux2Y.js";import"./useContentViewHeight-B2xTi02b.js";import"./useWindowSizeFn-Wb2xO1po.js";import"./onMountedOrActivated-B_y9TM8l.js";const V={class:"mt-4"},$=b({__name:"Btn",setup(w){const{changeRole:v,hasPermission:n}=k(),i=U(),E=y(()=>i.getRoleList.includes(s.SUPER)),x=y(()=>i.getRoleList.includes(s.TEST));return(A,c)=>{const r=D("a-button"),p=N("auth");return l(),u(e(C),{title:"前端权限按钮示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:t(()=>[o(P),_("p",null,[a(" 当前角色: "),_("a",null,f(e(i).getRoleList),1)]),o(e(h),{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),_("div",V,[a(" 权限切换(请先切换权限模式为前端角色权限模式): "),o(e(B),null,{default:t(()=>[o(r,{onClick:c[0]||(c[0]=R=>e(v)(e(s).SUPER)),type:E.value?"primary":"default"},{default:t(()=>[a(f(e(s).SUPER),1)]),_:1},8,["type"]),o(r,{onClick:c[1]||(c[1]=R=>e(v)(e(s).TEST)),type:x.value?"primary":"default"},{default:t(()=>[a(f(e(s).TEST),1)]),_:1},8,["type"])]),_:1})]),o(e(d),null,{default:t(()=>[a("组件方式判断权限(有需要可以自行全局注册)")]),_:1}),o(e(m),{value:e(s).SUPER},{default:t(()=>[o(r,{type:"primary",class:"mx-4"},{default:t(()=>[a(" 拥有super角色权限可见 ")]),_:1})]),_:1},8,["value"]),o(e(m),{value:e(s).TEST},{default:t(()=>[o(r,{color:"success",class:"mx-4"},{default:t(()=>[a(" 拥有test角色权限可见 ")]),_:1})]),_:1},8,["value"]),o(e(m),{value:[e(s).TEST,e(s).SUPER]},{default:t(()=>[o(r,{color:"error",class:"mx-4"},{default:t(()=>[a(" 拥有[test,super]角色权限可见 ")]),_:1})]),_:1},8,["value"]),o(e(d),null,{default:t(()=>[a("函数方式方式判断权限(适用于函数内部过滤)")]),_:1}),e(n)(e(s).SUPER)?(l(),u(r,{key:0,type:"primary",class:"mx-4"},{default:t(()=>[a(" 拥有super角色权限可见 ")]),_:1})):S("",!0),e(n)(e(s).TEST)?(l(),u(r,{key:1,color:"success",class:"mx-4"},{default:t(()=>[a(" 拥有test角色权限可见 ")]),_:1})):S("",!0),e(n)([e(s).TEST,e(s).SUPER])?(l(),u(r,{key:2,color:"error",class:"mx-4"},{default:t(()=>[a(" 拥有[test,super]角色权限可见 ")]),_:1})):S("",!0),o(e(d),null,{default:t(()=>[a("指令方式方式判断权限(该方式不能动态修改权限.)")]),_:1}),T((l(),u(r,{type:"primary",class:"mx-4"},{default:t(()=>[a(" 拥有super角色权限可见 ")]),_:1})),[[p,e(s).SUPER]]),T((l(),u(r,{color:"success",class:"mx-4"},{default:t(()=>[a(" 拥有test角色权限可见 ")]),_:1})),[[p,e(s).TEST]]),T((l(),u(r,{color:"error",class:"mx-4"},{default:t(()=>[a(" 拥有[test,super]角色权限可见 ")]),_:1})),[[p,[e(s).TEST,e(s).SUPER]]])]),_:1})}}}),H=g($,[["__scopeId","data-v-303c9f2b"]]);export{H as default};