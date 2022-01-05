# Data Types

Consider the following example:

```javascript
console.log(0.1 + 0.2 == 0.3)
```

This outputs `false` as division by `10` in binary is not representable fully 
just like `1/3` in decimals. Although, going with the same logic powers of 2 
will work fine.

## `ToFixed`

`ToFixed(number of digits)` always returns a string used to round of to some 
number of digits

## `isNaN`

Interesting thing about JavaScript:

```javascript
alert( NaN === NaN ); // false
```

This is in the sense that, JavaScript considers `NaN` to be uniqueq that is it 
not equal to anything, including itself. This can considered somewhat like the 
`Symbols` where every symbol created is uniqe.

q: What will happen when `NaN` is taken as a key for an object?

so, one can use the function `isNaN` to check if the given argument after 
converting to a number primitive data type is `NaN` or not.

## `isFinite`

Another method like `isNaN` which also filters out `Infinity` and `-Infinity`.

## `Object.is(a, b)`

This checks the data types bit by bit intutively, it is equivalent to `===` apart from the case when input is `(0, -0)` and `(NaN, NaN)`.

## `+` and `Number()`

The numeric conversion is strict for this case, when compared to `parseInt` 
method which also takes in second argument as the radix (the base in which the 
first argument is to be parsed in).

## Math library

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

Some special mentions

### `Math.random()`

This return a number in the range `[0, 1)`.

