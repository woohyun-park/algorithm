//프로그래머스: 위장

function countClothes(clothes){
    const result = {};
    clothes.forEach(n => {
        if(result[n[1]] === undefined)
            result[n[1]] = 1;
        else
            result[n[1]]++;
    })
    return result;
}

function getCombination(set){
    let result = 1;
    for(let n in set){
        //옷을 안입을수도 있으므로 + 1을 해서 곱해줌
        result *= (set[n] + 1);
    }
    //모두 안입을수는 없으므로 전체 조합 - 1을 해서 반환
    return result - 1;
}

function solution(clothes) {
    return getCombination(countClothes(clothes));
}
