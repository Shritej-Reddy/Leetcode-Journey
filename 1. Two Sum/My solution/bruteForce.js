/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // nums = [2, 7, 11, 15]
    // target = 9
    for(let i = 0; i <= nums.length - 1; i++) {
        for(let j = i + 1; j <= nums.length - 1; j++) {
            if(i != j) {
                // console.log(nums[i])
                // console.log(nums[j])
                // console.log("sum = ", nums[i] + nums[j])
            }
            if(nums[i] == target - nums[j]) {
                return [i, j];
            }
        }
    }
    return [];
};