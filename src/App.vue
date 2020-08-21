<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <a href="/" style="text-decoration: none; color: inherit !important;">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />

          <h1>Synergia</h1>
        </div>
      </a>

      <v-spacer></v-spacer>

      <v-btn v-if="!user"
        href="/login"
        text
      >
        <span class="mr-2">Acessar</span>
        <v-icon>fas fa-sign-in-alt</v-icon>
      </v-btn>

      <h1 v-if="user">{{ user.name }}</h1>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer
      v-bind="localAttrs"
      :padless="true"
    >
      <v-card
        flat
        tile
        width="100%"
        class="primary text-center"
      >

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Synergia</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState('auth', ['user'])
  },
  components: {
  },

  data: () => ({
    //
  })
}
</script>
