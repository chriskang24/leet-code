// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const maxProfit = function(prices) {
  
 let maxProfit = 0;
 let minPrice = prices[0];

 for (let i = 1; i < prices.length; i++) {
  let price = prices[i];

  if (price < minPrice) {
    minPrice = price;
  }

  let profit = price - minPrice;
  maxProfit = Math.max(profit, maxProfit);
 }

 return maxProfit;
};

let prices = [7,1,5,3,6,4]

console.log(maxProfit(prices));