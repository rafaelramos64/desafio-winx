<template>
  <v-app>
    <navbar />
    
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <footer-bar />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      fixed: false,
    }
  },
}
</script>
