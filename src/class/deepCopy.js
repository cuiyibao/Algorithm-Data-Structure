/**
 * 深拷贝
 * @param {*} target 
 * @param {*} source 
 */
function deepCopy(target, source){
    for(let key in source){
        if(Object.prototype.toString.call(source[key]) === '[object Object]'){ 
            target[key] = deepCopy({}, source[key]);
        }else if(Object.prototype.toString.call(source[key]) === '[object Array]'){
            target[key] = [];
            for(let i = 0;i < source[key].length;i ++){
                target[key].push(deepCopy({}, source[key][i]));
            }
        }else {
            target[key] = source[key];
        }
    }
    return target;
}