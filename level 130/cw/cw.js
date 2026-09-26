/*
1)შექმენით ფუნქცია სახელად displayCar რომელსაც გადაეცემა სამი პარამეტრი --> brand , year , color

ფუნქციამ უნდა დააბრუნოს ინფორმაცია ავტომობილის შესახებ სადაც გამოიყენებ სამივე პარამეტრს

პარამეტრებს მიანიჭეთ default მნიშვნელობები 

ბოლოს გამოიძახეთ ფუნქცია ოთხჯერ რომ ნახოთ შედეგი -->

1)მხოლოდ ერთი არგუმენტით

2)მხოლოდ პირველი და მეორე არგუმენტით

3)სამივე არგუმენტით

4)0 არგუმენტით

2)შექმენით ფუნქცია რომელსაც გადაეცემა რაიმე ორი პარამეტრი სადაცც შეინახავ რაიმე რიცხვებს

შემდეგ შეამოწმე ფუნქციაში --> თუ პირველი რიცხვი მეტია მეორეზე დააბრუნე first is bigger////// თუ მეორე რიცხვი მეტია პირველ რიცხვზე დააბრუნე --> second is bigger სხვა შემთხვევაში დააბრუნე equal გამოიყენე ternary
 გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით
*/


function displayCar(brand = "Mercedes", year = 2020, color = "Black") {
  return `ავტომობილი: ${brand}, გამოშვების წელი: ${year}, ფერი: ${color}`;
}

console.log(displayCar("BMW"))

console.log(displayCar("Audi", 2022))

console.log(displayCar("Porsche", 2024, "White"))

console.log(displayCar())



function compareNumbers(num1, num2) {
    return num1 > num2
        ? "first is bigger"
        : num2 > num1
            ? "second is bigger"
            : "equal"
}

console.log(compareNumbers(10, 5))
console.log(compareNumbers(3, 8))
console.log(compareNumbers(7, 7))