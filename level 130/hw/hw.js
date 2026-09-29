/*
1)შექმენი Function Expression სახელად greet.

ფუნქციამ მიიღოს ერთი პარამეტრი name და დააბრუნოს:

Hello, გიორგი!

მაგალითად:

greet("Giorgi")

უნდა დააბრუნოს:

Hello, Giorgi!

გამოიძახე ფუნქცია console.log()-ით.
*/


const greet = function (name) {
    return `Hello, ${name}!`
}

console.log(greet('Giorgi'))



/*
2)შექმენი Function Expression სახელად sum.

მიიღოს ორი რიცხვი.
დააბრუნოს მათი ჯამი.
გამოიძახე ფუნქცია რამდენიმე სხვადასხვა რიცხვით.
*/


const sum = function (a, b) {
    return a + b
}

console.log(sum(5, 10))
console.log(sum(20, 30))
console.log(sum(-4, 9))



/*
4)შექმენი Function Expression სახელად checkAge.

ფუნქციამ მიიღოს age.

თუ ასაკი 18 ან მეტია, დააბრუნოს:

You are an adult

წინააღმდეგ შემთხვევაში:

You are underage

გამოიყენე if / else.
*/


const checkAge = function (age) {
    if (age >= 18) {
        return "You are an adult"
    } else {
        return "You are underage"
    }
}

console.log(checkAge(20))
console.log(checkAge(15))
console.log(checkAge(18))




/*
5)შექმენი Function Expression სახელად checkPrice.

ფუნქციამ მიიღოს price.

თუ ფასი 100-ზე მეტია, დააბრუნოს:

Expensive

სხვა შემთხვევაში:

Affordable

ფუნქციის შედეგი აუცილებლად return-ით დააბრუნე.
*/


const checkPrice = function (price) {
    if (price > 100) {
        return "Expensive"
    } else {
        return "Affordable"
    }
}

console.log(checkPrice(150))
console.log(checkPrice(80))
console.log(checkPrice(100))



/*
6)შექმენი Function Expression სახელად calculate.

ფუნქციამ მიიღოს სამი პარამეტრი:

num1
num2
operation

operation შეიძლება იყოს:

"+"
"-"
"*"

ფუნქციამ უნდა შეასრულოს შესაბამისი მოქმედება.

მაგალითად:

calculate(10, 5, "+")

→ 15

calculate(10, 5, "*")

→ 50

გამოიყენე if / else if / else.
*/


const calculate = function (num1, num2, operation) {
    if (operation === "+") {
        return num1 + num2
    } else if (operation === "-") {
        return num1 - num2
    } else if (operation === "*") {
        return num1 * num2
    } else {
        return "არასწორი ოპერაცია"
    }
}


console.log(calculate(10, 5, "+"))
console.log(calculate(10, 5, "*"))
console.log(calculate(10, 5, "-"))



/*
7)შექმენი Function Expression:

const getGrade = function(score) {
    // ...
}

ფუნქციამ ქულის მიხედვით დააბრუნოს:

90 ან მეტი → "A"
80–89 → "B"
70–79 → "C"
60–69 → "D"
60-ზე ნაკლები → "F"

მაგალითად:

getGrade(85)

უნდა დააბრუნოს:

B
*/



const getGrade = function (score) {
    if (score >= 90) {
        return "A"
    } else if (score >= 80) {
        return "B"
    } else if (score >= 70) {
        return "C"
    } else if (score >= 60) {
        return "D"
    } else {
        return "F"
    }
}

console.log(getGrade(95))
console.log(getGrade(85))
console.log(getGrade(72))
console.log(getGrade(60))
console.log(getGrade(45))



/*
8)შექმენი Function Expression სახელად getFinalPrice.

მიიღოს:

price
discount

discount უნდა იყოს პროცენტული მნიშვნელობა.

მაგალითად:

getFinalPrice(100, 20)

უნდა დააბრუნოს:

80

ანუ ფუნქციამ ფასი ფასდაკლების შემდეგ უნდა დააბრუნოს.
*/


const getFinalPrice = function (price, discount) {
    return price - (price * discount / 100)
}


console.log(getFinalPrice(100, 20))
console.log(getFinalPrice(200, 15))
console.log(getFinalPrice(50, 10))



/*
9)შექმენი Function Expression:

const login = function(username, password) {
    
}
სწორი მონაცემებია:

username → "admin"
password → "1234"

თუ ორივე სწორია, დააბრუნოს:

Login successful

თუ რომელიმე არასწორია:

Invalid username or password
*/


const getFinalPrice1 = function (price, discount) {
    return price - (price * discount / 100)
}

console.log(getFinalPrice1(100, 20))
console.log(getFinalPrice1(200, 15))
console.log(getFinalPrice1(50, 10))



/*
10)შექმენი function expression სახელად calculatePrice.

ფუნქციამ მიიღოს:

price
quantity
discount — default მნიშვნელობა 0

წესები:

დაითვალე price * quantity
თუ discount არის 0 → დააბრუნე სრული ფასი
თუ ფასდაკლება არის 10 → ფასი 10%-ით შეამცირე
თუ ფასდაკლება არის 20 → ფასი 20%-ით შეამცირე
სხვა შემთხვევაში → დააბრუნე სრული ფასი

გამოიძახე ფუნქცია მინიმუმ 3 განსხვავებული გზით.
*/



