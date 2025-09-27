import math

r = float(input().strip())

result = 2 * math.pi * r

result = round(result, 2)

if result < 0:
    print("Error")

else:
    print(f"{result:.2f}")
