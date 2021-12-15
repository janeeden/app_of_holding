<template>
  <div id="app">
    <MainNavigation />
    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import MainNavigation from '@/components/MainNavigation.vue'

export default {
  name: 'App',
  created() {
    
  },
  components: {
    MainNavigation
  },
  methods: {

  },
  computed: {
    
  }
}
</script>

<style>

.navbar {
  margin-bottom: 15px;
}
</style>
