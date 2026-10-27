/*
1)let products = ["Laptop", "Phone", "Tablet", "Monitor", "Keyboard"];

მოთხოვნები:
1. მასივის დასაწყისში დაამატე "Mouse".
2. მასივის ბოლოში დაამატე "Headphones" და "Speaker".
3. წაშალე მასივის პირველი ელემენტი და მიღებული მნიშვნელობა შეინახე ცალკე ცვლადში.
4. indexOf()-ის გამოყენებით იპოვე "Monitor"-ის ინდექსი.
5. splice()-ის გამოყენებით "Tablet" ჩაანაცვლე "Smartwatch"-ით.
6. slice()-ის გამოყენებით შექმენი ახალი მასივი, რომელშიც იქნება ძირითადი მასივის მესამე ელემენტიდან მეხუთე ელემენტამდე არსებული ელემენტები.
7. join()-ის გამოყენებით ყველა პროდუქტი გააერთიანე ერთ სტრიქონში და მათ შორის გამოიყენე " | ".
8. დაბეჭდე საბოლოო მასივი, წაშლილი პროდუქტი, "Monitor"-ის ინდექსი და მიღებული სტრიქონი.
*/

let products = ['Laptop', 'Phone', "Tablet", 'Monitor', 'Keyboard']

products.unshift('Mouse')

products.push('Headphones', 'Speaker')

let removedProduct = products.shift()

let monitorIndex = products.indexOf('Monitor')

products.splice(2, 1, 'Smartwatch')

let slicedProducts = products.slice(2, 5)

let joinedString = products.join('|')

console.log(products)
console.log(removedProduct)
console.log(monitorIndex)
console.log(slicedProducts)
console.log(joinedString)


/*
2)let text = "HTML,CSS,JavaScript,React,Node.js,Python";

მოთხოვნები:
1. split()-ის გამოყენებით შექმენი მასივი, სადაც თითოეული ტექნოლოგია ცალკე ელემენტი იქნება.
2. მასივის დასაწყისში დაამატე "Git".
3. მასივის ბოლოში დაამატე "TypeScript".
4. indexOf()-ის გამოყენებით იპოვე "React"-ის ინდექსი.
5. splice()-ის გამოყენებით წაშალე "CSS" და "JavaScript".
6. slice()-ის გამოყენებით შექმენი ახალი მასივი, რომელშიც მხოლოდ პირველი ოთხი ტექნოლოგია იქნება.
7. ახალი მასივი join()-ის გამოყენებით გადააქციე სტრიქონად და ელემენტები გამოყავი " - " სიმბოლოებით.
8. მიღებული სტრიქონი კვლავ გადააქციე მასივად split()-ის გამოყენებით, ამჯერად " - " გამყოფით.
9. დაბეჭდე საბოლოო შედეგები.
*/


let text = "HTML,CSS,JavaScript,React,Node.js,Python"
let techArray = text.split(",")
techArray.unshift("Git")
techArray.push("TypeScript")
let reactIndex = techArray.indexOf("React")
let cssIndex = techArray.indexOf("CSS")
techArray.splice(cssIndex, 2)
let firstFour = techArray.slice(0, 4)
let joinedString1 = firstFour.join(" - ")
let finalArray = joinedString1.split(" - ")
console.log(techArray)
console.log(reactIndex)
console.log(joinedString1)
console.log(finalArray)


/*
3)let students = [
    "Nika",
    "Ana",
    "Gio",
    "Mariam",
    "Luka",
    "Saba",
    "Elene"
];

მოთხოვნები:
1. მასივის დასაწყისში დაამატე "Data" და "Tako".
2. მასივის ბოლოდან წაშალე ერთი ელემენტი.
3. indexOf()-ის გამოყენებით იპოვე "Mariam"-ის ინდექსი.
4. splice()-ის გამოყენებით წაშალე "Gio" და "Mariam".
5. "Luka"-ს წინ ჩასვი "Irakli".
6. slice()-ის გამოყენებით შექმენი ახალი მასივი, რომელშიც ბოლო ოთხი ელემენტი იქნება.
7. concat()-ის გამოყენებით ახალ მასივს დაუმატე შემდეგი სახელები:
["Giorgi", "Salome"]

8. join()-ის გამოყენებით ყველა სახელი გააერთიანე ერთ სტრიქონში, სადაც სახელები გამოყოფილი იქნება მძიმითა და გამოტოვებით.
9. მიღებული სტრიქონი split()-ით კვლავ გადააქციე მასივად.
10. შეამოწმე Array.isArray()-ის გამოყენებით, მიღებული შედეგი მასივია თუ არა.
*/


