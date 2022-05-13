<template>
  <div class="tw-h-screen tw-flex tw-flex-col tw-items-center tw-justify-evenly tw-bg-[#425c59] tw-w-full tw-px-6">
    <img class="tw-w-36 wt-h-36 tw-mt-5" src="@/assets/img/logo-title.png" alt="logo">
    <v-form>
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            v-model="login.email"
            :error-messages="emailErrorMessage"
            label="E-mail"
            filled
            rounded
            class="form-input"
            color="#6a8684"
            dense
            required
          >
            <template v-slot:prepend-inner>
              <v-icon color="#FECDA4">mdi-email</v-icon>
              <div class="tw-border-r-2 tw-mx-2 tw-border-[#6a8684]">&nbsp;&nbsp;</div>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="login.password"
            :error-messages="passwordErrorMessage"
            :type="showPassword ? 'text' : 'password'"
            label="Senha"
            filled
            rounded
            class="form-input"
            color="#6a8684"
            dense
            required
          >
            <template v-slot:prepend-inner>
              <v-icon color="#FECDA4">mdi-lock</v-icon>
              <div class="tw-border-r-2 tw-mx-2 tw-border-[#6a8684]">&nbsp;&nbsp;</div>
            </template>
            <template v-slot:append>
              <v-icon
                @click="showPassword = !showPassword"
                color="#FECDA4"
              >
                {{ showPassword ? 'mdi-eye' : 'mdi-eye-off' }}
              </v-icon>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12" align="center">
          <NuxtLink class="nuxtlink-esqueceu-senha" to="/recuperar-senha">Esqueceu a senha?</NuxtLink>
        </v-col>
      </v-row>
    </v-form>
    <div class="tw-flex tw-flex-col tw-mb-5">
      <v-btn elevation="5" block x-large :loading="loading" color="#FECDA4" @click.prevent.stop="onSubmit" rounded>
        <span class="tw-text-[#425c59] tw-font-bold">Entrar</span>
      </v-btn>
      <p class="tw-flex tw-row tw-justify-center tw-text-gray-500 tw-mt-4">
        Não possui conta?
        <NuxtLink class="nuxtlink-registrar tw-ml-2" to="/registrar">Registrar</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script>
import {required} from 'vuelidate/lib/validators'

export default {
  transition: 'slide-bottom',
  layout: 'auth',
  auth: 'guest',
  name: 'login',
  head: {
    title: 'Login',
  },
  data() {
    return {
      login: {
        email: 'ericlempe1994@gmail.com',
        password: 'password'
      },
      showPassword: false,
      loading: false,
    }
  },
  validations: {
    login: {
      email: {required},
      password: {required},
    }
  },
  computed: {
    emailErrorMessage() {
      const errors = [];
      if (!this.$v.login.email.$dirty) return errors;
      !this.$v.login.email.required && errors.push('E-mail é obrigatório');
      return errors;
    },
    passwordErrorMessage() {
      const errors = [];
      if (!this.$v.login.password.$dirty) return errors;
      !this.$v.login.password.required && errors.push('Senha é obrigatório');
      return errors;
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.loading = true;
        this.$auth.loginWith('local', {
          data: this.login
        }).then((data) => {
          setTimeout(() => this.$router.push('/dashboard'), 2000);
        }).catch(error => {
          this.loading = false;
          $nuxt.$emit('snackbar', error.response.data.message, 'red');
        });
      }
    }
  }
}
</script>
