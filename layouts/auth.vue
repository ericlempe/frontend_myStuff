<template>
  <v-app>
    <v-main light>
      <v-layout class="align-center justify-center">
        <Nuxt/>
      </v-layout>
    </v-main>
    <Snackbar/>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayout',
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}

.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}

.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}

.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}

.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}

.form-input .v-text-field__slot input, label {
  color: #6a8684 !important;
}

.nuxtlink-registrar {
  color: #FECDA4 !important;
}

.nuxtlink-esqueceu-senha {
  color: #6b7280 !important;
}
</style>

