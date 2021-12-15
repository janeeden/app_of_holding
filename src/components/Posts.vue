<template>
  <div class="posts">
    <div v-if="isLoading">
      Loading posts..!
    </div>
    <div v-if="!isLoading">
      <div v-for="post in posts" :key="post.id" class="post-card">
        <h5>{{post.title}}</h5>
        <p>
          {{post.content}}
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Posts',
  data() {
    return {
      isLoading: false,
      posts: [{
        title: 'Welcome',
        content: 'Collection of handy apps for DnD'
      },
      {
        title: 'Second post!',
        content: 'Please don\'t pay attention to me'
      }]
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style>
.post-card {
  margin-top: 25px;
  padding: 25px;
}

.post-card {
  border-bottom: 1px solid black;
}

.post-card:last-child {
  border-bottom: none;
}
</style>