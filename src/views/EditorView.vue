<template>
  <div id="editor">
    <editor
      api-key="jsvlfar0ke1dnz3qs8fab25fyog6zo4vrwgfc5hwidmle72z"
      :init="{
        height: 600,
        width: 800,
        menubar: true,
        plugins: ['image'],
      }"
    ></editor>
    <div>{{ hello }}</div>
  </div>
</template>

<script setup>
import Editor from "@tinymce/tinymce-vue";
import { ref } from "vue";
const hello = ref("");
</script>

<style lang="scss" scoped>
#editor {
  overflow-x: hidden;
}
</style>
