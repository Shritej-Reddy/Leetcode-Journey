/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let word = "";
    let maxLength = Math.max(word1.length, word2.length)
    for(let i = 0; i < maxLength; i++) {
        word += word1.charAt(i) ? word1.charAt(i) : ""
        word += word2.charAt(i) ? word2.charAt(i) : ""
    }
    return word;
};