import returnOverlap from "./overlapping-dates";

describe('Overlapping Dates Tests', () => {
    const list = [
        {
            input:[[1, 3],[2, 5]],
            expected: [[1, 5]],
            description: "Normal flow with mixed"
        },
        {
            input:[[1, 3],[3, 5],[5,8]],
            expected: [[1, 8]],
            description: "Minimums match Maximums"
        },
        {
            input:[[1,3], [4,5], [7,9]],
            expected: [[1,3], [4,5], [7,9]],
            description: "No shared Numbers"
        },
        {
            input:[[3, 16], [25, 56], [44, 92], [63, 78]],
            expected: [[3, 16], [25, 92]],
            description: "Normal Lots of data"
        },
        {
            input:[[9, 22],[9, 22]],
            expected: [[9, 22]],
            description: "Duplicates"
        },
        {
            input:[[9, 22]],
            expected: [[9, 22]],
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
            expect(returnOverlap(testcase.input)).toStrictEqual(testcase.expected);
        });
    });
});