function likes(names) {
    if (names.length >= 4) {
        const namesLenght = Number(names.length)
        return `${names[0]}, ${names[1]} and ${namesLenght - 2} others like this`
    }
    if (names.length === 1 && names.length !== 0) {
        return `${names[0]} likes this`
    }
    if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    }
    if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    return `no one likes this`
}






console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');