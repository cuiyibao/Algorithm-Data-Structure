# 原型链和继承

一、原型链

在 JavaScript 中，每个对象都有一个指向它的原型对象（prototype）。当我们访问一个对象的属性时，如果该属性不存在，则 JavaScript 会沿着原型链向上查找，直到找到该属性或者找到 Object.prototype 为止。

例如，我们定义一个对象：

let obj = { name: 'Tom' };
那么 obj 对象的原型链如下图所示：

obj -> Object.prototype -> null
其中，obj 对象的原型对象为 Object.prototype，Object.prototype 的原型对象为 null。

如果我们访问 obj 对象的属性：

console.log(obj.name);
由于 obj 对象本身具有 name 属性，因此会输出 Tom。如果我们访问 obj 对象没有的属性：

console.log(obj.age);
由于 obj 对象本身没有 age 属性，因此 JavaScript 会沿着原型链向上查找，直到找到 Object.prototype。由于 Object.prototype 没有 age 属性，因此输出 undefined。

二、继承

在面向对象编程中，继承是一种非常常见的概念。JavaScript 中的继承是通过原型链实现的。

在 JavaScript 中，我们可以通过构造函数（constructor）来创建对象。构造函数可以定义对象的属性和方法，同时还可以定义对象的原型对象。

例如，我们定义一个 Animal 构造函数：

function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function() {
  console.log('My name is ' + this.name);
};
然后我们定义一个 Cat 构造函数，通过 call 方法调用 Animal 构造函数，并设置 Cat 构造函数的原型对象为 Animal.prototype。

function Cat(name) {
  Animal.call(this, name);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.sayMeow = function() {
  console.log('Meow!');
};
这里有几个关键点：

通过 call 方法调用 Animal 构造函数，将 Animal 对象的属性和方法继承到 Cat 对象中。

通过 Object.create 方法，将 Cat.prototype 的原型对象设置为 Animal.prototype，从而实现 Cat 对象继承 Animal 对象的属性和方法。

将 Cat.prototype 的 constructor 属性设置为 Cat，从而保证 Cat 对象的 constructor 属性指向 Cat 构造函数。

现在我们可以创建一个 Cat 对象，并调用它的方法：

let cat = new Cat('Kitty');
cat.sayName();   // 输出 "My name is Kitty"
cat.sayMeow();   // 输出 "Meow!"
在上面的代码中，当我们调用 cat.sayName() 方法时，JavaScript 会沿着原型链向上查找，找到 Animal.prototype 中的 sayName 方法，然后调用该方法。

当我们调用 cat.sayMeow() 方法时，由于该方法是定义在 Cat.prototype 中的，因此直接调用该方法。