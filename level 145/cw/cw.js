const names = ["giorgi", "nino", "giorgi", "luka", "giga", "ana"]

names.forEach((name, index) => {
    if (name.startsWith("g")) {
        console.log(`${name} ${index}`)
    }
})




const numbers = [12, 7, 4, 9, 22, 15, 0, 31]

numbers.forEach((num) => {
    if (num % 2 === 0) {
        console.log(num)
    }
})




const mixedData = [42, "Hello", true, null, "JavaScript", undefined, "2026"]

mixedData.forEach((item) => {
    if (typeof item === "string") {
        console.log(item)
    }
})





const names1 = ["Giorgi", "Nino", "Aleksandre", "Ana", "Luka", "Mariami"]

const result = names1.map((name) => {
    if (name.length > 5) {
        return `${name} გრძელი სახელია`
    } else {
        return `${name} მოკლე სახელია`
    }
})

console.log(result)


const numbers1 = [2, 5, 8, 3, 10, 7]

const result1 = numbers1.map((num) => {
    if (num % 2 === 0) {
        return num * 100
    } else {
        return num * 200
    }
})

console.log(result1)