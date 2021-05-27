// the whole idea of Selection Sort is to filter items going one by one
// building a sub-list and then going through and finding the element that will
// fit next in the sub-list
// O(n^2)
// it creates a small mini list (of two) and then addes sorting through the list
// Step 1 − Set MIN to location 0
// Step 2 − Search the minimum element in the list
// Step 3 − Swap with value at location MIN
// Step 4 − Increment MIN to point to next element
// Step 5 − Repeat until list is sorted
// on small datasets (10-20) and BEST for checking if already sorted

const swap = (pos1, pos2, list) => {
    let tmp = list[pos1];
    list[pos1] = list[pos2];
    list[pos2] = tmp; 
}

const selectionSort = (list) => {
    if (list.length <= 1) return list;
    for (let i = 0; i < list.length; i++) {
        let minimum = i;
        for (let j = i+1; j < list.length; j++) {
            if (list[j] < list[minimum]) {
                minimum = j;
            }
        }
        
        if (minimum != i) {
            swap(i, minimum, list);
        }
    }
    return list;
}

export default selectionSort;