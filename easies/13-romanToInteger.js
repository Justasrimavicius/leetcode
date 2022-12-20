/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer = 0;
    let isAnswerGotten = false;
    let i = 0;
    while(isAnswerGotten == false){
        if(s[i] == 'I'){
            if(s[i+1] == 'V'){
                answer += 4;
                i += 1;
            } else if(s[i+1] == 'X'){
                answer += 9;
                i += 1;
            } else{
                answer += 1;
            }
        } else if(s[i] == 'V'){
            answer += 5;
        } else if(s[i] == 'X'){
            if(s[i+1] == 'L'){
                answer += 40;
                i += 1;
            } else if(s[i+1] == 'C'){
                answer += 90;
                i += 1;
            } else {
                answer += 10;
            }
        } else if(s[i] == 'L'){
            answer += 50;
        } else if(s[i] == 'C'){
            if(s[i+1] == 'D'){
                answer += 400;
                i += 1;
            } else if(s[i+1] == 'M'){
                answer += 900;
                i += 1;
            } else {
                answer += 100;
            }
        } else if(s[i] == 'D'){
            answer += 500;
        } else if(s[i] == 'M'){
            answer += 1000;
        }
        if(i == s.toString().length)isAnswerGotten = true;
        i++;
    }
    return answer;
};


// kind of fast, but a little expensive on space