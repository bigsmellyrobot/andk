<template lang="pug">
  div
    h3.w-full.text-3xl.font-hairline.mb-4 {{ work.title }}
    .max-w-xl.mb-4
      .relative(
        v-if='work.hero.type == "iframe"'
        style='padding-top:56.25%'
        )
        iframe.absolute.pin.w-full.h-full.bg-black(:src='work.hero.src')
    div.text-justify.leading-normal.max-w-md.mb-4
      p.font-hairline(
        v-for='p in work.content'
        ) {{ p }}
    .max-w-md(v-if='work.links.length > 0')
      h4.text-xl.mb-2 Read More
      ul.list-reset
        li.mb-2(
          v-for='l in work.links'
          )
          a(
            class='text-white border-b-0 hover:border-b-2 no-underline font-hairline'
            target='_blank'
            :href='l.url'
            ) {{ l.title }}
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      default: function() {
        return {}
      }
    }
  }
}
</script>
