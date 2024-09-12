const merge = (nums1, m, nums2, n) => {
    // Indices to keep track of elements in both arrays
    let i = m - 1;
    let j = n - 1;
    // Current index
    let index = m + n - 1;
    // Process both arrays
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[index] = nums1[i];
            i--;
        } else {
            nums1[index] = nums2[j];
            j--;
        }
        index--;
    }
    // Enter remaining elements
    while (i >= 0) {
        nums1[index] = nums1[i];
        i--;
        index--;
    }
    while (j >= 0) {
        nums1[index] = nums2[j];
        j--;
        index--;
    }
    return nums1;
};

module.exports = merge;