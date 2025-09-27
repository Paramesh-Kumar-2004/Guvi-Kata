v = input().strip()
even_digits = []
odd_digits = []

for i in v:
    if int(i) % 2 == 0:
        even_digits.append(i)
    else:
        odd_digits.append(i)

even_digits.sort()
odd_digits.sort()
print(" ".join(even_digits))
print(" ".join(odd_digits))
