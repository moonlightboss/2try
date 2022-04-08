<template>
  <div>
    <form @submit.prevent>
      <input class="input" v-model="user.name" type="text" placeholder="Name" />
      <input
        class="input"
        v-model="user.email"
        type="text"
        placeholder="email"
      />
      <input class="input" v-model="user.pass" type="text" placeholder="pass" />
      <input
        class="input"
        v-model="user.phonenumber"
        type="text"
        placeholder="phonenumber"
      />
      <button @click="createUser">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        pass: "",
        phonenumber: "",
      },
    };
  },
  methods: {
    createUser() {
      this.user.id = Date.now();
      this.$emit("create", this.user);
      this.user = {
        name: "",
        email: "",
        pass: "",
        phonenumber: "",
      };
    },
  },
};
</script>

<style>
.input {
  width: 100%;
  border: 2px solid green;
  margin-top: 15px;
}
</style>
