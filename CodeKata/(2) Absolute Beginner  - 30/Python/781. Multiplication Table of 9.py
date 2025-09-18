vp = int(input().strip())


if vp == 0:
    print("NULL")

else:
    result = [str(9 * i) for i in range(1, vp + 1)]
    print(" ".join(result))
