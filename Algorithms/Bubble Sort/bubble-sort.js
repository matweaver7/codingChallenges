// the whole idea of bubble sort is to filter items going one by one
// O(n^2)
// it goes through each element looping through grabbing the next TOP ascending or descending
// Optimizations: 
//          Add a swapping variable to tell if the array is sorted early
//          Add a variable the 
// Given [4,5,66,2,43] sort in ascending to produce [2,4,5,43,66]

const swap = (pos1, pos2, list) => {
    let tmp = list[pos1];
    list[pos1] = list[pos2];
    list[pos2] = tmp; 
}

const bubbleSort = (list) => {
    for (let i = 0; i < list.length; i++) {
        for (let t = 0; t < list.length; t++) {
            if ((t+1) < list.length && list[t] > list[t+1]) {
                swap(t, t+1, list);
            }
        
        }
    }
    return list;
}

export default bubbleSort;
