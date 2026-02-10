# 1)შექმენი ფუნქცია, რომელსაც აქვს ერთი პარამეტრი —name.
# ფუნქციამ უნდა დააბრუნოს ტექსტი:
# გამარჯობა, [სახელი]!

# ფუნქცია გამოიძახე სხვადასხვა არგუმენტით მინიმუმ 3-ჯერ.

def greet(name):
    return "გამარჯობა, " + name + "!"

print(greet("გიგა"))
print(greet("მარი"))
print(greet("ნიკა"))


# 2)შექმენი ფუნქცია, რომელსაც აქვს ორი პარამეტრი — num1 და num2. ფუნქციამ უნდა დააბრუნოს მათი ჯამი.

def sum_numbers(num1, num2):
    return num1 + num2

print(sum_numbers(3, 5))
print(sum_numbers(10, 20))
print(sum_numbers(-4, 7))


# 3)შექმენი ფუნქცია ერთი პარამეტრით num.

# ფუნქციამ უნდა დააბრუნოს (return) გადაცემული რიცხვის კვადრატი.

# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

def square(num):
    return num * num

print(square(2))
print(square(5))
print(square(-3))
print(square(10))


# 4)შექმენი ფუნქცია ერთი პარამეტრით — age.

# თუ ასაკი არის 18 ან მეტი, დააბრუნოს:
# სრულწლოვანი ხარ

# სხვა შემთხვევაში:
# არ ხარ სრულწლოვანი

def check_age(age):
    if age >= 18:
        return "სრულწლოვანი ხარ"
    else:
        return "არ ხარ სრულწლოვანი"

print(check_age(18))
print(check_age(20))
print(check_age(15))


# 5)შექმენი ფუნქცია ერთი პარამეტრით — (string).

# ფუნქციამ უნდა დაბეჭდოს ტექსტის სიმბოლოების რაოდენობა.

# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

def count_chars(text):
    print(len(text))

count_chars("გამარჯობა")
count_chars("Python")
count_chars("Hello World")


# 6)შექმენი ფუნქცია ორი პარამეტრით num1 და nuk2.

# ფუნქციამ უნდა დააბრუნოს მათი ნამრავლი.

# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

def multiply(num1, num2):
    return num1 * num2

print(multiply(3, 4))
print(multiply(5, 6))
print(multiply(-2, 10))


# 7)შექმენი ფუნქცია ერთი პარამეტრით — score.

# თუ ქულა ≥ 90 → დააბრუნოს "შესანიშნავი ქულა"

# თუ ქულა >= 70 და ნაკლებია ან <=89 → დააბრუნოს "კარგი ქულა"

# თუ ქულა >= 50 და <= 69 → დააბრუნოს "დამაკმაყოფილებელი ქულა"

# სხვა შემთხვევაში დააბრუნოს "ჩაჭრილი"

# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

def check_score(score):
    if score >= 90:
        return "შესანიშნავი ქულა"
    elif score >= 70 and score <= 89:
        return "კარგი ქულა"
    elif score >= 50 and score <= 69:
        return "დამაკმაყოფილებელი ქულა"
    else:
        return "ჩაჭრილი"

print(check_score(95))
print(check_score(82))
print(check_score(60))
print(check_score(30))


# 8)შექმენი ფუნქცია ერთი პარამეტრით — number.

# ფუნქციამ უნდა დააბრუნოს, ლუწია თუ კენტი.

# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

def even_or_odd(number):
    if number % 2 == 0:
        return "ლუწია"
    else:
        return "კენტია"

print(even_or_odd(4))
print(even_or_odd(7))
print(even_or_odd(0))
print(even_or_odd(13))

# 9)შექმენი ფუნქცია ერთი პარამეტრით — name

# ფუნქციამ უნდა დააბრუნოს მხოლოდ პირველი ასო.

# მაგალითად:
# „Giorgi“ → G

# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

def first_letter(name):
    return name[0]

print(first_letter("Giorgi"))
print(first_letter("Nika"))
print(first_letter("Mariam"))
print(first_letter("Luka"))


# 10)შექმენი ფუნქცია სამი num1 num2 num3.

# ფუნქციამ უნდა დააბრუნოს ამ სამი რიცხვის საშუალო არითმეტიკული.

# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით10)შექმენი ფუნქცია სამი num1 num2 num3.

# ფუნქციამ უნდა დააბრუნოს ამ სამი რიცხვის საშუალო არითმეტიკული.

# გამოიძახე ფუნქცია რამ10)შექმენი ფუნქცია სამი num1 num2 num3.

# ფუნქციამ უნდა დააბრუნოს ამ სამი რიცხვის საშუალო არითმეტიკული.

# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებითდენჯერმე სხვადასხვა არგუმენტებით

def average(num1, num2, num3):
    return (num1 + num2 + num3) / 3

print(average(3, 6, 9))
print(average(10, 20, 30))
print(average(5, 7, 11))
print(average(-2, 4, 8))


# 11)შექმენი ფუნქცია ერთი პარამეტრით —password.

# თუ პაროლი უდრის "python123" → დააბრუნოს  "წვდომა დაშვებულია"

# სხვა შემთხვევაში → "არასწორი პაროლი"

# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

def check_password(password):
    if password == "python123":
        return "წვდომა დაშვებულია"
    else:
        return "არასწორი პაროლი"

print(check_password("python123"))
print(check_password("Python123"))
print(check_password("123python"))
print(check_password("mypassword"))


# 12)შექმენი ფუნქცია ერთი პარამეტრით — text.

# ფუნქციამ უნდა დააბრუნოს ეს ტექსტი მთლიანად დიდი ასოებით.

# გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

def to_uppercase(text):
    return text.upper()

print(to_uppercase("გამარჯობა"))
print(to_uppercase("Python"))
print(to_uppercase("hello world"))
print(to_uppercase("mariam"))