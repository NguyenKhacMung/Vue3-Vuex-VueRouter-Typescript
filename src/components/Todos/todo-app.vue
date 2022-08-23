<template>
  <b-container class="container-todo">
    <div class="header-todo d-flex align-items-center">
      <img :src="calendar" alt="" />
      <h1>Today</h1>
      <div class="action-todo ms-auto">
        <font-awesome-icon
          icon="fa-solid fa-ellipsis"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        />
        <ul class="dropdown-menu dropdown-menu-end">
          <BaseItemDropdown
            v-for="(item, index) in listItemDropdown"
            @click="selectItem(item.status)"
            :key="index"
            :item="item"
            :class="{ isActive: item.status === status }"
          />
        </ul>
      </div>
    </div>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    <AddTodo v-if="status === CONSTANTS.TYPE_STATUS.INPROGESS" />
  </b-container>
</template>

<script lang="ts" src="./script.ts"></script>
<style scoped src="./style.scss" lang="scss"></style>