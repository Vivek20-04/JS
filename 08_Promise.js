Promise
new Promise((reSolve, Reject) => {

  setTimeout(() => {
    return reSolve("Aysnc Task 1")
  }, 500)

}).then((resolve) => {
  console.log(resolve)
})


//second way to declare promise
const promise = new Promise((reSolve, reject) => {
  setTimeout(() => {
    let result = true
    if (result) {
      return reSolve("Aysnc Task 2")
    }
    else
      return reject("Error:Something went wrong")
  }, 1000)
})

promise.then((resolve) => {
  console.log(resolve)
})
  .catch((error) => {
    console.log(error)
  })


//Chaining Promise
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false
    if (!error) {
      resolve({ username: "Vivek", password: "123" })
    } else {
      reject('ERROR: Something went wrong')
    }
  }, 1000)
})

promiseFour
  .then((user) => {
    console.log(user);
    return user.username
  }).then((username) => {
    console.log(username);
  }).catch(function (error) {
    console.log(error);
  }).finally(() => console.log("The promise is either resolved or rejected"))


//Async & Await 
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false
    if (!error) {
      resolve({ username: "javascript", password: "123" })
    } else {
      reject('ERROR: JS went wrong')
    }
  }, 1000)
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

//Fetching api 
const urlFetcher = fetch("https://jsonplaceholder.typicode.com/users")
let addUser =[{
  id: 10,
  name: 'Vivek Rawal',
  username: 'Vive',
  email: 'vivek@dana.io',
  address: {
    street: 'Odhavdham',
    suite: 'Suite 449',
    city: 'Bartholomebury',
    zipcode: '76495-3109',
    geo: [Object]
  },
  phone: '12345678',
  website: 'conrad.com',
  company: {
    name: 'IT IDOl',
    catchPhrase: 'Switchable contextually-based project',
    bs: 'aggregate real-time technologies'
  }
}]
urlFetcher.then((userData)=>{
  return userData.json()
}).then((data)=>{
  console.log(data)
}).catch((error)=>{
  console.log(error)
})