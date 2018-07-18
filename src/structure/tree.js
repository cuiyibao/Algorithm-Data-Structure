function Node(context) {
    this.node = context || '';
    this.leftNode = null;
    this.rightNode = null;
}

Node.prototype.leftPoint = function(element) {
    this.leftNode = element;
}

Node.prototype.rightPoint = function(element) {
    this.rightNode = element;
}

Node.prototype.hasLeft = function() {
    let bool = false;
    this.leftNode ? bool = true : bool;
    return bool;
}

Node.prototype.hasRight = function(element) {
    let bool = false;
    this.rightNode ? bool = true : bool;
    return bool;
}

/**
 * 节点指向赋值
 * @param {*} nodeArr 
 * @param {*} node 
 */
function assignNode(nodeArr, node) {
    let parentNode = nodeArr[0];
    if (parentNode) {
        if (!parentNode.hasLeft()) {
            parentNode.leftPoint(node);
            return;
        }
        if (!parentNode.hasRight()) {
            parentNode.rightPoint(node);
            return;
        }
        nodeArr.shift();
        assignNode(nodeArr, node);
    }
}

/**
 * 广度遍历生成树
 * @param {*} array 
 */
function rangeTree(array) {
    let nodeArr = [],
        firstNode = null;
    for (let i = 0; i < array.length; i++) {
        let node = new Node(array[i]);
        assignNode(nodeArr, node);
        nodeArr.push(node);
        if (i === 0) {
            firstNode = node;
        }
    }
}