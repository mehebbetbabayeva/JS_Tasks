// repeatedSymbolCounter('ALIONALI', 'A') // return 2 -> must be done with for loop!!!!


const repeatedSymbolCounter = (word, letter) => {
    let count = 0
    for (let value of word) {
        if (value === letter)
            count++
    }
    return count
}
console.log(repeatedSymbolCounter('ALIONALI', 'A'))

