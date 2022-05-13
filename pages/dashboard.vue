<template>
  <div class="tw-h-full tw-bg-white tw-w-full tw-px-4 tw-overflow-hidden">

    <!-- Welcome user and icon notification -->
    <div class="tw-flex tw-flex-row tw-justify-between tw-items-center tw-my-4">
      <div class="tw-flex tw-flex-col tw-space-y-2">
        <div class="tw-skloader tw-w-16 tw-h-4 tw-rounded-full"></div>
        <div class="tw-skloader tw-w-40 tw-h-4 tw-rounded-full"></div>
      </div>
      <div class="tw-skloader tw-w-8 tw-h-8 tw-rounded-full"></div>
    </div>

    <!-- Content -->
    <div class="tw-flex tw-my-2 tw-h-36 tw-skloader"></div>

    <!-- Actions-->
    <div class="tw-flex tw-flex-row tw-justify-around tw-my-2">

      <div class="tw-flex tw-flex-col tw-items-center tw-p-2 tw-space-y-2">
        <div class="tw-skloader tw-w-10 tw-h-10 tw-rounded-full"></div>
        <div class="tw-skloader tw-w-20 tw-h-2 tw-rounded-full"></div>
      </div>
      <div class="tw-flex tw-flex-col tw-items-center tw-p-2 tw-space-y-2">
        <div class="tw-skloader tw-w-10 tw-h-10 tw-rounded-full"></div>
        <div class="tw-skloader tw-w-20 tw-h-2 tw-rounded-full"></div>
      </div>
      <div class="tw-flex tw-flex-col tw-items-center tw-p-2 tw-space-y-2">
        <div class="tw-skloader tw-w-10 tw-h-10 tw-rounded-full"></div>
        <div class="tw-skloader tw-w-20 tw-h-2 tw-rounded-full"></div>
      </div>
    </div>


    <!-- List of expenses -->
    <div class="tw-flex tw-flex-col tw-my-2 tw-h-72 tw-overflow-y-scroll">
      <div v-for="item in items" :key="item" class="tw-skloader tw-h-12 tw-my-2">&nbsp;&nbsp;</div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'dashboard',
  head: {
    title: 'Dashboard',
  },
  data() {
    return {
      items: [...Array(30).keys()],
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      await this.$router.push('/');
    },
  },
}
</script>

