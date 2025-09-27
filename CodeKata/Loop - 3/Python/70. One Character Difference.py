v, p = input().split()

if len(v) != len(p):
    print("no")
else:
    diff = 0
    for a, b in zip(v, p):
        if a != b:
            diff += 1

    if diff == 1:
        print("yes")
    else:
        print("no")