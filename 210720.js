// 프로그래머스: 순위 검색
// function lower_bound(arr, key){
//     if(arr.length === 0)
//         return 0;

//     let low = 0, high = arr.length - 1, mid = high;

//     while(high - low > 0){
//         mid = Math.floor((high + low) / 2);
//         if(+arr[mid] > +key){
//             low = mid + 1;
//         } else {
//             high = mid;
//         }
//     }
//     while(arr[high] === arr[high + 1]){
//         high++;
//     }
//     if(+arr[high] >= +key){
//         return high + 1;
//     } else{
//         return high;
//     }
// }

function lower_bound(arr, tgt){
    let left = 0;
    let right = arr.length;
    while(left < right){
        const mid = parseInt((left + right) / 2);

        if(+arr[mid] < +tgt){
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

function createDb(){
    let arr = new Array(3);
    for(let i = 0; i < 3; i++){
        arr[i] = new Array(2);
        for(let j = 0; j < 2; j++){
            arr[i][j] = new Array(2);
            for(let k = 0; k < 2; k++){
                arr[i][j][k] = new Array(2);
                for(let l = 0; l < 2; l++){
                    arr[i][j][k][l] = [];
                }
            }
        }
    }
    return arr;
}

function sortDb(db){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 2; j++){
            for(let k = 0; k < 2; k++){
                for(let l = 0; l < 2; l++){
                    db[i][j][k][l].sort((a, b) => a - b);
                }
            }
        }
    }
}

function getInfo(arr){
    let a, b, c, d;
    if(arr[0] === "cpp"){
        a = 0;
    } else if(arr[0] === "java"){
        a = 1;
    } else{
        a = 2;
    }
    b = arr[1] === "backend" ? 0 : 1;
    c = arr[2] === "junior" ? 0 : 1;
    d = arr[3] === "chicken" ? 0 : 1;
    return [a, b, c, d];
}

function numMatch([a, b, c, d], min, db){
    let arr = [];

    if(a === "-"){
        arr.push([0, 1, 2]);
    } else if(a === "cpp"){
        arr.push([0]);
    } else if(a === "java"){
        arr.push([1]);
    } else {
        arr.push([2]);
    }

    if(b === "-"){
        arr.push([0, 1]);
    } else if(b === "backend"){
        arr.push([0]);
    } else {
        arr.push([1]);
    }

    if(c === "-"){
        arr.push([0, 1]);
    } else if(c === "junior"){
        arr.push([0]);
    } else {
        arr.push([1]);
    }

    if(d === "-"){
        arr.push([0, 1]);
    } else if(d === "chicken"){
        arr.push([0]);
    } else {
        arr.push([1]);
    }

    // console.log("hi");
    let result = 0;
    for(let i = 0; i < arr[0].length; i++){
        for(let j = 0; j < arr[1].length; j++){
            for(let k = 0; k < arr[2].length; k++){
                for(let l = 0; l < arr[3].length; l++){
                    if(db[arr[0][i]][arr[1][j]][arr[2][k]][arr[3][l]]){
                        let temp = lower_bound(db[arr[0][i]][arr[1][j]][arr[2][k]][arr[3][l]], min);
                        // console.log(db[arr[0][i]][arr[1][j]][arr[2][k]][arr[3][l]], db[arr[0][i]][arr[1][j]][arr[2][k]][arr[3][l]].length - temp);
                        result += (db[arr[0][i]][arr[1][j]][arr[2][k]][arr[3][l]], db[arr[0][i]][arr[1][j]][arr[2][k]][arr[3][l]].length - temp);
                    }
                }
            }
        }
    }
    return result;
}

function printDb(db){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 2; j++){
            for(let k = 0; k < 2; k++){
                for(let l = 0; l < 2; l++){
                    console.log("db[" + i + "][" + j + "][" + k + "][" + l + "]: " + db[i][j][k][l]);
                }
            }
        }
    }
}

function solution(info, query) {
    let db = createDb();
    info.forEach((app, i) => {
        let appArr = app.split(" ");
        let [a, b, c, d] = getInfo(appArr);
        db[a][b][c][d].push(appArr[4]);
    });
    sortDb(db);
    let result = [];
    query.forEach((cond, i) =>{
        let condArr = cond.split(" ");
        result.push(numMatch([condArr[0], condArr[2], condArr[4], condArr[6]], condArr[7], db));
    });
    return result;
}
