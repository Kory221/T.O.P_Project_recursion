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

test('unsorted array', () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
        .toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test('unsorted array', () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
        .toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});