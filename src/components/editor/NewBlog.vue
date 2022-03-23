<template>
  <div id="content">
    <div id="input">
      <p>Image</p>
      <editor
        api-key="jsvlfar0ke1dnz3qs8fab25fyog6zo4vrwgfc5hwidmle72z"
        :init="{
          height: 200,
          width: 240,
          menubar: false,
          toolbar: '',
          statusbar: false,
          plugins: 'image',
          content_style:
            'body { padding: 0; margin: 0; overflow: hidden; } p {margin: 0; }',
        }"
        v-model="img"
      />
      <p>Title</p>
      <button @click="adjustImg" id="adjust">{{ adjustButtonText }}</button>
      <textarea v-model="title"></textarea>
      <button @click="createBlog">{{ submitButtonText }}</button>
    </div>
    <BlogVue
      :img="img"
      :title="title"
      :date="Date().slice(0, 24)"
      class="blogvue"
    />
  </div>
</template>

<script setup>
import { doc, setDoc } from "@firebase/firestore";
import Editor from "@tinymce/tinymce-vue";
import { ref } from "vue";
import { db } from "../../firebase/firebaseinit";
import router from "../../router";
import BlogVue from "../Blog.vue";

const img = ref("");
const title = ref("");
const submitButtonText = ref("Create New Blog");
const adjustButtonText = ref("Adjust Image");

const createBlog = async () => {
  if (img.value && title.value) {
    await setDoc(
      doc(db, "blogs", title.value),
      { img: img.value, title: title.value, upload: Date().slice(0, 24) },
      { merge: true }
    );
    router.push({ name: "blogs" });
    submitButtonText.value = "Create New Blog";
  } else {
    submitButtonText.value = "Fill out Forms!";
  }
};

const adjustImg = () => {
  try {
    let tempImg = document.createElement("div");
    tempImg.innerHTML = img.value;
    tempImg = tempImg.firstChild.firstChild;
    tempImg.style.cssText = "width: 100%; height: 200px; object-fit: cover;";
    img.value = tempImg.outerHTML;
    adjustButtonText.value = "Adjust Image";
  } catch (e) {
    adjustButtonText.value = "Not An Image";
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";

#content {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 50px 0px;

  #input {
    display: flex;
    flex-direction: column;
    margin: 25px;
    margin-right: 75px;

    textarea {
      resize: none;
      height: 70px;
      width: 240px;
      padding: 10px;
      overflow: hidden;
      font-size: 20px;
      font-weight: bolder;
    }
    button {
      margin-top: 15px;
      font-size: 20px;
      border-radius: 10px;
      padding: 10px;
      font-weight: 700;
      border: 2px solid $col-dark1;
      background-color: $col-lime;

      &:hover {
        transform: scale(1.01);
        cursor: pointer;
      }
    }

    #adjust {
      position: absolute;
      font-size: 10px;
      padding: 2px;
      border-radius: 2px;
      top: 210px;
      right: 0;
    }
  }

  .blogvue {
    margin-left: 50px;
  }
}
</style>
