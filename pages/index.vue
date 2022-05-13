<template>
  <div
    class="tw-h-screen tw-flex tw-items-center tw-justify-around tw-flex-col tw-bg-[#425c59] tw-w-screen tw-px-6 tw-pt-4">
    <v-carousel
      :continuous="true"
      :cycle="cycle"
      :interval="interval"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="500"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet color="#425c59" height="100%" tile>
          <div class="tw-flex tw-flex-col tw-items-center">
            <img class="tw-w-48 wt-h-48" :src="require(`@/assets/img/${slide.image}`)" alt="welcome">
            <p class="tw-font-mono tw-text-[#FECDA4] tw-font-bold tw-text-2xl tw-whitespace-pre-line tw-pb-0"
               :class="slide.titleTextAlign">
              {{ slide.title }}
            </p>
            <p class="tw-font-mono tw-text-[#6a8684] tw-px-4 tw-pt-0" :class="slide.subtitleTextAlign">
              {{ slide.subtitle }}
            </p>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <div class="tw-flex tw-items-center tw-flex-col">
      <v-btn elevation="5" x-large color="#FECDA4" to="/login" rounded>
        <span class="tw-text-[#425c59] tw-font-bold">
          Começar
          <v-icon color="#425c59">mdi-arrow-right</v-icon>
        </span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  auth: 'guest',
  name: 'index',
  data() {
    return {
      cycle: true,
      interval: 4000,
      slides: [
        {
          image: 'welcome-step-2.png',
          title: 'Controle seu dinheiro',
          titleTextAlign: 'tw-text-center',
          subtitle: 'Analise seus gastos e acompanhe suas despesas',
          subtitleTextAlign: 'tw-text-left'
        },
        {
          image: 'welcome-step-1.png',
          title: 'Organize suas despesas com facilidade',
          titleTextAlign: 'tw-text-center',
          subtitle: 'Crie sua conta e comece a usar o nosso sistema de controle financeiro.',
          subtitleTextAlign: 'tw-text-left'
        },
      ],
    }
  },
}
</script>
<style>
.link-entrar {
  color: #FFFFFF !important;
}
</style>
