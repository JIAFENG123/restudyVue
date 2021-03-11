<template>
  <div class="root">
    <p>App.组件传值</p>
    <ul>
      <li v-for="item in parents" :key="item.name">
        <component :is="item"/>
      </li>
    </ul>
  </div>
</template>

<script>
import parents from '_c'
export default {
  // components: {
  //   ...parents
  // },
  data(){
    return{
      parents
    }
  }
};
</script>

<style scoped lang="scss">
$width: 100px;
$test: 100px;
$widtha: calc(100vw - #{$width} - #{$test * 3});
p {
  font-size: 25px;
}
.root {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
ul {
  width: 40%;
  list-style: none;
  li {
    padding: 10px 20px;
    border-radius: 5px;
    margin: 10px 0;
    &:hover {
      cursor: pointer;
      -moz-box-shadow: 0px 0px 7px #fc8319;
      -webkit-box-shadow: 0px 0px 7px #fc8319;
      box-shadow: 0px 0px 7px #fc8319;
    }
  }
}
</style>