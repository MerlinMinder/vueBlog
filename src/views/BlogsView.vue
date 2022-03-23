<template>
  <h1>Heyy</h1>
  <p v-html="data"></p>
</template>

<script setup>
import { doc, getDoc } from "@firebase/firestore";
import { onMounted, ref } from "@vue/runtime-core";
import { db } from "../firebase/firebaseinit";

const data = ref("<h1>Hi</h1>");
</script>
