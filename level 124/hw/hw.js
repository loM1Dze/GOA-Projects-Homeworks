// 1)კომენტარის სახით ახსენით თუ რა განსხვავებაა let const var შორის აღწერე დეტალუჯრად ყველაფერი

/*
let const var სამივეს ვიყენებთ ყუთების შესაქმნელად სადაც მოვათავსებთ კონტენტს,

const — ქმნის მუდმივ ყუთს. შიგნით რაიმეს ჩადებ თუ არა იმის გადაგდება და ახლის ჩასმა აღარ შეგიძლია.

let — ქმნის დროებით ყუთს. შიგთავსის შეცვლა ნებისმიერ დროს შეგიძლია.

var — ძველი ყუთია. შიგთავსიც იცვლება, მაგრამ წესებს არ ემორჩილება და კოდში "ჟონავს", რის გამოც აღარ ვიყენებთ.
*/


// 2)შექმენი ორი ცვლადი სადაც შინახავ ნამბერ ტიპის მონაცემებს და შენი დავალებააა რომ მოახდინო ამ ორ ცვლადზე ყჰველა მათემატიკური მოქმედება რაც ვისწავლეთ

let num = 2
let num1 = 5

console.log(num + num1)
console.log(num - num1)
console.log(num / num1)
console.log(num * num1)
console.log(num % num1)
console.log(num ** num1)


// 3)შექმენი სამი ცვლადი const ის გამოყენებით, შიგნით შეინახეეთ --> სახელი გვარი მისამართი და ქვეყანა , ააგეთ მსგავსი წინადადება კონკატინაციის გამოყენებით --> my name is .. my surname is ...  and i live in ... 

const n = 'გიგა'
const l = 'ლომიძე'
const a = 'გუდამაყარი'
const c = 'საქართველო'

console.log('my name is ' + n + ' my surname is ' + l + ' and i live in ' + a + ', ' + c)


// 4)შექმენი ცვლადი სადაც შეინახავ შენს სახელს და ამ შენს სახელს გადაიყვან დიდ ასოებში და მოაშორებ white space ებს ,გამოიყენეთ შესაბამისი სტრინგის მეთოდები

let fname = '         giga         '

console.log(fname.trim().toUpperCase())


// 5)შექმენი ცვლადი და გადაიყვანე ცვლადში შენახული მნშვნელობა პატარა ასოებში ასევე მოაშორე white spaces

let sname = '         OPSEC         '

console.log(sname.trim().toLowerCase())


/*
6)let text = "   Hello,   my name is Goga.   ";

დავალება:

წაშალე ტექსტის დასაწყისში და ბოლოში არსებული ზედმეტი space-ები.
Hello შეცვალე Hi-ით.
საბოლოოდ დაბეჭდე მიღებული ტექსტი
*/

let text = "   Hello,   my name is Goga.   "
let clearText = text.trim().replace('Hello', 'Hi')

console.log(clearText)


/*
7)let message = "JavaScript is hard. JavaScript is interesting. I love JavaScript.";

დავალება:

ყველა JavaScript შეცვალე JS-ით.
შედეგი შეინახე ახალ ცვლადში.
ორიგინალი ცვლადი არ შეცვალო.
*/

let message = "JavaScript is hard. JavaScript is interesting. I love JavaScript.";
let cleared = message.replace('JavaScript', 'JS')

console.log(cleared)


/*
8)let password = "Goga12345";

დავალება:

გამოიტანე მხოლოდ პაროლის პირველი 2 სიმბოლო.
დანარჩენი სიმბოლოები ჩაანაცვლე *-ებით.
საბოლოო შედეგი უნდა იყოს მსგავსი:
Go*******

მინიშნება: დაგჭირდება .slice() და .repeat().
*/

let password = "Goga12345"
let start = password.slice(0, 2)
let result = start + "*******"

console.log(result)


/*
9)let username = "   GogaChalauri   ";

დავალება:

წაშალე ზედმეტი space-ები.
დატოვე მხოლოდ პირველი 5 სიმბოლო.
დაბეჭდე შედეგი.

მოსალოდნელი შედეგი:
GogaC
*/

