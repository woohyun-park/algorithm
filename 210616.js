//프로그래머스: 프린터

function getMaxNum(array){
    let result = 0;
    array.forEach((n, i) => {
        if(n.num > result){
            result = n.num;
        }
    })
    return result;
}

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
        if(getMaxNum(array) !== array[0].num){
            array = array.slice(1).concat(array.slice(0, 1));
        } else if(location === array[0].loc){
            return result;
        } else{
            array = array.slice(1);
            result++;
        }
    }
    return result;
}

function solution(priorities, location) {
    return getLocation(createArray(priorities), location);
}
