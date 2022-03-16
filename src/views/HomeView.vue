<template>
  <h2>hello friend</h2>
  <button @click="sendData">@</button>
</template>

<script setup>
import { db } from "../firebase/firebaseinit";
import { doc, setDoc } from "firebase/firestore";

const sendData = async () => {
  await setDoc(
    doc(db, "data", "no-lo"),
    {
      hi: "hello",
      num: 31213.24,
    },
    { merge: true }
  );
};
</script>

<style lang="scss" scoped></style>
