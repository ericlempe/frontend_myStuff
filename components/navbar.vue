<template>
  <div class="tw-flex tw-flex-row tw-justify-between tw-my-6">
      <span class="tw-font-bold tw-text-2xl tw-text-[#6a8684]">
        <NuxtLink v-if="route !== ''" :to="route">
          <v-icon color="#6a8684">mdi-chevron-left</v-icon>
        </NuxtLink>
      </span>
    <span class="tw-font-bold tw-text-2xl tw-text-[#6a8684]">{{ title }}</span>
    <span></span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    route: {
      type: String,
      default: ''
    }
  }
}
</script>
