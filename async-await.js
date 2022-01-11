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
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();

    console.log("getUsers: " + data);
}

getUsers();

// API example with axios

async function getUsersAgain(){
    let res = await axios.get('https://jsonplaceholder.typicode.com/users');

    console.log("getUsersAGAIN: " + res);
}

getUsersAgain();


// WHY?