<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/RegisterSheet">Register </router-link> |
    <router-link to="/FirstPage"> Table List </router-link>
  </nav>
  <router-view />
  <register-form @create="createUser" />
  <user-list :users="users" />
</template>
<script>
import UserList from "@/components/UserList.vue";
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  components: { UserList, RegisterForm },
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Test1",
          email: "check@check",
          pass: "22222",
          phonenumber: "33333",
        },
        {
          id: 2,
          name: "Vladislav1",
          email: "check@check1",
          pass: "newPass333",
          phonenumber: "33333-8888-99999",
        },
      ],
    };
  },
  methods: {
    createUser(user) {
      this.users.push(user);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
