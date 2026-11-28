/*
1)let numbers = [5, 10, 15, 20, 25];

forEach() მეთოდის გამოყენებით დაბეჭდე სიის თითოეული ელემენტი კონსოლში.
*/

let numbers = [5, 10, 15, 20, 25];

numbers.forEach((num) => {
    console.log(num)
})



/*
2)let numbers = [2, 4, 6, 8, 10];

forEach()-ის გამოყენებით თითოეული რიცხვი გაამრავლე 2-ზე და დაბეჭდე შედეგი.
*/


let numbers1 = [2, 4, 6, 8, 10]

numbers1.forEach((num) => {
    console.log(num * 2)
})



/*
3)let names = ["nika", "ana", "giorgi", "mariam"];

forEach()-ის გამოყენებით დაბეჭდე თითოეული სახელი დიდი ასოებით.
*/


let names = ["nika", "ana", "giorgi", "mariam"]

names.forEach((name) => {
    console.log(name.toUpperCase())
})



/*
4)let prices = [100, 250, 400, 150, 300];

თითოეულ ფასს დაუმატე 50 და დაბეჭდე ახალი ფასი.
*/


let prices = [100, 250, 400, 150, 300]

prices.forEach((price) => {
    console.log(price + 50)
})



/*
5)let numbers = [12, 7, 24, 9, 16, 31, 40];

forEach()-ის გამოყენებით დაბეჭდე მხოლოდ ლუწი რიცხვები.
*/


let numbers2 = [12, 7, 24, 9, 16, 31, 40]

numbers2.forEach((num) => {
    if (num % 2 === 0) {
        console.log(num)
    }
})



/*
6)let scores = [95, 45, 78, 32, 88, 60];

თითოეული ქულისთვის:
- თუ ქულა 90 ან მეტია, დაბეჭდე "Excellent".
- თუ ქულა 70 ან მეტია, დაბეჭდე "Good".
- სხვა შემთხვევაში დაბეჭდე "Needs Improvement".
*/


let scores = [95, 45, 78, 32, 88, 60]

scores.forEach((score) => {
    if (score >= 90) {
        console.log("Excellent")
    } else if (score >= 70) {
        console.log("Good")
    } else {
        console.log("Needs Improvement")
    }
})




/*
7)let prices = [120, 450, 80, 600, 250];

თითოეული პროდუქტისთვის დაბეჭდე:
- თუ ფასი 300-ზე მეტია — "Expensive".
- სხვა შემთხვევაში — "Cheap".
*/


let prices1 = [120, 450, 80, 600, 250]

prices1.forEach((price) => {
    if (price > 300) {
        console.log("Expensive")
    } else {
        console.log("Cheap")
    }
})



/*
8)let numbers = [2, 4, 6, 8, 10];

map()-ის გამოყენებით შექმენი ახალი სია, რომელშიც თითოეული რიცხვი გაორმაგებული იქნება.
*/


let numbers3 = [2, 4, 6, 8, 10]

let doubled = numbers3.map((num) => {
    return num * 2
})

console.log(doubled)



/*
9)let numbers = [3, 5, 7, 9, 11];

შექმენი ახალი სია, რომელშიც თითოეული რიცხვის კვადრატი იქნება შენახული.
*/


let numbers4 = [3, 5, 7, 9, 11]

let squared = numbers4.map((num) => {
    return num ** 2
})

console.log(squared)




/*
10)let names = ["nika", "ana", "giorgi", "luka"];

შექმენი ახალი სია, რომელშიც ყველა სახელი დიდი ასოებით იქნება ჩაწერილი.
*/


let names1 = ["nika", "ana", "giorgi", "luka"]

let upperNames = names1.map((name) => {
    return name.toUpperCase()
})

console.log(upperNames)



/*
11)let prices = [100, 200, 300, 400];

შექმენი ახალი სია, რომელშიც თითოეულ ფასს 100 ლარი ექნება დამატებული.
*/


let prices2 = [100, 200, 300, 400]

let updatedPrices = prices2.map((price) => {
    return price + 100
})

console.log(updatedPrices)



/*
12)let ages = [12, 15, 18, 20, 25];

შექმენი ახალი სია, რომელშიც თითოეულ ასაკს 5 წელი ექნება დამატებული.
*/


let ages = [12, 15, 18, 20, 25]

let plusFiveAges = ages.map((age) => {
    return age + 5
})

console.log(plusFiveAges)



