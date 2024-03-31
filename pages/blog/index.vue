<script setup>
import { toRaw } from "vue";

const posts = ref([]);
const { data, error } = await useFetch("/api/posts");
posts.value = toRaw(data.value);
</script>
<template>
  <h1 class="blog">Archive du blog</h1>
  <div v-for="post in posts">
    <h1>{{ post.title.rendered }}</h1>
    <p>{{ post.date }}</p>
    <span>Written by: {{ post.author }}</span>
    <div v-if="post.content" v-html="post.content.rendered"></div>
    {{ post.slug.value }}
    <NuxtLink
      :key="post.slug"
      :to="`blog/${post.slug}`"
      class="blog__post"
    >
    voir détails
    </NuxtLink>
  </div>
</template>

<style scoped>
.blog {
  padding: 20px;
}
</style>
