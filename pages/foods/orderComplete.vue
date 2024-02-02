<template lang="pug">
.basicView.container
  //- 参考にしたもの↓
  //- //- 背景においしそうは画像
  //- figure.image#backImg
  //-   img(src="https://bulma.io/images/placeholders/128x128.png")
  //- p.title ご注文ありがとうございます！
  //- p.subtitle ご用意いたしますので少々お待ちください

  //- ここは店員の顔
  .content-row-space-left.p-2
    figure.image.is-96x96
      img.is-rounded(src="https://bulma.io/images/placeholders/128x128.png")
    .balloon1-left 
      p.subtitle.has-text-black.has-text-left.is-6 ご注文ありがとうございます！
  
  p.title.pt-6 他にもおすすめたくさん！ 
  .columns.is-multiline.is-mobile
    .column.is-half.p-0(v-for="food in foodList" :key="food.key")
      FoodCard(:food="food")
  
  NuxtLink(:to="'/'")
    button.button メニューを開く
</template>

<script setup lang="ts">
import { FoodModel } from "~/models/food/FoodModel";

// 仮：おすすめ商品情報リスト
const food = new FoodModel();
food.foodID = 1;
food.name = "商品名";
const foodList = ref([
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
]);
</script>

<style lang="scss" scoped>
#backImg {
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>
