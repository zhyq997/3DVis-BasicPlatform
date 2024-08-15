<template>
  <icon-font type="icon-tuichu" />
</template>
<script lang="ts" setup>
import _ from "lodash"

import { createFromIconfontCN } from '@ant-design/icons-vue';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const props = defineProps<{
  icon: string
}>()

</script>
<style lang="less" scoped>
.mars-icon {
  vertical-align: middle;
  line-height: 1;
}
</style>
