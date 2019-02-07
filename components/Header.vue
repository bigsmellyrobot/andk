<template lang="pug">
  nav.main-nav.z-10(
    class='fixed md:h-full'
    v-bind:class='{ showme: showMenu }'
    )
    button.absolute.w-10.h-10.p-2.text-white.bg-black-95.cursor-pointer.outline-none.rounded-br-lg(
      v-on:click='showMenu = !showMenu'
      title='Main Menu'
      )
      .border-t.border-white.mb-1.w-4.mx-auto
      .border-t.border-white.w-4.mx-auto
    ul.h-full.list-reset.w-64.p-2.pb-6.bg-black-95.rounded-br-lg
      li.p-2
        nuxt-link.text-white.no-underline(
          to='/'
          ) &lt;ak/&gt;
      li.p-2(
        v-for='l in links'
        )
        nuxt-link(
          class='text-white border-b-0 hover:border-b-2 font-hairline text-2xl lg:text-3xl no-underline'
          v-bind:class='{ "border-b-4 hover:border-b-4": current == l.to }'
          :to='l.to'
          v-on:click='showMenu = false'
          ) {{ l.name }}
</template>

<script>
import Logo from '~/components/Logo.vue'

let current = typeof window == 'undefined' ? null : window.location.pathname

export default {
  components: {
    Logo
  },
  data: function() {
    return {
      links: [
        {
          to: '/',
          name: 'About'
        },
        {
          to: '/experience',
          name: 'Experience'
        },
        {
          to: '/work',
          name: 'Work'
        },
        {
          to: '/contact',
          name: 'Contact'
        },
        {
          to: '/error',
          name: 'Error'
        }
      ],
      showMenu: false,
      current: current
    }
  },
  watch: {
    '$route.path': function(e) {
      this.current = e
      this.showMenu = false
    }
  }
}
</script>

<style lang="sass">
.main-nav
  transform: translateX(-16rem)
  transition: transform .25s

  button
    left: 100%
    div
      transition: transform .45s, opacity .25s

  &.showme
    transform: translateX(0)

    button
      div
        &:first-child
          transform: translateY(2.5px) rotate(225deg)
        &:last-child
          transform: translateY(-2.5px) rotate(315deg)
        &:not(:last-child):not(:first-child)
          opacity: 0
</style>
