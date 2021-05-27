// the whole idea of Merge Sort is to break down the list in sub-sections and sort
// O(nlogn)
// Takes up space though. O(n)
// it creates a small mini list (of two) and then addes sorting through the list
// Step 1 − break down till a single unit
// Step 2 - add another "unit" mergeing left and right
// step 3 repeat
// Optimization:
// get down to small dataset (7-10) then use insertion

const merge = (list1, list2) => {
    const list = [];
    while (list1.length && list2.length) {
        if (list1[0] < list2[0]) {
            list.push(list1.shift());
        } else {
            list.push(list2.shift());
        }
    }

    return list.concat(list1.slice().concat(list2.slice()));
}

function mergeSort(list) {
    if (list.length <=1) return list;
    let middle = Math.floor(list.length/2);

    let part1 = mergeSort(list.slice(0, middle));
    let part2 = mergeSort(list.slice(middle));

    return merge(part1, part2);

    
};

export default mergeSort