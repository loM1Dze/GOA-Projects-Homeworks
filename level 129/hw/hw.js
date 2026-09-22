const input = prompt("შემოიტანეთ რაიმე რიცხვი")
const number = Number(input)

switch (true) {
    case number > 0 && number % 2 === 0:
        console.log("positive even")
        break
    case number > 0 && number % 2 !== 0:
        console.log("positive odd")
        break
    case number < 0 && number % 2 === 1:
        console.log("negative odd")
        break
    case number < 0 && number % 2 === 0:
        console.log("negative even")
        break
    default:
        console.log("0")
        break
}




function sayMyInfo(){
    console.log('giga')
    console.log('lomidze')
    console.log(16)
    console.log('wallahi')
}

sayMyInfo()