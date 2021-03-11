<template>
  <div>

    <Child1 v-model="value" />
    <span>v-model实现数据传递parent1: {{ value }}</span>
  </div>
</template>

<script>
import Child1 from "./child1";
export default {
  name:'parent1',
  components: {
    Child1,
  },
  data() {
    return {
      value: "1",
    };
  },
};
</script>

<style>
</style>