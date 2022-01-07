# String Data Type

## Backticks

Allows to span multiple lines. And embedding a variable by using `${}`.

## Tagged Template

This is another interesting construct in javascript which I have not seen in 
any other language, basically we can manipulate using a function how the `${}` 
variables are processed and return a specialied string.

```javascript
let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "
  let str2 = strings[2]; // "."

  let ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${ person } is a ${ age }.`;

console.log(output);
// That Mike is a youngster.
```

Source: [Mozilla Developer Notes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)

## `length` property not method

As the heading suggest, `length` in javascript is a property not a method. 
That is to access the lenght of a string one need to use `str.length` not 
`str.lenght()` as there is in another languages (like C++).

## `for..of`

Instead of using `for..in` like we do in the case of iterating over the object 
keys, `for..of` is used to iterate over the characters present in the string.

## `~` bitwise NOT operator

1. It converts the number to a 32-bit integer
2. Removes the decimal part
3. Toggles all bits in binary representation

For 32-bit integers this means that `~n == -(n+1)`. This means that `~-1 = 0` 
which one can use to check if the output of some function is `-1` or not.

```javascript
for (let i = n; ~n; --n) {}
```

For example, the above loop will iterate `[n..0]`.

## Comparison

Lowercase is always greater than uppercase. This is because characters are 
internally represented as UTF-16.

## Vocabulary

Diacritical marks: example `Ö`.

