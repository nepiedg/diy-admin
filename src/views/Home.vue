<template>
  <div class="home">
    <el-row>
      <el-col :span="24">
        <div class="t1">
          <el-button type="primary" @click="btn('1123')">Primary</el-button>
          <el-button type="success" @click="goto(1)">参数跳转</el-button>
          <el-button type="success" @click="gotopage('/imagesdepot')">图库</el-button>
          <el-button type="danger" @click="gotopage('/lifecycle')">生命周期</el-button>
        </div>
        <hr>
      </el-col>
    </el-row>
    <el-row>
      <div class="t2">
        <el-row>
          <el-col :span="8"> {{ content }}
            <el-button type="success" @click="updateContent">更改</el-button>
          </el-col>
          <el-col :span="8"> reactive: {{ param }}
            <el-button type="success" @click="updateReactive">更改</el-button>
          </el-col>
        </el-row>
      </div>
    </el-row>
    <el-row>
      <el-col :span="4">
        组件内容：
        <sub-item :title="title" @emits="getSubParam">qweqwe</sub-item>
      </el-col>
      <el-col :span="6">
        <el-button type="success" @click="getSubParam">获取子组件</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import {reactive, ref, watch} from "vue";
import SubItem from "./SubItem"

const param = reactive({name: "asdada"});
const title = ref("biaotineirong")

const content = ref("响应内容");
const updateContent = function () {
  content.value = "修改后内容";
}
const updateReactive = function () {
  param.name = "123";
}
// 监听器
watch(content, async (newQuestion, oldQuestion) => {
  console.log(newQuestion);
  console.log(oldQuestion);
})

const getSubParam = (list:number[]) => {
  console.log(list);
  title.value = "改变";
}
const btn = (name: string) => {
  console.log(name);
}
const goto = (id: number) => {
  router.push({
    path: '/details/' + id.toString()
  })
}
const gotopage = (url: string) => {
  router.push({
    path: url
  })
}
const share = function () {
  console.log("抖音分享视频");

}
</script>
<style scoped lang="scss">
.home {
  .t1 {
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
  }

  .t2 {
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
  }
}
</style>