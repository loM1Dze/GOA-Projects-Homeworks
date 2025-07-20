# 1) მომხმარებელს შემოატანინეთ ორი რიცხვი,შეადარეთ ეს ორი რიცხვი ერთმანეთს(გამოიყენეთ შედარების ოპერატორები(>, <, ==)

num_1 = input("Type your first num: ")
num_2 = input("Type your second num: ")

print(num_1 > num_2)
print(num_1 < num_2)
print(num_1 == num_2)

# 2) შექმენით 5 ცვლადი,3 ცვლადში შეინახეთ რიცხვები რომლებიც იქნებაინ სტრინგის ტიპის,დანარჩენ 2 ცვლადში შეინახეთ ჩვეულებრიბი ინტეჯერები,
#  შენი დავალებაა იპოვო ამ ხუთი რიცხვის ნამრავლი,შემდეგ ეს ნამრავლი გაყავი რიცხვების რაოდენობაზე და დაპრინტე საბოლოო შედეგი,გამოიყენე შეაბამისი
#  ფუნქცია რომ გადააქციო სტრინგი რიცხვები ინტეჯერად

num = "40"
Num = "30"
nUm = "80"
nuM = 10
NUm = 20

result = (int(num) + int(Num) + int(nUm) + int(nuM) + nuM + NUm )/5
print(result)

# 3) მომხმარებელს შემოატანინეთ სამი სტრინგ ტიპის მნიშვნელობა ასევე შემოატანინეთ ერთი ინტეჯერი,თქენი დავალებაა მომხმარებლის მიერ შემოყვანილ
#  სამ სტრინგზე მოახდინოთ კონკატინაცია და შეინახოთ ცალკე ცვლადში ეს სამი გადაბმული სტრინგი,კონკატინაციის შემდეგ კი გაამრავლეთეს ეს მთლიანი
#  სტრინგი მომხმარებლის მიერ შემოყვანილ რიცხვზე

st_1 = input("Enter 1st word: ")
st_2 = input("Enter your 2nd word: ")
st_3 = input("Enter your 3rd word: ")

st_4 = input("Enter your number, which will be multiplied on your first three words: ")

result_1 = st_1 + st_2 + st_3
result_2 = int(st_4) * result_1

print(result_2)

# 4) კომენტარის სახით ახსენით თუ რომელი ლოგიკური ოპერატორები ვისწავლეთ და რომელი ოპერატორის დროს რას უფრო ენიჭება უპირატესობა
# (True , False) და რატომ


# ლოგიკური ოპერატორები Python-ში:

# 1) and (და) - ორი პირობის ლოგიკური გაერთიანება, რომელიც აბრუნებს True-ს
# მხოლოდ მაშინ, როცა ორივე პირობა Trueა.
# სხვა შემთხვევებში აბრუნებს False-ს.
# მაგალითად:
# True and True  → True
# True and False → False

# 2) or (ან) - ორი პირობის ლოგიკური გაერთიანება, რომელიც აბრუნებს True-ს,
# თუ რომელიმე პირობა Trueა. მხოლოდ მაშინ აბრუნებს False-ს,
# როცა ორივე პირობა Falseა.
# მაგალითად:
# True or False  → True
# False or False → False



# 5) გვერდით მიუწერეთ რას გამოიტანს შემეგი ოპერაციები

#     (and)                                                                               (or)
# True and True -- True    #  // and: ორივე პირობა Trueა, ამიტომ შედეგი True.    |   True or True -- True   #  // or: ორივე პირობა Trueა, ამიტომ შედეგი True.     
# True and False -- False  #  // and: ერთი პირობა Falseა, ამიტომ შედეგი False.   |   True or False -- True  #  // or: ერთი პირობა Trueა, ამიტომ შედეგი True.
# False and True -- False  #  // and: ერთი პირობა Falseა, ამიტომ შედეგი False.   |   False or True -- True  #  // or: ერთი პირობა Trueა, ამიტომ შედეგი True.
# False and False -- False #  // and: ორივე პირობა Falseა, ამიტომ შედეგი False.  |   False or False -- False  #  // or: ორივე პირობა Falseა, ამიტომ შედეგი False.


# 6) მოიყვანე მაგალითები and და or ოპერატორებზე,დაპრინტე და გაუშვით ტერმინალში და ნახეთ შედეგი

# მაგალითები AND ოპერატორისთვის
# print("AND ოპერატორი:")
# print(True and True)    # True
# print(True and False)   # False
# print(False and True)   # False
# print(False and False)  # False

# # მაგალითები OR ოპერატორისთვის
# print("OR ოპერატორი:")
# print(True or True)     # True
# print(True or False)    # True
# print(False or True)    # True
# print(False or False)   # False



# 7) შექმენი 4 ცვლადი სადაც შეინახავთ სხვადასხვა მონაცემთა ტიპებს და შენი დავალებაა რომ გაიგო ამ ცვლადებში შენახული მონაცემების ტიპები
# (გამოიყენეთ შესაბამისი ფუნქცია)


data_1 = "10"
data_2 = 10
data_3 = 1.0
data_4 = True

print(type(data_1))
print(type(data_2))
print(type(data_3))
print(type(data_4))



# 8) მომხმარებელს შემოატანინე 3 მნიშნველობა,ერთის ტიპი იყოს boolean ერთის integer ერთის string და დაპრინტეთ ისინი
# (გამოიყენეთ შესაბამისი ფუნქციები რომ შემოყვანილ მნიშვნელობებს ქონდეთ შესაბამისი ტიპი(note:მომხმარებელს რომ შემოყავს 
# მნიშვნელობა თავიდან ყოველთვის არის სტრინგი),თუ ბულეანს შემოიყვანს მომხმარებელი გახადეთ ინფუთი ბულეან ტიპის თუ 
# ინტეჯერს შემოიყვანს გახადეთ ინფუთი ინტეჯერ ტიპის

first_data = input("Type any word: ")
print(first_data)

second_data = int(input("Type your age: "))
print(second_data)

num = int(input("Enter num: "))
third = bool(num)
print(third)
