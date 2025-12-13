# 1) შექმენით სახელებით სავსე სია და ასევე ცარიელი სია: Upper_name = [].  სახელების სიიდან ცარიელ სიაში ჩაამატეთ ყველა ის სახელი რომელიც იწყება დიდი ასოთი, გამოიყენეთ for ციკლი და შესაფერისი სიის და სტრინგის ფუნქციები.

names = ["Gio", "nika", "Mari", "luka", "Ana"]
Upper_name = []

for name in names:
    if name[0] == name[0].upper():
        Upper_name.append(name)

print(Upper_name)


# 2) შექმენით 2 სია - სახელების და გვარების. for ციკლის და ფუნქციების გამოყენებით სახელების სიაში ყველა სახელის ყველა ასო გახადეთ დიდი, ხოლო გვარების სიაში ყველა გვარის თითოეული ასო გახადეთ პატარა, სულ ბოლოს კი გააერთიანეთ სახელების სია გვარის სიასთან და დაპრინტეთ მიღებული შედეგი.

names = ["gio", "nika", "mari"]
surnames = ["BERIDZE", "lomidze", "KOBALADZE"]

for i in range(len(names)):
    names[i] = names[i].upper()

for i in range(len(surnames)):
    surnames[i] = surnames[i].lower()

result = names + surnames

print(result)


# 3) შექმენით სტრინგებით სავსე სია და ამ სიიდან ამოშალეთ ყველა ის სიტყვა რომელიც არის ან 6-ზე ნაკლები სიგრძეში, ან რომელიც მთავრდება დიდი ასოთი.

words = ["APPLE", "banana", "CherryA", "orange", "DOG", "Elephant"]

for i in words:
    if len(i) < 6 or i[-1] == i[-1].upper():
        words.remove(i)

print(words)


# 4) შექმენით float მონაცემთა ტიპის ელემენტებით სავსე სია რომელშიც იქნება 10 float ელემენტი და ამ სიიდან ახალ ცარიელ სიაში ჩაამატეთ ის რიცხვები რომლებიც არიან 10-ზე მეტი და 100-ზე ნაკლები.

nums = [5.5, 12.3, 9.8, 45.6, 101.2, 78.9, 10.1, 99.9, 150.0, 20.0]
filtered = []

for n in nums:
    if n > 10 and n < 100:
        filtered.append(n)

print(filtered)


# 5) შექმენით 2 სია, პირველი სია იყოს სავსე 5 ცალი ქალაქის სახელებით, და მეორე სიაში მოთავსებული იყოს 10 ქვეყნის სახელი. თქვენი დავალებაა რომ ქვეყნის სახელებში ჩაამატოთ ყველა ქალაქის სახელები ცალ-ცალკე მენულე ინდექსიდან მეოთხე ინდექსის ჩათვლით. გამოიყენეთ for ციკლი და შესაბამისი ფუნქციები.

cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Gori"]
countries = ["Georgia", "France", "Italy", "Spain", "Germany",
             "USA", "Canada", "Japan", "China", "Brazil"]

index = 0

for c in cities:
    countries.insert(index, c)
    index += 1

print(countries)
