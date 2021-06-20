//프로그래머스: 소수 찾기
function isPrime(n){
    if(n <= 1)
        return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

function perm(arr){
    let result = new Set();
    arr.split("").forEach((n, i) => {
        perm_sup(arr.substr(0, i).concat(arr.substr(i + 1)), n, result);
    });
    return result;
}

function perm_sup(arr, cur, res){
    res.add(+cur);
    if(arr.length === 0)
        return ;
    arr.split("").forEach((n, i) => {
        perm_sup(arr.substr(0, i).concat(arr.substr(i + 1)), cur + n, res);
    });
}

function solution(arr) {
    return [...perm(arr)].filter(n => isPrime(+n)).length;
}
