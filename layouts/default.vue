<template lang="pug">
.font-sans.min-h-screen.pb-8
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

<style lang="scss">
@import 'assets/css/settings.scss';
body {
  max-width: 100vw;
  overflow-x: hidden;
  background: $gray;

  &, a {
    color: $white;
  }

  .gray-95 {
    background: $gray-95;
  }

  .nav-btn {
    border-color: $white;
  }

  @media (prefers-color-scheme: light) {
    background: $white2;
    &, a {
      color: $gray;
    }
    .gray-95 {
      background: $white-95;
    }
    .nav-btn {
      border-color: $gray;
    }
  }
}
.text-justify p:not(:first-child) {
  text-indent: 2rem
}
a {
  transition: color .25s, border-width .25s
}
.gray-95 {
  background: $gray-95;
}
</style>
