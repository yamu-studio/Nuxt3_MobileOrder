import { OrderModel } from "~/models/order/OrderModel";

/**
 * ユーザー情報を格納する
 * → 表示サイズやdevチェックも入れちゃった
 */
export const useUserStore = defineStore("UserStore", {
  state: () => ({
    //ユーザ情報
    _authUser: null,
    _windowWidth: 768,

    _headerGenreNum: 0,
    _footerGenreNum: 0,
    _isDev: true,

    _orderList: <OrderModel[]>[],
  }),
  actions: {
    setAuthUser(param: any) {
      this._authUser = param;
    },
    setWidth(param: number) {
      this._windowWidth = param;
    },
    setHeaderNum(param: number) {
      this._headerGenreNum = param;
      if (param == 0) {
        if (this._footerGenreNum == 1) {
          navigateTo("/drinks");
        } else {
          navigateTo("/");
        }
      } else {
        navigateTo(
          `/foods?genre=${param}&is_drink=${this._footerGenreNum == 1}`
        );
      }
    },
    setFooterNum(param: number) {
      this._footerGenreNum = param;
    },
    setDev(param: boolean) {
      this._isDev = param;
    },

    addOrder(param: OrderModel) {
      this._orderList.push(param);
    },
    clearOrder() {
      this._orderList = [];
    },
    cleanData() {
      this._authUser = null;
      this._windowWidth = 768;
    },
  },
  getters: {
    isLogin: (state) => {
      return state._authUser != null;
    },

    isMobile: (state) => state._windowWidth <= 767,
    isWideScreen: (state) => 1312 <= state._windowWidth,
    headerGenreNum: (state) => state._headerGenreNum,
    footerGenreNum: (state) => state._footerGenreNum,
    orderList: (state) => state._orderList,
    orderCount: (state) => state._orderList.length,
    isDev: (state) => state._isDev,
    width: (state) => state._windowWidth,
    authUser: (state) => state._authUser,
  },
  // persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
