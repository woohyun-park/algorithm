//프로그래머스: 약수의 개수와 덧셈
function numDiv(num){
    if(num === 1)
        return 1;

    let result = 1;
    for(let i = 2; i <= Math.sqrt(num); i++){
        let temp = 0;
        if(num % i === 0){
            while(num % i === 0){
                num /= i;
                temp++;
            }
            temp++;
            result *= temp;
        }
    }
    if(num !== 1)
        return result * 2;
    return result;
}

function solution(left, right) {
    let result = 0;
    while(left <= right){
        if(numDiv(left) % 2 === 0){
            result += left;
        } else {
            result -= left;
        }
        left++;
    }
    return result;
}
