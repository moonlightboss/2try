<template>
  <div>
    <register-form @create="createUser" />
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  methods: {
    createUser(user) {
      this.$emit("adduser", this.user);
      console.log(user);
    },
  },
  components: {
    RegisterForm,
  },
};
</script>

<style></style>
