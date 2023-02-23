/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let string = "";

    let left;
    let right;

    loop1:
    for(let i = 0; i < s.length; i++){
        left = i;
        right = i;
        while(left >= 0 && right < s.length && s[left] === s[right]){
            if(right - left + 1 > string.length){
                string = s.slice(left, right + 1);
            }
            left--;
            right++;
        }

        left = i;
        right = i + 1;
        while(left >= 0 && right < s.length && s[left] === s[right]){
            if(right - left + 1 > string.length){
                string = s.slice(left, right + 1);
            }
            left--;
            right++;
        }
    }

    return string;
};