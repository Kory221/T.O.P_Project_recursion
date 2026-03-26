//fibonacci

const fibs = (n) => {
    const result = [];
    
    for (let i=0; i<n; i++) {
        if (i === 0) result.push(0);
        else if (i === 1) result.push(1);
        else result.push(result[i-1] + result[i-2]);
    };

    return result;
};


const fibsRec = (n) => {
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const prev = fibsRec(n-1); 
    const sum = prev.at(-1) + prev.at(-2);

    return [...prev, sum];
};

//mergeSort

const mergeSort = (arr) => {
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
        result.push(...left.slice(i));
    };
    
    return result;
};

