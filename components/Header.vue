<template lang="pug">
header#mainHeader
  nav.navbar
    .content-row-space-left.scroll-x(v-if="UserStore.footerGenreNum == 1")
      div
        .button.is-rounded.is-large.my-2.mx-4.p-5(@click="UserStore.setHeaderNum(0)" :class="[UserStore.headerGenreNum == 0 ? 'is-selected-orange' : 'navBerBtn']")
          span.icon.is-large
            i.fa-lg.far.fa-heart(style="color: #ffffff;")
        p おすすめ
      div
        .button.is-rounded.is-large.my-2.mx-4.p-5(@click="UserStore.setHeaderNum(1)" :class="[UserStore.headerGenreNum == 1 ? 'is-selected-orange' : 'navBerBtn']")
          span.icon.is-large
            i.fa-lg.fas.fa-beer-mug-empty(style="color: #ffffff;")
        p ハイボール
      div
        .button.is-rounded.is-large.my-2.mx-4.p-5(@click="UserStore.setHeaderNum(2)" :class="[UserStore.headerGenreNum == 2 ? 'is-selected-orange' : 'navBerBtn']")
          span.icon.is-large
            i.fa-lg.fas.fa-whiskey-glass(style="color: #ffffff;")
        p 日本酒
      div
        .button.is-rounded.is-large.my-2.mx-4.p-5(@click="UserStore.setHeaderNum(3)" :class="[UserStore.headerGenreNum == 3 ? 'is-selected-orange' : 'navBerBtn']")
          span.icon.is-large
            i.fa-lg.fas.fa-wine-bottle(style="color: #ffffff;")
        p ワイン
      div
        .button.is-rounded.is-large.my-2.mx-4.p-5(@click="UserStore.setHeaderNum(4)" :class="[UserStore.headerGenreNum == 4 ? 'is-selected-orange' : 'navBerBtn']")
          span.icon.is-large
            i.fa-lg.fas.fa-mug-saucer(style="color: #ffffff;")
        p ソフト

    .content-row-space-left.scroll-x(v-else)
      div
        .button.is-rounded.is-large.my-2.mx-4.p-5(@click="UserStore.setHeaderNum(0)" :class="[UserStore.headerGenreNum == 0 ? 'is-selected-orange' : 'navBerBtn']")
          span.icon.is-large
            i.fa-lg.far.fa-heart(style="color: #ffffff;")
        p おすすめ
      div
        .button.is-rounded.is-large.my-2.mx-4.p-5(@click="UserStore.setHeaderNum(1)" :class="[UserStore.headerGenreNum == 1 ? 'is-selected-orange' : 'navBerBtn']")
          span.icon.is-large
            i.fa-lg.fas.fa-dove(style="color: #ffffff;")
        p 名物〇〇
      div
        .button.is-rounded.is-large.my-2.mx-4.p-5(@click="UserStore.setHeaderNum(2)" :class="[UserStore.headerGenreNum == 2 ? 'is-selected-orange' : 'navBerBtn']")
          span.icon.is-large
            i.fa-lg.fas.fa-pizza-slice(style="color: #ffffff;")
        p 酒肴
      div
        .button.is-rounded.is-large.my-2.mx-4.p-5(@click="UserStore.setHeaderNum(3)" :class="[UserStore.headerGenreNum == 3 ? 'is-selected-orange' : 'navBerBtn']")
          span.icon.is-large
            i.fa-lg.fas.fa-seedling(style="color: #ffffff;")
        p 冷菜
      div
        .button.is-rounded.is-large.my-2.mx-4.p-5(@click="UserStore.setHeaderNum(4)" :class="[UserStore.headerGenreNum == 4 ? 'is-selected-orange' : 'navBerBtn']")
          span.icon.is-large
            i.fa-lg.fas.fa-cloud-meatball(style="color: #ffffff;")
        p 揚げもの
      div
        .button.is-rounded.is-large.my-2.mx-4.p-5(@click="UserStore.setHeaderNum(5)" :class="[UserStore.headerGenreNum == 5 ? 'is-selected-orange' : 'navBerBtn']")
          span.icon.is-large
            i.fa-lg.fas.fa-plate-wheat(style="color: #ffffff;")
        p 麺もの
</template>

<script setup lang="ts">
const UserStore = useUserStore();
</script>

<style lang="scss" scoped>
#mainHeader {
  width: 100%;
  z-index: 99990;
}
</style>
