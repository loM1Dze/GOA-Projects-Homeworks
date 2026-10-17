/*
1)1. მოთამაშე 1-ის ძალა შემთხვევით განისაზღვროს 10-დან 30-ის ჩათვლით.
2. მოთამაშე 2-ის ძალაც შემთხვევით განისაზღვროს იმავე დიაპაზონში.
3. ორივე მოთამაშის ძალა გამოიტანე ეკრანზე.
4. თუ ერთის ძალა მეტია, ის იგებს რაუნდს.
5. თუ ძალები ტოლია, გამოიტანე "ფრეა!".
6. თამაში შედგებოდეს 5 რაუნდისგან.
7. ყოველი მოგებული რაუნდისთვის მოთამაშემ მიიღოს 1 ქულა.
8. 5 რაუნდის ბოლოს გამოავლინე გამარჯვებული.
დამატებითი სირთულე:
- თუ მოთამაშის ძალა ზუსტად 20-ია, მას დაემატოს 5 ბონუს ქულა.
- თუ ორივეს ძალა 25-ზე მეტია, რაუნდი დასრულდეს ფრედ.
- საბოლოოდ გამოიტანე ორივე მოთამაშის ქულები და გამარჯვებულის სახელი.
*/

let player1 = Math.floor(Math.random() * 21) + 10
let player2 = Math.floor(Math.random() * 21) + 10

if (player1 === 20) {
    player1 += 5
}

if (player2 === 20) {
    player2 += 5
}

console.log('Player 1: ' + player1)
console.log('Player 2: ' + player2)

if (player1 > 25 && player2 > 25) {
    console.log('ფრეა!')
} else if (player1 > player2) {
    console.log('Player 1 wins!')
} else if (player2 > player1) {
    console.log('Player 2 wins!')
} else {
    console.log('ფრეა!')
}


/*
2)1. თამაში იწყება 0 ქულით.
2. თითოეულ რაუნდში მოთამაშემ გააგოროს სამი კამათელი. თითოეული კამათლის შედეგი უნდა იყოს 1-დან 6-მდე.
3. გამოიტანე სამივე შედეგი და მათი ჯამი.
4. თუ სამივე კამათელზე ერთნაირი რიცხვი ამოვიდა, მოთამაშემ მიიღოს 50 ქულა.
5. თუ ზუსტად ორი კამათლის შედეგია ერთნაირი, მიიღოს 20 ქულა.
6. თუ სამივე შედეგის ჯამი 10-ზე მეტია, მიიღოს 10 ქულა.
7. სხვა შემთხვევაში ქულები არ დაემატოს.
8. თამაში გაგრძელდეს 5 რაუნდი.
დამატებითი სირთულე: თუ სამივე კამათლის ჯამი ლუწია, მოთამაშის ქულას დამატებით 5 ქულა დაემატოს. თუ ჯამი კენტია, 3 ქულა გამოაკლდეს.
საბოლოოდ გამოიტანე ყველა რაუნდის შედეგი და საერთო ქულა.
*/

let d1 = Math.floor(Math.random() * 6) + 1
let d2 = Math.floor(Math.random() * 6) + 1
let d3 = Math.floor(Math.random() * 6) + 1
let sum = d1 + d2 + d3

console.log('კამათლები: ' + d1 + ', ' + d2 + ', ' + d3)
console.log('ჯამი: ' + sum)

let score = 0

if (d1 === d2 && d2 === d3) {
    score += 50
} else if (d1 === d2 || d1 === d3 || d2 === d3) {
    score += 20
} else if (sum > 10) {
    score += 10
}

if (sum % 2 === 0) {
    score += 5
} else {
    score -= 3
}

console.log('ქულა: ' + score)


/*
3)კომპიუტერმა შემთხვევით აირჩიოს 0 ან 1.

0 ნიშნავდეს "გერბი", ხოლო 1 — "საფასური".

მოთამაშემ წინასწარ შეიყვანოს თავისი ვარაუდი.

თუ გამოიცნო, მიიღოს 10 ქულა.

თამაში განმეორდეს 5-ჯერ.

ბოლოს გამოიტანე მოთამაშის საერთო ქულა.
*/


