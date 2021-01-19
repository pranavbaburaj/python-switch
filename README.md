# SwitchPy

### A simple python library for switch cases
<hr>

### A simple python library for switch cases

PyPi - https://pypi.org/project/switchpy/
<hr>

## How to use it ?
# SwitchPy
<hr>

## Switch Cases
```python
import switchpy as switchpy  # import switchpy

def hello():
    print("1")

def nothing():
    print("Nothing")

var = input(">>>")
# switch statement
switchpy.Switch(var, {
    1 : hello,  # The hello function
    None : nothing # the nothing function
})
```




