// What is Async / Await?

async function myDisplay() {
 let myPromise = new Promise(function(resolve, reject) {
   resolve("I love You Mom!!");
 });
 document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();


// API example with fetch

async function getUsers(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  console.log(data);
}

getUsers()


// API example with axios

async function getAllCountries() {
    let myPromise = await axios.get("https://jsonplaceholder.typicode.com/todos/1")

    console.log(myPromise)
}

getAllCountries().then(r => console.log(r))
