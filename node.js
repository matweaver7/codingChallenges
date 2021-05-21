function sort(sort, m, teamSize) {
    //create the split
    const team = [];
    if (sort.length < teamSize) return[];
    if (sort.length < m) return sort.map((_, index) => index);
    if (m >= sort.length/2) {
        m = sort.length/2;
    }
    let part1 = sort.slice(0, m);
    let part2 = sort.slice(sort.length-m, sort.length);

    while (team.length < teamSize || sort.length > 0) {
        let part1 = sort.slice(0, m);
        let part2 = sort.slice(sort.length-m, sort.length);
        let mappedKey = {
            part1: CreateSort(part1),
            part2: CreateSort(part2)
        };
        console.log(mappedKey);
    
        //find the needed value
        team.push(CompareItems(part1, part2));
        console.log(team);
        //re-adjust and call again
        sort.splice(team[team.length - 1].index, 1);
    }
    //create the sorted map
    

    return team;


}

function CompareItems(item1, item2) {
    const leftValue = item1[item1.length - 1];
    const rightValue = item2[item2.length - 1];
    if (leftValue.value < rightValue.value) {
        return rightValue;
    } else if (leftValue.value == rightValue.value) {
        if (leftValue.index > rightValue.index) {
            return rightValue;
        } else {
            return leftValue;
        }
    } else {
        return leftValue;
    }
}

function CreateSort(part, m) {
    const mappedKey = []
    part.forEach((person, index) => {
        if (!m) {
            index = m - index;
        }
        const updateValue = {value: person, index};
        const length = mappedKey.length;
        if (mappedKey.length > 0) {
            if (mappedKey[length - 1] < person) {
                mappedKey.push(updateValue);
            } else if (mappedKey[length - 1] == person) {
                if (mappedKey[length - 1].index > index) {
                    mappedKey.push(updateValues);
                } else {
                    mappedKey.push(mappedKey[length - 1]);
                    mappedKey[length] = updateValue;
                }
            } else {
                mappedKey.push(mappedKey[length - 1]);
                mappedKey[length] = updateValue;
            }
        } else {
            mappedKey.push(updateValue);
        }
    });
    return mappedKey;
}