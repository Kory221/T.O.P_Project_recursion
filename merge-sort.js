export const mergeSort = (arr) => {
    if (arr.length <2) return arr;

    const result = [];
    const mid = Math.ceil (arr.length/2)

    
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[j]);
            j++;
        }
    };

    if (i >= left.length) {
        result.push(...right.slice(j));
    }
    else if (j>= right.length) {
        result.push(...right.slice(j));
    };
    
    return result;
};

