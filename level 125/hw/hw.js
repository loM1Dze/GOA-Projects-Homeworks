/*
1)შექმენი შემდეგი ცვლადები:

let productPrice = 120;
let quantity = 3;
let delivery = 15;
const shopName = "Tech Store";

დავალება:

productPrice გაამრავლე quantity-ზე *= ოპერატორის გამოყენებით.
მიღებულ ფასს დაუმატე delivery +=-ის გამოყენებით.
შექმენი ტექსტი Template Literal-ის გამოყენებით:
Tech Store order: 375 GEL
შექმენი ცალკე ცვლადი, რომელიც შეინახავს შეკვეთის რაოდენობას და ++-ის გამოყენებით გაზარდე 1-ით.
დაბეჭდე მისი typeof.
*/


let productPrice = 120
let quantity = 3
let delivery = 15
const shopName = "Tech Store"

productPrice *= quantity
productPrice += delivery;

let message = `${shopName} order: ${productPrice} GEL`

let orderCount = 1
orderCount ++

console.log(typeof orderCount)


/*
2)let score = 72;
const studentName = "Goga";

შეასრულე:

ქულას დაუმატე 8 → გამოიყენე +=.
შემდეგ გაამრავლე 2-ზე → გამოიყენე *=.
გამოაკელი 10 → გამოიყენე -=.
გაყავი 2-ზე → გამოიყენე /=.
საბოლოო შედეგი გამოიტანე:
Goga's final score is: 70
დაბეჭდე studentName-ის და score-ის typeof.
*/

let score = 72
const studentName = "Goga"

score += 8
score *= 2
score -= 10
score /= 2

console.log(`${studentName}'s final score is: ${score}`)
console.log(typeof studentName)
console.log(typeof score)



/*
3)let health = 100;
let level = 1;
let coins = 50;
const player = "Warrior";

მოთამაშემ მიიღო შემდეგი ცვლილებები:

დაკარგა 25 health → -=
მიიღო 40 coins → +=
level გაიზარდა 1-ით → ++
coins გაორმაგდა → *=
health გაიყო 5-ზე → /=

საბოლოოდ Template Literal-ით დაბეჭდე:

Warrior | Level: 2 | Health: 15 | Coins: 180
*/


let health = 100
let level = 1
let coins = 50
const player = "Warrior"

health -= 25
coins += 40
level++
coins *= 2
health /= 5

console.log(`${player} | Level: ${level} | Health: ${health} | Coins: ${coins}`)




/*
4)let price = 80;
let quantity = 4;
let discount = 20;
const currency = "GEL";

დავალება:

price გაამრავლე quantity-ზე.
მიღებულ თანხას გამოაკელი discount.
შექმენი ტექსტი String Concatenation-ით:
Total: 300 GEL
იგივე ინფორმაცია დაბეჭდე მეორედ, მაგრამ ამჯერად interpolation-ით.
დაბეჭდე price, quantity, discount და currency-ის typeof.
*/

let price = 80;
let quantity1 = 4
let discount = 20
const currency = "GEL"

price *= quantity1
price -= discount

console.log("Total: " + price + " " + currency)
console.log(`Total: ${price} ${currency}`)

console.log(typeof price)
console.log(typeof quantity1)
console.log(typeof discount)
console.log(typeof currency)



/*
5)შექმენი:

let counter = 10;

შემდეგ:

გაზარდე 1-ით ++-ის გამოყენებით.
კიდევ ერთხელ გაზარდე.
გაზარდე კიდევ 5-ით +=-ის გამოყენებით.
შეამცირე 1-ით ---ის გამოყენებით.
გაამრავლე 2-ზე *=-ით.
გაყავი 4-ზე /=-ით.

ყოველი მოქმედების შემდეგ დაბეჭდე counter.
*/


let counter = 10;

counter++
console.log(counter)

counter++
console.log(counter)

counter += 5
console.log(counter)

counter--
console.log(counter)

counter *= 2
console.log(counter)

counter /= 4
console.log(counter)



/*
6)შექმენი:

const firstName = "Nika";
const lastName = "Beridze";
let age = 17;
let city = "Tbilisi";

შექმენი ერთი ტექსტი, რომელიც გამოვა:

My name is Nika Beridze. I am 17 years old and I live in Tbilisi.

შემდეგ:

age გაზარდე ++-ით.
city შეცვალე "Batumi"-ზე.
იგივე ტექსტი თავიდან დაბეჭდე.

პირობა: გამოიყენე Template Literal ანუუ interpolation
*/


const firstName = "grisha"
const lastName = "oniani"
let age = 17
let city = "Tbilisi"

console.log(`My name is ${firstName} ${lastName}. I am ${age} years old and I live in ${city}.`)

age++
city = "Batumi"

console.log(`My name is ${firstName} ${lastName}. I am ${age} years old and I live in ${city}.`)



