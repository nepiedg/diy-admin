<template>
  <div class="about">
    {{ param.id }}
  </div>
</template>
<script lang="ts" setup>
import {useRouter} from 'vue-router';

const router = useRouter();
const param = router.currentRoute.value.query
console.log(param);
</script>
