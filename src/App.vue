<template>
  <div class="root">
    <p>App.</p>
    <ul>
      <li>
        <Parent1 />
      </li>
    </ul>
  </div>
</template>

<script>
import Parent1 from "_c/group1/parent1";
export default {
  components: {
    Parent1,
  },
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