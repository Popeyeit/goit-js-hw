function songDecoder(song) {
    const songWithoutWUB = song.split('WUB')
    const newArray = []
    for (let i = 0; i < songWithoutWUB.length; i++) {
        if (songWithoutWUB[i] !== '') {
            newArray.push(songWithoutWUB[i])
        }
    }
    return newArray.join(' ')
}






console.log(songDecoder("AWUBBWUBC"));
"A B C", "WUB should be replaced by 1 space"
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
"A B C", "multiples WUB should be replaced by only 1 space"
console.log(songDecoder("WUBAWUBBWUBCWUB"));
"A B C", "heading or trailing spaces should be removed"