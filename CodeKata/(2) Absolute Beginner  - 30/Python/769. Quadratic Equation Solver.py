# Before Test Case Problem

import math

n = input().strip().split()
a = float(n[0])
b = float(n[1])
c = float(n[2])

d = b * b - 4 * a * c

if d < 0:
    print("Complex Roots")
else:
    e = (-b + math.sqrt(d)) / (2 * a)
    h = (-b - math.sqrt(d)) / (2 * a)

    print(f"{e:.2f}")
    print(f"{h:.2f}")
