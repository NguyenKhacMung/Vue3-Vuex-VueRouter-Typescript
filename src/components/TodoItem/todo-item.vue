<template>
  <div
    :class="[
      { completed: todo.status === CONSTANTS.TYPE_STATUS.COMPLETED },
      'form-check todo-item',
    ]"
  >
    <input
      class="form-check-input todo-item-checkbox cursor-pointer"
      type="checkbox"
      v-if="todo.status !== CONSTANTS.TYPE_STATUS.REMOVED"
      :value="todo.id"
      :id="todo.id"
      :checked="todo.status === CONSTANTS.TYPE_STATUS.COMPLETED"
      :disabled="todo.status === CONSTANTS.TYPE_STATUS.COMPLETED"
      @change="onChange(todo.id, CONSTANTS.TYPE_STATUS.COMPLETED)"
    />
    <img
      v-else
      @click="onChange(todo.id, CONSTANTS.TYPE_STATUS.INPROGESS)"
      :src="plusIcon"
      alt=""
      class="icon-plus cursor-pointer"
    />
    <label class="form-check-label" :for="todo.id">
      {{ todo.title }}
    </label>
    <img
      v-if="
        todo.status !== CONSTANTS.TYPE_STATUS.REMOVED &&
        todo.status !== CONSTANTS.TYPE_STATUS.COMPLETED
      "
      @click="onChange(todo.id, CONSTANTS.TYPE_STATUS.REMOVED)"
      :src="img"
      alt=""
      class="icon-remove cursor-pointer"
    />
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" scoped src="./style.scss"></style>
