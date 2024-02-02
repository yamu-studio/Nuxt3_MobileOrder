<template lang="pug">
.basicView.container

  //- ここは店員の顔
  EmployeeComent.p-2(
    image="https://bulma.io/images/placeholders/128x128.png" 
    coment="ご注文はこちらでよろしいでしょうか？")

  //- .content-row-space-left.p-2
  //-   figure.image.is-96x96
  //-     img.is-rounded(src="https://bulma.io/images/placeholders/128x128.png")
  //-   .balloon1-left 
  //-     p.subtitle.has-text-black.has-text-left.is-6 ご注文はこちらでよろしいでしょうか？

  //- ここリスト
  .box.m-3
    .border-bottom-light(v-if="UserStore.orderCount > 0")
      .content-row-space-between(v-for="order in UserStore.orderList")
        p.title.has-text-black.is-5 {{ order.food.name }}
        .content-row-space-around
          p.title.has-text-black.is-5.px-6 {{ order.count }}
          p.title.has-text-black.is-5 {{ order.foodAmount.amount * order.count }}
    p.subtitle.has-text-black(v-else) まだご注文はありません。
  
  button.button.orderBtn.p-5(:disabled="UserStore.orderCount == 0" @click="sendOrder") {{ UserStore.orderCount }}点の注文を送信する
</template>

<script setup lang="ts">
const UserStore = useUserStore();
function sendOrder() {
  // 本来はバックエンドへ注文情報をサーバー側に送信して完了したらorderListを初期化
  UserStore.clearOrder();
  navigateTo("/foods/orderComplete");
}
</script>

<style lang="scss" scoped>
#checkOrderView {
  min-height: 88vh;
}
</style>
