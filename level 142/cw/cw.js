let i = 0
while (i < 20) {
    console.log("abyss")
    i++
}


let j = 0
while (j < 20) {
    console.log(j)
    j++
}


let k = 40
while (k < 60) {
    console.log(k)
    k++
}


let l = 20
while (l < 50) {
    if (l % 2 === 0) {
        console.log(l)
    }
    l++
}


let m = 20
while (m < 50) {
    console.log(m)
    m += 3
}









const names = ["Giga", "Alexander", "Nino", "Mariami", "Ana", "Giorgi"]
let i1 = 0
while (i1 < names.length) {
    if (names[i].length > 5) {
        console.log(names[i])
    }
    i1++
}




const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = []
let j1 = 0
while (j1 < numbers.length) {
    if (numbers[j] % 2 === 0) {
        evenNumbers.push(numbers[j])
    }
    j1++
}
console.log(evenNumbers)




const mixed = [1, "hello", true, "world", 42, "javascript", false]
let k1 = 0
while (k1 < mixed.length) {
    if (typeof mixed[k] === "string") {
        console.log(mixed[k])
    }
    k1++
}