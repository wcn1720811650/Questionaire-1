<template>
  <div style="margin-top: 100px">
    用户token：{{userStore.token}}
  </div>

</template>

<script setup>
import {useUserStore} from "../store/userStore.js";

const userStore = useUserStore();

userStore.setToken('asdasdasdas')

</script>

<style scoped>

</style>