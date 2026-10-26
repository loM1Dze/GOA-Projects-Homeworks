let fruits = "apple,banana,orange,kiwi"

fruits = fruits.split(",")
console.log(fruits)

console.log(fruits.indexOf("banana"))
console.log(fruits.indexOf("kiwi"))

fruits[1] = "mango"

fruits = fruits.join("$")
console.log(fruits)