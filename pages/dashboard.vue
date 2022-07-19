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
        <RadialBar v-if="!loading || series.length > 0" :series="series"/>
        <div v-else class="tw-h-24 tw-w-full"></div>
      </div>
    </div>

    <p class="tw-font-bold tw-text-xl tw-text-[#425c59] tw-my-2 tw-px-4">Próximos Vencimentos</p>
    <div class="tw-flex tw-flex-row tw-justify-evenly tw-my-2">
      <div v-for="nextPayment in nextPayments"
           class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-16 tw-w-16 tw-rounded-lg"
           :class="loading ? 'tw-skloader' : 'tw-bg-[#FECDA4] tw-text-[#425c59] tw-font-black tw-text-lg'"
           v-text="loading ? '' : nextPayment">
      </div>
    </div>

    <p class="tw-font-bold tw-text-xl tw-text-[#425c59] tw-mb-4 tw-px-4">Meus Boletos</p>
    <!-- List of expenses -->
    <div class="tw-my-2 tw-overflow-y-auto">
      <div class="tw-grid tw-grid-cols-1 tw-gap-2 tw-px-4">
        <template v-for="expense in expenses">
          <ExpenseCard :expense="expense" :loading="loading"></ExpenseCard>
        </template>
<!--        <div class="tw-flex tw-justify-center tw-items-end tw-h-40 tw-italic" v-else>-->
<!--          <h4>Nenhum boleto pendente.</h4>-->
<!--        </div>-->
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
    this.getExpenses();
    this.getNextPayments();
    this.getTotalExpense();
    setTimeout(() => {
      // this.loading = false;
    }, 4000);

  },
  data() {
    return {
      loading: true,
      series: [],
      user: {
        name: '',
      },
      expenses: [...Array(4).keys()],
      nextPayments: [...Array(3).keys()],
    }
  },
  methods: {
    async getExpenses() {
      let {data} = await this.$axios.get('/invoices/expenses?status=pending');
      // this.expenses = data;
    },
    async getNextPayments() {
      let {data} = await this.$axios.get('/invoices/next-dues');
      // this.nextPayments = data;
    },
    async getTotalExpense() {
      let {data} = await this.$axios.get('/invoices/total');
      this.series.push(data.vlrPorcentagem);
    }
  },
}
</script>