/*
7)const accountOwner = "Ana";
let balance = 1000;

შეასრულე ოპერაციები:

ჩარიცხა 500 → +=
დახარჯა 250 → -=
თანხა გააორმაგა → *=
ბანკმა ჩამოაჭრა 100 → -=
დარჩენილი თანხა გაყო 2-ზე → /=

შემდეგ დაბეჭდე:

Ana's current balance: 1150 GEL

დამატებით დაბეჭდე:

Owner type: string
Balance type: number

typeof-ის გამოყენებით.
*/


const accountOwner = "Ana"
let balance = 1000

balance += 500
balance -= 250
balance *= 2
balance -= 100
balance /= 2

console.log(`${accountOwner}'s current balance: ${balance} GEL`)

console.log("Owner type: " + typeof accountOwner)
console.log("Balance type: " + typeof balance)



/*
8)const movie = "Avatar";
let ticketPrice = 25;
let tickets = 4;
let snacks = 30;

დავალება:

ticketPrice გაამრავლე tickets-ზე.
დაუმატე snacks.
შემდეგ შეამცირე საბოლოო ფასი 10-ით.
tickets გაზარდე 1-ით ++ გამოყენებით.
შექმენი საბოლოო ტექსტი:
Movie: Avatar | Tickets: 5 | Total: 120 GEL
*/


const movie = "Avatar"
let ticketPrice = 25
let tickets = 4
let snacks = 30

let total = ticketPrice * tickets
total += snacks
total -= 10
tickets++

console.log(`Movie: ${movie} | Tickets: ${tickets} | Total: ${total} GEL`)


/*
9)let username = "Goga";
let age = 20;
const isStudent = true;
let salary = 1500;

დაბეჭდე:

Username: Goga
Age: 20
Student: true
Salary: 1500

შემდეგ:

age გაზარდე ++-ით.
salary გაზარდე += 300-ით.
salary შეამცირე -= 100-ით.
salary გაამრავლე *= 2-ზე.
თითოეული ცვლადის typeof დაბეჭდე.
*/


let username = "Goga"
let age1 = 20
const isStudent = true
let salary = 1500

console.log(`Username: ${username}`)
console.log(`Age: ${age1}`)
console.log(`Student: ${isStudent}`)
console.log(`Salary: ${salary}`)

age1++
salary += 300
salary -= 100
salary *= 2

console.log(typeof username)
console.log(typeof age1)
console.log(typeof isStudent)
console.log(typeof salary)




/*
10)const name = "Luka";
let age = 18;
let money = 500;
let items = 3;
const shop = "Game Store";

მომხმარებელმა:

იყიდა 3 ნივთი, თითოეული 50 GEL ღირდა;
შემდეგ დამატებით დახარჯა 70 GEL;
ანგარიშზე ჩაერიცხა 200 GEL;
ასაკი გაიზარდა 1-ით;
ბოლოს ანგარიშიდან ჩამოეჭრა 30 GEL.

გამოიყენე შესაბამისი assignment operators და ++.

საბოლოოდ დაბეჭდე Template Literal-ით:

Luka | Age: 19 | Shop: Game Store | Items: 3 | Money: 450 GEL

შემდეგ ცალკე დაბეჭდე typeof:

name: string
age: number
money: number
items: number
shop: string
*/


const name = "Luka"
let age2 = 18
let money = 500
let items = 3
const shop = "Game Store"

money -= 3 * 50
money -= 70
money += 200
age2++
money -= 30

console.log(`${name} | Age: ${age} | Shop: ${shop} | Items: ${items} | Money: ${money} GEL`)

console.log("name: " + typeof name)
console.log("age: " + typeof age2)
console.log("money: " + typeof money)
console.log("items: " + typeof items)
console.log("shop: " + typeof shop)




/*
11)const username = "Saba";
let age = 16;
let balance = 250;
let purchases = 2;
const currency = "GEL";
const shopName = "Digital Shop";

შექმენი პროგრამა, რომელიც ასახავს შემდეგ მოვლენებს:

მომხმარებელმა იყიდა კიდევ 3 პროდუქტი;
თითო პროდუქტი ღირდა 40 GEL;
შემდეგ ანგარიშზე დაემატა 150 GEL;
შემდეგ დახარჯა დამატებით 25 GEL;
ასაკი გაიზარდა 1-ით;
საბოლოოდ ანგარიშზე არსებული თანხა გაიზარდა 2-ჯერ.

ბოლოს უნდა მიიღო მსგავსი ინფორმაცია:

User: Saba
Age: 17
Purchases: 5
Balance: 450 GEL
Shop: Digital Shop

და დამატებით დაბეჭდე ყველა ცვლადის typeof.
*/


const username1 = "Saba"
let age3 = 16
let balance1 = 250
let purchases = 2
const currency1 = "GEL"
const shopName1 = "Digital Shop"

purchases += 3
balance1 -= 3 * 40
balance1 += 150
balance1 -= 25
age3++
balance *= 2

console.log(`User: ${username1}`)
console.log(`Age: ${age3}`)
console.log(`Purchases: ${purchases}`)
console.log(`Balance: ${balance1} ${currency1}`)
console.log(`Shop: ${shopName1}`)

console.log(typeof username1)
console.log(typeof age3)
console.log(typeof balance1)
console.log(typeof purchases)
console.log(typeof currency1)
console.log(typeof shopName1)