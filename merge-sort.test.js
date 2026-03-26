import {mergeSort} from "./merge-sort.js"

test ('empty array', () => {
    expect(mergeSort([])).toEqual([]);
});

test ('single element', () => {
    expect(mergeSort([73])).toEqual([73]);
});