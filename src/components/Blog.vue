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
  background-color: $form;

  #outimg {
    background-color: $entry;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 250px;
    width: 300px;
    overflow: hidden;
  }

  #outtitle {
    color: $title;
    position: absolute;
    background-color: $entry;
    width: 260px;
    height: auto;
    max-height: 95px;
    overflow: hidden;
    border-radius: 25px;
    top: 230px;
    left: 20px;
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    white-space: pre-wrap;
  }

  #outdate {
    color: $text;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
}
</style>
