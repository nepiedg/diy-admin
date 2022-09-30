<template>
  <div>
    <p>
      {{ props.title }}
      <br>
      <slot/>
    </p>
    <el-row>
      <el-col :span="12">
        <el-button type="success" @click="fuzujian">父组件接受</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import {defineProps} from "vue";

interface Props {
  title?: string,
}

const emit = defineEmits(['emits']);
const props = withDefaults(defineProps<Props>(), {
  title: "默认值"
})
const fuzujian = () => {
  emit('emits', [1, 2, 1, 13, 1]);
}
</script>
<style scoped lang="scss">

</style>