/*
1)შექმენი greet ფუნქცია, რომელსაც ექნება ერთი პარამეტრი name.

ფუნქციამ უნდა დაბეჭდოს:

Hello, Goga!

მაგალითად:

გამოიძახე სხვადასხვა არგუმენტებით
*/

function greet(name) {
    console.log("Hello, " + name + "!")
}

greet("Goga")
greet("Lasha")
greet("Nino")


/*
2)შექმენი sum ფუნქცია, რომელსაც ექნება ორი პარამეტრი:

a
b

ფუნქციამ უნდა დაბეჭდოს მათი ჯამი.

გამოიძახე სხვადასხვა არგუმენტებით
*/


function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(20, 30)
sum(-5, 15)


/*
3)შექმენი showInfo ფუნქცია სამი პარამეტრით:

name
age
city

ფუნქციამ უნდა დაბეჭდოს:

My name is Goga, I am 20 years old and I live in Tbilisi.

გამოიძახე სხვადასხვა არგუმენტებით
*/


function showInfo(name, age, city) {
    console.log(`My name is ${name}, I am ${age} years old and I live in${city}.`)
}

showInfo("Goga", 20, "Tbilisi")
showInfo("Luka", 25, "Batumi")
showInfo("Ana", 18, "Kutaisi")


/*
4)შექმენი square ფუნქცია ერთი პარამეტრით number.

ფუნქციამ უნდა დაბეჭდოს ამ რიცხვის კვადრატი.

გამოიძახე სხვადასხვა არგუმენტით
*/


function square(number) {
    console.log(number ** 2)
}

square(4)
square(7)
square(10)



/*
5)შექმენი showProduct ფუნქცია სამი პარამეტრით:

name
price
category

ფუნქციამ უნდა დაბეჭდოს პროდუქტის სრული ინფორმაცია.

უნდა მიიღოთ:

Product: Laptop
Price: 1500
Category: Electronics

გამოიძახე სხვადასხვა არგუმენტით
*/


function showProduct(name, price, category) {
    console.log(`Product: ${name}\nPrice: ${price}\nCategory: ${category}`)
}

showProduct("Laptop", 1500, "Electronics")



/*
6)შექმენი checkAge ფუნქცია ერთი პარამეტრით age.

თუ ასაკი არის 18 ან მეტი, დაბეჭდე:

You are an adult.

სხვა შემთხვევაში:

You are a minor.

გამოიძახე ფუნქცია რამდენიმე სხვადასხვა არგუმენტით.
*/


function checkAge(age) {
    console.log(age >= 18 ? "You are an adult." : "You are a minor.")
}

checkAge(20)
checkAge(15)
checkAge(18)



/*
7)შექმენი checkNumber ფუნქცია ერთი პარამეტრით number.

ფუნქციამ უნდა შეამოწმოს:

თუ რიცხვი დადებითია → "Positive"
თუ უარყოფითია → "Negative"
თუ 0 არის → "Zero"
*/


function checkNumber(number) {
    let result = number > 0 
        ? "Positive" 
        : number < 0 
            ? "Negative" 
            : "Zero"

    console.log(result)
}

checkNumber(10)
checkNumber(-5)
checkNumber(0)


/*
8)შექმენი ფუნქცია:

calculate(a, b, operator)

ფუნქციამ უნდა მიიღოს ორი რიცხვი და მოქმედების სიმბოლო.

მაგალითად:

calculate(10, 5, "+")
calculate(10, 5, "-")
calculate(10, 5, "*")
calculate(10, 5, "/")

ფუნქციამ შესაბამისი მოქმედება უნდა შეასრულოს.
*/


function calculate(a, b, operator) {
    let result = operator === "+" 
        ? a + b 
        : operator === "-" 
            ? a - b 
            : operator === "*" 
                ? a * b 
                : operator === "/" 
                    ? a / b 
                    : "Invalid operator"

    console.log(result)
}

calculate(10, 5, "+")
calculate(10, 5, "-")
calculate(10, 5, "*")
calculate(10, 5, "/")
calculate(10, 5, "%")


/*
9)შექმენი checkProduct ფუნქცია სამი პარამეტრით:

name
price
budget

ფუნქციამ უნდა შეამოწმოს, შეუძლია თუ არა მომხმარებელს პროდუქტის ყიდვა.

მაგალითად:

checkProduct("Phone", 800, 1000)

უნდა დაბეჭდოს:

You can buy Phone.

ხოლო:

checkProduct("Laptop", 2000, 1000)

უნდა დაბეჭდოს:

You cannot buy Laptop.
*/


function checkProduct(name, price, budget) {
    let result = budget >= price 
        ? `You can buy ${name}.` 
        : `You cannot buy ${name}.`

    console.log(result)
}

checkProduct("Phone", 800, 1000)
checkProduct("Laptop", 2000, 1000)



/*
10)შექმენი ფუნქცია:

getGrade(name, score)

ფუნქციამ უნდა მიიღოს სტუდენტის სახელი და ქულა.

ქულის მიხედვით დაბეჭდოს:

90–100 → A
80–89 → B
70–79 → C
60–69 → D
0–59 → F

მაგალითად:

getGrade("Nika", 87)

შედეგი:

Nika got grade B.
*/


function getGrade(name, score) {
    let grade = score >= 90 
        ? "A" 
        : score >= 80 
            ? "B" 
            : score >= 70 
                ? "C" 
                : score >= 60 
                    ? "D" 
                    : "F"

    console.log(`${name} got grade ${grade}.`)
}

getGrade("Nika", 87)
getGrade("Ana", 95)
getGrade("Luka", 62)
getGrade("Goga", 45)