<template lang="pug">
.font-sans.text-white.bg-grey-darkest.min-h-screen.pb-8
  site-header
  nuxt
</template>

<script>
import SiteHeader from '~/components/Header.vue'

export default {
  components: {
    SiteHeader
  }
}
</script>

<style lang="sass">
body
  max-width: 100vw
  overflow-x: hidden
.text-justify p:not(:first-child)
  text-indent: 2rem
a
  transition: color .25s, border-width .25s
</style>
