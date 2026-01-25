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


# 4) შექმენით არეული რიცხვებით სავსე გრძელი სია და 2 ცარიელი სია, ერთ სიაში ჩააგდეთ ყველა ის რიცხვი რომელიც არის ლუწი და დგას 
# კენტ ინდექსზე, ხოლო მეორე სიაში ჩააგდეთ ყველა ის რიცხვი რომელიც არის ლუწი და დგას კენტ ინდექსზე, გამოიყენეთ for ციკლი.

nums = [5, 8, 3, 12, 7, 6, 9, 10, 4, 11]
nums1 = []
nums2 = []

for i in range(len(nums)):
    if i % 2 == 1:
        if nums[i] % 2 == 0:
            nums1.append(nums[i])
        else:
            nums2.append(nums[i])

print(nums1)
print(nums2)


# 5) შექმენით ყველანაირი მონაცემთა ტიპების ელემენტებით სავსე სია, ამოშალეთ ყველა დუპლიკატები - ყველაფერი რაც მეორდება 2-ზე მეტჯერ, გამოიყენეთ remove() ფუნქცია და while ციკლი.

data = [1, 2, 2, 3, "a", "a", "b", True, True, False, 1, 1, 1]

i = 0
while i < len(data):
    count = 0
    j = 0

    
    while j < len(data):
        if data[i] == data[j]:
            count += 1
        j += 1

    
    if count > 1:
        data.remove(data[i])
    else:
        i += 1

print(data)
