const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens = []

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i])
  }
}
console.log(evens)




const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 !== 0) {
    console.log(numbers1[i])
  }
}



const names = ["გიორგი", "ლუკა", "გაბრიელ", "ნიკა", "გოგა"]
for (let i = 0; i < names.length; i++) {
  if (names[i].startsWith("გ")) {
    console.log(names[i])
  }
}



const names1 = ["გიორგი", "ლუკა", "გაბრიელი", "ნიკა", "გელა", "გრიგოლი"]
for (let i = 0; i < names1.length; i++) {
  if (names1[i].startsWith("გ") && names1[i].length > 5) {
    console.log(names1[i])
  }
}



const mixed = [1, "გიორგი", 2, "ლუკა", 3, "გაბრიელი"]
for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === "string") {
    console.log(mixed[i])
  }
}

