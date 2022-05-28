<template>
  <v-app class="relative">
    <v-main app>
      <Nuxt/>
    </v-main>
    <v-bottom-navigation height="70" v-model="value" grow fixed>
      <div class="tw-relative tw-flex tw-justify-around tw-flex-1 tw-py-2">

        <div class="tw-flex tw-flex-row tw-justify-between tw-mr-4">
          <BottomNavigatorLink icon="mdi-home" route="dashboard"/>
          <BottomNavigatorLink icon="mdi-receipt" route="faturas"/>
        </div>

        <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-[#425c59] tw-w-14 tw-h-14 tw-absolute -tw-top-4 tw-right-30 tw-rounded-full">
          <Payment/>
        </div>

        <div class="tw-flex tw-flex-row tw-justify-between tw-ml-4">
          <BottomNavigatorLink icon="mdi-chart-arc" route="analitico"/>
          <BottomNavigatorLink icon="mdi-account" route="perfil"/>
        </div>
      </div>
    </v-bottom-navigation>
  </v-app>
</template>

<script>

export default {
  name: 'DefaultLayout',
  data() {
    return {
      value: 'recent',
      btnColor: '#425c59'
    }
  },
}
</script>
