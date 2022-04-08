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
      this.users.push(user);
    },
  },
  components: {
    RegisterForm,
  },
};
</script>

<style></style>
