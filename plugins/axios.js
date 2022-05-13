export default function ({$axios, $nuxt, redirect}) {
  $axios.onError((error) => {
    if (error.response) {
      const code = error.response.status;
      if (code === 401) {
        redirect('/login');
      }
    } else if (error.request) {
      $nuxt.$emit('snackbar', 'Conexão com o servidor perdida');
    } else {

    }
  });
}
