function openOrSenior(data) {
    const members = []
    for (const arr of data) {
        arr[0] >= 55 && arr[1] > 7 ? members.push('Senior') : members.push('Open')
    }
    return members
}

console.log(openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20]
]));
// ['Open', 'Senior', 'Open', 'Senior']
console.log(openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [54, 23]
]));
// ['Open', 'Open', 'Open', 'Open']
console.log(openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12]
]));
// ['Senior', 'Open', 'Open', 'Open']