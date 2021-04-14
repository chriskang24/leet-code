var coinChange = function(coins, amount) {

  let subResultLength = amount + 1;
  let subResults = new Array(subResultLength);

  subResults.fill(subResultLength)
  subResults[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coinIndex = 0; coinIndex < coins.length; coinIndex++) {

      let complementToCoin = i - coins[coinIndex];
      debugger;
      if (complementToCoin === 0) {
        subResults[i] = 1;
      } else if (complementToCoin > 0) {
        subResults[i] = Math.min(1 + subResults[complementToCoin], subResults[i]);
      }
      debugger;
    }
  }

  return subResults[amount] < subResultLength ? subResults[amount] : -1;
}

let coins = [1,2,5]

coinChange(coins, 16);