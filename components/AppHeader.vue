<template>
    <div class="header">
        <NuxtLink to="/" class="link-item">Accueil</NuxtLink>
        <NuxtLink to="/blog" class="link-item">Blog</NuxtLink>
    </div>
</template>

<style scoped>
.header {
    height: 75px;
    background: #333;
    display: flex;
    align-items: center;
}
.link-item {
    color: white;
    text-decoration: none;
    padding: 10px;
}
</style>