# Functions in JavaScript

Local variables out shadow outer global variables.

Calling a function with less number of arguments won't give an error rather 
it will treat other arguments as `undefined`. Further, default values of the 
arguments can be defined which will only be executed in case no value is 
provided.

A function with no return statement evaluated to `undefined` which is similar 
to an empty `return` statement.

Never add a return value in one line and the expression on another, as 
javascript might consider adding a semicolon at the end.

## Function Declarations vs Function Expressions

Function declaration are 'kind' of global! we can call any function before too 
even if it is defined later on in the code.

Also, in the `strict mode`, the function is only visible inside the code block 
not outside it. The following example is taken from the tutorial

```javascript
let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined
```

## Resources

https://javascript.info/javascript-special
