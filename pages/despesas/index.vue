<template>
  <div class="tw-h-full tw-bg-white tw-w-full tw-px-4 tw-overflow-hidden">
    <Navbar title="Despesas"></Navbar>
    <!-- filters -->
    <!-- list invoices -->
    <div class="tw-grid tw-grid-cols-1 tw-gap-4">
      <template v-for="expense in expenses">
        <ExpenseCard :expense="expense" :loading="loading"></ExpenseCard>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'despesas',
  head: {
    title: 'Despesas',
  },
  data() {
    return {
      loading: true,
      expenses: [...Array(10).keys()],
    }
  },
  mounted() {
    this.getExpenses();
  },
  methods: {
    async getExpenses() {
      this.$axios.get('/expenses').then(({data}) => {
        this.expenses = data;
      }).catch(error => {
        $nuxt.$emit('snackbar', error.response.data.message, 'black');
      }).finally(() => {
        this.loading = false;
      });
    },
  }
}
</script>
