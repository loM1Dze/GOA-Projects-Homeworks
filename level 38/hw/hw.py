# 1)მომხმარებელს შემოაყვანინეთ სახელი,შენი დავალებაა რომ დაპრინტო მისი სახელი ოღნოდ დიდი ასოებით

name = input("Enter your name:")

uppercase = name.upper()

print(uppercase)



# 2)მომხმარებელს შემოაყვანინეთ სახელი დიდი ასოებით,შენი დავალებაა რომ დაპრინტო მისი სახელი ოღნოდ პატარა ასოებით

Name = input("Enter your name with big letters:")

lowercase = Name.lower()

print(lowercase)


# 3)მომხმარებელს შემოაყვანინეთ სახელი პატარა ასოებით,შენი დავალებაა რომ დაპრინტო მისი სახელი ოღნოდ პირველი ასო იყოს დიდი

nAme = input("Enter your name:")

capitalized = nAme.capitalize()

print(capitalized)


# 4)შექმენით სია,შეინახეთ სიაში მხოლოდ სახელები პატარა ასოებით,თქვენი დავალებაა რომ გადაუაროთ ამ სიას ფორ ციკლით და დაპრინტო თითიეული
# სახელი ოღონდ დიდი ასოებით


names = ["gaga, gega, giga, goga, guga"]

for i in names:
    print(i.upper)


