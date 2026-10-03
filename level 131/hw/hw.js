/*
1)შექმენი arrow function სახელად greet, რომელიც მიიღებს name პარამეტრს და დააბრუნებს:

Hello, Nika!

მაგალითად:

greet("Nika")

უნდა დააბრუნოს:

Hello, Nika!
*/


const greet = name => `Hello, ${name}!`

console.log(greet("Nika"))


/*
2)შექმენი arrow function calculatePrice, რომელსაც ექნება:

price
quantity
discount

ფუნქციამ:

დათვალოს price * quantity
თუ discount არის 20 ან მეტი, ფასს დააკლოს discount-ის პროცენტი.
სხვა შემთხვევაში დააბრუნოს ჩვეულებრივი ჯამი.

მაგალითად:

calculatePrice(100, 3, 20)

შედეგი:

240

პირობა: ფუნქცია დაწერე single-line concise arrow function-ად.
*/

const calculatePrice = (price, quantity, discount) => discount >= 20 ? (price * quantity) * (1 - discount / 100) : price * quantity


/*
3)შექმენი:

calculateSalary

მიიღოს:

salary
bonus

თუ bonus არის 500-ზე მეტი, თანამშრომელმა მიიღოს დამატებით 10% ბონუსი ხელფასიდან.

მაგალითად:

calculateSalary(2000, 600)

უნდა მიიღოს:

2200

თუ:

calculateSalary(2000, 300)

შედეგი უნდა იყოს:

2000
*/

const calculateSalary = (salary, bonus) => bonus > 500 ? salary + (salary * 0.1) : salary


/*
4)შექმენი:

getAgeCategory

მიიღოს age.

დააბრუნოს:

0–12 → "Child"
13–17 → "Teenager"
18–59 → "Adult"
60+ → "Senior"

მაგალითად:

getAgeCategory(15) // "Teenager"
getAgeCategory(25) // "Adult"
getAgeCategory(70) // "Senior"

პირობა: გამოიყენე nested ternary და დაწერე single-line arrow function.
*/


const getAgeCategory = age => age <= 12 ? "Child" : age <= 17 ? "Teenager" : age <= 59 ? "Adult" : "Senior"


/*
5)შექმენი:

checkExam

მიიღოს:

score
maxScore

გამოთვალე რამდენი პროცენტი აიღო მოსწავლემ.

თუ პროცენტული შედეგია:

90% ან მეტი → "Excellent"
75–89% → "Very Good"
60–74% → "Passed"
60%-ზე ნაკლები → "Failed"

მაგალითად:

checkExam(45, 50)

→ "Excellent"

checkExam(32, 50)

→ "Passed"

*/

const checkExam = (score, maxScore) => (score / maxScore) * 100 >= 90 ? "Excellent" : (score / maxScore) * 100 >= 75 ? "Very Good" : (score / maxScore) * 100 >= 60 ? "Passed" : "Failed"


/*
6)შექმენი arrow function:

withdraw

მიიღოს:

balance
amount

წესები:

თუ თანხა ანგარიშზე არსებულზე მეტია → "Not enough money"
თუ თანხა არის 0 ან უარყოფითი → "Invalid amount"
სხვა შემთხვევაში დააბრუნოს დარჩენილი თანხა.

მაგალითად:

withdraw(1000, 300)

→ 700

withdraw(1000, 1500)

→ "Not enough money"

withdraw(1000, 0)

→ "Invalid amount"
*/

const withdraw = (balance, amount) => amount <= 0 ? "Invalid amount" : amount > balance ? "Not enough money" : balance - amount


/*
7)შექმენი:

checkPassword

მიიღოს:

password

წესები:

თუ პაროლის სიგრძე 8-ზე ნაკლებია → "Too short"
თუ პაროლის სიგრძე 8 ან მეტია → "Valid password"

მაგალითად:

checkPassword("hello")

→ "Too short"

checkPassword("javascript")

→ "Valid password"

მოთხოვნა: concise single-line arrow function.
*/


const checkPassword = password => password.length < 8 ? "Too short" : "Valid password"


/*
8)შექმენი:

getOrderPrice

მიიღოს:

price
quantity
delivery

delivery შეიძლება იყოს:

"standard"
"express"

წესები:

standard → მიწოდება 5 ლარი
express → მიწოდება 15 ლარი

ფუნქციამ უნდა დააბრუნოს საბოლოო თანხა.

მაგალითად:

getOrderPrice(100, 3, "standard")

→ 305

getOrderPrice(100, 3, "express")

→ 315
*/

const getOrderPrice = (price, quantity, delivery) => (price * quantity) + (delivery === "express" ? 15 : 5)


/*
9)შექმენი:

calculateFinalPrice

მიიღოს:

price
quantity
discount
isMember

წესები:

დათვალე price * quantity
თუ discount 0-ზე მეტია, დააკელი შესაბამისი პროცენტი.
თუ isMember === true, მიღებულ ფასს დამატებით დააკელი 10%.
დააბრუნე საბოლოო ფასი.

მაგალითად:

calculateFinalPrice(100, 3, 20, true)

ნაბიჯები:

100 × 3 = 300
20% discount → 240
member discount 10% → 216

შედეგი:

216

მთავარი მოთხოვნა: ეცადონ დაწერონ concise arrow function, ანუ {} და return არ გამოიყენოთ
*/

const calculateFinalPrice = (price, quantity, discount, isMember) => (price * quantity * (1 - discount / 100)) * (isMember ? 0.9 : 1)


/*
10)შექმენი arrow function:

const roundNumber = number => ...

ფუნქციამ მიღებული რიცხვი დაამრგვალოს უახლოეს მთელ რიცხვამდე.
*/

const roundNumber = number => Math.round(number)



/*
11)შექმენი:

const floorNumber = number => ...

გამოიყენე Math.floor().

floorNumber(5.9) // 5
floorNumber(8.2) // 8
floorNumber(12.99) // 12

მოთხოვნა: გამოიყენე single-line arrow function.
*/

const floorNumber = number => Math.floor(number)


/*
12)შექმენი:

const ceilNumber = number => ...

მაგალითად:

ceilNumber(5.1) // 6
ceilNumber(8.2) // 9
ceilNumber(12.01) // 13
*/

const ceilNumber = number => Math.ceil(number)