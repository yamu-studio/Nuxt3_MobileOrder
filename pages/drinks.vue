<template lang="pug">
.basicView.container
  .content-row-space-left.scroll-x
    MainFoodCard(v-for="food in foodList" :key="food.key" :food="food")

  p.title.has-text-left.pt-3 店長のおすすめ
  .content-row-space-left.scroll-x
    FoodCard.isMini(v-for="food in foodList" :key="food.key" :food="food")
  
  p.title.has-text-left.pt-3 最初の一杯
  .columns.is-multiline.is-mobile.is-gapless
    .column.is-half(v-for="food in foodList" :key="food.key")
      FoodCard(:food="food")
</template>

<script setup lang="ts">
import { FoodModel } from "~/models/food/FoodModel";

// 仮：商品情報リスト
const food = new FoodModel();
food.foodID = 1;
food.name = "ドリンク名";
food.img = "/demo/drink_thumb1.jpeg";

const foodList = ref([food, food, food, food, food, food, food]);
</script>
