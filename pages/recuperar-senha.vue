<template>
  <div class="tw-h-screen tw-flex tw-flex-col tw-bg-[#425c59] tw-px-6">
    <div class="tw-flex tw-w-full tw-mt-4">
      <NuxtLink to="/login">
        <v-icon color="#6a8684">mdi-chevron-left</v-icon>
      </NuxtLink>
    </div>
    <div class="tw-flex tw-flex-col tw-w-full tw-mt-8">
      <p class="tw-text-center">
        <span class="tw-font-bold tw-text-xl tw-text-white">Recuperar Senha</span>
        <br>
        <span class="tw-font-light tw-text-sm tw-text-[#6a8684]">Preencha o campo abaixo para iniciar o processo de recuperação de senha</span>
      </p>
    </div>
    <v-form class="mt-10">
      <div class="tw-grid tw-grid-cols-1">
        <v-text-field
          v-model="email"
          :error-messages="emailErrorMessage"
          label="E-mail"
          type="email"
          filled
          rounded
          class="form-input"
          color="#6a8684"
          required
          dense
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        >
          <template v-slot:prepend-inner>
            <v-icon color="#FECDA4">mdi-email</v-icon>
            <div class="tw-border-r-2 tw-mx-2 tw-border-[#6a8684]">&nbsp;&nbsp;</div>
          </template>
        </v-text-field>
      </div>
    </v-form>
    <div class="tw-flex tw-w-full tw-justify-center tw-my-10">
      <v-btn elevation="2" x-large color="#FECDA4" @click.prevent.stop="onSubmit" rounded>
        <span class="tw-text-[#425c59] tw-font-bold">Enviar</span>
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
import {required} from 'vuelidate/lib/validators'

export default {
  transition: 'slide-bottom',
  layout: 'auth',
  auth: 'guest',
  name: 'recuperarSenha',
  head: {
    title: 'Recuperar Senha',
  },
  data() {
    return {
      email: '',
      loading: false,
    }
  },
  validations: {
    email: {required},
  },
  computed: {
    emailErrorMessage() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push('E-mail é obrigatório');
      return errors;
    },
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.loading = true;
        setTimeout(() => {
          $nuxt.$emit('snackbar', "Enviamos uma mensagem para o seu e-mail com o passo a passo para recuperar o acesso ao sistema", 'success');
          this.$router.push('/login');
        }, 5000);

        // this.$axios.post('/recuperar-senha', this.user).then((data) => {
        //   setTimeout(() => this.$router.push('/login'), 4000);
        // }).catch(error => {
        //   this.loading = false;
        //   $nuxt.$emit('snackbar', error.response.data.message, 'black');
        // });
      }


    }
  },
}
</script>
