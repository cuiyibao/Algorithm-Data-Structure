var sort = require('../src/algorithm/sort.js');
var expect = require('chai').expect;

describe('冒泡排序函数的测试', function() {
    it('输出数组 为有序的', function() {
        expect(sort.bubble([23, 1, 23, 12, 12, 37, 29])).to.be.eql([1, 12, 12, 23, 23, 29, 37]);
    });
});

describe('快速排序函数的测试', function() {
    it('输出数组 为有序的', function() {
        expect(sort.quick([20, 1, 23, 12, 12, 37, 29])).to.be.eql([1, 12, 12, 20, 23, 29, 37]);
    });
});