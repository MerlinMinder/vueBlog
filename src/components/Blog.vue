<template>
  <div id="output">
    <div v-html="props.img" id="outimg"></div>
    <div id="outtitle">{{ props.title }}</div>
    <div id="outdate">{{ props.date }}</div>
  </div>
</template>

<script setup>
const props = defineProps(["img", "title", "date"]);
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

#output {
  height: 400px;
  width: 300px;
  border-radius: 20px;
  background-color: $col-dark1;
  border: 30px $col-dark1 solid;

  #outimg {
    background-color: $col-light;
    height: 200px;
    width: 240px;
    overflow: hidden;
  }

  #outtitle {
    color: $col-light;
    margin: 10px 0px;
    font-size: 25px;
    text-align: center;
    white-space: pre-wrap;
  }

  #outdate {
    color: $col-light;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