let computer = Math.floor(Math.random() * 2)
let player = Number(prompt('შეიყვანეთ 0 (გერბი) ან 1 (საფასური):'))

let score1 = 0

if (player === computer) {
    score1 += 10
}

console.log('Computer: ' + computer)
console.log('Player: ' + player)
console.log('ქულა: ' + score1)


/*
4)მოთამაშის სროლის შედეგი შემთხვევით განისაზღვროს 1-დან 100-მდე.

თუ შედეგი 80-ზე მეტია, მიიღოს 20 ქულა.

თუ შედეგი 50-ზე მეტია, მიიღოს 10 ქულა.

სხვა შემთხვევაში ქულა არ მიიღოს.

ბოლოს გამოიტანე საერთო ქულა.
*/


let shot = Math.floor(Math.random() * 100) + 1
let score2 = 0

if (shot > 80) {
    score2 += 20
} else if (shot > 50) {
    score2 += 10
}

console.log('შედეგი: ' + shot)
console.log('ქულა: ' + score2)


/*
5)კომპიუტერმა შემთხვევით აირჩიოს რიცხვი 1-დან 50-მდე.

თუ შეყვანილი რიცხვი საიდუმლო რიცხვზე მეტია, გამოიტანე "შეამცირე!".

თუ ნაკლებია, გამოიტანე "გაზარდე!".

თუ გამოიცნო, გამოიტანე "მოიგე!" და თამაში შეწყდეს.

თუ ხუთივე მცდელობა ამოიწურა, გამოიტანე საიდუმლო რიცხვი.
*/

let secret = Math.floor(Math.random() * 50) + 1
let guess = Number(prompt('შეიყვანეთ რიცხვი 1-დან 50-მდე'))

if (guess > secret) {
    console.log('შეამცირე!')
} else if (guess < secret) {
    console.log('გაზარდე!')
} else {
    console.log('მოიგე!')
}


/*
6)let x = 10;

function showNumber() {
  let x = 20;
  console.log(x);
}

showNumber();

console.log(x);


დავალება:
- დაწერე, რას დაბეჭდავს პირველი console.log().
- დაწერე, რას დაბეჭდავს მეორე console.log().
*/

20
10


/*
7)function greet() {
  let message = "Hello!";
}

greet();

console.log(message);


დავალება:
1. ახსენი, რატომ წარმოიქმნება შეცდომა.
2. შეცვალე კოდი ისე, რომ "Hello!" დაიბეჭდოს.
*/

function greet() {
    let message = 'Hello!'
    return message
}

console.log(greet())


/*
8)if (true) {
  let age = 18;
  const name = "Nika";
}

console.log(age);
console.log(name);


დავალება:
- ახსენი, რატომ ვერ ვკითხულობთ ამ ცვლადებს if ბლოკის გარეთ.
- შეცვალე კოდი ისე, რომ ორივე მნიშვნელობა დაიბეჭდოს შეცდომის გარეშე.
*/


let age
let name

if (true) {
    age = 18
    name = 'Nika'
}

console.log(age)
console.log(name)



/*
9)let points = 100;

function first() {
  let points = 50;

  function second() {
    points = points + 25;
    console.log(points);
  }

  second();

  console.log(points);
}

first();

console.log(points);


დავალება:
1. იწინასწარმეტყველე სამივე შედეგი.
2. ახსენი, რომელ points ცვლადს ცვლის second() ფუნქცია.
3. შეცვალე კოდი ისე, რომ second()-ში გამოცხადებულმა ახალმა ცვლადმა გარე ცვლადები არ შეცვალოს.
*/


let points = 100

function first() {
    let points = 50

    function second() {
        let points = 25
        console.log(points)
    }

    second()

    console.log(points)
}

first()

console.log(points)


/*
10)et result = 10;

function calculate() {
  let result = 30;
  return result;
}

result = calculate();

console.log(result);


დავალება:
- ახსენი, რატომ იბეჭდება 30 და არა 10.
- რა მოხდება, თუ return result; წაიშლება?
- შეცვალე ფუნქცია ისე, რომ მან დააბრუნოს result + 20.
*/


let result = 10

function calculate() {
    let result = 30
    return result + 20
}

result = calculate()

console.log(result)



