<template>
  <div
    class="tw-relative tw-rounded-lg tw-border tw-border-gray-300 tw-bg-white tw-px-6 tw-py-5 tw-shadow-xl tw-flex tw-items-center tw-space-x-3 hover:tw-border-gray-400">
    <p v-if="loading" class="tw-text-sm tw-font-medium tw-text-gray-900 tw-w-28 tw-h-6 tw-skloader"></p>
    <p v-else class="tw-text-sm tw-font-medium tw-text-gray-900 tw-w-28 tw-h-6">{{ title }}</p>
    <div v-if="loading" class="tw-absolute tw-top-1 tw-right-1 tw-w-10 tw-h-10 tw-rounded-full tw-skloader"></div>
     <img v-else :src="getImageByStatus(status)" class="tw-absolute tw-top-1 tw-right-1 tw-w-10 tw-h-10 tw-rounded-full" alt="status-invoice">
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getImageByStatus(status) {
      let icon;
      switch (status) {
        case 'opened':
          icon = 'opened.png';
          break;
        case 'paid':
          icon = 'paid.png';
          break;
        case 'overdue':
          icon = 'overdue.png';
          break;
      }
      return require("@/assets/img/" + icon);
    }
  }
}
</script>
