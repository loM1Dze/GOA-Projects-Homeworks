# 2) კომენტარების სახით თავიდან ახსენით რა არის conditional statement, რა დანიშუნლება გააჩნიათ და როგორი სახის განცხადებები გვაქვს.

# Conditional statement (პირობითი განცხადება) არის პროგრამირების კონსტრუქცია,
# რომელიც საშუალებას გვაძლევს, რომ კოდის გარკვეული ნაწილი შესრულდეს მხოლოდ მაშინ,
# თუ მოცემული პირობა (condition) არის True (ჭეშმარიტი).

# სახის განცხადებები Python-ში:
# 1) if — თუ პირობა ჭეშმარიტია, შესრულდება კოდი if ბლოკში.
# 2) if ... else — თუ პირობა ჭეშმარიტია, შესრულდება if-ის კოდი, თუ არა — else-ის კოდი.

# მაგალითი:
age = 18

if age >= 18:
    print("სრულწლოვანი ხარ")  # შესრულდება თუ პირობა True-ა
else:
    print("არასრულწლოვანი ხარ")  # შესრულდება თუ პირობა False-ა



# 3) for ციკლის მეშვეობით გამოიტანეთ "hello world" 50-ჯერ.


for i in range(50):
    print("hello world")




# 4) while ციკლის მეშვეობით გამოიტანეთ რიცხვები 3-დან 17-ის ჩათვლით.


num = 3

while num < 18:
    print(num)
    num = num + 1


# 5) მომხმარებელს შემოატანინეთ პაროლი, შემდეგ კი შედეგი შეინახეთ ცვლადში. შექმენით პირობა თუ ის უდრის "1234"-ს დაბეჭდეთ
#  "Password is correct", სხვა შემთხვევაში დაბეჭდეთ "Password is incorrect"

password = "1234"

guess = input("Enter password: ")

while guess != password:
    print("Password is incorrect")
    guess = input("Enter password: ")  # Ask again

print("Password is correct")


# 6) შექმენით ცვლადი სადაც შეინახავთ მომხმარებლის მიერ შემოყვანილი ცხოველის სახეობას. თუ სახეობა უდრის "ძაღლი" დაბეჭდეთ "woaf! woaf!",
#  სხვა შემთხვევაში "შენ არ გყავს ძაღლი"

dog = "alabai"

guess = input("enter dog's breed:")

while guess != dog:
    print("You dont have a dog")
    guess = input("enter dog's breed:")

print("woaf woaf")

