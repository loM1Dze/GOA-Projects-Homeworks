/*
1) — რიცხვები 1-დან 20-მდე
for ციკლის გამოყენებით დაბეჭდე რიცხვები 1-დან 20-ის ჩათვლით.
*/

for (let i = 1; i < 20; i++) {
    console.log(i)
}



// 2)დაბეჭდე რიცხვები 20-დან 1-მდე კლებადობით. 

for (let i = 20; i > 1; i--) {
    console.log(i)
}


// 3)გამოიტანე ლუწი რიცხვები 50 დან 100 მდე

for (let i = 50; i < 100; i += 2) {
    console.log(i)
}


/*
4)რიცხვების ჯამი
გამოთვალე რიცხვების ჯამი 1-დან 100-ის ჩათვლით.
*/

let sum = 0

for (let i = 1; i <= 100; i++) {
    sum += i
}

console.log(sum)


/*
5) — კონკრეტული რიცხვის გამრავლების ტაბულა
მომხმარებელს prompt()-ით შეაყვანინე რიცხვი და for ციკლის გამოყენებით დაბეჭდე მისი გამრავლების ტაბულა 1-დან 10-ის ჩათვლით.
*/


let number = Number(prompt("შეიყვანეთ რიცხვი:"))

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`)
}


// 6)გამოიტანე კენტი რიცხვები 30 დან 50 მდე 

for (let i = 31; i < 50; i += 2) {
    console.log(i)
}


// 7)გამოიტანე რიცხვები უკუსვლით 100 დან 20 მდე 3 სტეპის გამოტოვებით

for (let i = 100; i > 20; i -= 3) {
    console.log(i)
}


/*
8)let start = 15;
let end = 85;

for ციკლის გამოყენებით:
1. დაითვალე, რამდენი რიცხვია მოცემულ შუალედში.
2. დაითვალე, რამდენი რიცხვია 3-ის ჯერადი.
3. დაითვალე, რამდენი რიცხვია ერთდროულად 3-ისა და 5-ის ჯერადი.
*/

let start = 15
let end = 85

let totalCount = 0
let multipleOf3Count = 0
let multipleOf3And5Count = 0

for (let i = start; i <= end; i++) {
    totalCount++

    if (i % 3 === 0) {
        multipleOf3Count++
    }

    if (i % 3 === 0 && i % 5 === 0) {
        multipleOf3And5Count++
    }
}

console.log(`სულ რიცხვების რაოდენობა: ${totalCount}`)
console.log(`3-ის ჯერადი რიცხვების რაოდენობა: ${multipleOf3Count}`)
console.log(`ერთდროულად 3-ისა და 5-ის ჯერადი რიცხვების რაოდენობა: ${multipleOf3And5Count}`)


/*
9)let start = -20;
let end = 30;

for ციკლისა და if/else-ის გამოყენებით:
1. დაითვალე დადებითი რიცხვები.
2. დაითვალე უარყოფითი რიცხვები.
3. დაითვალე ლუწი რიცხვები.
4. გამოთვალე ყველა რიცხვის ჯამი.
*/


let start1 = -20
let end1 = 30

let positiveCount = 0
let negativeCount = 0
let evenCount = 0
let totalSum = 0

for (let i = start1; i <= end1; i++) {
    if (i > 0) {
        positiveCount++
    } else if (i < 0) {
        negativeCount++
    }

    if (i % 2 === 0) {
        evenCount++
    }

    totalSum += i
}

console.log(`დადებითი რიცხვების რაოდენობა: ${positiveCount}`)
console.log(`უარყოფითი რიცხვების რაოდენობა: ${negativeCount}`)
console.log(`ლუწი რიცხვების რაოდენობა: ${evenCount}`)
console.log(`ყველა რიცხვის ჯამი: ${totalSum}`)