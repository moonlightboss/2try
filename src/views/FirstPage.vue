<template>
  <div>
    <table border="1" cellpadding="10" cellspacing="0">
      <caption>
        Table for something
      </caption>
      <tr>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
      </tr>
      <tr>
        1
      </tr>
      <tr>
        2
      </tr>
      <tr>
        3
      </tr>
      <tr>
        4
      </tr>
      <tr>
        5
      </tr>
      <tr>
        6
      </tr>
      <tr>
        7
      </tr>
      <tr>
        8
      </tr>
      <tr></tr>
    </table>
  </div>
  <div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div v-for="p in register" v-bind:key="p">
    {{ p.name }} {{ p.phonenumber }} {{ p.email }} {{ p.passwrd }}
  </div>
</template>

<script>
export default {
  props: {
    register: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style></style>
