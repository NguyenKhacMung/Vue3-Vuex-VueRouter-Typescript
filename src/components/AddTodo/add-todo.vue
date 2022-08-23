<template>
  <div class="form-add-todo d-flex align-items-center">
    <img :src="plusIcon" alt="" />
    <b-form-input
      class="shadow-none"
      placeholder="Create New Item"
      @keyup.enter="onKeyUp($event)"
    ></b-form-input>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style scoped src="./style.scss" lang="scss"></style>