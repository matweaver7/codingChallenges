import SelectionSort from "./selection-sort"

describe('Selection Sort Tests', () => {
    const list = [
        {
            input:[22, 44, 67, 78, 9],
            expected: [9,22,44,67,78],
            description: "A Normal low at end"
        },
        {
            input:[9, 22, 44, 67, 78],
            expected: [9,22,44,67,78],
            description: "Normal Flow low at beginning"
        },
        {
            input:[3, 25, 16, 44, 92, 63, 78],
            expected: [3, 16, 25, 44, 63, 78, 92],
            description: "Normal flow with mixed"
        },
        {
            input:[3, 16, 25, 25, 44, 92, 63, 78],
            expected: [3, 16, 25, 25, 44, 63, 78, 92],
            description: "Normal flow with mixed duplicates"
        },
        {
            input:[1,1],
            expected: [1,1],
            description: "Mixed duplicates"
        },
        {
            input:[1],
            expected: [1],
            description: "Array with one item"
        },
        {
            input:[],
            expected: [],
            description: "Empty Array"
        },
        
    ];
    list.forEach((testcase) => {
        test(testcase.description, () => {
            expect(SelectionSort(testcase.input)).toStrictEqual(testcase.expected);
        });
    });
});