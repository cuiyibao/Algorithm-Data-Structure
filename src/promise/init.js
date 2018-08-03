import { request } from "https";

function Promise(fn) {
    var value = null,
        callbacks = [];  //callbacks为数组，因为可能同时有很多个回调

    this.then = function (onFulfilled) {
        callbacks.push(onFulfilled);
        return this;
    };

    function resolve(value) {
        callbacks.forEach(function (callback) {
            callback(value);
        });
    }

    fn(resolve);
}

const promise = new Promise(function(resolve, reject){
    request('url1', function(data){
        resolve(data);
    })    
});

promise.then(function(data){
})