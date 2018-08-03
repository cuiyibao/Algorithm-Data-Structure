/**
 * 求和
 */
function sumReduce(array){
    let sum = 0;
    sum = array.reduce(function(total, currentValue){
        return total + currentValue;
    });
    return sum;
}

function sumMap(array){
    let sum = 0,newArr = null;
    newArr = array.map(function(element){
        sum += element;
        return sum;
    });
    return sum;
}

function sunForEach(array){
    let sum = 0;
    array.forEach(function(element){
        sum += element;
    });
    return sum;
}