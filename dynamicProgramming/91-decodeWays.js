/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s[0] == '0')return 0;
    if(s.length == 1)return 1;

    let cache = new Map();
    cache.set(s.length, 1);

    function dp(i){
        if(cache.get(i) !== undefined){
            return cache.get(i);
        };
        if(s[i] === '0')return 0;
        let ans;
        ans = dp(i + 1);

        if((i + 1 < s.length) && (s[i] === '1' || (s[i] === '2' && s[i + 1] < 7))){
            ans += dp(i + 2);
        }
        cache.set(i, ans);
        return ans;
    }
    return dp(0)
};