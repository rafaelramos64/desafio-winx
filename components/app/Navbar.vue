<template>
  <div>
    <v-app-bar
      color="white accent-4"
      dark
      height="100"
      max-height="100"
      class="pl-7 pr-8 nav-shadow"
    >
      <v-toolbar-title>
        <NuxtLink to="/">
          <v-img max-width="200" src="" alt="SutHub logo" />
        </NuxtLink>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon color="primary" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
    >
      <v-subheader class="d-flex justify-center">
        <NuxtLink to="/">
          <v-img max-width="150" src="" alt="SutHub logo" />
        </NuxtLink>
      </v-subheader>

      <v-divider></v-divider>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  data () {
    return {
      drawer: false
    }
  },
}
</script>

<style scoped lang="scss">
.btn {
  text-transform: none;
}

.nav-shadow {
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}
</style>