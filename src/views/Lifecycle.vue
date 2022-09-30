<template>
  <div>
    <h1>vue 生命周期</h1>
  </div>
</template>

<script setup lang="ts">
import {onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate} from "vue";
// 注册时期钩子 在组件挂载完成后执行。
onMounted(() => {
  console.log("mounted");
})
//在组件因为响应式状态变更而更新其 DOM 树之后调用。
onUpdated(() => {
  console.log("updated");
})
//在组件实例被卸载之后调用。
onUnmounted(() => {
  console.log("unmounted");
})
//在组件被挂载之前被调用。
onBeforeMount(() => {
  console.log("onBeforeMount");
})
//在组件即将因为响应式状态变更而更新其 DOM 树之前调用。
onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
})
</script>

<style scoped>

</style>