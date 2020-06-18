<template lang="pug">
.main-body.font-sans.text-white.min-h-screen
  site-header
  main.p-2.pt-16.max-w-sm
    header.mb-8
      h1.text-4xl.font-hairline 404
    p.font-hairline I give up. Whatever you’re looking for, it’s not here.
      br
      nuxt-link.font-hairline(to='/') Go home
      | .
</template>

<script>
import SiteHeader from '~/components/Header.vue'

export default {
  components: {
    SiteHeader
  }
}
</script>

<style lang="scss" scoped>
.main-body {
  background: #000 url('/images/404.jpg') no-repeat left bottom;
}
</style>
