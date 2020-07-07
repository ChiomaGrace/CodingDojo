# Functions Basic I
A project that predicts the following outputs:

Predict 1:
```python
def a():
    return 5
print(a())
}
```

Predict 2:
```python
def a():
    return 5
print(a()+a())
```

Predict 3:
```python
def a():
    return 5
    return 10
print(a())
```

Predict 4:
```python
def a():
    return 5
    print(10)
print(a())
```

Predict 5:
```python
def a():
    print(5)
x = a()
print(x)
```

Predict 6:
```python
def a(b,c):
    print(b+c)
print(a(1,2) + a(2,3))
```

Predict 7:
```python
def a(b,c):
    return str(b)+str(c)
print(a(2,5))
```

Predict 8:
```python
def a():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(a())
```

Predict 9:
```python
def a(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(a(2,3))
print(a(5,3))
print(a(2,3) + a(5,3))
```

Predict 10:
```python
def a(b,c):
    return b+c
    return 10
print(a(3,5))
```

Predict 11:
```python
b = 500
print(b)
def a():
    b = 300
    print(b)
print(b)
a()
print(b)
```

Predict 12:
```python
b = 500
print(b)
def a():
    b = 300
    print(b)
    return b
print(b)
a()
print(b)
```

Predict 13:
```python
b = 500
print(b)
def a():
    b = 300
    print(b)
    return b
print(b)
b=a()
print(b)
```

Predict 14:
```python
def a():
    print(1)
    b()
    print(2)
def b():
    print(3)
a()
```

Predict 15:
```python
def a():
    print(1)
    x = b()
    print(x)
    return 10
def b():
    print(3)
    return 5
y = a()
print(y)
```
Created On: May 4, 2020\
Pushed to Github: July 1, 2020