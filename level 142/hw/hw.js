/*
1)while ციკლის გამოყენებით გამოიტანე რიცხვები 1-დან 10-ის ჩათვლით.

თითოეული რიცხვი ცალკე ხაზზე გამოიტანე.
*/

let i = 1
while (i <= 10) {
    console.log(i)
    i++
}


/*
2)while ციკლით გამოიტანე რიცხვები 10-დან 1-მდე.
როდესაც ციკლი დასრულდება, გამოიტანე "Start!".
*/

let i1 = 10
while (i1 > 1) {
    console.log(i1)
    i1--
}
console.log("Start!")


/*
3)გამოიტანე ყველა ლუწი რიცხვი 2-დან 20-ის ჩათვლით.
გამოიყენე while ციკლი.
*/


let i2 = 2
while (i2 <= 20) {
    console.log(i2)
    i2 += 2
}


/*
4)გამოიტანე ყველა კენტი რიცხვი 1-დან 25-ის ჩათვლით.
ყოველი გამეორების შემდეგგაზარდე i 2-ით.
*/

let i3 = 1
while (i3 <= 25) {
    console.log(i3)
    i3 += 2
}


/*
5)შექმენი ორი ცვლადი:
- i = 1
- sum = 0
while ციკლის გამოყენებით შეკრიბე 1-დან 10-ის ჩათვლით ყველა რიცხვი და საბოლოოდ გამოიტანე ჯამი.
*/

let i4 = 1
let sum = 0
while (i4 <= 10) {
    sum += i4
    i4++
}
console.log(sum)


/*
6)შექმენი ცვლადები:
- i = 1
- product = 1
while ციკლის გამოყენებით იპოვე 1-დან 5-ის ჩათვლით ყველა რიცხვის ნამრავლი.

საბოლოო შედეგი უნდა იყოს 120.
*/

let i5 = 1
let product = 1
while (i5 <= 5) {
    product *= i5
    i5++
}
console.log(product)

/*
7)7. 5-ის გამრავლების ტაბულა

მომხმარებელს შემოატანინე რიცხვი prompt-ის საშუალებით.
- გამოიტანე ამ რიცხვის გამრავლების ტაბულა 1-დან 10-ის ჩათვლით.
- გამოიყენე while ციკლი.
მაგალითად, თუ მომხმარებელმა შეიყვანა 3:
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
...
3 x 10 = 30
*/

let num1 = Number(prompt())
let i6 = 1
while (i6 <= 10) {
    console.log(num1 + " x " + i6 + " = " + (num1 * i6))
    i6++
}


/*
8)მომხმარებელს შემოატანინე დადებითი მთელი რიცხვი.
- იპოვე და გამოიტანე ყველა რიცხვი, რომელზეც მომხმარებლის მიერ შეყვანილი რიცხვი უნაშთოდ იყოფა.
- გამოიყენე while და if.
მაგალითად, თუ შეიყვანა 12:
1
2
3
4
6
12
*/

let num2 = Number(prompt())
let i7 = 1
while (i7 <= num2) {
    if (num2 % i7 === 0) {
        console.log(i7)
    }
    i7++
}


/*
9)შექმენი ცვლადები:
- i = 1
- count = 0
while ციკლით გაიარე 1-დან 50-ის ჩათვლით ყველა რიცხვი.
- თუ რიცხვი ლუწია, გაზარდე count 1-ით.
- საბოლოოდ გამოიტანე რამდენი ლუწი რიცხვია 1-დან 50-მდე.
*/

let i8 = 1
let count = 0
while (i8 <= 50) {
    if (i8 % 2 === 0) {
        count++
    }
    i8++
}
console.log(count)


/*
10)მომხმარებელს შემოატანინე რიცხვი n.
- შეკრიბე ყველა რიცხვი 1-დან n-ის ჩათვლით.
- იპოვე მათი საშუალო არითმეტიკული.
- გამოიტანე ჯამიც და საშუალოც.
*/

let n = Number(prompt())
let i9 = 1
let sum2 = 0
let count1 = 0
while (i9 <= n) {
    sum2 += i9
    count1++
    i9++
}
let average = sum2 / count1
console.log(sum2)
console.log(average)


