//1.  Elə bir funksiya yaradın ki , bir cümlədə olan sözlər əksinə olaraq bizə geri qayıtsın.
// Nümunə :

// reverseWords("hello world!  ") ➞ "world! hello"     
// reverseWords("a good example") ➞ "example good a"


const reverseWord=(str)=> str.split(" ").reverse().join(" ")

console.log( reverseWord("hello world!"));
console.log( reverseWord("a good example"));



// 2.  Arqument kimi verilən kiçik və böyük hərflərin charCode –unu geri qaytaran funksiya yaradın .

// Nümunə :
// counterpartCharCode("A") ➞ 97  
// counterpartCharCode("a") ➞ 65


const counterpartCharCode =(letter)=>letter.charCodeAt()

console.log(counterpartCharCode("A"));
console.log(counterpartCharCode("a"));

// 3.  toString() deyə bir funksiya yaradın , Cümləyə method olaraq həmin funksiyanı verdikdə bizə aşağıdakı şəkildə cümlə geri qaytarsın !

//  Nümunə : toString("Hello World!") ➞ "!dlroW olleH"
// toString("RaceCar") ➞ "raCecaR"

const reverseLetters=(str)=> str.split("").reverse().join("")

console.log( reverseLetters("hello world!"));
console.log( reverseLetters("RaceCar"));