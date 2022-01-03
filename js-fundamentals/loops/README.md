# Loops

`continue` can not be used with ternary operator, for example

```javascript
(i > 3) ? x : continue; // this won't work
```


```javascript
if (i > 3) {
    x
} else {
    continue;
}
// this would work
```

JavaScript also defined labels to work with, one usecase is to use to break multiple nested loops. For example,

```javascript
outer: 
for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
        if (x == 1 && y == 2) {
            break outer;
        }
    }
}
```



