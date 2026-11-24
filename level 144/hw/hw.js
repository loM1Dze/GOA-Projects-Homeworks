/*
1)შექმენი ციკლი, რომელიც 1-დან 50-მდე რიცხვებს გაივლის.
- შეკრიბე მხოლოდ კენტი რიცხვები.
- როგორც კი ჯამი 100-ს გადააჭარბებს, შეწყვიტე ციკლი break-ის გამოყენებით.
- დაბეჭდე საბოლოო ჯამი.
*/

let sum = 0

for (let i = 1; i < 50; i++) {
    if (i % 2 !== 0) {
        sum += i
        if (sum > 100) {
            break
        }
    }
}

console.log(sum)



/*
2)let numbers = [5, 12, 18, 7, 25, 30, 9, 40];


- გაიარე მასივზე ციკლით.
- დაბეჭდე მხოლოდ 10-ზე მეტი რიცხვები.
- როგორც კი შეხვდები 30-ს, შეწყვიტე ციკლი.
- 30 აღარ უნდა დაიბეჭდოს.
*/


let numbers = [5, 12, 18, 7, 25, 30, 9, 40]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 30) {
        break
    }
    if (numbers[i] > 10) {
        console.log(numbers[i])
    }
}



/*
3)let scores = [45, 67, 82, 91, 38, 75, 100, 55];


- გაიარე მასივზე ციკლით.
- თუ ქულა 50-ზე ნაკლებია, დაბეჭდე "Failed!".
- თუ ქულა 90 ან მეტია, დაბეჭდე "Excellent!".
- როგორც კი შეხვდები 100 ქულას, შეწყვიტე ციკლი.
*/


let scores = [45, 67, 82, 91, 38, 75, 100, 55]

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 100) {
        break
    }
    if (scores[i] < 50) {
        console.log("Failed!")
    } else if (scores[i] >= 90) {
        console.log("Excellent!")
    }
}



/*
4)მომხმარებელს შეაყვანინე რიცხვი prompt()-ის საშუალებით.
- სწორი კოდია 2026.
- მომხმარებელს მაქსიმუმ 4 მცდელობა აქვს.
- თუ შეიყვანს სწორ კოდს, დაბეჭდე "Access Granted!" და შეწყვიტე ციკლი.
- თუ 4-ვე მცდელობა არასწორი იქნება, დაბეჭდე "Access Denied!".
*/


let accessGranted = false

for (let i = 0; i < 4; i++) {
    let code = Number(prompt("Enter code:"))
    if (code === 2026) {
        console.log("Access Granted!")
        accessGranted = true
        break
    }
}

if (!accessGranted) {
    console.log("Access Denied!")
}



/*
5)let numbers = [12, 25, 8, 34, 17, 50, 9, 60];


- იპოვე პირველი რიცხვი, რომელიც ერთდროულად 20-ზე მეტია და 3-ზე იყოფა.
- დაბეჭდე ნაპოვნი რიცხვი.
- შეწყვიტე ციკლი.
- თუ ასეთი რიცხვი ვერ იპოვე, დაბეჭდე "Not Found!".
*/


let numbers1 = [12, 25, 8, 34, 17, 50, 9, 60]
let found = false

for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] > 20 && numbers1[i] % 3 === 0) {
        console.log(numbers1[i])
        found = true
        break
    }
}

if (!found) {
    console.log("Not Found!")
}



/*
6)let prices = [15, 25, 10, 40, 30, 50, 20];


- გაიარე მასივზე ციკლით.
- შეკრიბე ფასები.
- თუ ჯამი 100-ს გადააჭარბებს, შეწყვიტე ციკლი.
- დაბეჭდე ჯამი, რომელმაც 100-ს გადააჭარბა.
- ის ფასი, რომლის დამატების შემდეგაც ჯამი 100-ს გადასცდება, აუცილებლად უნდა ჩაითვალოს.
*/


let prices = [15, 25, 10, 40, 30, 50, 20]
let sum1 = 0

for (let i = 0; i < prices.length; i++) {
    sum1 += prices[i]
    if (sum1 > 100) {
        break
    }
}

console.log(sum1)



/*
7)let numbers = [8, 14, 21, 6, 35, 42, 11, 50];


- დაითვალე რამდენი ლუწი რიცხვი შეგხვდა.
- თუ შეხვდები რიცხვს, რომელიც ერთდროულად 30-ზე მეტია და 5-ზე იყოფა, შეწყვიტე ციკლი.
- დაბეჭდე ლუწი რიცხვების რაოდენობა.
*/


let numbers2 = [8, 14, 21, 6, 35, 42, 11, 50]
let evenCount = 0

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > 30 && numbers2[i] % 5 === 0) {
        break
    }
    if (numbers2[i] % 2 === 0) {
        evenCount++
    }
}

console.log(evenCount)



/*
8)მომხმარებელს prompt()-ის საშუალებით შეაყვანინე ასაკი.
- მომხმარებელს აქვს მაქსიმუმ 5 მცდელობა.
- თუ შეიყვანს ასაკს 18-დან 60-ის ჩათვლით, დაბეჭდე "Valid Age!" და შეწყვიტე ციკლი.
- სხვა შემთხვევაში დაბეჭდე "Invalid Age!".
- თუ 5 მცდელობის შემდეგაც ვერ შეიყვანს სწორ ასაკს, დაბეჭდე "Attempts Finished!".
*/


let validFound = false

for (let i = 0; i < 5; i++) {
    let age = Number(prompt("Enter age:"))
    if (age >= 18 && age <= 60) {
        console.log("Valid Age!")
        validFound = true
        break
    } else {
        console.log("Invalid Age!")
    }
}

if (!validFound) {
    console.log("Attempts Finished!")
}