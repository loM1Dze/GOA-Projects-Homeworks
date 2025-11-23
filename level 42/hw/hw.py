# 1) შექმენი სია ხილებზე და დაამატე მასში კიდევ 2 ხილი extend() ფუნქციით.
fruits = ["ვაშლი", "ბანანი", "მსხალი"]
fruits.extend(["მანგო", "ფეიხოა"])

print(fruits)


# 2) შექმენი სია numbers და დაამატე მასში [40, 50] extend()-ით.

num = [10, 20, 30]
num.extend([40, 50])

print(num)


# 3) შექმენი სია names და შეაბრუნე reverse()-ით.

names = ["giga", "luka", "sandro", "nia"]
names.reverse()

print(names)


# 4) შექმენი სია სახელად nums და დათვალე რამდენი ცალი 5 არის მასში count()-ით.

nums = [5, 3, 7, 5, 2, 5, 9]
count_5 = nums.count(5)

print(count_5)


# 5) შექმენი letters = ["a","b","a","c"] და დაბეჭდე რამდენი ცალი "a" არის ჩვენს სიაში.

letters = ["a","b","a","c"]
count_a = letters.count("a")

print(count_a)

# 6) შექმენი სია სახელად names და იპოვე "saba"-ს ინდექსი index()-ით.

names = ["giga", "luka", "saba", "nia"]
index_saba = names.index("saba")

print(index_saba)


# 7) შექმენი list = ["red","green","blue"] და იპოვე რომელ ინდექსზე დგას "blue". გამოიყენე შესაბამისი ფუნქცია.

list = ["red", "green", "blue"]
index_blue = list.index("blue")

print(index_blue)


# 8) შექმენი სია სახელად nums და დამატე მასში extend()-ით [7, 8, 9].

nums = [1, 2, 3, 4, 5, 6]
num = [7, 8, 9]

nums.extend(num)


# 9) შექმენი სია სახელად foods და დააბრუნე შებრუნებული სია.

foods = ["burger", "pizza", "kebab", "fries"]  
reversed_foods = reversed(foods)

print(reversed_foods)


# 10) შექმენი სია cities და იპოვე რომელ ინდექსზე დგას "tbilisi".

cities = ["batumi", "kutaisi", "tbilisi", "gori"]
index_tbilisi = cities.index("tbilisi")

print(index_tbilisi)


# 11) შექმენი animals = ["cat","dog","cat","cow"] და დაითვალე ამ სიაში რამდენი "cat" არის

animals = ["cat","dog","cat","cow"]
count_cat = animals.count("cat")

print(count_cat)


# 12)შექმენი სია fruits = ["apple", "banana"] და append ფუნქციით დაამატე "grape". დაბეჭდე სია.

fruits = ["apple", "banana"]
fruits.append("grape")

print(fruits)


# 13)შექმენი სია numbers = [1, 2, 3] და extend()-ით დაუმატე [4, 5]. დაბეჭდე სია.

numbers = [1, 2, 3]
numbers.extend([4, 5])

print(numbers)


# 14)შექმენი სია names = ["goga", "saba"] და insert()-ით ჩასვი "luka" პირველ ინდექსზე. დაბეჭდე სია

names = ["goga", "saba"]
names.insert(1, "luka")

print(names)


# 15)შექმენი სია items = ["pen", "pencil", "eraser"] და pop()-ით წაშალე ბოლო ელემენტი; დაბეჭდე განახლებული სია.

items = ["pen", "pencil", "eraser"]
items.pop()

print(items)


# 16)შექმენი სია colors = ["red", "green", "blue"] და remove()-ით წაშალე "green". დაბეჭდე შედეგი.

colors = ["red", "green", "blue"]
colors.remove("green")

print(colors)


# 17)შექმენი სია foods = ["bread", "milk"]. შეამოწმე სიაში 2 ელემენტია თუ მეტი — თუ ორია, append()-ით დაამატე "cheese", შემდეგ დაბეჭდე სია, სხვა შემთხვევაში append()-ით დაამატე "meat" და დაბეჭდე სია.

foods = ["bread", "milk"]

if len(foods) == 2:
    foods.append("cheese")
else:
    foods.append("meat")

print(foods)


# 18)შექმენი სია nums = [10, 20, 30]. მომხმარებელს შემოატანინე მთელი რიცხვი. თუ რიცხვი nums სიაშია, დაბეჭდე "Already in list", თუ არა — append()-ით დაამატე 40 და დაბეჭდე სია.

nums = [10, 20, 30]

user_num = int(input("Enter number: "))

if user_num in nums:
    print("Already in list")
else:
    nums.append(40)
    print(nums)


# 19)შექმენი სია letters = ["a", "b", "c"]. მომხმარებელს შემოატანინე ასო, შემდეგ insert()-ით ჩასვი ის სიის შუაში (ცენტრალურ ინდექსზე). დაბეჭდე სია.

letters = ["a", "b", "c"]

user_letter = input("Enter a letter: ")
letters.insert(2, user_letter)

print(letters)
 

# 20)შექმენი სია values = [1, 2, 3, 4]. მომხმარებელს შემოატანინე ინდექსი. თუ ინდექსი სიის ფარგლებშია, pop()-ით ამოშალე შესაბამისი ელემენტი; თუ არა, დაბეჭდე "Index out of range". ბოლოს დაბეჭდე სია.

values = [1, 2, 3, 4]

index = int(input("Enter index: "))

if 0 <= index <= len(values):
    values.pop(index)
else:
    print("Index out of range")

print(values)