const calculatePrice = function (price, quantity, discount = 0) {
    const totalPrice = price * quantity

    if (discount === 0) {
        return totalPrice
    } else if (discount === 10) {
        return totalPrice - (totalPrice * 0.10)
    } else if (discount === 20) {
        return totalPrice - (totalPrice * 0.20)
    } else {
        return totalPrice
    }
}

console.log(calculatePrice(50, 2))
console.log(calculatePrice(50, 2, 10))
console.log(calculatePrice(50, 2, 20))
console.log(calculatePrice(50, 2, 15))



/*
11)შექმენი function expression სახელად getResult.

ფუნქციამ მიიღოს:

name
score
bonus = 0

ფუნქციამ:

score-ს დაუმატოს bonus.
თუ საბოლოო ქულა არის 90 ან მეტი → დააბრუნოს:
"ნიკა - Excellent"
თუ არის 70-89 → "ნიკა - Good"
თუ არის 50-69 → "ნიკა - Passed"
თუ არის 50-ზე ნაკლები → "ნიკა - Failed"

სახელი დინამიკურად უნდა გამოიყენო და არა პირდაპირ "ნიკა".

გამოიძახე სხვადასხვა სტუდენტისთვის.
*/


const getResult = function (name, score, bonus = 0) {
    const finalScore = score + bonus

    if (finalScore >= 90) {
        return `${name} - Excellent`
    } else if (finalScore >= 70) {
        return `${name} - Good`
    } else if (finalScore >= 50) {
        return `${name} - Passed`
    } else {
        return `${name} - Failed`
    }
}

console.log(getResult("ნიკა", 85, 10))
console.log(getResult("გიორგი", 75))
console.log(getResult("ანა", 45, 10))
console.log(getResult("ლაშა", 40))



/*
12)შექმენი function expression სახელად calculateDelivery.

მიიღოს:

city
distance
isExpress = false

წესები:

თუ distance არის 5 ან ნაკლები → მიწოდება ღირს 5
თუ distance არის 6-15 → ღირს 10
თუ distance არის 16-30 → ღირს 20
თუ distance 30-ზე მეტია → ღირს 30

შემდეგ:

თუ isExpress === true, მიწოდების ფასს დაემატოს 10.
თუ isExpress === false, დამატებითი თანხა არ დაემატოს.

ფუნქციამ საბოლოოდ დააბრუნოს ასეთი ტიპის ტექსტი:

Delivery to Tbilisi: 20 GEL

გამოიყენე default parameter.
*/


const calculateDelivery = function (city, distance, isExpress = false) {
    let price

    if (distance <= 5) {
        price = 5
    } else if (distance <= 15) {
        price = 10
    } else if (distance <= 30) {
        price = 20
    } else {
        price = 30
    }

    if (isExpress) {
        price += 10
    }

    return `Delivery to ${city}: ${price} GEL`
}

console.log(calculateDelivery("Tbilisi", 4))
console.log(calculateDelivery("Tbilisi", 12, true))
console.log(calculateDelivery("Batumi", 25))
console.log(calculateDelivery("Kutaisi", 40, true))



/*
13)შექმენი function expression სახელად bookTicket.

მიიღოს:

movie
age
ticketCount = 1

ერთი ბილეთის ფასი იყოს 15.

წესები:

თუ ასაკი 12-ზე ნაკლებია → ბილეთი ღირს 10
თუ ასაკი 12-დან 17-მდეა → 12
თუ ასაკი 18 ან მეტია → 15

შემდეგ ფასი გაამრავლე ticketCount-ზე.

თუ ticketCount არის 0 ან უარყოფითი, დააბრუნე:

Invalid ticket count

სხვა შემთხვევაში დააბრუნე:

Interstellar - 2 tickets - 30 GEL
*/

const bookTicket = function (movie, age, ticketCount = 1) {
    if (ticketCount <= 0) {
        return "Invalid ticket count"
    }

    let pricePerTicket

    if (age < 12) {
        pricePerTicket = 10
    } else if (age <= 17) {
        pricePerTicket = 12
    } else {
        pricePerTicket = 15
    }

    const totalPrice = pricePerTicket * ticketCount

    return `${movie} - ${ticketCount} tickets - ${totalPrice} GEL`
}

console.log(bookTicket("Interstellar", 20, 2))
console.log(bookTicket("Avatar", 10, 3))
console.log(bookTicket("Batman", 15))
console.log(bookTicket("Inception", 25, 0))





/*
14)შექმენი function expression სახელად withdraw.

მიიღოს:

balance
amount
fee = 2

წესები:

თუ amount <= 0 → "Invalid amount"
თუ amount + fee > balance → "Not enough money"
სხვა შემთხვევაში გამოითვალოს რამდენი დარჩება ანგარიშზე.

თუ დარჩენილი თანხა:

1000-ზე მეტია → "Withdrawal successful. High balance: ..."
100-1000-ის ფარგლებშია → "Withdrawal successful. Balance: ..."
100-ზე ნაკლებია → "Warning! Low balance: ..."
*/


const withdraw = function (balance, amount, fee = 2) {
    if (amount <= 0) {
        return "Invalid amount"
    }

    if (amount + fee > balance) {
        return "Not enough money"
    }

    const remainingBalance = balance - (amount + fee)

    if (remainingBalance > 1000) {
        return `Withdrawal successful. High balance: ${remainingBalance}`
    } else if (remainingBalance >= 100) {
        return `Withdrawal successful. Balance: ${remainingBalance}`
    } else {
        return `Warning! Low balance: ${remainingBalance}`
    }
}

console.log(withdraw(1500, 200))
console.log(withdraw(500, 200))

