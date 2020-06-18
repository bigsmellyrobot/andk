<template lang="pug">
nav.work-nav.fixed.pin-b.w-full
  .work-menu.flex.justify-center.absolute.pin-b(
    v-bind:class='{ showme: showMenu }'
    )
    ul.list-reset.bg-black-95.p-4.text-center
      li.block.py-2(
        v-for='w in work'
        )
        nuxt-link(
          class='text-white no-underline font-hairline border-b-0 hover:border-b-2'
          :to='"/work/" + w.slug'
          ) {{ w.title }}
      li.block.py-2
        nuxt-link(
          class='text-white no-underline border-b-0 hover:border-b-2'
          to='/work'
        ) Work Home
  .flex.bg-black-95.relative
    div(
      class='w-2/5 px-2 py-4'
      )
      nuxt-link.text-white.no-underline.font-hairline(:to='"/work/" + prev.slug')
        span.arrow-left
        span(class='hidden md:inline') {{ prev.title }}
    div(
      class='w-1/5 text-center flex justify-center'
      )
      button.self-center.p-1(
        title='Work Menu'
        v-on:click='showMenu = !showMenu'
        )
        .border-t.border-white.mb-1.w-4.mx-auto
        .border-t.border-white.mb-1.w-4.mx-auto
        .border-t.border-white.w-4.mx-auto
    div(
      class='w-2/5 px-2 py-4 text-right'
      )
      nuxt-link.text-white.no-underline.font-hairline(:to='"/work/" + next.slug')
        span(class='hidden md:inline') {{ next.title }}
        span.arrow-right
</template>

<script>
export default {
  props: {
    slug: {
      type: String
    },
    work: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data: function() {
    let indx = 0
    this.work.map((w, i) => {
      if(w.slug == this.slug) {
        indx = i
      }
    })
    return {
      showMenu: false,
      prev: this.work[indx > 0 ? indx - 1 : this.work.length - 1],
      next: this.work[indx < this.work.length - 1 ? indx + 1 : 0]
    }
  },
  watch: {
    '$route.path': function(e) {
      this.showMenu = false
    }
  }
}
</script>

<style lang="sass">
$border-size: .35rem
$spacing: .5rem
$menu-size: 3.1rem

.arrow-left:before,
.arrow-right:before
  content: ' '
  display: inline-block
  width: 0
  height: 0
  border-top: $border-size solid transparent
  border-bottom: $border-size solid transparent

.arrow-left:before
  margin-right: $spacing
  border-right: $border-size solid white

.arrow-right:before
  margin-left: $spacing
  border-left: $border-size solid white

.work-menu
  left: 50%
  margin-bottom: $menu-size
  transform: translate(-50%, calc(100% + #{$menu-size}))
  transition: transform .25s

  &.showme
    transform: translate(-50%, 0)
</style>
