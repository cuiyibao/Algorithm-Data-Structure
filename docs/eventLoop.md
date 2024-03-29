# 事件循环

同步和异步代码执行顺序
在 JavaScript 中，同步代码是顺序执行的，即代码从上到下依次执行，每一行代码执行完后再执行下一行代码。而异步代码不会阻塞代码的执行，会在后台执行，并在满足条件时通过回调函数将执行结果返回给主线程。

宏任务和微任务
在 JavaScript 中，宏任务和微任务都是异步代码的分类，它们的执行顺序是不同的。

宏任务包括：script（整体代码）、setTimeout、setInterval、setImmediate、I/O 操作等。

微任务包括：Promise、process.nextTick、Object.observe（已废弃）等。

事件循环模型
在 JavaScript 中，事件循环模型用于管理宏任务和微任务的执行顺序。当主线程执行完同步代码后，会先执行当前宏任务队列中的所有任务，然后再执行微任务队列中的所有任务。每个宏任务执行完毕后都会清空微任务队列，然后再执行下一个宏任务。

在事件循环模型中，每个宏任务都有一个自己的执行上下文（Execution Context），而微任务则共用主线程的执行上下文。每次执行一个任务时，都会生成一个新的执行上下文，并把它压入调用栈中执行。

总的来说，JavaScript 的事件循环模型是一个非常重要的概念，它决定了异步代码的执行顺序，也影响了 JavaScript 的性能和响应能力。因此，在编写 JavaScript 代码时，要特别注意异步代码的编写方式，避免出现性能问题和不稳定的情况。