/*
11)secretNumber = 17

მომხმარებელს მუდმივად შემოატანინე რიცხვი prompt-ის საშუალებით.
- თუ მომხმარებელი შეიყვანს საიდუმლო რიცხვზე ნაკლებს, გამოიტანე "Too low!".
- თუ მეტს, გამოიტანე "Too high!".
- თუ სწორად გამოიცნობს, გამოიტანე "Correct!" და ციკლი შეწყდეს.
*/

let secretNumber = 17
let guess = Number(prompt())
while (guess !== secretNumber) {
    if (guess < secretNumber) {
        console.log("Too low!")
    } else {
        console.log("Too high!")
    }
    guess = Number(prompt())
}
console.log("Correct!")


/*
12)მომხმარებელს შემოატანინე რიცხვები მანამ, სანამ არ შეიყვანს 0-ს.
- შეკრიბე მხოლოდ დადებითი რიცხვები.
- უარყოფითი რიცხვები არ დაამატო ჯამში.
- როდესაც მომხმარებელი შეიყვანს 0-ს, შეწყვიტე ციკლი.
- გამოიტანე მიღებული ჯამი.
*/

let sum11 = 0
let num = Number(prompt())
while (num !== 0) {
    if (num > 0) {
        sum11 += num
    }
    num = Number(prompt())
}
console.log(sum11)


/*
13)მომხმარებელს შემოატანინე მთელი დადებითი რიცხვი.
- იპოვე ამ რიცხვის თითოეული ციფრი.
- შეკრიბე ყველა ციფრი.
- გამოიტანე საბოლოო ჯამი.
მაგალითად:
Input: 452
Output: 11 რადგან 4 + 5 + 2 = 11
*/

let num12 = Number(prompt())
let sum3 = 0
while (num12 > 0) {
    sum3 += num12 % 10
    num12 = Math.floor(num12 / 10)
}
console.log(sum3)


/*
14)შექმენი ცვლადი:

secretNumber = 25

მომხმარებელს მიეცი მხოლოდ 3 მცდელობა.
- თუ სწორად გამოიცნობს, გამოიტანე "You Win!".
- თუ არასწორია, აცნობე, რომ არასწორი პასუხია.
- თუ სამივე მცდელობა ამოიწურა და ვერ გამოიცნო, გამოიტანე "You Lose!".
- გამოიყენე while ციკლი.
*/

let secretNumber1 = 25
let attempts = 3
let won = false
while (attempts > 0 && !won) {
    let guess = Number(prompt())
    if (guess === secretNumber1) {
        won = true
    } else {
        attempts--
        if (attempts > 0) {
            console.log("wrrong")
        }
    }
}
if (won) {
    console.log("You Win!")
} else {
    console.log("You Lose!")
}


/*
15)let names = ["Goga", "Nika", "Saba"];
let surnames = ["Chalauri", "Beridze", "Maisuradze"];


- გამოიყენე Nested For Loop.
- ორივე სიის ყველა ელემენტი გამოიტანე კონსოლში.
*/

let names = ["Goga", "Nika", "Saba"]
let surnames = ["Chalauri", "Beridze", "Maisuradze"]

for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < surnames.length; j++) {
        console.log(names[i] + " " + surnames[j])
    }
}


/*
16)მოცემულია:
let first = [10, 20, 30, 40];
let second = [20, 50, 40, 60];


იპოვე და გამოიტანე ის რიცხვები, რომლებიც ორივე სიაში გვხვდება.
*/

let first = [10, 20, 30, 40]
let second = [20, 50, 40, 60]

for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
        if (first[i] === second[j]) {
            console.log(first[i])
        }
    }
}


/*
17)let colors = ["Red", "Blue", "Green"];
let sizes = ["Small", "Medium", "Large"];


შექმენი ყველა შესაძლო ფერისა და ზომის წყვილი.

შედეგი:
Red - Small
Red - Medium
Red - Large
Blue - Small
Blue - Medium
Blue - Large
Green - Small
Green - Medium
Green - Large
*/

let colors = ["Red", "Blue", "Green"]
let sizes = ["Small", "Medium", "Large"]

for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < sizes.length; j++) {
        console.log(colors[i] + " - " + sizes[j])
    }
}
