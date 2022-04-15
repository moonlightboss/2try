<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="id" v-model="id" />
    <input type="text" placeholder="userId" v-model="userId" />
    <input type="text" placeholder="title" v-model="title" />
    <input type="text" placeholder="body" v-model="body" />
    <button type="submit">Add Post</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      userId: "",
      id: "",
      title: "",
      body: "",
    };
  },
  methods: {
    ...mapMutations(["createPost"]),
    submit() {
      this.createPost({
        userId: this.userId,
        id: this.id,
        title: this.title,
        body: this.body,
      });
      this.title = this.body = this.id = this.userId = "";
    },
  },
};
</script>

<style></style>
