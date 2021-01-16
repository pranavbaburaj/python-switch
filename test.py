import switchpy as s


def datar():
	print("Hello")
data = 9
v = {
	# 9 : datar,
	9 : print("No")
}
s.Switch(data, v)


d = s.Maps((int, int))

d.add(4, 9)
d.add(42, 9)
d.add(44, 11)


print(d.filter(9))
print(d.get())
d.change(42, 11)
print("===============")

print(d.filter(9))
print(d.get())