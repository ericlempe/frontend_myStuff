<template>
  <div>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on" color="#FECDA4" large>mdi-currency-usd</v-icon>
      </template>
      <div class="tw-h-screen tw-w-screen tw-bg-white">

        <v-toolbar color="#425c59">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Cadastrar Pagamento</v-toolbar-title>
        </v-toolbar>
        <div class="tw-px-2 tw-mt-5">
          <v-form>
            <v-row dense>
              <v-col cols="12">
                <v-text-field
                  v-model="expense.name"
                  :error-messages="nameErrorMessage"
                  label="Nome"
                  rounded
                  outlined
                  dense
                  color="#6a8684"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="expense.expiration_day"
                  type="number"
                  :error-messages="expirationDayErrorMessage"
                  label="Dia de vencimento"
                  rounded
                  outlined
                  dense
                  color="#6a8684"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="expense.description"
                  name="input-7-4"
                  label="Descrição"
                  rounded
                  outlined
                  dense
                  color="#6a8684"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
            <v-btn class="mt-5" elevation="5" block :loading="loading" color="#425c59"
                   @click.prevent.stop="createExpense"
                   rounded>
              <span class="tw-text-[#FECDA4] tw-font-bold">Cadastrar</span>
            </v-btn>
          </v-form>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import {between, required} from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      dialog: false,
      loading: false,
      expense: {
        name: '',
        description: '',
        expiration_day: ''
      }
    }
  },
  validations: {
    expense: {
      name: {required},
      expiration_day: {required, between: between(1, 28)},
    }
  },
  computed: {
    nameErrorMessage() {
      const errors = []
      if (!this.$v.expense.name.$dirty) return errors
      !this.$v.expense.name.required && errors.push('Nome é obrigatório')
      return errors
    },
    expirationDayErrorMessage() {
      const errors = []
      if (!this.$v.expense.expiration_day.$dirty) return errors
      !this.$v.expense.expiration_day.between && errors.push('O vencimento precisa ser entre 1 a 28.')
      !this.$v.expense.expiration_day.required && errors.push('Dia de vencimento é obrigatório')
      return errors
    },
  },
  methods: {
    async createExpense() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.loading = true;
        this.$axios.post('/expenses', this.expense).then((data) => {
          $nuxt.$emit('snackbar', "Despesa Criada com sucesso", 'success');
          // setTimeout(() => this.$router.push('/login'), 4000);
        }).catch(error => {
          this.loading = false;
          console.log(error.response.data.errors);
          // if (error.response.data.errors !== undefined) {
          //   if (error.response.data.errors.email && error.response.data.errors.email.length > 0) {
          //     $nuxt.$emit('snackbar', error.response.data.errors.email[0], 'red');
          //   }
          // } else {
          //   $nuxt.$emit('snackbar', error.response.data.message, 'black');
          // }
        });
      }
    },
  },
}
</script>
