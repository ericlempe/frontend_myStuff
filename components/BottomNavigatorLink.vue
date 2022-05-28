<template>
  <div class="tw-flex" :class="this.route === this.$route.name ? 'tw-w-full' : ''">
    <NuxtLink :to="'/' + route" :class="classLinkObject">
      <span :class="classSpanObject">
           <v-icon :color="route === this.$route.name ? '#FECDA4' : '#425c59'" large>{{ icon }}</v-icon>
      </span>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: {
    route: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
  },
  computed: {
    classLinkObject: function () {
      return {
        'tw-flex tw-items-center tw-justify-center tw-text-center tw-mx-auto tw-px-4 tw-py-2': true,
        'tw-w-full tw-text-[#FECDA4]': this.route === this.$route.name
      }
    },
    classSpanObject: function () {
      return {
        'tw-block tw-px-1 tw-py-1 tw-rounded-full': true,
      }
    }
  },
}
</script>
