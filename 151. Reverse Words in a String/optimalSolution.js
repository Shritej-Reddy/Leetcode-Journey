/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let newStr = ''

    newStr = s.replace(/\s+/g,' ').trim();
    newStr = newStr.split(' ').reverse().join(' ')
    return newStr;
};