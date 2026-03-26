export const mergeSort = (arr) => {
    if (arr.length <2) return arr;

    const result = [];

    if (arr.length % 2 ===0) {
        const left = mergeSort(arr.slice(0, arr.length/2));
        const right = mergeSort(arr.slice(arr.length/2));
        
        for (let i=0; i<left.length; i++) {
            for (let j=0; j<right.length; j++) {
                if (left[i] < right[j]) result.push(left[i]);
                else result.push(right[j]);
            }
        }
    }
    else if (arr.length % 2 !==0) {
        const left = mergeSort(arr.slice(0, (arr.length+1)/2));
        const right = mergeSort(arr.slice((arr.length+1)/2));

        for (let i=0; i<left.length; i++) {
            for (let j=0; j<right.length; j++) {
                if (left[i] < right[j]) result.push(left[i]);
                else result.push(right[j]);
            }
        }
        
    };
    return result;
};