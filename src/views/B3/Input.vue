<template>
  <div>
    <input type="text" v-model="inputValue" />
    <button @click="handleSearch">Search</button>
    <p>Value: {{ inputValue }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const inputValue = ref("");

const handleSearch = () => {
  router.push(`/search?name=${inputValue.value}`);
};
</script>
<style></style>
