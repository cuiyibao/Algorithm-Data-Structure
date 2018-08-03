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
    return firstNode;
}

/**
 * 先序遍历
 */
function ergodicNode(array, node) {
    array.push(node.node);
    if (node.hasLeft()) {
        ergodicNode(array, node.leftNode);
    }
    if (node.hasRight()) {
        ergodicNode(array, node.rightNode);
    }
}

function beforeErgodic(firstNode) {
    let array = [];
    ergodicNode(array, firstNode);
    return array;
}

/**
 * 中序遍历
 */
function ergodicNode(array, node) {
    if (node.hasLeft()) {
        ergodicNode(array, node.leftNode);
    }
    array.push(node.node);
    if (node.hasRight()) {
        ergodicNode(array, node.rightNode);
    }
}

function middleErgodic(firstNode) {
    let array = [];
    ergodicNode(array, firstNode);
    return array;
}

/**
 * 后序遍历
 */
function ergodicNode(array, node) {
    if (node.hasLeft()) {
        ergodicNode(array, node.leftNode);
    }
    if (node.hasRight()) {
        ergodicNode(array, node.rightNode);
    }
    array.push(node.node);
}

function afterErgodic(firstNode) {
    let array = [];
    ergodicNode(array, firstNode);
    return array;
}

/**
 * 求两个点之间的最小公共祖先
 */
function linearErgodic(firstNode, node, linear){
    if(firstNode.node === node.node){
        return linear;
    }
    if(firstNode.hasLeft()){
        linear.push(firstNode.leftNode);
        linearErgodic(firstNode.leftNode, node, linear);
    }
    if(firstNode.hasRight()){
        linear.push(firstNode.rightNode);
        linearErgodic(firstNode.rightNode, node, linear);
    }
    linear = [];
}

function findErgodic(firstNode, nodeA, nodeB) {
    let arrayA = linearErgodic(firstNode, nodeA, []);
}