let num = Number(prompt("შემოიყვანეთ რიცხვი:"))

if (num > 10 && num % 2 === 0) {
    console.log("good number")
} else {
    console.log("bad time")
}




let name = prompt("შემოიყვანეთ სახელი:")

if (name.length > 5 || name.toLowerCase().startsWith("g")) {
    console.log("good name")
} else {
    console.log("bad name")
}