<template>
  <div class="users" v-for="user in users" :key="user">
    <div class="register">Name: {{ user.name }}</div>
    <div>e-mail: {{ user.email }}</div>
    <div>pass : {{ user.pass }}</div>
    <div>phonenumber: {{ user.phonenumber }}</div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      requered: true,
    },
  },
};
</script>

<style>
.users {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
  margin-top: 2px;
}
</style>
