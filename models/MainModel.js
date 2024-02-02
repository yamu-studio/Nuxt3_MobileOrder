/**
 * 継承元のクラス
 * ・あくまで共通関数の宣言のみ
 */
export class MainModel {
  constructor() {}
  /**
   * DB → モデルへ
   * ※firebaseの取得時に使用する
   *
   * ・含まれるkeyがあるもののみ取得
   * ・Model内に項目がない → 取得せずスキップする
   * ・DB側にその項目がない → そもそも通らない(スキップ)
   */
  setData(mapData) {
    // 含まれているkeyを取得
    const keys = Object.keys(mapData);
    keys.forEach((key) => {
      if (mapData[key] != undefined && this[key] != undefined) {
        this[key] = mapData[key];
      }
    });
  }
  /**
   * 特殊系 - apiから取得する時
   */
  setDataForApi(mapData) {
    // 含まれているkeyを取得
    const keys = Object.keys(mapData);
    keys.forEach((key) => {
      // APIレスポンスに応じて変更
    });
  }
}
