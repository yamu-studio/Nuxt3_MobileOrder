<template lang="pug">
footer.Footer 
  p.has-text-white.orderListBar.p-3(v-if="UserStore.orderCount > 0" @click="navigateTo(`/foods/checkOrder`);") 注文リストを見る {{ UserStore.orderCount }}
  nav.navbar
    .content-row-space-around
      div
        .button.is-rounded.is-large.my-2.mx-4.p-5(@click="changeFootNum(0)" :class="[UserStore.footerGenreNum == 0 ? 'is-selected-white' : 'navBerFooterBtn']")
          span.icon.is-large
            i.fa-lg.fas.fa-utensils(style="color: #000000;")
        p.has-text-white 食事
      div
        .button.is-rounded.is-large.my-2.mx-4.p-5(@click="changeFootNum(1)" :class="[UserStore.footerGenreNum == 1 ? 'is-selected-white' : 'navBerFooterBtn']")
          span.icon.is-large
            i.fa-lg.fas.fa-martini-glass-citrus(style="color: #000000;")
        p.has-text-white 飲み物
      div
        .button.is-rounded.is-large.my-2.mx-4.p-5(@click="changeFootNum(2)" :class="[UserStore.footerGenreNum == 2 ? 'is-selected-white' : 'navBerFooterBtn']")
          span.icon.is-large
            i.fa-lg.fas.fa-receipt(style="color: #000000;")
        p.has-text-white 伝票/会計
</template>

<script setup lang="ts">
const UserStore = useUserStore();
function changeFootNum(i: number) {
  UserStore.setFooterNum(i);
  if (i == 2) {
    navigateTo("/voucher");
  } else if (i == 1) {
    navigateTo("/drinks");
  } else {
    navigateTo("/");
  }
}
</script>

<style scoped lang="scss">
.Footer {
  width: 100%;
}
.orderListBar {
  background-color: rgb(244, 156, 98);
}
</style>
