<template>
  <div class="tw-h-full tw-bg-white tw-w-full tw-px-4 tw-overflow-hidden">
    <Navbar title="Faturas"></Navbar>
    <!-- filters -->
    <!-- list invoices -->
    <div class="tw-grid tw-grid-cols-1 tw-gap-4">
      <template v-for="(invoice, index) in invoices">
        <InvoiceCard :key="index" :title="invoice.title" :status="invoice.status" :loading="loading"></InvoiceCard>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'faturas',
  head: {
    title: 'Faturas',
  },
  data() {
    return {
      loading: true,
      invoices: [...Array(10).keys()],
    }
  },
  mounted() {
    this.getInvoices();
  },
  methods: {
    getInvoices() {
      setTimeout(() => {
        this.invoices = [
          {
            id: 1,
            title: 'Jan/2022',
            status: 'paid',
          },
          {
            id: 2,
            title: 'Fev/2022',
            status: 'overdue',
          },
          {
            id: 3,
            title: 'Mar/2022',
            status: 'opened',
          }
        ];
        this.loading = false;
      }, 2000)
    },
  }
}
</script>
