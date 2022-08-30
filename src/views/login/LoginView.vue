<template>
  <b-container>
    <b-row>
      <b-col cols="6" class="mx-auto mt-5">
        <b-form @submit.prevent="onSubmit">
          <b-form-group id="input-group-1" label="Username:" label-for="input-name">
            <b-form-input
              id="input-name"
              v-model="form.username"
              type="text"
              placeholder="Enter username"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Password:" label-for="input-password">
            <b-form-input
              id="input-password"
              v-model="form.password"
              placeholder="Enter password"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3">
            <b-form-checkbox v-model="form.checked">Check me out</b-form-checkbox>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" src="./script.ts"></script>
<style scoped src="./style.scss" lang="scss"></style>