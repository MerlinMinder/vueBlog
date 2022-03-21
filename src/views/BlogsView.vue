<template>
  <h1>Heyy</h1>
  <p v-html="data"></p>
</template>

<script setup>
import { doc, getDoc } from "@firebase/firestore";
import { onMounted, ref } from "@vue/runtime-core";
import { db } from "../firebase/firebaseinit";

const data = ref(null);
onMounted(async () => {
  const docs = await getDoc(doc(db, "data", "hello"));
  data.value = docs.data().data;
});

console.log(data);
</script>
