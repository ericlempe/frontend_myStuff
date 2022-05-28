<template>
  <div
    class="tw-flex tw-flex-row tw-justify-between tw-py-2 tw-px-2 tw-rounded-lg tw-bg-white tw-border tw-border-gray-300 hover:tw-border-gray-400 tw-shadow-md">
    <div class="tw-flex tw-flex-row tw-space-x-2">
      <div v-if="loading" class="tw-w-8 tw-h-8 tw-rounded-full tw-skloader"></div>
      <div class="tw-flex tw-flex-col tw-justify-start tw-space-y-1">
        <span class="tw-text-sm tw-font-semibold tw-text-gray-900" v-text="expense.name"
              :class="loading ? 'tw-w-28 tw-h-2 tw-skloader' : ''"></span>
        <span class="tw-text-xs tw-font-medium tw-text-gray-700" v-text="date"
              :class="loading ? 'tw-w-32 tw-h-2 tw-skloader' : ''"></span>
      </div>
    </div>
    <div class="" :class="loading ? 'tw-skloader tw-h-2 tw-w-6' : ''" v-text="value"></div>
  </div>
</template>
<script>
export default {
  props: {
    expense: {
      name: '',
      description: '',
      paid_in: '',
      expiration_day: '',
      value: '',
      expense_type: '',
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    date: function ({$dayjs}) {
      let data = "";
      if (this.expense.paid_in) {
        data = $dayjs(this.expense.paid_in).format('DD MMMM');
      } else {
        if (!this.loading) {
          data = $dayjs(this.expense.expiration_day).format('DD MMMM');
        }
      }
      return data;
    },
    value: function () {
      return this.expense.value ? 'R$' + this.expense.value : '';
    }
  },
  methods: {}
}
</script>
