### unclefonso presents:
## What is Async / Await ?


Things you should already be familiar with:

- What an API end point is
- Understand how `document.getElementById().innerHTML` works



So let's talk about terms, what does "Asynchronous" even mean?

Well it means "I'll go get that and return it later"

Vs.

"Synchronous" which is just another way of saying... 
"One thing at a time".

There's a cool thing I like to call "The Waiter" example that describes this nicely...I will link it in the show notes below


## Why and How

How do we use it? Take a look at this example

```
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You Mom!!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```
Note: The keyword **async** before a function makes the function return a promise:

**async** makes a function return a Promise

**await** makes a function wait for a Promise

Now let's do another example...

In this example we will call an API endpoint using the `fetch` keyword...

Now what is an API endpoint? Just think of it as a remote website that has special set of urls  that allow a different external website to get data from it.

So instead of displaying a webpage. 
When you load this special url, it will send you back data...ok?
For these next two examples I'll be using `jsonplaceholder.typicode.com`
And specifically /users

https://jsonplaceholder.typicode.com/users

So if we did an api call on this location, we would have something like this...
```
// API example with fetch

async function getUsers(){
  const myPromise = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await myPromise.json();

  console.log(data);
}

getUsers()
```


Now we'll do this same thing again but we will use the `axios` library

```

async function getAllCountries() {
  let myPromise = await axios.get("https://jsonplaceholder.typicode.com/todos/1")

  console.log(myPromise)
}

getAllCountries().then(r => console.log(r))
```

You will often see the phrase `res` in place of `mypromise`....`res` being short for response.


## WHY do we use Async / Await?

It makes writting promises much easier. No more need for all the then then then's.

I'll show this in a different video example

Next up?  converting "then then thens" to => async/await example

### Resources:

[W3schools: async/await](https://www.w3schools.com/Js/js_async.asp)

[Fetch web API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

[Axios](https://axios-http.com/docs/intro)

[jsonplaceholder](https://jsonplaceholder.typicode.com/)

[axios gitghub rep](https://github.com/axios/axios)

[The waiter example](https://www.youtube.com/watch?v=EI7sN1dDwcY&list=PL2xU474uH-c6upi3bgGSVSaxtAfW1gTo8&index=15&t=4s)
