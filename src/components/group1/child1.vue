<template>
  <div>
    <p>child1</p>
    <input type="text" :value="value" @input="inputValue" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: "",
    },
  },
  data() {
    return {
      test: "&&&&",
    };
  },
  // beforeCreate() {
  //   console.log(this.test);
  //   console.log("beforeCreate");
  // },
  // created() {
  //   console.log(this.test);
  //   console.log("created");
  // },
  // beforeMount() {
  //   console.log(this.$el);
  //   console.log("beforeMount");
  // },
  // mounted() {
  //   console.log(this.$el);
  //   console.log("mounted");
  // },
  // beforeUpdate() {
  //   console.log("beforeUpdate");
  // },
  // updated() {
  //   console.log("updated");
  // },
  // beforeDestroy() {
  //   console.log("beforeDestroy");
  // },
  // destroyed() {
  //   console.log("destroyed");
  // },
  methods: {
    inputValue(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style>
</style>