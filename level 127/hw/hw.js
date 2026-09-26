/*
1)მომხმარებელს prompt()-ის საშუალებით შეაყვანინე ასაკი და ბილეთის საწყისი ფასი.

შექმენი პროგრამა, რომელიც:

თუ მომხმარებელი 7 წლამდეა, ბილეთი უფასოა.

თუ მომხმარებელი 7-დან 17 წლამდეა, მიიღებს 50%-იან ფასდაკლებას.

თუ მომხმარებელი 18-დან 59 წლამდეა, გადაიხდის სრულ ფასს.

თუ მომხმარებელი 60 წლის ან უფროსია, მიიღებს 30%-იან ფასდაკლებას.

თუ ასაკი ან ბილეთის ფასი უარყოფითია, გამოიტანე შეცდომის შეტყობინება.

თუ მომხმარებელი 18 წლამდეა ან 60 წლის ან უფროსია, გამოიტანე შეტყობინება "You have a discount".
*/

let age = Number(prompt("შეიყვანეთ ასაკი:"))
let price = Number(prompt("შეიყვანეთ ბილეთის საწყისი ფასი:"))

if (age < 0 || price < 0) {
    console.log("შეცდომა: ასაკი ან ფასი უარყოფითი ვერ იქნება")
} else if (age < 7) {
    console.log("You have a discount")
    console.log("ბილეთი უფასოა")
} else if (age <= 17) {
    console.log("You have a discount")
    console.log("გადასახდელი თანხა: " + (price * 0.5) + " ლარი")
} else if (age <= 59) {
    console.log("გადასახდელი თანხა: " + price + " ლარი")
} else {
    console.log("You have a discount")
    console.log("გადასახდელი თანხა: " + (price * 0.7) + " ლარი")
}


/*
2)მოცემულია:

let username = "Goga";
let password = "Goa2026";
let age = 20;

შექმენი პროგრამა, რომელიც შეამოწმებს მომხმარებლის მონაცემებს.

პირობები:

თუ მომხმარებლის სახელი ცარიელია ან პაროლი ცარიელია, გამოიტანე "Fill in all fields".

თუ სახელი უდრის "Goga"-ს და პაროლი უდრის "Goa2026"-ს, გამოიტანე "Login successful".

თუ სახელი სწორია, მაგრამ პაროლი არასწორია, გამოიტანე "Incorrect password".

თუ სახელი არასწორია, გამოიტანე "Incorrect username".

თუ მომხმარებელი 18 წლამდეა, დამატებით გამოიტანე "Access denied".

დამატებითი პირობა: შეცვალე ცვლადების მნიშვნელობები და შეამოწმე ყველა შესაძლო შემთხვევა.
*/


let username = "Goga"
let password = "Goa2026"
let age2 = 20

if (username === "" || password === "") {
    console.log("Fill in all fields")
} else if (username === "Goga" && password === "Goa2026") {
    console.log("Login successful")
} else if (username === "Goga" && password !== "Goa2026") {
    console.log("Incorrect password")
} else {
    console.log("Incorrect username")
}

if (age2 < 18) {
    console.log("Access denied")
}


/*
3)let price = 250;
let age = 22;
let isMember = true;

შექმენი პროგრამა, რომელიც მომხმარებლის მონაცემების მიხედვით გამოთვლის საბოლოო ფასს.

პირობები:

თუ ფასი 0-ზე ნაკლებია, გამოიტანე "Invalid price".

თუ მომხმარებელი მაღაზიის წევრია და ფასი 200-ზე მეტია, მიიღებს 25lari-იან ფასდაკლებას.

თუ მომხმარებელი მაღაზიის წევრია ან 18 წლამდეა, მიიღებს 10lari-იან ფასდაკლებას.

თუ მომხმარებელი 60 წლის ან უფროსია და ფასი 100-ზე მეტია, მიიღებს 15lari-იან ფასდაკლებას.

სხვა შემთხვევაში გადაიხდის სრულ ფასს.

საბოლოოდ გამოიტანე საწყისი ფასი, ფასდაკლება და გადასახდელი თანხა.

ყურადღება მიაქციე პირობის თანმიმდევრობას: რამდენიმე პირობა შეიძლება ერთდროულად სრულდებოდეს.
*/

let price2 = 250
let age3 = 22
let isMember = true

if (price2 < 0) {
    console.log("Invalid price")
} else {
    let discount = 0

    if (isMember && price2 > 200) {
        discount = 25
    } else if (isMember || age3 < 18) {
        discount = 10
    } else if (age >= 60 && price2 > 100) {
        discount = 15
    }

    let finalPrice = price2 - discount

    console.log("საწყისი ფასი: " + price2)
    console.log("ფასდაკლება: " + discount)
    console.log("გადასახდელი თანხა: " + finalPrice)
}


/*
4)მომხმარებელს შეაყვანინე რიცხვი prompt()-ის საშუალებით.

შექმენი პროგრამა, რომელიც:

შეამოწმებს, არის თუ არა რიცხვი დადებითი, უარყოფითი ან ნული.

თუ რიცხვი დადებითია და 100-ზე მეტია, გამოიტანს "Large positive number".

თუ რიცხვი დადებითია და 100-ზე ნაკლებია, გამოიტანს "Small positive number".

თუ რიცხვი უარყოფითია და ლუწია, გამოიტანს "Negative even number".

თუ რიცხვი უარყოფითია და კენტია, გამოიტანს "Negative odd number".

თუ რიცხვი 0-ია, გამოიტანს "Zero".

თუ რიცხვი 10-ისა და 20-ის ჩათვლით შუალედშია, დამატებით გამოიტანს "Special range".
*/

let num = Number(prompt("შეიყვანეთ რიცხვი:"))

