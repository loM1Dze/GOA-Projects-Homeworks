def show_transactions(transactions):
    print("ტრანზაქციების ისტორია:")
    if transactions:
        for t in transactions:
            print(f"{t[0]}: {t[1]} ₾")
    else:
        print("ტრანზაქციები არ არის")

while True:
    print("\n--- transaction history ---")
    print("1. ტრანზაქციების ისტორია")
    print("2. გამოსვლა")
    choice = input("აირჩიეთ ოპცია: ")

    if choice == "1":
        # გამოიძახეთ გუნდის კოდში არსებული transactions სია
        show_transactions(transactions)
    elif choice == "2":
        print("გამოსვლა...")
        break
    else:
        print("არასწორი არჩევანი!")
