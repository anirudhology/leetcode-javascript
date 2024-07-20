/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // Make sure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    // Lengths of the arrays
    const m = nums1.length;
    const n = nums2.length;
    // Left and right pointers for binary search
    let left = 0;
    let right = m;
    // Process the array from both ends
    while (left <= right) {
        const partitionM = left + Math.floor((right - left) / 2);
        const partitionN = Math.floor((m + n + 1) / 2) - partitionM;
        // Find the boundary elements for this iteration
        const maxLeftM = partitionM === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionM - 1];
        const minRightM = partitionM === m ? Number.POSITIVE_INFINITY : nums1[partitionM];
        const maxLeftN = partitionN === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionN - 1];
        const minRightN = partitionN === n ? Number.POSITIVE_INFINITY : nums2[partitionN];
        // Check if we have found the correct boundary
        if (maxLeftM <= minRightN && maxLeftN <= minRightM) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftM, maxLeftN) + Math.min(minRightM, minRightN)) / 2;
            } else {
                return Math.max(maxLeftM, maxLeftN);
            }
        }
        // If we are too right, we need to move left
        else if (maxLeftM > minRightN) {
            right = partitionM - 1;
        } else {
            left = partitionM + 1;
        }
    }
    // Should never reach here for valid input
    throw new Error("Invalid input");
};

module.exports = findMedianSortedArrays;