<template>
  <div class="tw-overflow-hidden tw-px-4">

    <!-- Title Page -->
    <Navbar title="Configurações"></Navbar>

    <!-- Avatar -->
    <div class="tw-flex tw-flex-col tw-items-center tw-my-4">
      <v-avatar color="#425c59" size="96">
        <span class="tw-text-white tw-font-extrabold tw-text-4xl">
          {{ user.name.toString().toUpperCase().substring(0, 1) }}
        </span>
      </v-avatar>
      <div class="tw-flex tw-flex-col tw-items-center tw-mt-4 tw-space-y-2">
        <p class="tw-leading-2 tw-text-center">
          <span class="tw-font-extrabold tw-text-[#425c59]">{{ user.name }}</span>
          <br>
          <span class="tw-font-medium tw-text-[#6a8684]">{{ user.email }}</span>
        </p>
      </div>
    </div>

    <!-- List options -->
    <div class="tw-flex tw-flex-col tw-my-2 tw-h-80 tw-overflow-y-scroll">
      <div v-for="item in items" :key="item.id">
        <NuxtLink :to="item.route">
          <div
            class="tw-flex tw-cursor-pointer tw-flex-row tw-justify-between tw-items-center tw-rounded-lg tw-border tw-border-gray-300 tw-shadow-md tw-h-12 tw-my-2 tw-px-2">
            <span class="tw-font-medium tw-text-[#6a8684]">
              <v-icon v-if="item.icon !== undefined">{{ item.icon }}</v-icon>
              {{ item.title }}
            </span>
            <v-icon>mdi-chevron-right</v-icon>
          </div>
        </NuxtLink>
      </div>
      <!-- logout-->
      <div
        @click="logout"
        class="tw-flex tw-cursor-pointer tw-flex-row tw-justify-between tw-items-center tw-rounded-lg tw-border tw-border-gray-300 tw-shadow-md tw-h-12 tw-my-2 tw-px-2">
            <span class="tw-font-medium tw-text-[#6a8684]">
              <v-icon>mdi-exit-run</v-icon>
              Sair do aplicativo
            </span>
        <v-icon>mdi-chevron-right</v-icon>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'perfil',
  head: {
    title: 'Perfil',
  },
  mounted() {
    this.user.name = this.$auth.user.name;
    this.user.email = this.$auth.user.email;
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
      },
      items: [
        {id: 1, title: "Editar Perfil", route: "#"},
        {id: 2, title: "Minhas Faturas", route: "/faturas"},
        {id: 3, title: "Minhas Despesas", route: "/despesas"},
        {id: 4, title: "Configurações", route: "#"},
      ],
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  }
}
</script>
