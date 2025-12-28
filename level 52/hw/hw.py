# 1) შექმენით სიტყვებით სავსე სია, თუ სიტყვის ყველა ასო არის პატარა, ანუ წერია lowercase-ში, ამ სიტყვის ყველა ასო გახადეთ დიდი.
# თუ სიტყვა შეიცავს თუნდაც ერთ uppercase ასოს, ეს სიტყვა ამოშალეთ სიიდან. ბოლოს დაპრინტეთ მიღებული სია. (არ შექმნათ ახალი სია, იმუშავეთ პირველ სიტყვების სიაშიგამოიყენეთ while ციკლი.

words = ["hello", "World", "python", "Code", "linux"]

i = 0 
while i < len(words):
    if words[i].islower():
        words[i] = words[i].upper()
        i += 1
    else:
        words.pop(i)

print(words)


