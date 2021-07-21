//프로그래머스: 순위 검색 (리팩토링)
function lower_bound(arr, tar){
    let low = 0;
    let high = arr.length;

    while(low < high){
        const mid = Math.floor((low + high) / 2);
        if(+arr[mid] < +tar){
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}

function getAppInfo(arr){
    let a, b, c, d;

    a = arr[0] === "cpp" ? 0 : arr[0] === "java" ? 1 : 2;
    b = arr[1] === "backend" ? 0 : 1;
    c = arr[2] === "junior" ? 0 : 1;
    d = arr[3] === "chicken" ? 0 : 1;
    return [a, b, c, d];
}

function pushCondA(arr, cond){
    if(cond === "-"){
        arr.push([0, 1, 2]);
    } else if(cond === "cpp"){
        arr.push([0]);
    } else if(cond === "java"){
        arr.push([1]);
    } else {
        arr.push([2]);
    }
}

function pushCondB(arr, cond){
    if(cond === "-"){
        arr.push([0, 1]);
    } else if(cond === "backend"){
        arr.push([0]);
    } else {
        arr.push([1]);
    }
}

function pushCondC(arr, cond){
    if(cond === "-"){
        arr.push([0, 1]);
    } else if(cond === "junior"){
        arr.push([0]);
    } else {
        arr.push([1]);
    }
}

function pushCondD(arr, cond){
    if(cond === "-"){
        arr.push([0, 1]);
    } else if(cond === "chicken"){
        arr.push([0]);
    } else {
        arr.push([1]);
    }
}

function numMatchEach(dim, min, db = []){
    let result = 0;

    if(dim.length === 0){
        return db.length - lower_bound(db, min);
    }
    for(let i = 0; i < dim[0].length; i++){
        result += numMatchEach(dim.slice(1), min, db[dim[0][i]]);
    }
    return result;
}

function numMatch([a, b, c, d], min, db){
    let arr = [];

    pushCondA(arr, a);
    pushCondB(arr, b);
    pushCondC(arr, c);
    pushCondD(arr, d);
    return numMatchEach(arr, min, db);;
}

function initDb(dim, db = []){
    if(dim.length === 0){
        return ;
    }
    for(let i = 0; i < dim[0]; i++){
        db.push([]);
        initDb(dim.slice(1), db[db.length - 1]);
    }
    return db;
}

function sortDb(dim, db){
    if(dim.length === 0){
        db.sort((a, b) => a - b);
        return ;
    }
    for(let i = 0; i < dim[0]; i++){
        sortDb(dim.slice(1), db[i]);
    }
}

function createDb(info, db){
    info.forEach((app) => {
        const appArr = app.split(" ");
        const [a, b, c, d] = getAppInfo(appArr);
        db[a][b][c][d].push(appArr[4]);
    });
}

function checkDb(query, db){
    let result = [];

    query.forEach((cond) =>{
        const condArr = cond.split(" ");
        result.push(numMatch([condArr[0], condArr[2], condArr[4], condArr[6]], condArr[7], db));
    });
    return result;
}

function solution(info, query) {
    let dim = [3, 2, 2, 2];
    let db = initDb(dim);

    createDb(info, db);
    sortDb(dim, db);
    return checkDb(query, db);
}
