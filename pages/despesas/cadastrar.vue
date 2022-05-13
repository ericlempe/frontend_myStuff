<template>
  <div class="tw-h-screen tw-w-full tw-flex tw-flex-col tw-justify-between tw-bg-white tw-px-4">
    <Navbar title="Cadastrar Despesa" route="/dashboard"></Navbar>
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
      </v-row>
      <v-row dense>
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
      </v-row>
      <v-row dense>
        <v-col cols="12">
          <v-textarea
            v-model="expense.description"
            :error-messages="descriptionErrorMessage"
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
      <v-btn elevation="5" block :loading="loading" color="#FECDA4" @click.prevent.stop="createExpense" rounded>
        <span class="tw-text-[#425c59] tw-font-bold">Cadastrar</span>
      </v-btn>
    </v-form>
    <div class="tw-flex tw-flex-col tw-items-center tw-justify-center">
    </div>
  </div>
</template>
<script>
export default {
  name: 'cadastrarFatura',
  head: {
    title: 'Cadastrar Fatura',
  },
  data() {
    return {
      loading: false,
      nameErrorMessage: '',
      descriptionErrorMessage: '',
      expirationDayErrorMessage: '',
      expense: {
        name: '',
        description: '',
        expiration_day: ''
      }
    }
  },
  methods: {
    createExpense() {

    },
  }
}
</script>
