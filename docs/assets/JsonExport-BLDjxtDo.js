import{_ as d}from"./BasicTable.vue_vue_type_script_setup_true_lang-lmzwzk6V.js";import"./TableImg.vue_vue_type_style_index_0_lang-J13l1C6Y.js";import"./componentMap-p0s8fAtc.js";import"./index-ocHnK3Ro.js";import{c as l,d as e,j as m,a as c}from"./data-BINjFBPo.js";import{P as u}from"./index-3FyLWnMM.js";import{d as f,a7 as _,Z as h,a8 as x,a9 as t,k as o,G as i,u as a}from"./vue-D4H2Ux2Y.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-CVDM_u6X.js";import"./FormItem.vue_vue_type_script_lang-BKaewbdP.js";import"./entry/index-BNp4bmLj-1732066199007.js";import"./antd-DgCI0x_J.js";import"./helper-M_jQZYH_.js";import"./BasicForm.vue_vue_type_style_index_0_lang-0o2WUVRQ.js";import"./index-DzD7MWhD.js";import"./useWindowSizeFn-Wb2xO1po.js";import"./useForm-CwY_0zkx.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CnNXHMH-.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DRTRpNbp.js";import"./useFormItem-BG6Zv7wx.js";import"./onMountedOrActivated-B_y9TM8l.js";import"./useSortable-CJyFTRXy.js";import"./download-Bg_2ezRl.js";import"./base64Conver-sUr-KUg7.js";import"./index-Byc9dnQZ.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-6IbWVtdG.js";import"./copyTextToClipboard-gu8c-UNv.js";import"./index-DAkVkKrG.js";import"./index-CixGDbRt.js";import"./useContentViewHeight-B2xTi02b.js";const R=f({__name:"JsonExport",setup(k){function n(){m({data:e,filename:"使用key作为默认头部.xlsx"})}function s(){m({data:e,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})}function p(){c({sheetList:[{data:e,sheetName:"使用key作为默认头部"},{data:e,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},json2sheetOpts:{header:["name","id"]},sheetName:"自定义头部"}],filename:"多Sheet导出示例.xlsx"})}return(S,T)=>{const r=_("a-button");return h(),x(a(u),{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:t(()=>[o(a(d),{title:"基础表格",columns:a(l),dataSource:a(e)},{toolbar:t(()=>[o(r,{onClick:n},{default:t(()=>[i(" 导出：默认头部 ")]),_:1}),o(r,{onClick:s},{default:t(()=>[i(" 导出：自定义头部 ")]),_:1}),o(r,{onClick:p,danger:""},{default:t(()=>[i(" 导出多Sheet ")]),_:1})]),_:1},8,["columns","dataSource"])]),_:1})}}});export{R as default};