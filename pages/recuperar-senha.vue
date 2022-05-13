<template>
  <div class="tw-h-screen tw-flex tw-flex-col tw-items-center tw-bg-[#425c59] tw-w-full tw-px-6">
    <div class="tw-flex tw-w-full tw-my-8">
      <NuxtLink to="/login">
        <v-icon color="#6a8684">mdi-chevron-left</v-icon>
      </NuxtLink>
    </div>
    <img class="tw-w-36 wt-h-36 tw-mb-10" src="@/assets/img/logo-title.png" alt="logo">
    <v-form>
      <v-row class="mt-10" dense>
        <v-col cols="12">
          <v-text-field
            v-model="email"
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
        <v-col cols="12" align="center">
          <v-btn elevation="5" x-large :loading="loading" color="#FECDA4" @click.prevent.stop="onSubmit" rounded>
            <span class="tw-text-[#425c59] tw-font-bold">Próximo</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
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
        }, 4000);

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
