<template>
  <div class="tw-h-screen tw-flex tw-flex-col tw-items-center tw-bg-[#425c59] tw-w-full tw-px-6">
    <div class="tw-flex tw-w-full tw-mt-4">
      <NuxtLink to="/login">
        <v-icon color="#6a8684">mdi-chevron-left</v-icon>
      </NuxtLink>
    </div>
    <div class="tw-flex tw-flex-col tw-w-full tw-mt-8">
      <p class="tw-text-center">
        <span class="tw-font-bold tw-text-xl tw-text-white">Criar nova Conta</span>
        <br>
        <span class="tw-font-light tw-text-sm tw-text-[#6a8684]">Preencha os campos abaixo</span>
      </p>
    </div>
    <v-form class="mt-10">
      <div class="tw-grid tw-grid-cols-1">
        <v-text-field
          v-model="user.name"
          :error-messages="nameErrorMessage"
          label="Nome"
          filled
          rounded
          class="form-input"
          color="#6a8684"
          required
          dense
          @input="$v.user.name.$touch()"
          @blur="$v.user.name.$touch()"
        >
          <template v-slot:prepend-inner>
            <v-icon color="#FECDA4">mdi-account</v-icon>
            <div class="tw-border-r-2 tw-mx-2 tw-border-[#6a8684]">&nbsp;&nbsp;</div>
          </template>
        </v-text-field>
        <v-text-field
          v-model="user.email"
          :error-messages="emailErrorMessage"
          label="E-mail"
          filled
          rounded
          class="form-input"
          color="#6a8684"
          dense
          required
          @input="$v.user.email.$touch()"
          @blur="$v.user.email.$touch()"
        >
          <template v-slot:prepend-inner>
            <v-icon color="#FECDA4">mdi-email</v-icon>
            <div class="tw-border-r-2 tw-mx-2 tw-border-[#6a8684]">&nbsp;&nbsp;</div>
          </template>
        </v-text-field>
        <v-text-field
          v-model="user.password"
          :error-messages="passwordErrorMessage"
          :type="showPassword ? 'text' : 'password'"
          label="Senha"
          filled
          rounded
          class="form-input"
          color="#6a8684"
          dense
          required
          @input="$v.user.password.$touch()"
          @blur="$v.user.password.$touch()"
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
        <v-text-field
          v-model="user.passwordConfirmation"
          :error-messages="passwordConfirmationErrorMessage"
          :type="showPasswordConfirmation ? 'text' : 'password'"
          label="Confirmar Senha"
          filled
          rounded
          class="form-input"
          color="#6a8684"
          dense
          required
          @input="$v.user.passwordConfirmation.$touch()"
          @blur="$v.user.passwordConfirmation.$touch()"
        >
          <template v-slot:prepend-inner>
            <v-icon color="#FECDA4">mdi-lock</v-icon>
            <div class="tw-border-r-2 tw-mx-2 tw-border-[#6a8684]">&nbsp;&nbsp;</div>
          </template>
          <template v-slot:append>
            <v-icon
              @click="showPasswordConfirmation = !showPasswordConfirmation"
              color="#FECDA4"
            >
              {{ showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off' }}
            </v-icon>
          </template>
        </v-text-field>
      </div>
    </v-form>
    <div class="tw-flex tw-w-full tw-justify-center tw-my-10">
      <v-btn elevation="2" x-large color="#FECDA4" @click.prevent.stop="onSubmit" rounded>
        <span class="tw-text-[#425c59] tw-font-bold">Cadastrar</span>
      </v-btn>
      <v-overlay :value="loading">
        <v-progress-circular
          indeterminate
          size="64"
        ></v-progress-circular>
      </v-overlay>
    </div>
  </div>
</template>

<script>

import {email, minLength, required, sameAs} from 'vuelidate/lib/validators'

export default {
  layout: 'auth',
  transition: 'slide-bottom',
  auth: 'guest',
  name: 'registrar',
  head: {
    title: 'Registrar Usuário',
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      loading: false,
      showPassword: false,
      showPasswordConfirmation: false,
    }
  },
  validations: {
    user: {
      name: {required},
      email: {required, email},
      password: {required, minLength: minLength(6)},
      passwordConfirmation: {required, minLength: minLength(6), sameAs: sameAs('password')},
    }
  },
  computed: {
    nameErrorMessage() {
      const errors = []
      if (!this.$v.user.name.$dirty) return errors
      !this.$v.user.name.required && errors.push('Nome é obrigatório')
      return errors
    },
    emailErrorMessage() {
      const errors = []
      if (!this.$v.user.email.$dirty) return errors
      !this.$v.user.email.email && errors.push('E-mail precisa ser válido')
      !this.$v.user.email.required && errors.push('E-mail é obrigatório')
      return errors
    },
    passwordErrorMessage() {
      const errors = []
      if (!this.$v.user.password.$dirty) return errors
      !this.$v.user.password.minLength && errors.push('Senha precisa ter no mínimo 6 caracteres')
      !this.$v.user.password.required && errors.push('Senha é obrigatório')
      return errors
    },
    passwordConfirmationErrorMessage() {
      const errors = []
      if (!this.$v.user.passwordConfirmation.$dirty) return errors
      !this.$v.user.passwordConfirmation.minLength && errors.push('Confirmar Senha precisa ter no mínimo 6 caracteres')
      !this.$v.user.passwordConfirmation.required && errors.push('Confirmar Senha é obrigatório')
      !this.$v.user.passwordConfirmation.sameAs && errors.push('Confirmar Senha precisa ser igual a Senha')
      return errors
    },
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.loading = true;
        this.$axios.post('/register', this.user).then((data) => {
          setTimeout(() => {
              $nuxt.$emit('snackbar', "Usuário Criado com sucesso", 'success');
              this.$router.push('/login')
            }, 4000);
        }).catch(error => {
          this.loading = false;
          if (error.response.data.errors !== undefined) {
            if (error.response.data.errors.email && error.response.data.errors.email.length > 0) {
              $nuxt.$emit('snackbar', error.response.data.errors.email[0], 'red');
            }
          } else {
            $nuxt.$emit('snackbar', error.response.data.message, 'black');
          }
        });
      }


    }
  },
}
</script>
