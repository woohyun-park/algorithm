//프로그래머스: H-index
function solution(citations) {
    let arr = citations.sort((a, b) => b - a);
    let res = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= res)
            return res;
        res++;
    }
    return res;
}
