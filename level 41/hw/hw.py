# კომენტარის სახით ჩამოწერე თითეული სიის ფუნქცია რაც ვისწავლეთ და მიუწერეთ გვერდით ახსნა განმარტება თუ რა გადაეცემა თითეულს და რას აკეთებს ის

# append(მნიშვნელობა) – სიას ბოლოში უმატებს ერთ ახალ ელემენტს
# insert(ინდექსი, მნიშვნელობა) – სიაში ამატებს ახალ ელემენტს მითითებულ ინდექსზე
# pop(ინდექსი) – შლის ელემენტს ინდექსის მიხედვით (თუ ინდექსს არ მივუთითებთ, შლის ბოლო ელემენტს)
# remove(მნიშვნელობა) – სიიდან შლის პირველივე ელემენტს, რომელიც ემთხვევა გადაცემულ მნიშვნელობას


# 2)შექმენი რიცხვების სია.
# append() ფუნქციით დაამატე მასში რიცხვი 10 ბოლოში.
# დაბეჭდე სია რომ ნახო ჩაემატა თუ არა

list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
list.append(10)
print(list)


# 3)შექმენი სახელების სია.
# append() ფუნქციით დაამატე შენი სახელი სიის ბოლოში
# დაბეჭდე სია.

list = ["გუგა", "გოგა", "გეგა", "გაგა"]
list.append("გიგა")
print(list)


# 4)შექმენი სია სადაც შეიყვან სახელებს,შენიდავალებაა მომხმარებელს შემოატანინო რაიმე სახელი და შეინახო ცვლადში,შემდეგ ჩაამატე append()ის დახმარებით სიის ბოლოში მომხმარებლის შემოტანილი სიტყვა ~
# დაბეჭდე სია რომნახო ჩაემატა თუ არა

list = ["გუგა", "გოგა", "გეგა", "გაგა"]
added = input("Enter a name to add in list:")
list.append(added)
print(list)

# 5)შექმენი სია სადაც შეიყვანთ 5 სახელს
# .insert() დახმარებით სიაში ჩაამატე მესამე ინდექსზე შენი სახელი

list = ["გუგა", "გოგა", "გეგა", "გაგა", "გიორგი"]
list.insert(2,"გიგა")
print(list)


# 7)შექმენი სია:

# fruits = ["apple", "banana"]

# insert() ფუნქციით ჩასვი "orange" 1 ინდექსზე.

fruits = ["apple", "banana"]
fruits.insert(1,"orange")


# 8)შექმენი სია:

# names = ["goga", "saba", "luka"]

# insert()-ით ჩასვი "irakli" ბოლოს წინა პოზიციაზე ანუ ლუკას წინ

names = ["goga", "saba", "luka"]
names.insert(-2,"irakli")
print(names)


# 9)შექმენი სია:

# foods = ["bread", "milk", "cheese"]

# insert() ფუნქციით ჩასვი "water" სიის დასაწყისში.

foods = ["bread", "milk", "cheese"]
foods.insert(0,"water")
print(foods)


# 10)შექმენი სია:numbers = [5, 10, 15]

# pop() ფუნქციით წაშალე ბოლო ელემენტი და დაბეჭდე განახლებული სია.

numbers = [5, 10, 15]
numbers.pop()
print(numbers)


# 11)შექმენი სია:

# fruits = ["apple", "banana", "orange"]
# pop -ით ამოშალე "banana" და დაბეჭდე დარჩენილი სია.

fruits = ["apple", "banana", "orange"]
fruits.pop(1)
print(fruits)


# 12)შექმენი სია:

# names = ["goga", "saba", "luka"]

# ამოშალე "saba" pop()-ით  — შემდეგ დაბეჭდე სია რომ ნახო ამოიშალა თუ არა

names = ["goga", "saba", "luka"]
names.pop(1)
print(names)


# 13)შექმენი სია:

# colors = ["red", "green", "blue" , "yellow" , "black" , "purple"]


# pop()-ით წაშალე "red" და დაბეჭდე განახლებული სია.

# შემდეგ სიიდან ასევე ამოშალე yellow

# დაბეჭდე სია და ნახე შედეგი

colors = ["red", "green", "blue" , "yellow" , "black" , "purple"]
colors.pop(0)
colors.pop(2)
print(colors)


# 14)მომხმარებელს შემოტანინე რიცხვი(0 იდან 4 მდე და შეინახე ცვლადში

# შექმენი სია tems = ["pen", "pencil", "book", "eraser"] 

# pop ის დახმარებით სიიდან ამოშალე მომხმარებლის მიერ შემოტანილ რიცხვზე(ინდექსზე) მდგომი ელემენტი

tem = int(input("შეიყვანეთ რიცხვი 1 დან 4 მდე:"))
tems = ["pen", "pencil", "book", "eraser"]
tems.pop(tem)
print(tems)


# 15)შექმენი სია:

# fruits = ["apple", "banana", "orange"]


# remove() ფუნქციით სიისდან წაშალე "banana".

# დაბეჭდე სია ნახე ამოიშალა თუ არა

fruits = ["apple", "banana", "orange"]
fruits.remove("banana")
print(fruits)


# 16)შექმენი სია:

# nums = [3, 5, 3, 7]


# remove()-ით წაშალე 3 და დააკვირდი, მხოლოდ პირველი 3 იანი შაიშლება.

# დაბეჭდე სია რომ დარწმუნდე

nums = [3, 5, 3, 7]
nums.remove(3)
print(nums)


# 17)შექმენი სია:

# colors = ["red", "blue", "green"]


# remove() ფუნქციით წაშალე "blue" და დაბეჭდე განახლებული სია.

colors = ["red", "blue", "green"]
colors.remove("blue")
print(colors)



# 18)შექმენი სია:

# names = ["goga", "saba", "luka"]


# მომხმარებელს შემოატანინე ამ სამიდან რომელიმე სახელი შეინახე ცვლადში და remove()-ით წაშალე მომხმარებლის შემოტანილი სახელი სიიდან.

# დაბეჭდე სია რომ გაიგო მართლა ამოიშალა თუ არა

names = ["goga", "saba", "luka"]
del_name = input("შეიყვანეთ სახელი goga, saba ან luka რათა ამოშალთ სიიდან:")
names.remove(del_name)
print(names)


# 19)შექმენი სია:

# items = ["pen", "pencil", "book", "pencil"]


# remove()-ით წაშალე "pencil" და დაბეჭდე დარჩენილი სია.

items = ["pen", "pencil", "book", "pencil"]
items.remove("pencil")
print(items)



