/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // nums = [3, 2, 2, 3]
    // val = 3
    let k = 0;
    for(let i = 0; i < nums.length; i++) {
        // console.log(nums[i], " | ", i)
        if(nums[i] != val) {
            // console.log(nums[i], " - ", i)
            nums[k] = nums[i]
            k += 1;
        }
        // console.log("k - ", k);
    }
    return k;
};