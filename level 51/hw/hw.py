# 1) შექმენით რიცხვებით სავსე სია და ახალ სიაში ჩააგდეთ ყველა რიცხვი გამრავლებული 2-ზე. დაპრინტეთ ახალი სია.

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
divided = []

for i in num:
    divided.append(i*2)
print(divided)



#2) შექმენით სახელებით სავსე სია, მომხმარებელს შემოატანინეთ რაიმე რიცხვი, და ამ რიცხვის ინდექსზე ჩაამატეთ სახელი "ნიკა" თქვენს სიაში.

name = ["gaga", "gega", "giga", "guga", "goga"]
added = int(input(" To add name 'nika' enter index between 0-4:"))

name.insert(added,"nika")

print(name)



# 3) შექმენით string წინადადების ცვლადი, ამ წინადადებიდან დაპრინტეთ მხოლოდ ხმოვანი ასოები.

word = "Python programming is fun"
vowels = "aeiouAEIOU"

for i in word:
    if i in vowels:
        print(i)




#4) შექმენით სტრინგებით სავსე სია, წაშალეთ ის სტრინგ მონაცემთა ტიპის ელემენტები რომლებიც არიან 4-ზე მეტი სიგრძეში ან დგანან კენტ ინდექსზე. გამოიყენეთ remove() ფუნქცია.


words = ["car", "python", "sun", "hello", "sky", "program", "cat"]

for i in words:
    if len(i) > 4 or words.index(i) % 2 != 0:
        words.remove(i)

print(words)




# 5) შექმენით რიცხვებით სავსე სია, გამოითვალეთ რიცხვების საშუალო არითმეტიკული - რიცხვების ჯამი გაყოფილი რიცხვების რაოდენობაზე.

numbers = [2, 4, 6, 8, 10]

total = 0
count = 0

for i in numbers:
    total += i
    count += 1

average = total / count
print(average)
