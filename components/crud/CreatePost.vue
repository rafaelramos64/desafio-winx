<template>
  <v-row>
    <v-col cols="12">
      <v-dialog
        v-model="getOpenCreateModal"
        width="600px"
        overlay-opacity="0.8"
        persistent
      >
        <v-card class="px-3">
          <v-card-title>
            <span class="text-h5">Use Google's location service?</span>
          </v-card-title>
          <v-form @submit.prevent="submit" class="px-3">
            <v-text-field
              v-model="post.title"
              label="Título"
              placeholder="Título do Post"
              prepend-inner-icon="mdi-pencil-outline"
              required
            />

            <v-textarea
              v-model="post.body"
              label="Conteúdo"
              placeholder="Conteúdo do post"
              prepend-inner-icon="mdi-comment-outline"
              rows="3"
              required
            />

            <v-card-text></v-card-text>

            <v-card-actions class="px-0">
              <v-spacer></v-spacer>
              <v-btn
                color="error"
                outlined
                @click="openCreateModal(false)"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="success"
                outlined
                :disabled="!post.title || !post.body"
                @click="openCreateModal(false)"
              >
                Salvar
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CreatePost',

  data () {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },

  computed: {
    ...mapGetters(['getOpenCreateModal']),
  },

  methods: {
    ...mapActions(['openCreateModal'])
  },
}
</script>

<style lang="scss" scoped>

</style>