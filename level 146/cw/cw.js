let words = ["cat", "elephant", "sun", "javascript", "book", "window"]
let longWords = words.filter(word => word.length > 5)
console.log(longWords)


let numbers = [10, 15, 22, 30, 45, 7, 60, 12]
let divisibleBy3And5 = numbers.filter(num => num % 3 === 0 && num % 5 === 0)
console.log(divisibleBy3And5)


let mixed = [42, "hello", true, 100, null, "99", undefined, 3.14]
let onlyNumbers = mixed.filter(item => typeof item === "number")
console.log(onlyNumbers)