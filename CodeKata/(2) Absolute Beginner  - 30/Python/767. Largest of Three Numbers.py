v = float(input())
p = float(input())
vp = float(input())

largest = max(v,p,vp)

if(largest.is_integer()):
    print(int(largest))
else:
    print(largest)