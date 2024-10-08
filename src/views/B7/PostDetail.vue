<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
  </div>
  <div v-else>
    <PostNotFound />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import PostNotFound from "./PostNotFound.vue";

// Sample data for posts
const posts = [
  { id: 1, title: "Post 1", content: "This is the content of Post 1." },
  { id: 2, title: "Post 2", content: "This is the content of Post 2." },
  { id: 3, title: "Post 3", content: "This is the content of Post 3." },
];

const route = useRoute();
const router = useRouter();
const post = ref(null);

onMounted(() => {
  const postId = parseInt(route.params.id);
  post.value = posts.find((p) => p.id === postId) || null;

  if (!post.value) {
    router.push("/404");
  } else {
    window.scrollTo({
      top: window.innerHeight / 2,
      behavior: "smooth",
    });
  }
});
</script>
<style></style>
