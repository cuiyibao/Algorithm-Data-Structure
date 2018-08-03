import { request } from "http";

const promise = new Promise(function(resolve, reject){
    request('url1', function(data){
        resolve(data);
    })
});

promise().then(function(data){
    request('url2', data, function(){
        console.log('1');
    });
    return promise;
});
