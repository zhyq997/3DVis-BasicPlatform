import{_ as L}from"./BasicTable.vue_vue_type_script_setup_true_lang-lmzwzk6V.js";import"./TableImg.vue_vue_type_style_index_0_lang-J13l1C6Y.js";import"./componentMap-p0s8fAtc.js";import{u as P}from"./useTable-Dfzroyd2.js";import{getBasicShortColumns as v,getBasicColumns as l}from"./tableData--kgfXxrf.js";import{w as D}from"./entry/index-BNp4bmLj-1732066199007.js";import{d as I}from"./table-De6J927k.js";import{d as M,a7 as N,Z as V,_ as $,$ as r,k as e,a9 as o,G as n,u as m}from"./vue-D4H2Ux2Y.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-CVDM_u6X.js";import"./FormItem.vue_vue_type_script_lang-BKaewbdP.js";import"./helper-M_jQZYH_.js";import"./antd-DgCI0x_J.js";import"./BasicForm.vue_vue_type_style_index_0_lang-0o2WUVRQ.js";import"./index-DzD7MWhD.js";import"./useWindowSizeFn-Wb2xO1po.js";import"./useForm-CwY_0zkx.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CnNXHMH-.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DRTRpNbp.js";import"./useFormItem-BG6Zv7wx.js";import"./onMountedOrActivated-B_y9TM8l.js";import"./useSortable-CJyFTRXy.js";import"./download-Bg_2ezRl.js";import"./base64Conver-sUr-KUg7.js";import"./index-Byc9dnQZ.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-6IbWVtdG.js";import"./copyTextToClipboard-gu8c-UNv.js";import"./index-DAkVkKrG.js";import"./index-CixGDbRt.js";import"./select-DqWR_fTn.js";const z={class:"p-4 flex flex-col"},A={class:"mb-4"},E={class:"mb-4"},Te=M({__name:"UseTable",setup(G){const{createMessage:s}=D();function u(){}const[f,{setLoading:a,setProps:i,getColumns:H,getDataSource:U,getRawDataSource:Z,reload:c,getPaginationRef:j,setPagination:p,getSelectRows:q,getSelectRowKeys:F,setSelectedRowKeys:d,clearSelectedRowKeys:g}]=P({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:I,columns:l(),defSort:{field:"name",order:"ascend"},rowKey:"id",showTableSetting:!0,onChange:u,rowSelection:{type:"checkbox"},onColumnsChange:B=>{},showSelectionBar:!0});function _(){a(!0),setTimeout(()=>{a(!1)},1e3)}function C(){i({columns:v(),rowSelection:{type:"checkbox"},showIndexColumn:!0})}function w(){i({columns:l(),rowSelection:{type:"checkbox"},showIndexColumn:!0}),c({page:1})}function k(){s.info("请在控制台查看！")}function h(){s.info("请在控制台查看！")}function S(){s.info("请在控制台查看！")}function b(){s.info("请在控制台查看！")}function R(){p({current:2}),c()}function x(){s.info("请在控制台查看！")}function T(){s.info("请在控制台查看！")}function y(){d(["0","1","2"])}function K(){g()}return(B,J)=>{const t=N("a-button");return V(),$("div",z,[r("div",A,[e(t,{class:"mr-2",onClick:w},{default:o(()=>[n(" 还原 ")]),_:1}),e(t,{class:"mr-2",onClick:_},{default:o(()=>[n(" 开启loading ")]),_:1}),e(t,{class:"mr-2",onClick:C},{default:o(()=>[n(" 更改Columns ")]),_:1}),e(t,{class:"mr-2",onClick:k},{default:o(()=>[n(" 获取Columns ")]),_:1}),e(t,{class:"mr-2",onClick:h},{default:o(()=>[n(" 获取表格数据 ")]),_:1}),e(t,{class:"mr-2",onClick:S},{default:o(()=>[n(" 获取接口原始数据 ")]),_:1}),e(t,{class:"mr-2",onClick:R},{default:o(()=>[n(" 跳转到第2页 ")]),_:1})]),r("div",E,[e(t,{class:"mr-2",onClick:x},{default:o(()=>[n(" 获取选中行 ")]),_:1}),e(t,{class:"mr-2",onClick:T},{default:o(()=>[n(" 获取选中行Key ")]),_:1}),e(t,{class:"mr-2",onClick:y},{default:o(()=>[n(" 设置选中行 ")]),_:1}),e(t,{class:"mr-2",onClick:K},{default:o(()=>[n(" 清空选中行 ")]),_:1}),e(t,{class:"mr-2",onClick:b},{default:o(()=>[n(" 获取分页信息 ")]),_:1})]),e(m(L),{onRegister:m(f)},null,8,["onRegister"])])}}});export{Te as default};