/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // s = "IceCreAm"
    // Output: "AceCreIm"
    let revStr = '';
    let vowels = 'AEIOUaeiou';
    let vow = '';
    let i = 0;

    for(let char of s) {
        if(vowels.includes(char)) {
            vow += char;
        }
    }
    vow = vow.split('').reverse().join('')
    for(let char of s) {
        if(vowels.includes(char)) {
            revStr += vow[i];
            i++;
        } else {
            revStr += char;
        }
    }
    return revStr;
};