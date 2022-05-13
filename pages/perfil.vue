<template>
  <div class="tw-h-full tw-bg-white tw-w-full tw-px-4 tw-overflow-hidden">

    <!-- Title Page -->
    <Navbar title="Perfil"></Navbar>

    <!-- Avatar -->
    <div class="tw-flex tw-flex-col tw-items-center tw-my-4">
      <div class="tw-skloader tw-w-28 tw-h-28 tw-rounded-full"></div>
      <div class="tw-flex tw-flex-col tw-items-center tw-mt-4 tw-space-y-2">
        <div class="tw-skloader tw-w-20 tw-h-5 tw-rounded-full"></div>
        <div class="tw-skloader tw-w-28 tw-h-4 tw-rounded-full"></div>
      </div>
    </div>

    <!-- List options -->
    <div class="tw-flex tw-flex-col tw-my-2 tw-h-80 tw-overflow-y-scroll">
      <div v-for="item in items" :key="item" class="tw-skloader tw-h-12 tw-my-2">&nbsp;&nbsp;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'perfil',
  head: {
    title: 'Perfil',
  },
  data() {
    return {
      items: [...Array(5).keys()],
    }
  },
}
</script>
