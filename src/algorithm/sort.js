/**
 * 冒泡排序
 * @param {*} array 
 */
function BubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if(array[j + 1] < array[j]){
                let max = array[j];
                array[j] = array[j + 1];
                array[j + 1] = max;
            }
        }
    }
    return array;
}

/**
 * 选择排序
 * @param {*} array 
 */
function SelectSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let max = array[i];
                array[i] = array[j];
                array[j] = max;
            }
        }
    }
    return array;
}

/* 排序思路：（降序）
 * 将堆根保存于尾部，并对剩余序列调用调整函数，调整完成后，再将最大跟保存于尾部-1（-1，-2，...，-i），
 * 再对剩余序列进行调整，反复进行该过程，直至排序完成。
 */

/* 将最大的元素调整到堆顶*/
function AdjustHeap(arr, pos, len){
    var swap = arr[pos];      //保存当前节点
    var child = pos * 2 + 1;  //定位到当前节点的左边的子节点
    while(child < len){       //递归遍历所有的子节点
        //判断当前节点是否有右节点，若右节点较大，就采用右节点和当前节点进行比较
        if(child + 1 < len && arr[child] < arr[child + 1]){
            child += 1;
        }
        //比较当前节点和最大的子节点，小于就交换，交换后将当前节点定位到子节点上
        if(arr[pos] < arr[child]){
            arr[pos] = arr[child];
            pos = child;
            child = pos * 2 + 1;
        }
        else{
            break;
        }
        arr[pos] = swap;
    }
}

/* 构建堆：
 * 满足：树中任一非叶子结点的关键字均不大于（或不小于）其左右孩子结点的关键字。
 * 实现：从最后一个拥有子节点的节点开始，将该节点和其他节点进行比较，将最大的数交换给该节点，
 *      交换后再依次向前节点进行相同的交换处理，直到构建出大顶堆。
 */
function BuildHeap(arr){
  for(var i=arr.length/2; i>=0; i--){  //构建打顶堆
      AdjustHeap(arr, i, arr.length);
  }
}

/*堆排序算法*/
function HeapSort(arr){
    BuildHeap(arr); //构建堆
    for(var i=arr.length-1; i>0; i--){   //从数组的尾部进行调整
        var swap = arr[i];  //堆顶永远是最大的元素,将堆顶和尾部元素交换，最大元素就保存在尾部，并且不参与后面的调整
        arr[i] = arr[0];
        arr[0] = swap;
        AdjustHeap(arr, 0, i); //将最大的元素进行调整，将最大的元素调整到堆顶
    }
}


/**
 * 快速排序
 * 时间复杂度 O(nlogn)
 * @param {*} array 
 */
function QuickSort(array) {
    if (array.length === 1 || array.length === 0) {
        return array;
    }
    let mark = array[0];
    let leftArr = [],
        middleArr = [],
        rightArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < mark) {
            leftArr.push(array[i]);
        }
        if (array[i] === mark) {
            middleArr.push(array[i]);
        }
        if (array[i] > mark) {
            rightArr.push(array[i]);
        }
    }

    return [].concat(QuickSort(leftArr), middleArr, QuickSort(rightArr));
}

/**
 * 快速排序
 * @param {*} array 
 */
function quickSort(array) {
    function sort(prev, numsize) {
        var nonius = prev;
        var j = numsize - 1;
        var flag = array[prev];
        if ((numsize - prev) > 1) {
            while (nonius < j) {
                for (j = j; nonius < j; j--) {
                    if (array[j] < flag) {
                        array[nonius++] = array[j];　//a[i] = a[j]; i += 1;
                        break;
                    };
                }
                for (j = j; nonius < j; nonius++) {
                    if (array[nonius] > flag) {
                        array[j--] = array[nonius];
                        break;
                    }
                }
            }
            array[nonius] = flag;
            sort(0, nonius);
            sort(nonius + 1, numsize);
        }
    }
    sort(0, array.length);
    return array;
}

module.exports = {
    "bubble": BubbleSort,
    "quick": QuickSort
}