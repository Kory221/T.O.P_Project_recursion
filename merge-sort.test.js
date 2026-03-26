import {mergeSort} from "./merge-sort.js"

test ('empty array', () => {
    expect(mergeSort([])).toEqual([]);
});

test ('single element', () => {
    expect(mergeSort([73])).toEqual([73]);
});

test('already sorted', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});