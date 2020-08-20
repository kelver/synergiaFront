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

      <v-btn
        href="login"
        text
      >
        <span class="mr-2">Acessar</span>
        <v-icon>fas fa-sign-in-alt</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  })
}
</script>
