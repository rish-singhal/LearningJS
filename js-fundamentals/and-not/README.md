# OR, AND, prompts and alerts

| **Important Note:** Precedence of `&&` is more than `||`

JavaScript's way of handling `&&, ||` is completely different when it comes to 
non-boolean values. More appropriate way of explaining would be it evaluates 
from left to right fashion and instead of returning a boolean value it returns 
actual value stored in the operand itself.

```javascript
console.log(null || "hello" || undefined) // returns "hello"

// can also be used in place of `if`
(3 > 0) && alert(x) // this executes alert(x)
(1 < 0) && alert(x) // this doesn't
```

## Nullish Operator

JavaScript defines an unusual operator `??`, which might be seen in some open source project basically it returns the first argument (from left to right) which is neither `undefined` nor `null`. For example:

```javascript
console.log(null ?? "hello") // "hello"
console.log("hello" ?? "trudy") // "hello" again!
console.log(null ?? undefined) // undefined
console.log(undefined ?? null) // null
```

**Precedence:** Just lower than `||`.

JavaScript enforces the use of "parantheses" with `&&, || and ??` together.

## Vocabulory
1. **Coalescing**: relatively small parts coming together to form a bigger 
whole

## Resources

[https://javascript.info/nullish-coalescing-operator](https://javascript.info/nullish-coalescing-operator) 

