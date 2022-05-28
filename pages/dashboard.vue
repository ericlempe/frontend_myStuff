<template>

  <div class="">
    <div class="tw-bg-[#425c59] tw-px-4 tw-py-2">
      <!-- Welcome user and icon notification -->
      <div class="tw-flex tw-flex-row tw-items-center tw-justify-between tw-items-center tw-pt-4">
        <div class="tw-flex tw-flex-col tw-space-y-2">
          <p class="tw-leading-2 tw-text-left">
            <span class="tw-font-extrabold tw-text-white">Olá, {{ user.name }}</span>
            <br>
            <span class="tw-font-medium tw-tracking-widest tw-text-[#6a8684]">Mantenha suas contas em dia!</span>
          </p>
        </div>
        <v-icon color="#6a8684">mdi-bell</v-icon>
      </div>

      <div class="tw-flex tw-flex-row tw-justify-center">
        <div class="tw-flex tw-items-center tw-justify-center tw-skloader-dark tw-w-44 tw-h-44 tw-rounded-full tw-my-4 tw-relative">
           <div class="tw-flex tw-items-center tw-justify-center tw-bg-[#425c59] tw-w-36 tw-h-36 tw-rounded-full tw-absolute">

           </div>
        </div>
      </div>
    </div>

    <p class="tw-font-bold tw-text-xl tw-text-[#425c59] tw-my-2 tw-px-4">Próximos Vencimentos</p>

    <div class="tw-flex tw-flex-row tw-justify-evenly tw-my-2">
      <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-20 tw-w-20 tw-rounded-lg"
           :class="loading ? 'tw-skloader' : 'tw-bg-red-400'" v-text="loading ? '' : '15/04'">
      </div>
      <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-20 tw-w-20 tw-rounded-lg"
           :class="loading ? 'tw-skloader' : 'tw-bg-red-400'" v-text="loading ? '' : '17/04'">
      </div>
      <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-20 tw-w-20 tw-rounded-lg"
           :class="loading ? 'tw-skloader' : 'tw-bg-red-400'" v-text="loading ? '' : '23/04'">
      </div>
    </div>


    <p class="tw-font-bold tw-text-xl tw-text-[#425c59] tw-mb-4 tw-px-4">Meus Boletos</p>
    <!-- List of expenses -->
    <div class="tw-my-2 tw-overflow-y-auto">
      <div class="tw-grid tw-grid-cols-1 tw-gap-2 tw-px-4">
        <template v-for="expense in expenses">
          <ExpenseCard :expense="expense" :loading="loading"></ExpenseCard>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  head: {
    title: 'Dashboard',
  },
  mounted() {
    this.user.name = this.$auth.user.name;
    this.getExpenses()
  },
  data() {
    return {
      loading: true,
      user: {
        name: '',
      },
      expenses: [...Array(200).keys()],
    }
  },
  methods: {
    async getExpenses() {
      this.$axios.get('/invoices/expenses?status=pending').then(({data}) => {
        setTimeout(() => {
          // this.expenses = data.data;
          // this.loading = false;
        }, 5000);
      }).catch(error => {
        $nuxt.$emit('snackbar', error.response.data.message, 'black');
      });
    },
  },
}
</script>
