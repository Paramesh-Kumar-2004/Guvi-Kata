v = input().strip()
if not v:
    print("")
else:
    result = ""
    count = 1
    for i in range(1, len(v)):
        if v[i] == v[i-1]:
            count += 1
        else:
            result += v[i-1] + str(count)
            count = 1
    result += v[-1] + str(count)
    print(result)