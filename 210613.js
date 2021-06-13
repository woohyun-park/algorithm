//프로그래머스: 구명보트
function solution(people, limit) {
    const sorted = people.sort((a, b) => a - b);
    let i_front = 0;
    let i_back = sorted.length - 1;
    let result = 0;

    while(i_front <= i_back){
        if(people[i_front] + people[i_back] <= limit){
            i_front++;
        }
        i_back--;
        result++;
    }
    return result;
}