if (num === 0) {
    console.log("Zero")
} else if (num > 0) {
    if (num > 100) {
        console.log("Large positive number")
    } else if (num < 100) {
        console.log("Small positive number")
    }
} else if (num < 0) {
    if (num % 2 === 0) {
        console.log("Negative even number")
    } else {
        console.log("Negative odd number")
    }
}

if (num >= 10 && num <= 20) {
    console.log("Special range")
}


/*
5)et name = "Goga";
let math = 85;
let english = 90;
let programming = 95;

შექმენი პროგრამა, რომელიც:

გამოთვლის სამი საგნის საშუალო ქულას.

თუ რომელიმე საგანში ქულა 50-ზე ნაკლებია, გამოიტანს "Failed".

თუ სამივე საგანში ქულა 90 ან მეტია, გამოიტანს "Excellent student".

თუ საშუალო ქულა 80 ან მეტია და მათემატიკაში ქულა 70 ან მეტია, გამოიტანს "Very good student".

სხვა შემთხვევაში გამოიტანს "Needs improvement".
*/


let name = "Goga"
let math = 85
let english = 90
let programming = 95

let average = (math + english + programming) / 3

if (math < 50 || english < 50 || programming < 50) {
    console.log("Failed")
} else if (math >= 90 && english >= 90 && programming >= 90) {
    console.log("Excellent student")
} else if (average >= 80 && math >= 70) {
    console.log("Very good student")
} else {
    console.log("Needs improvement")
}



/*
6)მომხმარებელს შეაყვანინე ასაკი და სიმაღლე სანტიმეტრებში.

პირობები:

თუ ასაკი 0-ზე ნაკლებია ან სიმაღლე 0-ზე ნაკლებია, გამოიტანე "Invalid data".

თუ ასაკი 12 ან მეტია და სიმაღლე 140 ან მეტია, გამოიტანე "You can ride".

თუ ასაკი 12-ზე ნაკლებია ან სიმაღლე 140-ზე ნაკლებია, გამოიტანე "You cannot ride".

თუ ასაკი 18 ან მეტია და სიმაღლე 180 ან მეტია, დამატებით გამოიტანე "VIP access".
*/


let age4 = Number(prompt("შეიყვანეთ ასაკი:"))
let height = Number(prompt("შეიყვანეთ სიმაღლე სანტიმეტრებში:"))

if (age4 < 0 || height < 0) {
    console.log("Invalid data")
} else {
    if (age4 >= 12 && height >= 140) {
        console.log("You can ride")
    } else {
        console.log("You cannot ride")
    }

    if (age4 >= 18 && height >= 180) {
        console.log("VIP access")
    }
}



/*
7)let number = 45;

შექმენი პროგრამა, რომელიც:

თუ რიცხვი 10-დან 50-ის ჩათვლით შუალედშია, გამოიტანს "Inside range".

თუ რიცხვი 10-ზე ნაკლებია ან 50-ზე მეტია, გამოიტანს "Outside range".

თუ რიცხვი ლუწია და 20-ზე მეტია, გამოიტანს "Special even number".

თუ რიცხვი კენტია და 30-ზე ნაკლებია, გამოიტანს "Special odd number".

თუ რიცხვი 25-ის ტოლია ან 50-ის ტოლია, გამოიტანს "Exact match".
*/


let number = 45

if (number >= 10 && number <= 50) {
    console.log("Inside range")
} else {
    console.log("Outside range")
}

if (number % 2 === 0 && number > 20) {
    console.log("Special even number")
}

if (number % 2 !== 0 && number < 30) {
    console.log("Special odd number")
}

if (number === 25 || number === 50) {
    console.log("Exact match")
}


/*
8)მომხმარებელს შეაყვანინე სამი გამოცდის ქულა და ასაკი.

შექმენი პროგრამა, რომელიც:

თუ რომელიმე ქულა 0-ზე ნაკლებია ან 100-ზე მეტია, გამოიტანს "Invalid score".

თუ რომელიმე გამოცდაში ქულა 50-ზე ნაკლებია, გამოიტანს "Rejected".

თუ სამივე გამოცდაში ქულა 80 ან მეტია და ასაკი 18 ან მეტია, გამოიტანს "Accepted".

თუ სამივე გამოცდაში ქულა 90 ან მეტია, გამოიტანს "Scholarship candidate".

თუ საშუალო ქულა 70 ან მეტია, მაგრამ რომელიმე გამოცდაში ქულა 80-ზე ნაკლებია, გამოიტანს "Waitlisted".

სხვა შემთხვევაში გამოიტანს "Not accepted".
*/


let score1 = Number(prompt("შეიყვანეთ პირველი გამოცდის ქულა:"))
let score2 = Number(prompt("შეიყვანეთ მეორე გამოცდის ქულა:"))
let score3 = Number(prompt("შეიყვანეთ მესამე გამოცდის ქულა:"))
let age5 = Number(prompt("შეიყვანეთ ასაკი:"))

let average1 = (score1 + score2 + score3) / 3

if (score1 < 0 || score1 > 100 || score2 < 0 || score2 > 100 || score3 < 0 || score3 > 100) {
    console.log("Invalid score")
} else if (score1 < 50 || score2 < 50 || score3 < 50) {
    console.log("Rejected")
} else {
    if (score1 >= 90 && score2 >= 90 && score3 >= 90) {
        console.log("Scholarship candidate")
    }

    if (score1 >= 80 && score2 >= 80 && score3 >= 80 && age5 >= 18) {
        console.log("Accepted")
    } else if (average1 >= 70 && (score1 < 80 || score2 < 80 || score3 < 80)) {
        console.log("Waitlisted")
    } else {
        console.log("Not accepted")
    }
}


