var backTrace = require("../src/algorithm/backTrace.js")
var expect = require("chai").expect

describe("回溯算法中子集的测试", function () {
  it("输出数组 为输入数组的子集", function () {
    console.log("结果：", backTrace.subsets([1, 2, 3, 4]))
    // expect(backTrace.subsets([1, 2, 3])).to.be.eql([
    //   [3],
    //   [1],
    //   [2],
    //   [1, 2, 3],
    //   [1, 3],
    //   [2, 3],
    //   [1, 2],
    //   [],
    // ])
  })
})
