<template>
  <div>
    {{ param.id }}
  </div>
</template>
<script lang="ts" setup>
import {useRouter} from 'vue-router';
const router = useRouter();
const param = router.currentRoute.value.query

</script>

<style lang="scss" scoped>

</style>