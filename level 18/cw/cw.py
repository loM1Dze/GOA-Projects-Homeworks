# 1) შემოატანინეთ მომხმარებელს 3 რიცხვი, შეამოწმეთ:
# თუ 1 და 2 რიცხვი ტოლია -> დაწერეთ 1 და 2 ტოლია
# თუ 1 და 3 რიცხვი ტოლია -> დაწერეთ 1 და 3 ტოლია
# თუ 2და 3 რიცხვი ტოლია -> დაწერეთ 2და 3 ტოლია
# თუ სამივე ტოლია -> დაწერეთ სამივე ტოლია
# თუ არცერთი არ არის ტოლი -> დაწერეთ არცერთი არ არის ტოლია

num1 = int(input("Enter first num:"))
num2 = int(input("Enter second num:"))
num3 = int(input("Enter last:"))

if num1 == num2:
    print("Your first and second numbers are eaquals")
elif num1 == num3:
    print("Your first and third numbers are eaquals")
elif num2 == num3:
    print("Your second and third numbers are eaquals")
elif num1 == num2 == num3:
    print("All your numbers which you entered, are eaquals")
else:
    print("None are eaqual")




# 2) შემოატანინეთ მომხმარებელს რიცხვი 1-დან 12ჩათვლით:
# თუ ეს რიცხვი არის 12, 1, 2 -> დაპრინტეთ ზამთარი
# თუ ეს რიცხვი არის 3, 4, 5 -> დაპრინტეთ გაზაფხული
# თუ ეს რიცხვი არის 6, 7, 8 -> დაპრინტეთ ზაფხული
# თუ ეს რიხცვი არის 9, 10, 11 -> დაპრინტეთ შედმოგომა


innum = int(input("Enter numbers from 1 to 12:"))

if innum == 12 or innum == 1 or innum == 2:
    print("Winter")
elif innum == 3 or innum == 4 or innum == 5:
    print("Spring")
elif innum == 6 or innum == 7 or innum == 8:
    print("Summer")
elif innum == 9 or innum == 10 or innum == 11:
    print("Autumn")
else:
    print("Type numbers which i said")



# 3) შემოატანინეთ მომხმარებელს თავისი სახელი:
# თუ სახელი უდრის admin:
#    მოთხოვეთ შემოიყვანოს ადმინის პაროლი:
#       თუ პაროლი უდრის adminpassword123:
#         დაპრინტეთ სალამი ადმინ
#       სხვა შემთხვევაში:
#         დაპრინტეთ წვდომა არ გაქვს
# სხვა შემთხვევაში:
#   დაპრინტეთ სალამი მომხმარებელო

Name = "admin"
Pass = "adminpassword123"

name = input("Enter your name:")

if name == Name:
    PAss = input("Enter your password:")
    if PAss == Pass:
        print("Hello admin")
    else:
        print("You dont have an acsess")
else:
    print("You dont have an acsess")