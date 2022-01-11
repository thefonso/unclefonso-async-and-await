
### What is Async / Await ?



So let's talk about terms, what does "Asynchronous" even mean?

Well it means "I'll go get that and return it later"

Vs.

"Synchronous" which is just another way of saying One thing at a time.



## Why and How

How do we use it? Take a look at this example

```
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```
Note: The keyword **async** before a function makes the function return a promise:

**async** makes a function return a Promise

**await** makes a function wait for a Promise

So if we did an api call we would have something like this...

```
const axios = require("axios");

async function getAllCountries() {
  let myPromise = await axios.get("https://jsonplaceholder.typicode.com/todos/1")

  return myPromise
}

getAllCountries()
```

WHY do we use Async / Await?

It makes writting promises much easier. No more need for then then then's.

I'll show this in a later example
// then then => async/await conversion example ?

Resources:

![W3schools: async/await](https://www.w3schools.com/Js/js_async.asp)

![jsonplaceholder](https://jsonplaceholder.typicode.com/)
