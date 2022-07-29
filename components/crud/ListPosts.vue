<template>
  <v-row>
    <v-col v-for="post in posts" :key="post.id" cols="12" sm="6" md="4">
      <post-card :post="post" :getCurrentPostOwner="getCurrentPostOwner(post?.user_id)" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ListPosts',

  data () {
    return {
      posts: [],
      postOwners: [],
    }
  },

  created () {
    this.getPosts()
  },

  methods: {
    async getPosts () {
      try {
        const { data } = await this.$axios.get('posts')
        
        this.getPostOwners(data)

        this.posts = data
      } catch (err) {
        console.error(err)
      }
    },

    async getPostOwners (posts) {
      try {
        for (const post in posts) {
          if (posts[post].user_id) {
            const { data } = await this.$axios.get(`users/${posts[post].user_id}`)
            
            this.postOwners.push(data)
          }
        }
      } catch (err) {
        console.error(err)
      }
    },

    getCurrentPostOwner (ownerId) {
      const postOwner = this.postOwners.find((user) => user?.id === ownerId)
      return postOwner
    },
  }
}
</script>

<style lang="scss" scoped>

</style>