//프로그래머스: 타겟 넘버
function dfs(arr, cur, tar){
    if(arr.length === 0){
        if(cur === tar){
            return 1;
        }
        return 0;
    }
    return dfs(arr.slice(1), cur + arr[0], tar)
            + dfs(arr.slice(1), cur - arr[0], tar);
}

function solution(numbers, target) {
    return dfs(numbers, 0, target);
}
