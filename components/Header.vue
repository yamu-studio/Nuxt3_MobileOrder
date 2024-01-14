<template lang="pug">
header#mainHeader
  nav.navbar
    .content-row-space-left#navItems
      div
        .button.is-white.is-rounded.is-large.is-responsive.mt-3.mx-4
          span.icon.is-large
            i.fa-2x.fas.fa-video
        p おすすめ
      div
        .button.is-white.is-rounded.is-large.is-responsive.mt-3.mx-5
          span.icon.is-large
            i.fa-2x.fas.fa-video
        p 名物〇〇
      div
        .button.is-white.is-rounded.is-large.is-responsive.mt-3.mx-5
          span.icon.is-large
            i.fa-2x.fas.fa-video
        p 酒肴
      div
        .button.is-white.is-rounded.is-large.is-responsive.mt-3.mx-5
          span.icon.is-large
            i.fa-2x.fas.fa-video
        p 冷菜
      div
        .button.is-white.is-rounded.is-large.is-responsive.mt-3.mx-5
          span.icon.is-large
            i.fa-2x.fas.fa-video
        p 揚げもの
      div
        .button.is-white.is-rounded.is-large.is-responsive.mt-3.mx-5
          span.icon.is-large
            i.fa-2x.fas.fa-video
        p 麺もの

</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#mainHeader {
  // position: fixed;
  // height: 70px;
  width: 100%;
  z-index: 99990;
}
#navItems {
  overflow-x: scroll;
  // .button {
  //   flex-shrink: 0;
  // }
}
</style>
