<template>
  <v-app>
    <v-main>
      <Nuxt/>
    </v-main>

    <v-footer padless>
      <GrowBottomNavigation color="#425c59" :options="options" v-model="selected" replaceRoute>
        <template #icon="{ props }">
          <v-icon>{{ props.icon }}</v-icon>
        </template>
        <template #title="{ props }"><b>{{ props.title }}</b></template>
      </GrowBottomNavigation>
    </v-footer>
  </v-app>
</template>

<script>
import {GrowBottomNavigation} from "bottom-navigation-vue";

export default {
  components: {GrowBottomNavigation},
  name: 'DefaultLayout',
  data() {
    return {
      selected: 1,
      options: [
        {id: 1, icon: 'mdi-home', title: 'Início', color: '#FECDA4', path: {name: "dashboard"}},
        {id: 2, icon: 'mdi-wallet', title: 'Faturas', color: '#FECDA4', path: {name: "faturas"}},
        {id: 3, icon: 'mdi-chart-pie', title: 'Analítico', color: '#FECDA4', path: {name: "dashboard"}},
        {id: 4, icon: 'mdi-account', title: 'Perfil', color: '#FECDA4', path: {name: "perfil"}},
      ],
    }
  },
  computed: {
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      await this.$router.push('/login');
    },
    novo() {
      this.$router.push('/novo');
    },
    config() {
      this.$router.push('/configuracoes');
    },
    dashboard() {
      this.$router.push('/dashboard');
    },
  },
}
</script>
