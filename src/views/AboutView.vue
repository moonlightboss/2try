<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ user }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ user: "getUser" }),
  },
};
</script>

<style></style>
