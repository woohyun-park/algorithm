function isLowerCase(char){
    if(char >= 'a' && char <= 'z')
        return true;
    return false;
}

function isUpperCase(char){
    if(char >= 'A' && char <= 'Z')
        return true;
    return false;
}

function toUpperCase(char){
    return String.fromCharCode(char.charCodeAt(0) - 32);
}

function toLowerCase(char){
    return String.fromCharCode(char.charCodeAt(0) + 32);
}

function isSpace(char){
    return char === " ";
}

function solution(s) {
    let result = s.split("");
    let prevSpace = true;
    for(let i = 0; i < result.length; i++){
        let char = result[i];
        if(isSpace(char)){
            prevSpace = true;
        } else{
            if(prevSpace){
                if(isLowerCase(char)){
                    result[i] = toUpperCase(char);               
                }
            } else{
                if(isUpperCase(char)){
                    result[i] = toLowerCase(char);
                }
            }
            prevSpace = false;
        }
    }
    return result.join("");
}
