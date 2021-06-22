//프로그래머스: 124 나라의 숫자
function solution(n) {
    const num = "124";
    let result = "";
    while (n !== 0){
        result = num[(n - 1) % 3] + result;
        n = Math.floor((n - 1) / 3);
    }
    return result;
}