let username = "   GogaChalauri   "
let fix = username.trim().slice(0, 5)

console.log(fix)


/*
10)let text = "I like cats. Cats are cute. My cat is sleeping.";

დავალება:

ყველა cat/cats სიტყვა შეცვალე dog/dogs-ით შესაბამისი ფორმით.
საბოლოოდ დაბეჭდე შეცვლილი ტექსტი.

პირობა: გამოიყენე .replace() ან .replaceAll().
*/

let text1 = "I like cats. Cats are cute. My cat is sleeping."
let newText = text1
    .replaceAll('cats', 'dogs')
    .replaceAll('Cats', 'Dogs')
    .replace('cat', 'dog');

console.log(newText)


/*
11)let sentence = "JavaScript is one of the most popular programming languages";

დავალება:

დატოვე მხოლოდ პირველი 25 სიმბოლო.
ბოლოს დაამატე "...".

მაგალითად:

JavaScript is one of the... (.SLICE() გამოიყენეთ)
*/

let sentence = "JavaScript is one of the most popular programming languages"
let newSentence = sentence.slice(0, 25) + '...'

console.log(newSentence)



/*
12)let code = "AB-12-CD-34";

დავალება:

ყველა - შეცვალე *-ით.
შემდეგ მიღებული კოდის ბოლო 2 სიმბოლო შეცვალე ##-ით.
შედეგი უნდა მიიღო მსგავსი:
AB*12*CD*##
*/

let code = "AB-12-CD-34"
let newCode = code.replaceAll('-', '*').replace('34', '##')

console.log(newCode)



/*
13)let email = "   goga.chalauri@gmail.com   ";

დავალება:

წაშალე ზედმეტი space-ები.
ამოიღე მხოლოდ username ნაწილი (goga.chalauri).
. შეცვალე _-ით.

მოსალოდნელი:

goga_chalauri
*/

let email = "   goga.chalauri@gmail.com   "
let newEmail = email.trim().replace('.', '_').slice(0, 13)

console.log(newEmail)




/*
14)let input = "   Hello!!! My name is Goga!!! I love JS!!!   ";

დავალება:

trim()-ით წაშალე ზედმეტი space-ები.
ყველა !!! შეცვალე !-ით.
ამოიღე მხოლოდ პირველი 20 სიმბოლო.
ბოლოს დაამატე "...".
*/

let input = "   Hello!!! My name is Goga!!! I love JS!!!   "
let newInput = input.trim().replaceAll('!!!', '!').slice(0, 20) + '...'

console.log(newInput)



/*
15)
let phone = " +995-599-12-34-56 ";

დავალება:

წაშალე დასაწყისისა და ბოლოში არსებული space-ები.
ყველა - წაშალე. (MINIsNEBA: ყველა -  ჩაანაცვლე "" <- ანუ არაფრით
საბოლოო ტექსტიდან ამოიღე მხოლოდ ბოლო 9 სიმბოლო.

მოსალოდნელი:

599123456
*/

let phone = " +995-599-12-34-56 "
let newPhone = phone.trim().replaceAll('-', "").slice(0, 9)

console.log(newPhone)



// 16)შექმენი ცვლადი სადაც შეინახავ რაიმე წინადადებას,გამოიტანე კონსოლში ამ წინადადებაში ასოების ოდებნობა

let len = 'opsec'

console.log(len.length)



/*
17)let text = "   JavaScript is GREAT!!! JavaScript is POWERFUL!!!   ";

დავალება:

trim()-ით გაასუფთავე ტექსტი.
replaceAll()-ით ყველა JavaScript შეცვალე JS-ით.
replaceAll()-ით ყველა !!! შეცვალე !-ით.
.slice()-ით დატოვე პირველი 30 სიმბოლო.
ბოლოში დაამატე "...".
საბოლოო შედეგი დაბეჭდე.
*/

let text2 = "   JavaScript is GREAT!!! JavaScript is POWERFUL!!!   "
let newText2 = text2.trim().replaceAll('JavaScript', "JS").replaceAll('!!!', '!').slice(0, 30) + '...'

console.log(newText2)