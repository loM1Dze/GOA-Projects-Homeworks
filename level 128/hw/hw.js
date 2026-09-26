/*
1)let age = 20;

Ternary-ის გამოყენებით გამოიტანე:

თუ age >= 18 → "Adult"
სხვა შემთხვევაში → "Minor"
*/

let age = 20
let status = age >= 18 ? "Adult" : "Minor"
console.log(status)


/*
2)let number = 15;

გამოიყენე Ternary:

თუ რიცხვი ლუწია → "Even"
თუ კენტია → "Odd"
*/

let number = 15
let status1 = number % 2 === 0 ? 'Even' : 'Odd'
console.log(status1)


/*
3)let age = 20;
let hasTicket = true;

მომხმარებელს შეუძლია შესვლა მხოლოდ მაშინ, თუ:

ასაკი არის 18 ან მეტი და
აქვს ბილეთი.

გამოიტანე:

"Allowed"

ან

"Not Allowed"

გამოიყენე && და Ternary.
*/

let age1 = 20
let hasTicket = true

let result = (age >= 18 && hasTicket) ? "Allowed" : "Not Allowed"

console.log(result)


/*
4)let age = 16;
let isStudent = true;

ფასდაკლება მიიღოს მომხმარებელმა, თუ:

არის 18-ზე ნაკლები ან
არის სტუდენტი.

გამოიტანე "Discount" ან "No Discount".

გამოიყენე || და Ternary.
*/

let age3 = 16
let isStudent = true

let result1 = (age3 < 18 || isStudent) ? "Discount" : "No Discount"

console.log(result)



/*
5)let age = 20;
let isStudent = true;

გამოიტანე:

age < 13 → "Child"
age >= 13 და age < 18 → "Teenager"
age >= 18:
თუ სტუდენტია → "Student"
სხვა შემთხვევაში → "Adult"

აქ დაგჭირდება Nested Ternary.
*/

let age4 = 20
let isStudent1 = true

let result2 = age4 < 13
    ? "Child"
    : age4 < 18
        ? "Teenager"
        : isStudent1
            ? "Student"
            : "Adult"

console.log(result2)



/*
6)let score = 75
let isPremium = true

გამოიტანე:

score < 50 → "Beginner"
score >= 50 და score < 80 → "Intermediate"
score >= 80:
თუ isPremium → "Pro"
სხვა შემთხვევაში → "Advanced"
*/


let score = 75
let isPremium = true

let result3 = score < 50 
    ? "Beginner" 
    : score < 80 
        ? "Intermediate" 
        : isPremium 
            ? "Pro" 
            : "Advanced"

console.log(result3)


/*
7)let age = 19;
let hasTicket = true;
let isVip = false;

განსაზღვრე შესვლის სტატუსი:

თუ age < 18 → "Too Young"
თუ age >= 18 მაგრამ ბილეთი არ აქვს → "No Ticket"
თუ აქვს ბილეთი:
isVip === true → "VIP Entrance"
სხვა შემთხვევაში → "Normal Entrance"

გამოიყენე Nested Ternary + && + !.
*/


let age5 = 19
let hasTicket1 = true
let isVip = false

let result4 = age < 18 
    ? "Too Young" 
    : !hasTicket 
        ? "No Ticket" 
        : isVip 
            ? "VIP Entrance" 
            : "Normal Entrance"

console.log(result4)