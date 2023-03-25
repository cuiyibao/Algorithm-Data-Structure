/**
 * 回溯算法 数组子集
 * @param {*} nums 
 * @returns 
 */
var subsets = function (nums) {
  let path = [] 
  let res = [] // 结果数组
  let backTrace = (start, nums, path, res) => {
    if (path.length > nums.length) return
    res.push(path.slice())
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i])
      backTrace(i + 1, nums, path, res)
      path.pop()
    }
  }
  backTrace(0, nums, path, res)
  return res
}

// backTrace.subsets([1, 2, 3, 4])

module.exports = {
  subsets,
}

// []

// [1], ([1,2] & [1,3]), [1,2,3]

// [2], [2,3]

// [3]

// var subsets = function (nums) {
//   let res = [] // 结果数组
//   return res
// }

// function handleNums() {
//   if (nums)
// }
