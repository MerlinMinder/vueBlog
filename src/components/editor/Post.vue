<template>
  <p id="title">New Post</p>
  <div id="editor-container">
    <editor
      api-key="jsvlfar0ke1dnz3qs8fab25fyog6zo4vrwgfc5hwidmle72z"
      :init="{
        height: 600,
        width: editorWidth,
        menubar: true,
        plugins: ['image', 'code'],
        skin: 'oxide-dark',
        statusbar: false,
      }"
      v-model="content"
    />
  </div>
  <button @click="previwBlog">Preview</button>
  <button @click="postBlog">Post</button>
</template>

<script setup>
import { doc, setDoc } from "@firebase/firestore";
import Editor from "@tinymce/tinymce-vue";
import { ref, defineProps } from "vue";
import { db } from "../../firebase/firebaseinit";
const editorWidth = window.innerWidth * 0.8;
const content = ref("");

const previwBlog = () => {
  alert(content.value);
};
const postBlog = async () => {
  await setDoc(
    doc(db, "blogs", props.blogTitle),
    { data: content.value, upload: Date() },
    { merge: true }
  );
};
</script>

<style lang="scss" scoped>
#title {
  width: 80vw;
}

#editor-container {
  margin: 50px 0px;
}
</style>
