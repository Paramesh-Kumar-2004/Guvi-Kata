v = input().strip()
p = input().strip()

vp = v + p

if len(vp) == 26 and len(set(vp)) == 26:
    print("yes")

else:
    print("no")



