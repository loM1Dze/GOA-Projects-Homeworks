# 1) შექმენით რიცხვებით სავსე სია, ამ სიიდან იპოვეთ და დაპრინტეთ მეორე ყველაზე დიდი რიცხვი, გამოიყენეთ for ციკლი.
numbers = [5, 12, 7, 20, 3, 15]

largest = numbers[0]
for i in numbers:
    if i > largest:
        largest = i

second_largest = numbers[0]
for i in numbers:
    if i != largest and i > second_largest:
        second_largest = i

print("მეორე ყველაზე დიდი რიცხვი:", second_largest)

# 2) მომხმარებელს შემოატანინეთ წინადადება და დაითვალეთ თუ ამ წინადადებაში რამდენი სიტყვის სიგრძე არის 4-ზე მეტი, დაპრინტეთ ასეთი სიტყვების რაოდენობა, მაგალითად 4. გამოიყენეთ while ციკლი.

sentence = input("შეიყვანეთ წინადადება: ")

words = sentence.split() 
count = 0

for i in words:
    if len(i) > 4:
        count += 1

print("სიტყვების რაოდენობა, რომლის სიგრძეც 4-ზე მეტი არის:", count)


# 3) მომხმარებელს შემოატანინეთ სიტყვა და გაიგეთ ეს სიტყვა არის თუ არა პალინდრომი - ანუ ეს სიტყვა წინიდანაც და უკნიდანაც თუ ზუსტად იგივენაირად იკითხება. თუ კი მაშინ დაპრინტეთ True, თუ არა დაპრინტეთ False, გამოიყენეთ for ციკლი, არ გამოიყენოთ slicing - [::-1].

name = input("Enter name:")
Palindrom = ""

for i in name:
    Palindrom = i + Palindrom
print(name == Palindrom)
