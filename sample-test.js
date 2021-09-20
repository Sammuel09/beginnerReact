function solution(A) {
  const zero = 0;
  const one = 1;

  function reverserArray(A, coinType) {
    let reversal = 0;
    A.forEach((item) => {
      if (coinType !== item) {
        console.log("item", item, "initial cointype", coinType);
        reversal++;
      }
      coinType = coinType === 0 ? 1 : 0;
      console.log("item", item, "final cointype", coinType);
    });
    return reversal;
  }

  const zeroReversal = reverserArray(A, zero);
  const oneReversal = reverserArray(A, one);

  const minNoOfReversal = Math.min(zeroReversal, oneReversal);
  console.log(zeroReversal, oneReversal);
}

solution([0, 1, 0]);
