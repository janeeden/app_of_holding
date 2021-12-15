<template>
  <div class="home">
    <div>
      <div>
        <Posts></Posts>
      </div>
    </div>
  </div>
</template>

<script>
import Posts from "@/components/Posts"

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    Posts
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    }
  }
}
</script>
