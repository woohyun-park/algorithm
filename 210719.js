//프로그래머스: 점프와 순간 이동
function solution(n)
{
    let num = n.toString(2);
    let result = 0;
    for(let i = 0; i < num.length; i++){
        if(num[i] === "1")
            result++;
    }
    return result;
}
