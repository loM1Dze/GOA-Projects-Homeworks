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