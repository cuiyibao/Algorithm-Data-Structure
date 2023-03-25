/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 const findMedianSortedArrays = function(nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length
  const totalLen = len1 + len2
  if (totalLen % 2 === 1) {
      const middle = parseInt(totalLen / 2, 10)
      return getMiddleElement(nums1, nums2, middle + 1)
  } else {
      const middle = parseInt(totalLen / 2, 10)
      return (getMiddleElement(nums1, nums2, middle) + getMiddleElement(nums1, nums2, middle + 1)) / 2
  }
};

const getMiddleElement = function(nums1, nums2, middle) {
  const len1 = nums1.length
  const len2 = nums2.length
  let index1 = 0
  let index2 = 0
  
  while(true) {
      // 边界值
      if (index1 == len1) {
          return nums2[index2 - middle + 1]
      }
      if (index2 == len2) {
          return nums1[index1 - middle + 1]
      }
      if (middle == 1) {
          return Math.min(nums1[index1], nums2[index2])
      }
      // 正常情况
      const half = parseInt(middle / 2, 10)
      let newIndex1 = Math.min(index1 + half, len1) - 1
      let newIndex2 = Math.min(index2 + half, len2) - 1
      if (nums1[newIndex1] <= nums2[newIndex2]) {
          middle -= (newIndex1 - index1 + 1)
          index1 = newIndex1 + 1
      } else {
          middle -= (newIndex2 - index2 + 1)
          index2 = newIndex2 + 1
      }
  }
}

console.log('得到的值：', findMedianSortedArrays([1,2,3,4,5,6], [3,5,6]))