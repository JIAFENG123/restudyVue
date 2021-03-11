<template>
  <div>
    <Child1 v-model="value" />
    <span>parent1: {{ value }}</span>
  </div>
</template>

<script>
import Child1 from "./child1";
export default {
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