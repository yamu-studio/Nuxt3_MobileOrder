<template lang="pug">
.basicView.container
  BackButton
  
  .container.p-4.pt-6
    p.title.is-4 お会計内容
    p.subtitle.is-6 以下の内容でお支払いは完了しています。
  
  .box.content-row-space-between.m-3#brownBack
    p.title.is-5.m-0 お会計
    p.title.is-5 ￥{{ sumAmount.toLocaleString() }}
  
  .box.m-3#brownBack
    p.title.is-5.border-bottom-white-light お支払い方法
    .content-row-space-between
      p.subtitle.m-0 {{ $constants.getCashLabel(table.cashCD) }}
      p.title.is-5.m-0 ￥{{ table.amount.toLocaleString() }}
  p.subtitle.is-size-7.has-text-right.px-3 １人当たり ￥1,000(小数点切り上げ) / ２名様

  //- 注文のリスト
  .box.m-3
    .border-bottom-light(v-if="table.orderedList > 0")
      .content-row-space-between(v-for="order in table.orderedList")
        p.title.has-text-black.is-5 {{ order.food.name }}
        .content-row-space-around
          p.title.has-text-black.is-5.px-6 {{ order.count }}
          p.title.has-text-black.is-5 {{ order.foodAmount.amount * order.count }}
    p.subtitle.has-text-black(v-else) まだお会計はありません。
</template>

<script setup lang="ts">
import { OrderModel } from "~/models/order/OrderModel";
import { TableModel } from "~/models/table/TableModel";

const UserStore = useUserStore();

// 仮：卓の注文と決済情報
const table = new TableModel();
table.amount = 10000;
table.orderedList = [new OrderModel(), new OrderModel(), new OrderModel()];

const sumAmount = computed(() =>
  table.orderedList.reduce(function (sum, order) {
    return sum + order.foodAmount.amount;
  }, 0)
);
</script>

<style lang="scss" scoped>
#brownBack {
  background-color: rgb(79, 64, 64);
}
</style>
