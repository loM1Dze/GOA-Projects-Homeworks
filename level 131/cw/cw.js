// 1)შექმენით arrow ფუნქცია რომელსაც პარამეტრი არ გადაეცემა და უბრალოდ აბრუნებს მისასალმებელ ტექსტს, გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი კონსოლში

const greeting = () => 'გამარჯობა! კეთილი იყოს თქვენი მობრძანება.'

console.log(greeting())



/*
2)შექმენი arrow ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი name , შენი დავალებაა რომ დააბრუნო რაიმე ტექსტი რომელშიც ამ პარამეტრს გამოიყენებ, გამოიძახე ფუნქცია სამჯერ სხვადასხვა არგუმენტებით
*/

const greetUser = name => `გამარჯობა ${name}, წარმატებულ დღეს გისურვებ!`

console.log(greetUser('გიორგი'))
console.log(greetUser('ნინო'))
console.log(greetUser('დავითი'))


/*
3)შექმენი  arrow  ფუნქცია ორი პარამეტრით password , email

ტერნარით შეამოწმე --> თუ password არის 123 და email არის gegimagaria@gmail.com მაშინ გამოიტანე login success სხვა შემთხვევაში გამოიტანეთ error გამოიძახე ფუქნცია სხვადასხვა არგუმენტებით 
*/


const login = (password, email) =>
    (password === '123' && email === 'gegimagaria@gmail.com')
        ? 'login success'
        : 'error'

console.log(login('123', 'gegimagaria@gmail.com'))

console.log(login('12345', 'gegimagaria@gmail.com'))

console.log(login('123', 'wrongemail@gmail.com'))

console.log(login('abc', 'test@gmail.com'))



/*
4) შექმენით single line arrow funqcion რომელსაც გადასცემთ ორ პარამეტრს , თქვენი დავალებაა გაიგოთ ამ ორი რიცხვის ნამრავლი , გამოიძახეთ ფუნქცია სხვადასხვა არგუმენტებით , ასევე single line ის შემდეგ ძველი გზაც გამოიყენეთ ამ დავალების შესასრულებლად
*/

const multiply = (a, b) => a * b

console.log(multiply(5, 4))
console.log(multiply(7, 3))
console.log(multiply(-2, 8))



function multiply1(a, b) {
    return a * b
}

console.log(multiply1(5, 4))
console.log(multiply1(7, 3))
console.log(multiply1(-2, 8))