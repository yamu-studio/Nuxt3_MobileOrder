import { MainModel } from "../MainModel";

export class FoodModel extends MainModel {
  constructor() {
    super();
    this.foodID = 0;

    this.name = "";
    this.content =
      "商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明商品の説明";

    this.img = "/demo/food3.jpeg";

    // 料金の部分 → いろんな場合がある
    // ・料金のみ
    // ・料金と説明
    // 　→ex)2~3人前 1000円
    // ・料金と説明が複数
    // 　→ex)通常 500円 メガ 800円
    // ⇒ 複数に合わせる
    this.amountList = [];
  }
}
