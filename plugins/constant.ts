export default defineNuxtPlugin(() => {
  const amountLabelList = [
    { title: "通常", value: 0 },
    { title: "メガ", value: 1 },
    { title: "２〜３人前", value: 2 },
    { title: "４〜５人前", value: 3 },
  ];

  const cashLabelList = [
    { title: "現金・電子マネー", value: 0 },
    { title: "クレジットカード", value: 1 },
  ];

  const getAmountLabel = function (cd: number) {
    var returnValue = "";

    var preList = amountLabelList.filter(function (vl) {
      return vl.value == cd;
    });

    if (0 < preList.length) {
      returnValue = preList[0].title;
    }

    return returnValue;
  };

  const getCashLabel = function (cd: number) {
    var returnValue = "";

    var preList = cashLabelList.filter(function (vl) {
      return vl.value == cd;
    });

    if (0 < preList.length) {
      returnValue = preList[0].title;
    }

    return returnValue;
  };

  // ここで出す必要ない
  return {
    provide: {
      constants: {
        amountLabelList,
        cashLabelList,
        getAmountLabel,
        getCashLabel,
      },
    },
  };
});
