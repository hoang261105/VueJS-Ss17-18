<template>
  <div>
    <h1>Post Not Found</h1>
    <p>The post you are looking for does not exist.</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>
<style></style>
