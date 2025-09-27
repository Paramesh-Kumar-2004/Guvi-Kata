import math


def gcd(x, y):
    while y:
        x, y = y, x % y
    return x


def lcm(x, y):
    return (x * y) // gcd(x, y)


n = int(input().strip())
numbers = list(map(int, input().split()))

result = numbers[0]
for i in range(1, n):
    result = lcm(result, numbers[i])

print(result)
