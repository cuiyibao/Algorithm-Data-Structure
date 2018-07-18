/**
 * 栈Stacks
 */
function Stacks() {
    this.stack = [];
}

Stacks.prototype.push = function(element) {
    this.stack.push(element);
}

Stacks.prototype.pop = function() {
    this.stack.pop();
}


/**
 * 队列Quene
 */
function Queue() {
    this.queue = [];
}

Queue.prototype.push = function(element) {
    this.queue.push(element);
}

Queue.prototype.pop = function() {
    this.queue.shift();
}

/**
 * 单向链表，节点
 * @param {*} context 
 */
function Node(context) {
    this.node = context || '';
    this.next = null;
}

Node.prototype.point = function(element) {
    this.next = element;
}

/**
 * 单向链表
 * @param {*} array 
 */
function SignLink(array) {
    let prevNode = null,
        firstNode = null;
    for (let i = 0; i < array.length; i++) {
        let node = new Node(array[i]);
        if (prevNode) {
            prevNode.point(node);
        }
        prevNode = node;
        if (i === 0) {
            firstNode = node;
        }
    }
    return firstNode;
}

/**
 * 双向链表，节点
 * @param {*} context 
 */
function Node(context) {
    this.node = context || '';
    this.prev = null;
    this.next = null;
}

Node.prototype.prevPoint = function(element) {
    this.prev = element;
}

Node.prototype.nextPoint = function(element) {
    this.next = element;
}

/**
 * 双向链表
 * @param {*} array 
 */
function DoubleLink(array) {
    let prevNode = null,
        firstNode = null;
    for (let i = 0; i < array.length; i++) {
        let node = new Node(array[i]);
        if (prevNode) {
            prevNode.nextPoint(node);
            node.prevPoint(prevNode);
        }
        prevNode = node;
        if (i === 0) {
            firstNode = node;
        }
    }
    return firstNode;
}

/**
 * 单向循环链表，节点
 * @param {*} context 
 */
function Node(context) {
    this.node = context || '';
    this.next = null;
}

Node.prototype.point = function(element) {
    this.next = element;
}

/**
 * 单向循环链表
 * @param {*} array 
 */
function SignLoopLink(array) {
    let prevNode = null,
        firstNode = null;
    for (let i = 0; i < array.length; i++) {
        let node = new Node(array[i]);
        if (prevNode) {
            prevNode.point(node);
        }
        prevNode = node;
        if (i === 0) {
            firstNode = node;
        }
        if (i === (array.length - 1)) {
            node.point(firstNode);
        }
    }
    return firstNode;
}