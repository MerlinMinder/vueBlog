<template>
  <p id="title">New "{{ route.params.title }}" Post</p>
  <textarea v-model="title" id="textarea"></textarea>
  <div id="editor-container">
    <editor
      api-key="jsvlfar0ke1dnz3qs8fab25fyog6zo4vrwgfc5hwidmle72z"
      :init="{
        height: 600,
        width: 1000,
        menubar: true,
        plugins: ['image', 'code', 'link'],
        skin: 'oxide-dark',
        statusbar: false,
      }"
      v-model="content"
    />
  </div>
  <div id="buttoncontainer">
    <button @click="preview = !preview">Preview</button>
    <button @click="postBlog">Post</button>
  </div>

  <div v-if="preview" class="post">
    <p id="previewtitle">{{ title }}</p>
    <p id="previewdate">{{ Date(Date.now()).slice(0, 24) }}</p>
    <div v-html="content"></div>
  </div>
</template>

<script setup>
import { doc, setDoc } from "@firebase/firestore";
import Editor from "@tinymce/tinymce-vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { db } from "../../firebase/firebaseinit";
import router from "../../router";
const title = ref("");
const content = ref("");
const preview = ref(false);
const route = useRoute();

const postBlog = async () => {
  await setDoc(
    doc(db, `blogs/${route.params.title}/posts`, String(Date.now())),
    { data: content.value, upload: Date.now(), title: title.value },
    { merge: true }
  );
  router.push("/editor/editblogs");
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";

#title {
  width: 1000px;
  margin-top: 50px;
  font-size: 25px;
  font-weight: bolder;
}

#textarea {
  resize: none;
  width: 300px;
  height: 40px;
  overflow-y: hidden;
  padding: 5px;
  right: 350px;
  top: 20px;
  font-size: 20px;
}

#editor-container {
  margin-top: 40px;
}

#buttoncontainer {
  display: flex;
  width: 1000px;
  justify-content: right;

  button {
    margin: 20px 5px;
    padding: 10px;
    font-size: 20px;
    font-weight: 800;
    background-color: $buttonlight;
    border: none;
    border-radius: 10px;

    &:hover {
      cursor: pointer;
      transform: scale(1.02);
    }
  }
}

h1 {
  font-weight: bold;
}

h2 {
  font-weight: bold;
}

h3 {
  font-weight: bold;
}

.post {
  border: 1px solid $border;
  padding: 10px;
  background-color: $post;
  border-radius: 10px;
  margin: 20px;

  #previewdate {
    text-align: right;
    border-bottom: 1px solid $border;
    margin-bottom: 10px;
  }

  #previewtitle {
    position: absolute;
    font-size: 20px;
    top: 3px;
  }

  div {
    width: 1000px;
  }
}
</style>
