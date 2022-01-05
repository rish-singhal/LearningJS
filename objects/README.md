# Objects

In javascript, object by default are copied as a reference, i.e. only the 
memory address is copied. To use deep copy, one can use loadash 
`_.cloneDeep()`.

## The Garbage collector

It basically perform a dfs on the reachability graph, marking all possibe nodes
 reachable from the main node and deletes all the unmarked nodes.

This basic algorithm is done with some optimzations.

## `this` keyword

`this` takes the shape of the context, in case of non-strict mode the browser's
 `window`.

## `new` keyword

Execute the function with prepended `this = {}` and postpended `return this`.

## `new.target` keyword

This is a special keyword, which contains the reference to the function called 
with `new` operator i.e. the body of the function. By default, it is 
`undefined`.

## Returns `null`

```javascript
// the given function returns `null` if not found
let html = document.querySelector('.elem').innerHTML; // error if it's null
```

## Optional chaining `?.`

The object returns `undefined` if `object?.` is used and object is either 
`undefined` or `null`.

## Symbols

https://javascript.info/symbol

## Primitive methods & object wrappers

Primitive data types do not have methods as per say, but when one calls the 
methods, there exist an object wrapper which is created for example `String` 
for `str` and provides the methods to mutate the underlying primitive data 
type.

https://javascript.info/primitives-methods

