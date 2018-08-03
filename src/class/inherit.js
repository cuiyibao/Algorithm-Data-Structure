/* 继承 */

/* 构造函数继承 */
function A(){
    this.name = 'a';
}

function B(){
    A.call(this);
    this.content = 'bContent';
}

B.prototype.say = function(){
    console.log(this.name);
}

/* 原型继承 */
function A(){
    this.name = 'a';
}

A.prototype.say = function(){
    console.log(this.name);
}

function B(){
    this.name = 'b';
}

B.prototype = new A();

/* 组合继承 */
function A(){
    this.name = 'a';
}

A.prototype.say = function(){
    console.log(this.name);
}

function B(){
    A.call(this);
}

B.prototype = new A();