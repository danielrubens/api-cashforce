<template>
  <div>
     <h1>Hello</h1>
  </div>
 </template>
<script>
export default {
  data () {
    return {
      posts: []
    }
  },

  methods: {
    async getData () {
      try {
        const response = await this.$http.get(
          'http://localhost:3000/'
        )
        // JSON responses are automatically parsed.
        this.posts = response.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

 <style scoped>

 </style>
