<template>
  <v-container>
    <v-flex class="align-center">
      <v-col lg="6" offset="3">
        <v-card lg="12"
          class="mx-auto"
        >
          <v-card-title class="primary" style="justify-content: center;">
            <h1>Login</h1>
          </v-card-title>

          <v-card-text>
            <form @submit.prevent="submit()">
              <v-text-field
                type="email"
                v-model="form.email"
                label="Digite seu E-Mail"
                name="email"
                id="email"
                required
              ></v-text-field>

              <v-text-field
                v-model="form.password"
                :append-icon="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                id="password"
                label="Digite sua senha"
                @click:append="showPassword = !showPassword"
                required
              ></v-text-field>

              <v-row>
                <v-btn block
                  type="submit"
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                >
                  Entrar
                </v-btn>
              </v-row>

            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-flex>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    showPassword: false,
    valid: true,
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    async submit () {
      try {
        await this.ActionDoLogin(this.form)
        this.$router.push({ name: 'home' })
      } catch (err) {
        console.log(err)
        alert(err.data.errors ? err.data.errors.message[0] : 'Não foi possível fazer login..')
      }
    },
    validate () {
    }
  }
}
</script>
