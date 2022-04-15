export default {
  actions: {
    async fetchPosts(ctx) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=20"
      );
      const posts = await res.json();
      ctx.commit("updatePosts", posts);
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    },
  },
  state: {
    posts: [],
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
  },
};
