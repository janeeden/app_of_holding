<template>
  <div class="about">
    <h3>About</h3>
    <p>
      The App of Holding is a project where I practice some new skills and create tools for myself. <br>
      Since some of these things are kinda handy, I'd like to share them with you, for you to use as well.
    </p>
    <h3>Contact</h3>
    <p>
      I can be contacted on {{email}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      part1: "schnitzkin",
      part2: "g@gmail",
      part3: ".com",
    }
  },
  computed: {
    email: function () {
      return this.part1 + this.part2 + this.part3;
    }
  }
}
</script>