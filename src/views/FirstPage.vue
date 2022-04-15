<template>
  <post-form />
  <div>
    <hr />
    <form @submit.prevent>
      <input type="text" placeholder="id" v-model="editPost.id" />
      <input type="text" placeholder="userId" v-model="editPost.userId" />
      <input type="text" placeholder="title" v-model="editPost.title" />
      <input type="text" placeholder="body" v-model="editPost.body" />
      <button @click="updatePost">Update Post</button>
    </form>
  </div>
  <hr />
  <input type="text" placeholder="Search" v-model="search" />
  <div>
    <table class="table" border="1" cellpadding="10" cellspacing="0">
      <caption>
        Table for something
      </caption>
      <tr>
        <th>
          <button @click="sortById">ID-sort</button>
        </th>
        <th>
          <button @click="sortByUserId">UserId-sort</button>
        </th>
        <th>
          <button @click="sortByTitle">Title-sort</button>
        </th>
        <th>
          <button @click="sortByBody">Body-sort</button>
        </th>
        <th></th>
      </tr>
      <tr v-for="post in preparedPosts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.userId }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
        <td><button @click="editLine(post)">Edit</button></td>
        <td><button @click="deletePost(index)">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
export default {
  data() {
    return {
      search: "",
      info: null,
      post: {
        userId: "",
        id: "",
        title: "",
        body: "",
      },
      editPost: {
        userId: "",
        id: "",
        title: "",
        body: "",
      },
      posts: [],
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    PostForm,
  },
  methods: {
    sortById() {
      this.allPosts.sort((a, b) => b.id - a.id);
    },
    sortByUserId() {
      this.allPosts.sort((a, b) => b.userId - a.userId);
    },
    sortByBody() {
      this.allPosts.sort((a, b) => a.body.localeCompare(b.body));
    },
    sortByTitle() {
      this.allPosts.sort((a, b) => a.title.localeCompare(b.title));
    },
    updatePost() {
      this.editPost = {
        userId: "",
        id: "",
        title: "",
        body: "",
      };
    },
    editLine(post) {
      this.editPost = post;
    },
    deletePost(id) {
      this.allPosts.splice(id, 1);
    },
    createPost() {
      this.posts.push({ ...this.post });
    },
  },
  computed: {
    allPosts() {
      return this.$store.getters.allPosts;
    },
    preparedPosts() {
      return this.allPosts.filter((el) => {
        return (
          el.title.toLowerCase().includes(this.search.toLowerCase()) ||
          el.body.toLowerCase().includes(this.search.toLowerCase()) ||
          el.id == this.search
        );
      });
    },
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>

<style>
.table {
  border: 1px solid #eee;
  width: 100%;
  margin-bottom: 20px;
}

.table th {
  font-weight: bold;
  padding: 5px;
  background: #efefef;
  border: 1px solid #dddddd;
}

.table td {
  padding: 5px 10px;
  border: 1px solid #eee;
  text-align: left;
}

.table tbody tr:nth-child(odd) {
  background: #fff;
}

.table tbody tr:nth-child(even) {
  background: #f7f7f7;
}
</style>
