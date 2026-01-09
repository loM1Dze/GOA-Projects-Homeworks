# 2) შექმენით სიტყვებით სავსე სია, თუ სიტყვის ყველა ასო არის პატარა და პირველი ასო არის g, მაშინ ახალ სიაში ჩაამატეთ სახელი "Goga", თუ სიტყვის ყველა ასო არის დიდი ან იწყება ასო N-თი, მაშინ სიაში ჩაამატეთ სახელი "Nika", სხვა შემთხვევაში სიაში ჩაამატეთ სიტყვა "ლიდერი". დაპრინტეთ მიღებული სია.

words = ["game", "GOAL", "Nice", "giga", "Hello", "NOTE", "test"]

new_list = []

for w in words:
    if w.islower() and w[0] == "g":
        new_list.append("Goga")
    elif w.isupper() or w[0] == "N":
        new_list.append("Nika")
    else:
        new_list.append("ლიდერი")

print(new_list)



# 3)  შექმენით რიცხვებით სავსე სია, თუ რიცხვი არის ლუწი ან დგას ლუწ ინდექსზე, ჩაამატეთ მისი კვადრატი ახალ სიაში - გამოიყენეთ შესაბამისი მათემატიკური ოპერატორი, ხოლო თუ რიცხვი არის კენტი ან დგას კენტ ინდექსზე, ახალ სიაში ჩაამატეთ 2-ჯერ დიდი რიცხვი. გამოიყენეთ while ციკლი.

nums = [1, 2, 3, 4, 5, 6]
new_list = []

i = 0
while i < len(nums):
    if nums[i] % 2 == 0 or i % 2 == 0:
        new_list.append(nums[i] ** 2)
    else:
        new_list.append(nums[i] * 2)
    i += 1

print(new_list)



# 4) შექმენით სიტყვებით სავსე სია, თუ სიტყვის სიგრძე არის 6-ზე მეტი ან მისი ყველა ასო არის დიდი, ამ სიტყვის ყველა ასო გახადეთ პატარა და ჩაამატეთ ახალ სიაში. ყველა სხვა შემთხვევაში ახალ სიაში ჩაამატეთ შეუცვლელი სიტყვა ოღონდ გადაბმულად ორჯერ, მაგალითად თუ მოცემული იქნება სიტყვა "Nika", ჩაამატეთ "NikaNika". გამოიყენეთ while ციკლი.


words = ["PYTHON", "coding", "HELLOOO", "Nika", "World"]
new_list = []

i = 0
while i < len(words):
    if len(words[i]) > 6 or words[i].isupper():
        new_list.append(words[i].lower())
    else:
        new_list.append(words[i] * 2)
    i += 1

print(new_list)



# 5) მოცემული გაქვთ სტრინგის ცვლადი: numbers = "0123456789", ამ სტრინგიდან ახალ სიაში ჩაამატეთ ყველა ის რიცხვი რომელიც დგას ამ სტრინგის ლუწ ინდექსზე ან არის 7-ზე მეტი, სიაში ეს რიცხვები იყოს როგორც integer ტიპის მონაცემები და არა სტრინგები. დაწერეთ ორივე ხერხით, for ციკლით და while ციკლით.

numbers = "0123456789"
new_list = []

for i in range(len(numbers)):
    digit = int(numbers[i])
    if i % 2 == 0 or digit > 7:
        new_list.append(digit)

print(new_list)



numbers = "0123456789"
new_list = []

i = 0
while i < len(numbers):
    digit = int(numbers[i])
    if i % 2 == 0 or digit > 7:
        new_list.append(digit)
    i += 1

print(new_list)
