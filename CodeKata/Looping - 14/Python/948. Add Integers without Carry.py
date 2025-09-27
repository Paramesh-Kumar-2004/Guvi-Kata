a, b = input().split()
a = a[::-1]
b = b[::-1]

max_len = max(len(a), len(b))
a = a.ljust(max_len, "0")
b = b.ljust(max_len, "0")

result = ""

for i in range(max_len):
    digit_sum = (int(a[i]) + int(b[i])) % 10
    result = str(digit_sum) + result

result = result.lstrip("0")

print(result if result else "0")
