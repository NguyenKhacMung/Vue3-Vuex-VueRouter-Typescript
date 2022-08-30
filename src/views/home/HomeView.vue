<template>
  <div class="home">
    <h1>home</h1>
    <nav>
      <router-link to="/todo">Todo</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts" src="./script.ts">
</script>
