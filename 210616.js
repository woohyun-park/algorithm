//프로그래머스: 프린터

//주어진 array에서 가장 큰 수를 찾아 반환한다.
function getMaxNum(array){
    let result = 0;
    array.forEach((n, i) => {
        if(n.num > result){
            result = n.num;
        }
    })
    return result;
}

//priorities와 기존 index를 모두 포함하도록 array를 생성한다
//만약 주어진 priorities가 [1, 1, 3, 2]라고 한다면,
//생성되는 array는 [{num: 1, loc: 0}, {num: 1, loc:1}, {num: 3, loc:2}, {num:2, loc:3}]이다
function createArray(priorities){
    let result = []
    priorities.forEach((num, loc) => {
        result.push({num, loc});
    })
    return result;
}

function getLocation(array, location){
    let result = 1;
    for(; array.length !== 0;){
        //maxNum, 즉 가장 큰 priority가 현재 문서의 priority와 같지 않다면
        //현재 문서를 맨 뒤로 보낸다.
        if(getMaxNum(array) !== array[0].num){
            array = array.slice(1).concat(array.slice(0, 1));
        }
        //현재 문서가 가장 큰 priority를 가지고 있지만, 원했던 문서는 아니므로
        //프린트하고 순서값을 1 증가시킨다
        else if(location === array[0].loc){
            array = array.slice(1);
            result++;
        }
        //현재 문서가 가장 큰 priority를 가지고 있고, 그것이 원했던 문서라면 반환한다
        else{
            return result;
        }
    }
    //루프를 빠져나왔다면 찾지 못한것이므로 -1을 반환
    return -1;
}

function solution(priorities, location) {
    return getLocation(createArray(priorities), location);
}
