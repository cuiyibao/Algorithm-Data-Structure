/**
 * 判断数据类型
 * typeof Object.prototype.toString
 */

typeof undefined  // undefined
typeof 2      // number
typeof '222'  // string
typeof true   // bool
typeof Symbol();  // symbol
typeof new Function(); // function
typeof null   // object 无效
typeof {}     // object 无效
typeof []     // object 无效
typeof new Date(); //object 无效
typeof new RegExp(); //object 无效


Object.prototype.toString.call('aaaa')       // [object String]
Object.prototype.toString.call(2222)         // [object Number]
Object.prototype.toString.call(true)         // [object Boolean]
Object.prototype.toString.call(undefined)    // [object Undefined]
Object.prototype.toString.call(null)         // [object Null]
Object.prototype.toString.call({})           // [object Object]
Object.prototype.toString.call([])           // [object Array]
Object.prototype.toString.call(function(){}) // [object Function]