let students = [
    "Nika",
    "Ana",
    "Gio",
    "Mariam",
    "Luka",
    "Saba",
    "Elene"
]

students.unshift("Data", "Tako")

students.pop()

let mariamIndex = students.indexOf("Mariam")

let gioIndex = students.indexOf("Gio")
students.splice(gioIndex, 2)

let lukaIndex = students.indexOf("Luka")
students.splice(lukaIndex, 0, "Irakli")

let lastFour = students.slice(-1, -4)

let extendedNames = lastFour.concat(["Giorgi", "Salome"])

let joinedNames = extendedNames.join(", ")

let finalArray1 = joinedNames.split(", ")

let isArrayResult = Array.isArray(finalArray1)

console.log(students)
console.log(mariamIndex)
console.log(finalArray1)
console.log(isArrayResult)


/*
4)let scores = [45, 78, 92, 34, 88, 67, 100, 56];

მოთხოვნები:
1. მასივის დასაწყისში დაამატე ქულა 50.
2. მასივის ბოლოში დაამატე ქულები 73 და 85.
3. indexOf()-ის გამოყენებით იპოვე ქულა 92.
4. splice()-ის გამოყენებით წაშალე 34 და 88.
5. splice()-ის გამოყენებით 67 შეცვალე 70-ით.
6. slice()-ით შექმენი ახალი მასივი, რომელშიც საწყისი მასივის მეორე ნახევრის ელემენტები იქნება.
7. concat()-ით მიღებულ ახალ მასივს დაუმატე [95, 81, 60].
8. pop()-ის გამოყენებით წაშალე საბოლოო მასივის ბოლო ელემენტი.
9. unshift()-ით დაამატე 99 მასივის დასაწყისში.
10. join()-ით მიღებული ქულები გადააქციე სტრიქონად და " / " სიმბოლოებით გამოყავი.
11. split()-ის გამოყენებით მიღებული სტრიქონი კვლავ გადააქციე მასივად.
12. დაბეჭდე მიღებული მასივი და შეამოწმე მისი ტიპი Array.isArray()-ით.
*/


let scores = [45, 78, 92, 34, 88, 67, 100, 56]

scores.unshift(50)

scores.push(73, 85)

let score92Index = scores.indexOf(92)

scores.splice(4, 2)

scores.splice(4, 1, 70)

let secondHalf = scores.slice(Math.floor(scores.length / 2))

let combinedScores = secondHalf.concat([95, 81, 60])

combinedScores.pop()

combinedScores.unshift(99)

let scoresString = combinedScores.join(" / ")

let finalScoresArray = scoresString.split(" / ")

console.log(finalScoresArray)

console.log(Array.isArray(finalScoresArray))


/*
5)let groups = [
    ["Nika", "Ana", "Gio"],
    ["Mariam", "Luka"],
    ["Saba", "Elene", "Data"]
];

მოთხოვნები:
1. flat()-ის გამოყენებით შექმენი ერთი საერთო მასივი.
2. მასივის დასაწყისში დაამატე "Tako".
3. მასივის ბოლოში დაამატე "Irakli" და "Salome".
4. indexOf()-ით იპოვე "Luka"-ს ინდექსი.
5. splice()-ით წაშალე "Gio" და "Mariam".
6. slice()-ით შექმენი ახალი მასივი, რომელშიც დარჩენილი სახელების პირველი ხუთი ელემენტი იქნება.
7. concat()-ით დაუმატე ახალი მასივი:
["Giorgi", "Sandro"]

8. join()-ით გააერთიანე ყველა სახელი ერთ სტრიქონში და გამოიყენე " * " გამყოფი.
9. split()-ით მიღებული სტრიქონი კვლავ გადააქციე მასივად.
10. თავდაპირველი groups მასივი დაბეჭდე და შეამოწმე, შეიცვალა თუ არა ის.
*/



let groups = [
    ["Nika", "Ana", "Gio"],
    ["Mariam", "Luka"],
    ["Saba", "Elene", "Data"]
]

let flatGroups = groups.flat()

flatGroups.unshift("Tako")

flatGroups.push("Irakli", "Salome")

let lukaIndex1 = flatGroups.indexOf("Luka")

flatGroups.splice(3, 2)

let firstFive = flatGroups.slice(0, 5)

let extendedGroups = firstFive.concat(["Giorgi", "Sandro"])

let groupsString = extendedGroups.join(" * ")

let finalArray2 = groupsString.split(" * ")

console.log(groups)
console.log(lukaIndex1)
console.log(finalArray2)