# 1)შექმენით სია ---> [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] ამ სიის ბოლოში დაამატე სიტყვა --> "ianvari" 
# და დაპრინტე საბოლოო სია ნახე დაემატა თუ არა

list = [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5]
list.append("ianvari")
print(list)


# 2)შექმენი სია ---> [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] ამ სიაში მეორე ინდექსზე დაამატე სიტყვა ---> "bati" 
# და დაპრინტე საბოლოო სია ნახე დაემატა თუ არა

list = [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5]
list.insert(2,"bati")
print(list)

# 3)შექმენი სია ---->  [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] ამ სიიდან ამოშალე მე 5 ინდექსზე მდგომი ელემენტი
# და დაპრინტე საბოლოო სია ნახე ამოიშალა თუ არა

list = [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5]
list.pop(5)
print(list)

# 4)შექმენი სია --->  [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] ამ სიიდან ამოშალე True და ასევე ამოშალე "kote" 
# და დაპრინტე საბოლოო სია და ნახე ამოიშალა თუ არა

list = [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5]
list.remove(True)   
list.remove("kote")
print(list)

