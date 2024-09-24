/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // candies = [2,3,5,1,3]
    // extraCandies = 3
    const max = Math.max(...candies);
    return candies.map((c) => (c+extraCandies) >= max);
};