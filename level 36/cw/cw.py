text = input("შეიყვანე სიტყვა ან ტექსტი: ")

# ამოწმებს არის თუ არა 'a' ან 'A'
if 'a' in text or 'A' in text:
    print("ტექსტში არის 'a' ან 'A'")
else:
    print("ტექსტში არ არის 'a' და არც 'A'")

# ამოწმებს თუ არ არის 'car'
if 'car' not in text:
    print("ტექსტში არ არის 'car'")
else:
    print("ტექსტში არის 'car'")




text = input("შეიყვანე ტექსტი: ")

for ch in text:
    if ch in 'aA':   # თუ ასო არის 'a' ან 'A' — სკიპი
        continue
    print(ch)
