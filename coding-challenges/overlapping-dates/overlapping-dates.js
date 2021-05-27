// Input: 1, 5), (3, 7), (4, 6), (6, 8) Output (1, 8).
// Input: (10, 12), (12, 15) Output:  (10,15)
// 1. have min & max
// 2. Next min in range?
//   2Y. adjust min/max
//   2N. Push and go to step 1 create new min max 

const returnOverlap = (dates) => {
    
    const newList = [];
    let min = null;
    let max = null;

    if (dates.length <=1) return dates;

    dates.map((date, index) => {
        if (!min || !max) {
            min = date[0];
            max = date[1];
            return;
        }
        if (date[0] <= max) {
            if (date[1] > max) {
                max = date[1];
            }
        } else {
            newList.push([min,max]);
            min = date[0];
            max = date[1];
        }
    });

    newList.push([min,max]);
    
    return newList;

}

export default returnOverlap
