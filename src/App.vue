<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/UserSheets">User List </router-link> |
    <router-link to="/FirstPage"> Table List </router-link>
  </nav>
  <user-list :users="users" />
  <register-form @create="createUser" />
  <router-view />
</template>
<script>
import UserList from "@/components/UserList.vue";
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  components: { UserList, RegisterForm },
  data() {
    return {
      users: [
        { id: 1, name: "Vladislav", email: "check@check" },
        { id: 2, name: "Vladislav1", email: "check@check1" },
        { id: 3, name: "Vladislav2", email: "check@check2" },
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