/*
13)let scores = [95, 45, 78, 32, 88, 60];


map()-ის გამოყენებით შექმენი ახალი სია:
- 90 ან მეტი → სიაში ჩაემატოს სიტყვა "Excellent"
- 70 ან მეტი →  სიაში ჩაემატოს სიტყვა "Good"
- სხვა შემთხვევაში →  სიაში ჩაემატოს სიტყვა "Bad"
*/


let scores1 = [95, 45, 78, 32, 88, 60]

let grades = scores1.map((score) => {
    if (score >= 90) {
        return "Excellent"
    } else if (score >= 70) {
        return "Good"
    } else {
        return "Bad"
    }
})

console.log(grades)



/*
14)let numbers = ["10", "20", "30", "40", "50"];

map()-ის გამოყენებით შექმენი ახალი სია, რომელშიც ყველა ელემენტი Number ტიპის იქნება.
*/


let numbers5 = ["10", "20", "30", "40", "50"]

let converted = numbers5.map((num) => {
    return Number(num)
})

console.log(converted)



/*
15)let numbers = [12, 5, 24, 7, 18, 31, 40, 9];


მოთხოვნები:
1. map()-ის გამოყენებით შექმენი ახალი სია, რომელშიც თითოეული რიცხვი გამრავლებული იქნება 3-ზე.
2. forEach()-ის გამოყენებით გადაუარე ახალ სიას.
3. თუ რიცხვი ლუწია, დაბეჭდე "Even: " და რიცხვი.
4. თუ რიცხვი კენტია, დაბეჭდე "Odd: " და რიცხვი.
5. დაითვალე ახალი სიის ყველა რიცხვის ჯამი და დაბეჭდე.
*/


let numbers6 = [12, 5, 24, 7, 18, 31, 40, 9]

let tripled = numbers6.map((num) => {
    return num * 3
})

let sum = 0

tripled.forEach((num) => {
    if (num % 2 === 0) {
        console.log("Even: " + num)
    } else {
        console.log("Odd: " + num)
    }
    sum += num
})

console.log(sum)




/*
16)let scores = [45, 90, 67, 32, 100, 78, 55, 88];


მოთხოვნები:
1. map()-ის გამოყენებით შექმენი ახალი სია, რომელშიც თითოეულ ქულას დაემატება 10 ქულა.
2. გამოიყენე forEach() და გადაუარე ახალ სიას.
3. თუ ქულა 100-ზე მეტია, დაბეჭდე 100 (მაქსიმალური ქულა).
4. თუ ქულა 70 ან მეტია, დაბეჭდე "Passed".
5. სხვა შემთხვევაში დაბეჭდე "Failed".
6. დაითვალე რამდენმა მოსწავლემ ჩააბარა და რამდენმა ვერ ჩააბარა.
*/


let scores2 = [45, 90, 67, 32, 100, 78, 55, 88]

let boosted = scores2.map((score) => {
    return score + 10
})

let passed = 0
let failed = 0

boosted.forEach((score) => {
    if (score > 100) {
        console.log(100)
    }
    if (score >= 70) {
        console.log("Passed")
        passed++
    } else {
        console.log("Failed")
        failed++
    }
})

console.log(passed)
console.log(failed)



/*
17)let prices = [120, 450, 80, 600, 250, 1000, 75, 350];


მოთხოვნები:
1. map()-ის გამოყენებით შექმენი ახალი სია, რომელშიც თითოეულ ფასს 20% დაემატება.
2. forEach()-ის გამოყენებით გადაუარე ახალ სიას.
3. თუ ახალი ფასი 500-ზე მეტია, დაბეჭდე "Expensive".
4. თუ ახალი ფასი 200 ან მეტია, დაბეჭდე "Medium".
5. სხვა შემთხვევაში დაბეჭდე "Cheap".
6. დაითვალე რამდენი პროდუქტია თითოეულ კატეგორიაში.
7. დაბეჭდე ყველა პროდუქტის განახლებული ფასის ჯამი.
*/


let prices3 = [120, 450, 80, 600, 250, 1000, 75, 350]
let updatedPrices1 = prices3.map(price => price * 1.2)

let expensiveCount = 0
let mediumCount = 0
let cheapCount = 0
let totalSum = 0

updatedPrices1.forEach(price => {
    if (price > 500) {
        console.log("Expensive")
        expensiveCount++
    } else if (price >= 200) {
        console.log("Medium")
        mediumCount++
    } else {
        console.log("Cheap")
        cheapCount++
    }
    totalSum += price
})

console.log(expensiveCount, mediumCount, cheapCount)
console.log(totalSum)