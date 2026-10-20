/*
1)let numbers = [10, 20, 30, 40, 50];


მოთხოვნები:
1. წაშალე ბოლო ელემენტი.
2. მიღებული ელემენტი შეინახე ცალკე ცვლადში.
3. გამოიტანე წაშლილი ელემენტი.
4. გამოიტანე დარჩენილი მასივი.
*/

let numbers = [10, 20, 30, 40, 50]
let removed = numbers.pop()
console.log(removed)
console.log(numbers)


/*
2)let colors = ["Red", "Green", "Blue", "Black"];


მოთხოვნები:
1. წაშალე პირველი ელემენტი.
2. გამოიტანე წაშლილი ფერი.
3. გამოიტანე დარჩენილი მასივი.
4. პირველი ელემენტის დამატება — unshift()
*/


let colors = ["Red", "Green", "Blue", "Black"]
let removedColor = colors.shift()
console.log(removedColor)
console.log(colors)


/*
3)let animals = ["Dog", "Cat"];


მოთხოვნები:
1. დასაწყისში დაამატე "Lion".
2. დასაწყისში დაამატე "Tiger" და "Bear".
3. გამოიტანე საბოლოო მასივი.
*/


let animals = ["Dog", "Cat"]
animals.unshift("Lion")
animals.unshift("Tiger", "Bear")
console.log(animals)



/*
4)let numbers = [5, 10, 15, 20, 25, 30, 35];


მოთხოვნები:
1. მიიღე ახალი მასივი, რომელშიც იქნება 10, 15, 20.
2. მიიღე ახალი მასივი, რომელშიც იქნება ბოლო სამი ელემენტი.
3. მიიღე ახალი მასივი პირველი ორი ელემენტის გარეშე.
4. გამოიტანე როგორც ახალი, ისე თავდაპირველი მასივი.
*/

let numbers1 = [5, 10, 15, 20, 25, 30, 35]

let sub1 = numbers1.slice(1, 4)
let sub2 = numbers1.slice(-3)
let sub3 = numbers1.slice(2)

console.log(sub1)
console.log(sub2)
console.log(sub3)
console.log(numbers1)


/*
5)let games = ["Minecraft", "GTA", "FIFA", "Roblox", "Fortnite"];


მოთხოვნები:
1. წაშალე "GTA".
2. "FIFA" ჩაანაცვლე "CS2"-ით.
3. "Minecraft"-ის შემდეგ დაამატე "Terraria".
4. ყოველი მოქმედების შემდეგ გამოიტანე მასივი.
*/

let games = ["Minecraft", "GTA", "FIFA", "Roblox", "Fortnite"]

games.splice(1, 1)
console.log(games)

games.splice(1, 1, "CS2")
console.log(games)

games.splice(1, 0, "Terraria")
console.log(games)


/*
6)et cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi"];


მოთხოვნები:
1. შექმენი ახალი მასივი, რომელშიც "Batumi" წაშლილი იქნება.
2. შექმენი ახალი მასივი, რომელშიც "Kutaisi" ჩანაცვლებული იქნება "Gori"-თ.
3. შექმენი ახალი მასივი, რომელშიც "Batumi"-ის შემდეგ დაამატებ "Zugdidi"-ს.
4. შეამოწმე, შეიცვალა თუ არა თავდაპირველი მასივი.
*/

let cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi"]

let newCities1 = cities.slice()
newCities1.splice(1, 1)

let newCities2 = cities.slice()
newCities2.splice(2, 1, "Gori")

console.log(newCities1)
console.log(newCities2)
console.log(cities)


/*
7)let first = [1, 2, 3];
let second = "JavaScript";
let third = { name: "Goga" };
let fourth = 25;
let fifth = ["HTML", "CSS"];


მოთხოვნები:
1. თითოეულ ცვლადზე გამოიყენე Array.isArray().
2. გამოიტანე მიღებული შედეგები.
*/


let first = [1, 2, 3]
let second = "JavaScript"
let third = { name: "Goga" }
let fourth = 25
let fifth = ["HTML", "CSS"]

console.log(Array.isArray(first))
console.log(Array.isArray(second))
console.log(Array.isArray(third))
console.log(Array.isArray(fourth))
console.log(Array.isArray(fifth))


/*
8)let numbers = [1, 2, [3, 4], [5, 6]];


მოთხოვნები:
1. გარდაქმენი მასივი ერთგანზომილებიან მასივად.
2. გამოიტანე შედეგი.
3. შეამოწმე, შეიცვალა თუ არა თავდაპირველი მასივი.
*/

let numbers2 = [1, 2, [3, 4], [5, 6]]

let flatNumbers = numbers2.flat()

console.log(flatNumbers)
console.log(numbers2)


/*
9)let first = ["HTML", "CSS"];
let second = ["JavaScript", "React"];


მოთხოვნები:
1. გააერთიანე ორივე მასივი.
*/

let first1 = ["HTML", "CSS"]
let second1 = ["JavaScript", "React"]

let combined = [first1, second1].flat()

console.log(combined)



/*
10)let fruits = ["Apple", "Banana", "Orange", "Kiwi"];


მოთხოვნები:
1. ბოლოში დაამატე "Mango".
2. დასაწყისში დაამატე "Strawberry".
3. წაშალე ბოლო ელემენტი.
4. წაშალე პირველი ელემენტი.
5. საბოლოო მასივიდან slice()-ის დახმარებით შექმენი ახალი მასივი, რომელშიც მხოლოდ პირველი ორი ელემენტი იქნება.
*/

let fruits = ["Apple", "Banana", "Orange", "Kiwi"]

fruits.push("Mango")
fruits.unshift("Strawberry")
fruits.pop()
fruits.shift()

let newFruits = fruits.slice(0, 2)

console.log(fruits)
console.log(newFruits)


/*
11)let toys = ["Car", "Doll", "Ball", "Robot", "Puzzle"];


მოთხოვნები:
1. წაშალე მეორე ელემენტი splice()-ით.
2. მის ადგილას დაამატე "Teddy Bear".
3. დაამატე "Lego" მასივის ბოლოში.
4. slice()-ის გამოყენებით მიიღე ახალი მასივი პირველი სამი ელემენტით.
5. გამოიტანე საბოლოო მასივიც და მისი ნაწილიც.
*/

let toys = ["Car", "Doll", "Ball", "Robot", "Puzzle"]

toys.splice(1, 1, "Teddy Bear")
toys.push("Lego")

let firstThree = toys.slice(0, 3)

console.log(toys)
console.log(firstThree)


/*
13)let teamA = ["Nika", "Ana", "Gio"];
let teamB = ["Mariam", "Luka", "Saba"];


მოთხოვნები:
1. concat()-ით გააერთიანე გუნდები.
2. დასაწყისში დაამატე "Goga".
3. ბოლოში დაამატე "Data".
4. წაშალე ბოლო ელემენტი.
5. slice()-ით შექმენი ახალი მასივი, რომელშიც მხოლოდ პირველი ოთხი მოთამაშე იქნება
*/


let teamA = ["Nika", "Ana", "Gio"]
let teamB = ["Mariam", "Luka", "Saba"]

let combined1 = teamA.concat(teamB)
combined.unshift("Goga")
combined.push("Data")
combined.pop()

let firstFour = combined1.slice(0, 4)

console.log(combined1)
console.log(firstFour)