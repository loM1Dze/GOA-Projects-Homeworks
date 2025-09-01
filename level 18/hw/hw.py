# 1)მომხმარებელს შემოატანინეთ ორი რიცხვი,შეამოწმეთ თუ პირველი რიცხვი მეტია მეორე რიცხვზე დაპრინტე რომ ‘first is more than second’,
# ასევე შეამოწმე თუ პირველი რიცხვი ნაკლებია მეორე რიცხვზე დაპრინტე რომ ‘first is less than second’ და სხვა დანარჩენ შემთხვევაში დაპტინტე
#  რომ ‘first number equal to second number’

num1 = input("Enter first number:")
num2 = input("Enter second number:")

if num1 > num2:
    print("first is more than second")
elif num1 < num2:
    print("first is less than second")
else:
    print("first number equal to second number")



# 2) მომხმარებელს შემოატანინე რაიმე სტრინგი,ასევე შექმენი ცვლადი სადაც შეინახავთ თქვენს სახელს,შემდეგ შეამოწმე თუ მომხმარებლის შემოყვანილი
#  სტრინგი უდრის შენა სახელს დაუპრინტე რომ ‘სეხნიები ვართ’ სხვა შემთხვევაში დაუპრინტეთ რომ ‘სხვადასხვა სახელები გავქვს’


Mname = "giga"

name = input("Enter your name:")

if name == Mname:
    print("სეხნიები ვართ")
else:
    print("სხვადასხვა სახელები გავქვს")



# 3) შექმენი ორი ცვლადი სადაც შეინახავთ ინტეჯერ ტიპოს მონაცემებს,თქვენი დავალებაა შეამოწმოთ,თუ პირველი რიცხვი მეტია 0 ზე და და მეორე
# რიცხვიც მეტია 0 ზე დაუპრინტე რომ ‘ორივე რიცხვი დადებითია, ასევე შეამოწმე თუ პირველი რიცხვი ნაკლებია 0 ზე და მეორე რიცხვიც ნაკლებია
# 0 ზე დაპურინტე რომ  ‘ორივე რიცხვი არის უარყოფით’,სხვა დანარჩენ შემთხვევაში დაუპრინტე რომ ‘ეს რა ჯანდაბაა’


int1 = int(input("Enter first number:"))
int2 = int(input("Enter second number:"))

if int1 > 0 and int2 > 0:
    print("Both numbers are positive")
elif int1 < 0 and int2 < 0:
    print("Both numbers are negative")
else:
    print("What the hell is this?")




# 4) დაატრიალეთ ფორ ლუპი 50 დან 100 მდე 2 ის გამოტივებით

for i in range(50, 100, 2):
    print(i)



# 5) ვაილ ლუპის გამოყენებით 20 დან 40 მდე გამოიტანეთ ყველა რიცხვი

From = 20
to = 40

while From < to:
    print(From)
    From = From + 1


