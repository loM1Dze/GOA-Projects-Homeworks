# 1) კომენტარების სახით ახსენით რა არის logical operators (and, or), რისთვის ვიყენებთ და მოიყვანეთ შესაბამისი მაგალითები.


# and ნიშნავს "და" — ორივე პირობა უნდა იყოს მართალი
# or ნიშნავს "ან" — ერთ-ერთი მაინც უნდა იყოს მართალი

x = 10
y = 5

# ორივე პირობა მართალია, ამიტომ გამოიტანს True
print(x > 5 and y < 10)

# აქ მხოლოდ ერთი პირობაა მართალი, მაგრამ or-სთვის ეგეც საკმარისია
print(x > 20 or y < 10)

# თუ ორივე პირობა არ არის მართალი და and ვიყენებთ, იქნება False
print(x > 5 and y > 10)

# or თუ ორივეც ტყუილია, გამოიტანს False
print(x < 5 or y > 10)



# 2) მომხმარეებელს შემოაყვანინეთ სახელი, შეამოწმეთ იგი თუ უდრის თქვენს სახელს, არ დაგავიწყდეთ print ფუნქციის გამოყენება პასუხის დასაბეჭდად.


# მომხმარებელს ვთხოვთ სახელს
user_name = input("შეიყვანე შენი სახელი: ")

# ჩვენი სახელი
my_name = "გიგა"

# ვამოწმებთ, ემთხვევა თუ არა მომხმარებლის შეყვანილი სახელი ჩვენს სახელს

print(user_name == my_name)



# 3) გააკეთეთ 2-2 მაგალითი or და and ოპერატორებზე

# -------- and ოპერატორის მაგალითები --------

# ორივე პირობა მართალია → გამოიტანს True
print(5 > 3 and 10 > 7)  # True

# ერთ-ერთი პირობა მცდარია → გამოიტანს False
print(5 > 3 and 2 > 10)  # False

# -------- or ოპერატორის მაგალითები --------

# ერთ-ერთი მაინც მართალია → გამოიტანს True
print(5 > 3 or 2 > 10)   # True

# არც ერთი პირობა არ არის მართალი → გამოიტანს False
print(1 > 5 or 2 > 10)   # False
