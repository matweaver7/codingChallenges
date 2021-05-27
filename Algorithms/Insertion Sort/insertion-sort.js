// the whole idea of Insertion Sort is to filter items going one by one
// building a sub-list and then going element by element
//and finding where they fit in the sub-list
// O(n^2)
// it creates a small mini list (of two) and then addes sorting through the list
// Step 1 − If it is the first element, it is already sorted. return 1;
// Step 2 − Pick next element
// Step 3 − Compare with all elements in the sorted sub-list
// Step 4 − Shift all the elements in the sorted sub-list that is greater than the 
//          value to be sorted
// Step 5 − Insert the value
// Step 6 − Repeat until list is sorted
// on small datasets (10-20) it's one of the fastest sorts


const insertionSort = (list) => {
    if (list.length <= 1) return list;
    for (let i = 1; i < list.length; i++) {
        let current = list[i];
        let j = i-1; 
        while ((j > -1) && (current < list[j])) {
            list[j+1] = list[j];
            j--;
        }
        list[j+1] = current;
    }
    return list;
}

export default insertionSort;